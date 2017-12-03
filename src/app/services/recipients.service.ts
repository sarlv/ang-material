import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Injectable()
export class RecipientsService {

  constructor() { }

  getRecipients(): Observable<String[]> {
    // In real project we should make
    // http request...
    return of([
      'admin@google.com',
      'developer@google.com',
      'admin@facebook.com'
    ]);
  }

}
