import { HttpClient } from '@angular/common/http';
import { inject, Service } from '@angular/core';
import { Observable } from 'rxjs';
import { ContactRequest, ContactResponse } from '../../shared/models/contact.model';

const MAIL_ENDPOINT = 'https://rekyi.de/send-mail.php';

@Service()
export class ContactService {
  private readonly http = inject(HttpClient);

  send(request: ContactRequest): Observable<ContactResponse> {
    return this.http.post<ContactResponse>(MAIL_ENDPOINT, request);
  }
}
