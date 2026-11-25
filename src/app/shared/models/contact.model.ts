/** Payload sent to the mail endpoint. */
export interface ContactRequest {
  /** Sender's name. */
  name: string;
  /** Sender's email address for the reply. */
  email: string;
  /** Message text. */
  message: string;
  /** Honeypot field; stays empty for humans, a value marks the request as spam. */
  website: string;
}

/** Response of the mail endpoint. */
export interface ContactResponse {
  /** Whether the mail was sent. */
  success: boolean;
  /** Error message if sending failed. */
  error?: string;
}

/** Result of the last send attempt; `idle` shows no feedback. */
export type SendStatus = 'idle' | 'success' | 'error';
