import {Injectable} from '@angular/core';
import {User} from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() {
  }

  login(email: string, password: string): User {
    const users = JSON.parse(localStorage.getItem('users'));
    let auth: User = null;
    // @ts-ignore
    for (const user: User of users) {
      if (user.email === email && user.password === password) {
        auth = user;
      }
    }
    return auth;

  }
}
