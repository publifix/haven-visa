"use client";

import { useEffect, useMemo, useRef, useState, type FormEvent } from "react";
import { ChevronDown } from "lucide-react";
import { useBi, useLanguage } from "@/lib/i18n";
import { form as t, airlines } from "@/lib/content";
import { insertReservation, isSupabaseConfigured } from "@/lib/supabase";

// 16px minimum on every field — iOS Safari auto-zooms on focus for any
// input/select/textarea rendered below that, which reads as an
// unwanted/unexpected zoom to the user on mobile.
const fieldBase =
  "w-full rounded-lg border border-white/20 bg-white/5 px-4 py-3 text-base text-white placeholder:text-gray-light/50 outline-none transition-colors focus:border-copper-1 focus:bg-white/10";
const selectClass = `${fieldBase} appearance-none pr-10`;
const labelClass = "mb-1.5 block text-xs font-medium text-gray-light";

const MAX_GUESTS = 4;

/** 30-minute slots covering the lounge's booking window, 05:00–20:00. */
function buildTimeSlots(): string[] {
  const slots: string[] = [];
  for (let minutes = 5 * 60; minutes <= 20 * 60; minutes += 30) {
    const h = Math.floor(minutes / 60)
      .toString()
      .padStart(2, "0");
    const m = (minutes % 60).toString().padStart(2, "0");
    slots.push(`${h}:${m}`);
  }
  return slots;
}
const TIME_SLOTS = buildTimeSlots();

/** yyyy-mm-dd for a Date, in local time (not UTC — avoids an off-by-one
 * near midnight that toISOString's UTC conversion would introduce). */
function toDateInputValue(date: Date): string {
  const y = date.getFullYear();
  const m = (date.getMonth() + 1).toString().padStart(2, "0");
  const d = date.getDate().toString().padStart(2, "0");
  return `${y}-${m}-${d}`;
}

type Status = "idle" | "submitting" | "success" | "error";

export function ReservationForm() {
  const bi = useBi();
  const { lang } = useLanguage();

  // Set imperatively on the date <input>'s DOM node after mount, rather
  // than stored as React state: this page is statically prerendered, so a
  // value derived from Date.now() at render time would freeze at build
  // time instead of reflecting "24 hours from whenever the visitor
  // actually loads it." Syncing a native input property from an effect
  // is exactly the "external system" case effects are for.
  const dateInputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    if (dateInputRef.current) {
      dateInputRef.current.min = toDateInputValue(new Date(Date.now() + 24 * 60 * 60 * 1000));
    }
  }, []);

  const [travelDate, setTravelDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState("1");
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [confirmEmail, setConfirmEmail] = useState("");
  const [airline, setAirline] = useState("");
  const [flightNumber, setFlightNumber] = useState("");
  const [celebration, setCelebration] = useState("");
  const [celebrationOpen, setCelebrationOpen] = useState(false);
  const [emailMismatch, setEmailMismatch] = useState(false);
  const [status, setStatus] = useState<Status>("idle");

  const guestOptions = useMemo(
    () => Array.from({ length: MAX_GUESTS }, (_, i) => i + 1),
    [],
  );

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (email !== confirmEmail) {
      setEmailMismatch(true);
      return;
    }
    setEmailMismatch(false);
    if (!isSupabaseConfigured) return;

    setStatus("submitting");
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
        celebration: celebration || null,
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
        <div>
          <label className={labelClass} htmlFor="travelDate">
            {bi(t.travelDateLabel)}
          </label>
          <input
            id="travelDate"
            ref={dateInputRef}
            type="date"
            required
            value={travelDate}
            onChange={(e) => setTravelDate(e.target.value)}
            className={fieldBase}
          />
        </div>
        <div>
          <label className={labelClass} htmlFor="time">
            {bi(t.timeLabel)}
          </label>
          <SelectField id="time" required value={time} onChange={setTime}>
            <option value="" disabled>
              {bi(t.timePlaceholder)}
            </option>
            {TIME_SLOTS.map((slot) => (
              <option key={slot} value={slot} className="bg-navy">
                {slot}
              </option>
            ))}
          </SelectField>
        </div>
      </div>

      <div>
        <label className={labelClass} htmlFor="guests">
          {bi(t.guestsLabel)}
        </label>
        <SelectField id="guests" required value={guests} onChange={setGuests}>
          {guestOptions.map((n) => (
            <option key={n} value={n} className="bg-navy">
              {n}
            </option>
          ))}
        </SelectField>
      </div>

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
        <div>
          <label className={labelClass} htmlFor="airline">
            {bi(t.airlineLabel)}
          </label>
          <SelectField id="airline" required value={airline} onChange={setAirline}>
            <option value="" disabled>
              {bi(t.airlinePlaceholder)}
            </option>
            {airlines.map((name) => (
              <option key={name} value={name} className="bg-navy">
                {name}
              </option>
            ))}
          </SelectField>
        </div>
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

      <AccordionField
        label={bi(t.celebratingAccordion)}
        open={celebrationOpen}
        onToggle={() => setCelebrationOpen((o) => !o)}
        value={celebration}
        onChange={setCelebration}
      />

      <p className="text-xs text-gray-light">{bi(t.hours)}</p>

      <div className="pt-2">
        <button
          type="submit"
          disabled={!isSupabaseConfigured || status === "submitting"}
          className="w-full cursor-pointer rounded-full bg-copper-2 px-7 py-3.5 text-sm font-medium text-white transition-colors duration-200 hover:bg-copper-3 disabled:cursor-not-allowed disabled:bg-white/15 disabled:text-gray-light"
        >
          {status === "submitting" ? "..." : bi(t.submit)}
        </button>
        {!isSupabaseConfigured && (
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

function SelectField({
  id,
  required,
  value,
  onChange,
  children,
}: {
  id: string;
  required?: boolean;
  value: string;
  onChange: (v: string) => void;
  children: React.ReactNode;
}) {
  return (
    <div className="relative">
      <select
        id={id}
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={selectClass}
      >
        {children}
      </select>
      <ChevronDown
        size={18}
        className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-light"
      />
    </div>
  );
}

function AccordionField({
  label,
  open,
  onToggle,
  value,
  onChange,
}: {
  label: string;
  open: boolean;
  onToggle: () => void;
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <div className="rounded-lg border border-white/15">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={open}
        className="flex w-full cursor-pointer items-center justify-between px-4 py-3 text-left text-sm text-white"
      >
        {label}
        <ChevronDown size={18} className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <div className="px-4 pb-4">
          <textarea
            value={value}
            onChange={(e) => onChange(e.target.value)}
            rows={3}
            className={fieldBase}
          />
        </div>
      )}
    </div>
  );
}
