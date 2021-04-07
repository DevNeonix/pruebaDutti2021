import {Injectable} from '@angular/core';
import {User} from '../interfaces/user';
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() {
  }

  login(email: string, password: string): Observable<User> {

    return new Observable((observer) => {
      const users = JSON.parse(localStorage.getItem('users'));
      let auth: User = null;
      // @ts-ignore
      for (const user: User of users) {
        if (user.email === email && user.password === password) {
          auth = user;
        }
      }
      if (auth) {
        observer.next(auth);
      } else {
        observer.error("Usuario o contraseña errada");
      }

    });


  }
}
