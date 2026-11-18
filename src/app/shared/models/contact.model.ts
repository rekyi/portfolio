export interface ContactRequest {
  name: string;
  email: string;
  message: string;
  website: string;
}

export interface ContactResponse {
  success: boolean;
  error?: string;
}
