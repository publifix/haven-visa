import type { ReservationInsert } from "./supabase";
import { celebrationOccasions, form, howItWorks } from "./content";

type Lang = "es" | "en";
type EmailContent = { subject: string; html: string };

// Visa Infinite palette (brand guide sec. 2.1/2.2). Email clients can't read
// CSS variables, so the values are inlined here.
const NAVY = "#010D36";
const WHITE = "#FFFFFF";
const COPPER_1 = "#FFB59C";
const COPPER_2 = "#B46D40";
const COPPER_3 = "#7C360A";
const GRAY_LIGHT = "#F5F5F7";
const GRAY_MEDIUM = "#828693";
const GRAY_INK = "#303A51";
const DIVIDER = "#E6E7EB";

// Visa Dialect loads only in clients that support web fonts (Apple Mail,
// iOS); Gmail/Outlook fall back to Arial.
const FONT = "'Visa Dialect', Arial, Helvetica, sans-serif";

function esc(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function formatDate(isoDate: string, lang: Lang) {
  // Parse "YYYY-MM-DD" as a local date so it never shifts a day with the
  // server's timezone.
  const [year, month, day] = isoDate.split("-").map(Number);
  return new Intl.DateTimeFormat(lang === "es" ? "es-MX" : "en-US", { dateStyle: "long" }).format(
    new Date(year, month - 1, day),
  );
}

function formatTime(hhmmss: string) {
  return hhmmss.slice(0, 5);
}

export function celebrationLabels(value: string, lang: Lang) {
  return value
    .split(",")
    .map((key) => key.trim())
    .map((key) => celebrationOccasions.find((o) => o.key === key)?.label[lang] ?? key)
    .join(", ");
}

const eyebrowStyle = `font-family:${FONT};font-size:12px;line-height:1;font-weight:600;letter-spacing:0.12em;text-transform:uppercase;`;

function layout(opts: {
  assetBaseUrl: string;
  lang: Lang;
  preheader: string;
  eyebrow: string;
  headline: string;
  body: string;
  footer: string;
}) {
  const { assetBaseUrl, lang, preheader, eyebrow, headline, body, footer } = opts;
  return `<!doctype html>
<html lang="${lang}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="color-scheme" content="light">
<meta name="supported-color-schemes" content="light">
<style>
  @font-face { font-family: 'Visa Dialect'; font-weight: 500; src: url('${assetBaseUrl}/fonts/VisaDialect-Medium.woff2') format('woff2'); }
  @font-face { font-family: 'Visa Dialect'; font-weight: 600; src: url('${assetBaseUrl}/fonts/VisaDialect-Semibold.woff2') format('woff2'); }
  @media (max-width: 620px) {
    .px { padding-left: 24px !important; padding-right: 24px !important; }
    .headline { font-size: 24px !important; }
  }
</style>
</head>
<body style="margin:0;padding:0;background:${GRAY_LIGHT};">
  <div style="display:none;max-height:0;overflow:hidden;opacity:0;">${esc(preheader)}</div>
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:${GRAY_LIGHT};">
    <tr>
      <td align="center" style="padding:32px 12px;">
        <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="width:100%;max-width:600px;background:${WHITE};border-radius:12px;overflow:hidden;">
          <tr>
            <td class="px" style="background:${NAVY};padding:40px 40px 36px;">
              <img src="${assetBaseUrl}/brand/visa-infinite-logo-white.png" width="144" height="24" alt="Visa Infinite" style="display:block;border:0;width:144px;height:24px;">
              <div style="${eyebrowStyle}color:${COPPER_1};margin-top:40px;">${eyebrow}</div>
              <div class="headline" style="font-family:${FONT};font-size:28px;line-height:1.15;font-weight:500;color:${WHITE};margin-top:12px;">${headline}</div>
            </td>
          </tr>
          <tr>
            <td style="height:4px;line-height:4px;font-size:0;background-color:${COPPER_2};background-image:linear-gradient(90deg,${COPPER_1} 0%,${COPPER_2} 50%,${COPPER_3} 100%);">&nbsp;</td>
          </tr>
          <tr>
            <td class="px" style="padding:36px 40px 40px;font-family:${FONT};font-size:16px;line-height:1.5;font-weight:500;color:${NAVY};">
              ${body}
            </td>
          </tr>
          <tr>
            <td class="px" style="background:${NAVY};padding:28px 40px;font-family:${FONT};font-size:12px;line-height:1.5;color:${GRAY_LIGHT};">
              ${footer}
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

function detailRow(label: string, value: string, isLast = false) {
  const border = isLast ? "" : `border-bottom:1px solid ${DIVIDER};`;
  return `<tr>
    <td style="padding:14px 0;${border}${eyebrowStyle}font-size:11px;color:${GRAY_MEDIUM};width:42%;vertical-align:top;">${label}</td>
    <td style="padding:14px 0;${border}font-family:${FONT};font-size:15px;line-height:1.4;font-weight:500;color:${NAVY};vertical-align:top;">${value}</td>
  </tr>`;
}

function detailsCard(rows: [string, string][]) {
  return `<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border:1px solid ${COPPER_2};border-radius:10px;margin:24px 0;">
    <tr><td style="padding:6px 24px;">
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
        ${rows.map(([label, value], i) => detailRow(label, value, i === rows.length - 1)).join("")}
      </table>
    </td></tr>
  </table>`;
}

function infoBlock(title: string, text: string) {
  return `<div style="margin-top:24px;">
    <div style="${eyebrowStyle}color:${COPPER_2};">${title}</div>
    <div style="font-family:${FONT};font-size:15px;line-height:1.5;color:${GRAY_INK};margin-top:8px;">${text}</div>
  </div>`;
}

const copy = {
  es: {
    subject: "Recibimos su reservación en Sala HAVEN",
    eyebrow: "Sala HAVEN · Reservación",
    headline: "Su reservación fue recibida",
    greeting: (name: string) => `Hola, ${name}.`,
    intro: "Gracias por reservar en Sala HAVEN. Estos son los detalles de su visita:",
    date: "Fecha",
    time: "Hora",
    guests: "Huéspedes",
    airline: "Aerolínea",
    flight: "Vuelo",
    celebration: "Celebración",
    access: "Método de acceso",
    onArrival: "Al llegar",
    hoursTitle: "Horario",
    signoff: "Le esperamos,",
    footer: "Sala HAVEN · Terminal 1, Aeropuerto Internacional de la Ciudad de México",
  },
  en: {
    subject: "We've received your Sala HAVEN reservation",
    eyebrow: "Sala HAVEN · Reservation",
    headline: "Your reservation has been received",
    greeting: (name: string) => `Hello, ${name}.`,
    intro: "Thank you for booking Sala HAVEN. Here are the details of your visit:",
    date: "Date",
    time: "Time",
    guests: "Guests",
    airline: "Airline",
    flight: "Flight",
    celebration: "Celebrating",
    access: "Access method",
    onArrival: "On arrival",
    hoursTitle: "Hours",
    signoff: "We look forward to welcoming you,",
    footer: "Sala HAVEN · Terminal 1, Mexico City International Airport",
  },
} as const;

export function guestConfirmationEmail(
  reservation: ReservationInsert,
  lang: Lang,
  assetBaseUrl: string,
): EmailContent {
  const t = copy[lang];
  const date = formatDate(reservation.travel_date, lang);

  const rows: [string, string][] = [
    [t.date, esc(date)],
    [t.time, esc(formatTime(reservation.reservation_time))],
    [t.guests, String(reservation.guests)],
    [t.airline, esc(reservation.airline)],
    [t.flight, esc(reservation.flight_number)],
  ];
  if (reservation.celebration) rows.push([t.celebration, esc(celebrationLabels(reservation.celebration, lang))]);
  rows.push([t.access, esc(form.accessMethodValue[lang])]);

  const body = `
    <p style="margin:0 0 8px;font-size:18px;">${esc(t.greeting(reservation.full_name))}</p>
    <p style="margin:0;color:${GRAY_INK};">${t.intro}</p>
    ${detailsCard(rows)}
    ${infoBlock(t.onArrival, esc(howItWorks.steps[1].description[lang]))}
    ${infoBlock(t.hoursTitle, esc(form.hours[lang]))}
    <p style="margin:32px 0 0;color:${GRAY_INK};">${t.signoff}<br><span style="color:${COPPER_2};font-weight:600;">Sala HAVEN</span></p>
  `;

  return {
    subject: t.subject,
    html: layout({
      assetBaseUrl,
      lang,
      preheader: `${t.date}: ${date} · ${t.time}: ${formatTime(reservation.reservation_time)}`,
      eyebrow: t.eyebrow,
      headline: t.headline,
      body,
      footer: t.footer,
    }),
  };
}

export type TgleSyncSummary =
  | { status: "synced"; reservationId: string }
  | { status: "failed"; error: string }
  | { status: "skipped" };

function tgleStatusBlock(sync: TgleSyncSummary) {
  if (sync.status === "synced") {
    return `<p style="margin:0 0 4px;font-size:14px;color:${GRAY_INK};">Registrada automáticamente en el sistema de reservaciones de TGLE${
      sync.reservationId ? ` (ID ${esc(sync.reservationId)})` : ""
    }.</p>`;
  }
  if (sync.status === "failed") {
    return `<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin:0 0 4px;border-left:4px solid ${COPPER_3};background:#FBF3EE;">
      <tr><td style="padding:14px 18px;font-family:${FONT};font-size:14px;line-height:1.5;color:${NAVY};">
        <strong>No se pudo registrar en el sistema de TGLE.</strong> Capture esta reservación manualmente.
      </td></tr>
    </table>`;
  }
  return `<p style="margin:0 0 4px;font-size:14px;color:${GRAY_INK};">La integración con el sistema de TGLE aún no está activa: capture esta reservación manualmente.</p>`;
}

export function staffNotificationEmail(
  reservation: ReservationInsert,
  assetBaseUrl: string,
  sync: TgleSyncSummary,
): EmailContent {
  const date = formatDate(reservation.travel_date, "es");
  const time = formatTime(reservation.reservation_time);
  const phone = esc(reservation.phone);
  const email = esc(reservation.email);

  const rows: [string, string][] = [
    ["Fecha", esc(date)],
    ["Hora", esc(time)],
    ["Huéspedes", String(reservation.guests)],
    ["Nombre", esc(reservation.full_name)],
    ["Teléfono", `<a href="tel:${phone}" style="color:${NAVY};">${phone}</a>`],
    ["Email", `<a href="mailto:${email}" style="color:${NAVY};">${email}</a>`],
    ["Aerolínea", esc(reservation.airline)],
    ["Vuelo", esc(reservation.flight_number)],
  ];
  if (reservation.celebration) rows.push(["Celebración", esc(celebrationLabels(reservation.celebration, "es"))]);
  rows.push(["Idioma del huésped", reservation.language === "es" ? "Español" : "Inglés"]);

  const body = `
    <p style="margin:0 0 16px;color:${GRAY_INK};">Se recibió una nueva reservación desde la landing page de Sala HAVEN.</p>
    ${tgleStatusBlock(sync)}
    ${detailsCard(rows)}
    <p style="margin:0;font-size:13px;color:${GRAY_MEDIUM};">Método de acceso: ${esc(form.accessMethodValue.es)} (único método aceptado).</p>
  `;

  return {
    subject: `${sync.status === "synced" ? "" : "[Capturar manualmente] "}Nueva reservación — ${reservation.full_name} — ${date}, ${time}`,
    html: layout({
      assetBaseUrl,
      lang: "es",
      preheader: `${reservation.full_name} · ${date}, ${time} · ${reservation.guests} huésped(es)`,
      eyebrow: "Notificación interna",
      headline: "Nueva reservación",
      body,
      footer: copy.es.footer,
    }),
  };
}
