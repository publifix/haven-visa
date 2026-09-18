"use client";

import { useMemo, useState, type FormEvent } from "react";
import { useBi, useLanguage } from "@/lib/i18n";
import { form as t, airlines } from "@/lib/content";
import { insertReservation, isSupabaseConfigured } from "@/lib/supabase";
import { DateField } from "./reservation/DateField";
import { TimeField } from "./reservation/TimeField";
import { Listbox } from "./reservation/Listbox";
import { CelebrationField } from "./reservation/CelebrationField";

// 16px minimum on every field — iOS Safari auto-zooms on focus for any
// input rendered below that, which reads as an unwanted/unexpected zoom.
const fieldBase =
  "w-full rounded-lg border border-white/20 bg-white/5 px-4 py-3 text-base text-white placeholder:text-gray-light/50 outline-none transition-colors focus:border-copper-1 focus:bg-white/10";
const labelClass = "mb-1.5 block text-xs font-medium text-gray-light";

const MAX_GUESTS = 4;

type Status = "idle" | "submitting" | "success" | "error";

export function ReservationForm() {
  const bi = useBi();
  const { lang } = useLanguage();

  const [travelDate, setTravelDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState("1");
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [confirmEmail, setConfirmEmail] = useState("");
  const [airline, setAirline] = useState("");
  const [flightNumber, setFlightNumber] = useState("");
  const [celebrations, setCelebrations] = useState<string[]>([]);
  const [celebrationOpen, setCelebrationOpen] = useState(false);
  const [emailMismatch, setEmailMismatch] = useState(false);
  const [missing, setMissing] = useState<Set<string>>(new Set());
  const [status, setStatus] = useState<Status>("idle");

  const guestOptions = useMemo(
    () => Array.from({ length: MAX_GUESTS }, (_, i) => ({ value: String(i + 1), label: String(i + 1) })),
    [],
  );
  const airlineOptions = useMemo(
    () => airlines.map((name) => ({ value: name, label: name })),
    [],
  );

  function toggleCelebration(key: string) {
    setCelebrations((prev) => (prev.includes(key) ? prev.filter((k) => k !== key) : [...prev, key]));
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();

    const requiredFields: Record<string, string> = { travelDate, time, guests, airline };
    const nextMissing = new Set(Object.keys(requiredFields).filter((k) => !requiredFields[k]));
    setMissing(nextMissing);

    const mismatch = email !== confirmEmail;
    setEmailMismatch(mismatch);
    if (nextMissing.size > 0 || mismatch) return;

    setStatus("submitting");

    if (!isSupabaseConfigured) {
      // Demo mode: Supabase isn't connected yet, so simulate the round trip
      // (loading -> success) to make the button's real interactive states
      // (hover/active/loading/success) visible and testable on the live
      // site. Nothing is persisted anywhere.
      await new Promise((resolve) => setTimeout(resolve, 900));
      setStatus("success");
      return;
    }

    try {
      const { error } = await insertReservation({
        travel_date: travelDate,
        reservation_time: time,
        guests: Number(guests),
        full_name: fullName,
        phone,
        email,
        airline,
        flight_number: flightNumber,
        experience: null,
        celebration: celebrations.length ? celebrations.join(", ") : null,
        language: lang,
      });
      if (error) throw error;
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" aria-describedby="reservation-closed-notice">
      <div>
        <span className={labelClass}>{bi(t.accessMethodLabel)}</span>
        <div className="flex items-center gap-2 rounded-lg border border-copper-2/40 bg-copper-2/10 px-4 py-3 text-sm text-white">
          {bi(t.accessMethodValue)}
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <Field label={bi(t.travelDateLabel)} htmlFor="travelDate" error={missing.has("travelDate") ? bi(t.fieldRequired) : undefined}>
          <DateField id="travelDate" value={travelDate} onChange={setTravelDate} invalid={missing.has("travelDate")} />
        </Field>
        <Field label={bi(t.timeLabel)} htmlFor="time" error={missing.has("time") ? bi(t.fieldRequired) : undefined}>
          <TimeField
            id="time"
            value={time}
            onChange={setTime}
            placeholder={bi(t.timePlaceholder)}
            invalid={missing.has("time")}
          />
        </Field>
      </div>

      <Field label={bi(t.guestsLabel)} htmlFor="guests">
        <Listbox id="guests" value={guests} onChange={setGuests} options={guestOptions} />
      </Field>

      <div>
        <label className={labelClass} htmlFor="fullName">
          {bi(t.fullNameLabel)}
        </label>
        <input
          id="fullName"
          type="text"
          autoComplete="name"
          required
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          className={fieldBase}
        />
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label className={labelClass} htmlFor="phone">
            {bi(t.phoneLabel)}
          </label>
          <input
            id="phone"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            required
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className={fieldBase}
          />
        </div>
        <div>
          <label className={labelClass} htmlFor="email">
            {bi(t.emailLabel)}
          </label>
          <input
            id="email"
            type="email"
            inputMode="email"
            autoComplete="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={fieldBase}
          />
        </div>
      </div>

      <div>
        <label className={labelClass} htmlFor="confirmEmail">
          {bi(t.confirmEmailLabel)}
        </label>
        <input
          id="confirmEmail"
          type="email"
          inputMode="email"
          required
          value={confirmEmail}
          onChange={(e) => setConfirmEmail(e.target.value)}
          className={fieldBase}
        />
        {emailMismatch && (
          <p role="alert" className="mt-1.5 text-xs text-copper-1">
            {lang === "es" ? "Los correos no coinciden." : "Emails do not match."}
          </p>
        )}
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <Field label={bi(t.airlineLabel)} htmlFor="airline" error={missing.has("airline") ? bi(t.fieldRequired) : undefined}>
          <Listbox
            id="airline"
            value={airline}
            onChange={setAirline}
            options={airlineOptions}
            placeholder={bi(t.airlinePlaceholder)}
            invalid={missing.has("airline")}
          />
        </Field>
        <div>
          <label className={labelClass} htmlFor="flightNumber">
            {bi(t.flightNumberLabel)}
          </label>
          <input
            id="flightNumber"
            type="text"
            autoCapitalize="characters"
            required
            value={flightNumber}
            onChange={(e) => setFlightNumber(e.target.value)}
            className={fieldBase}
          />
        </div>
      </div>

      <CelebrationField
        label={bi(t.celebratingAccordion)}
        open={celebrationOpen}
        onToggle={() => setCelebrationOpen((o) => !o)}
        selected={celebrations}
        onToggleOccasion={toggleCelebration}
      />

      <p className="text-xs text-gray-light">{bi(t.hours)}</p>

      <div className="pt-2">
        <button
          type="submit"
          disabled={status === "submitting"}
          className="w-full cursor-pointer rounded-full bg-copper-2 px-7 py-3.5 text-sm font-medium text-white transition-colors duration-200 hover:bg-copper-3 active:bg-copper-3 disabled:cursor-wait disabled:opacity-80"
        >
          {status === "submitting" ? (lang === "es" ? "Enviando…" : "Submitting…") : bi(t.submit)}
        </button>
        {!isSupabaseConfigured && status !== "success" && (
          <p id="reservation-closed-notice" className="mt-2 text-center text-xs text-gray-light">
            {bi(t.closedNotice)}
          </p>
        )}
        {status === "success" && (
          <p role="status" className="mt-2 text-center text-xs text-copper-1">
            {lang === "es" ? "Reservación confirmada." : "Reservation confirmed."}
          </p>
        )}
        {status === "error" && (
          <p role="alert" className="mt-2 text-center text-xs text-copper-1">
            {lang === "es"
              ? "No se pudo enviar. Intente de nuevo."
              : "Could not submit. Please try again."}
          </p>
        )}
      </div>
    </form>
  );
}

function Field({
  label,
  htmlFor,
  error,
  children,
}: {
  label: string;
  htmlFor: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label className={labelClass} htmlFor={htmlFor}>
        {label}
      </label>
      {children}
      {error && (
        <p role="alert" className="mt-1.5 text-xs text-copper-1">
          {error}
        </p>
      )}
    </div>
  );
}
