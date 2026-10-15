import { Resend } from "resend";

const apiKey = process.env.RESEND_API_KEY;

/**
 * True once a Resend API key is set in the environment. Until a custom
 * domain is verified in Resend, the "from" address is the shared
 * resend.dev test domain, which can only deliver to the email the Resend
 * account itself was created with — see RESEND_FROM / TGLE_STAFF_EMAIL
 * in .env.example.
 */
export const isResendConfigured = Boolean(apiKey);

export const resend = isResendConfigured ? new Resend(apiKey) : null;
