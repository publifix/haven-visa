"use client";

import { useState, type FormEvent } from "react";
import { useBi, useLanguage } from "@/lib/i18n";
import { form as t } from "@/lib/content";
import { insertReservation, isSupabaseConfigured } from "@/lib/supabase";

const inputClass =
  "w-full rounded-lg border border-white/20 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-gray-light/50 outline-none transition-colors focus:border-copper-1 focus:bg-white/10";
const labelClass = "mb-1.5 block text-xs font-medium text-gray-light";

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
  const [experience, setExperience] = useState("");
  const [celebration, setCelebration] = useState("");
  const [experienceOpen, setExperienceOpen] = useState(false);
  const [celebrationOpen, setCelebrationOpen] = useState(false);
  const [emailMismatch, setEmailMismatch] = useState(false);
  const [status, setStatus] = useState<Status>("idle");

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
        experience: experience || null,
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
            type="date"
            required
            value={travelDate}
            onChange={(e) => setTravelDate(e.target.value)}
            className={inputClass}
          />
        </div>
        <div>
          <label className={labelClass} htmlFor="time">
            {bi(t.timeLabel)}
          </label>
          <input
            id="time"
            type="time"
            required
            value={time}
            onChange={(e) => setTime(e.target.value)}
            className={inputClass}
          />
        </div>
      </div>

      <div>
        <label className={labelClass} htmlFor="guests">
          {bi(t.guestsLabel)}
        </label>
        <select
          id="guests"
          required
          value={guests}
          onChange={(e) => setGuests(e.target.value)}
          className={inputClass}
        >
          {[1, 2, 3, 4, 5, 6].map((n) => (
            <option key={n} value={n} className="bg-navy">
              {n}
            </option>
          ))}
        </select>
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
          className={inputClass}
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
            className={inputClass}
          />
        </div>
        <div />
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
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
            className={inputClass}
          />
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
            className={inputClass}
          />
        </div>
      </div>
      {emailMismatch && (
        <p role="alert" className="-mt-3 text-xs text-copper-1">
          {lang === "es" ? "Los correos no coinciden." : "Emails do not match."}
        </p>
      )}

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label className={labelClass} htmlFor="airline">
            {bi(t.airlineLabel)}
          </label>
          <input
            id="airline"
            type="text"
            placeholder={bi(t.airlinePlaceholder)}
            required
            value={airline}
            onChange={(e) => setAirline(e.target.value)}
            className={inputClass}
          />
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
            className={inputClass}
          />
        </div>
      </div>

      <AccordionField
        label={bi(t.addExperienceAccordion)}
        open={experienceOpen}
        onToggle={() => setExperienceOpen((o) => !o)}
        value={experience}
        onChange={setExperience}
      />
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
        <span aria-hidden="true" className={`transition-transform duration-200 ${open ? "rotate-45" : ""}`}>
          +
        </span>
      </button>
      {open && (
        <div className="px-4 pb-4">
          <textarea
            value={value}
            onChange={(e) => onChange(e.target.value)}
            rows={3}
            className={inputClass}
          />
        </div>
      )}
    </div>
  );
}
