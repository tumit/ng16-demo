import { Injectable, signal } from '@angular/core';
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  role = signal('')

  constructor() { }

  isAdmin(): Observable<boolean> {
    return of('A' === this.role());
  }
}
