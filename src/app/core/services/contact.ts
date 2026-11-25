import { HttpClient } from '@angular/common/http';
import { inject, Service } from '@angular/core';
import { Observable } from 'rxjs';
import { ContactRequest, ContactResponse } from '../../shared/models/contact.model';

/** PHP endpoint that delivers contact form messages by mail. */
const MAIL_ENDPOINT = 'https://rekyi.de/send-mail.php';

/** Sends contact form messages to the mail endpoint. */
@Service()
export class ContactService {
  private readonly http = inject(HttpClient);

  /**
   * Posts a contact request to the mail endpoint.
   *
   * @param request - Form data including the honeypot field.
   * @returns Cold observable that sends the request on subscribe and emits the server response.
   */
  send(request: ContactRequest): Observable<ContactResponse> {
    return this.http.post<ContactResponse>(MAIL_ENDPOINT, request);
  }
}
