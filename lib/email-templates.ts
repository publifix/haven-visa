import type { ReservationInsert } from "./supabase";

type EmailContent = { subject: string; html: string };

const NAVY = "#010D36";
const COPPER = "#B46D40";

function formatDate(isoDate: string, locale: "es-MX" | "en-US") {
  // isoDate is "YYYY-MM-DD"; parse as local (not UTC) so the displayed
  // date never shifts a day depending on server timezone.
  const [year, month, day] = isoDate.split("-").map(Number);
  const date = new Date(year, month - 1, day);
  return new Intl.DateTimeFormat(locale, { dateStyle: "long" }).format(date);
}

function formatTime(hhmmss: string) {
  const [h, m] = hhmmss.split(":");
  return `${h}:${m}`;
}

function layout(body: string): string {
  return `<!doctype html>
<html lang="es">
  <body style="margin:0;padding:0;background:#F4F4F4;font-family:Arial,Helvetica,sans-serif;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#F4F4F4;padding:24px 0;">
      <tr>
        <td align="center">
          <table role="presentation" width="560" cellpadding="0" cellspacing="0" style="background:#FFFFFF;border-radius:8px;overflow:hidden;max-width:560px;width:100%;">
            <tr>
              <td style="background:${NAVY};padding:28px 32px;">
                <span style="color:#FFFFFF;font-size:13px;letter-spacing:2px;text-transform:uppercase;">VISA Infinite</span>
                <div style="color:#FFFFFF;font-size:22px;font-weight:bold;margin-top:6px;">Sala HAVEN</div>
              </td>
            </tr>
            <tr>
              <td style="padding:32px;color:#1A1A1A;font-size:15px;line-height:1.6;">
                ${body}
              </td>
            </tr>
            <tr>
              <td style="background:#F4F4F4;padding:18px 32px;color:#8A8A8A;font-size:12px;text-align:center;">
                Terminal 1 · Aeropuerto Internacional de la Ciudad de México
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;
}

function detailRow(label: string, value: string): string {
  return `<tr>
    <td style="padding:6px 0;color:#8A8A8A;font-size:13px;width:40%;">${label}</td>
    <td style="padding:6px 0;color:#1A1A1A;font-size:14px;font-weight:bold;">${value}</td>
  </tr>`;
}

function detailsTable(rows: string): string {
  return `<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin:20px 0;border-top:1px solid #EEEEEE;border-bottom:1px solid #EEEEEE;padding:8px 0;">
    ${rows}
  </table>`;
}

export function guestConfirmationEmail(
  reservation: ReservationInsert,
  lang: "es" | "en",
): EmailContent {
  const locale = lang === "es" ? "es-MX" : "en-US";
  const date = formatDate(reservation.travel_date, locale);
  const time = formatTime(reservation.reservation_time);

  if (lang === "en") {
    const body = `
      <p style="margin:0 0 4px;">Hello ${reservation.full_name},</p>
      <p style="margin:0 0 16px;">Your reservation at Sala HAVEN has been received. We look forward to welcoming you.</p>
      ${detailsTable(
        detailRow("Date", date) +
          detailRow("Time", time) +
          detailRow("Guests", String(reservation.guests)) +
          detailRow("Airline", reservation.airline) +
          detailRow("Flight", reservation.flight_number) +
          (reservation.celebration ? detailRow("Celebrating", reservation.celebration) : ""),
      )}
      <p style="margin:16px 0 0;color:#8A8A8A;font-size:13px;">Access method: Visa Infinite Card issued in Mexico.</p>
      <p style="margin:16px 0 0;">See you soon,<br/><span style="color:${COPPER};font-weight:bold;">Sala HAVEN</span></p>
    `;
    return { subject: "Your Sala HAVEN reservation is confirmed", html: layout(body) };
  }

  const body = `
    <p style="margin:0 0 4px;">Hola ${reservation.full_name},</p>
    <p style="margin:0 0 16px;">Tu reservación en Sala HAVEN fue recibida. Te esperamos.</p>
    ${detailsTable(
      detailRow("Fecha", date) +
        detailRow("Hora", time) +
        detailRow("Huéspedes", String(reservation.guests)) +
        detailRow("Aerolínea", reservation.airline) +
        detailRow("Vuelo", reservation.flight_number) +
        (reservation.celebration ? detailRow("Celebración", reservation.celebration) : ""),
    )}
    <p style="margin:16px 0 0;color:#8A8A8A;font-size:13px;">Método de acceso: Tarjeta Visa Infinite emitida en México.</p>
    <p style="margin:16px 0 0;">Nos vemos pronto,<br/><span style="color:${COPPER};font-weight:bold;">Sala HAVEN</span></p>
  `;
  return { subject: "Tu reservación en Sala HAVEN está confirmada", html: layout(body) };
}

export function staffNotificationEmail(reservation: ReservationInsert): EmailContent {
  const date = formatDate(reservation.travel_date, "es-MX");
  const time = formatTime(reservation.reservation_time);

  const body = `
    <p style="margin:0 0 16px;">Nueva reservación recibida desde la landing page.</p>
    ${detailsTable(
      detailRow("Fecha", date) +
        detailRow("Hora", time) +
        detailRow("Huéspedes", String(reservation.guests)) +
        detailRow("Nombre", reservation.full_name) +
        detailRow("Teléfono", reservation.phone) +
        detailRow("Email", reservation.email) +
        detailRow("Aerolínea", reservation.airline) +
        detailRow("Vuelo", reservation.flight_number) +
        (reservation.celebration ? detailRow("Celebración", reservation.celebration) : "") +
        detailRow("Idioma", reservation.language === "es" ? "Español" : "Inglés"),
    )}
    <p style="margin:16px 0 0;color:#8A8A8A;font-size:13px;">Método de acceso: Tarjeta Visa Infinite emitida en México (único método aceptado).</p>
  `;
  return {
    subject: `Nueva reservación — ${reservation.full_name} — ${date}`,
    html: layout(body),
  };
}
