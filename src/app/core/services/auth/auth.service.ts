import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {User} from '../../interfaces/user';

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
        observer.error('Usuario o contraseña errada');
      }

    });


  }

  register(reg: User) {
    return new Observable((observer) => {
      const users = JSON.parse(localStorage.getItem('users'));
      // @ts-ignore
      for (const user: User of users) {
        if (user.email === reg.email) {
          observer.error('Este usuario ya existe');
        }
      }
      users.push(reg);
      localStorage.setItem('users', JSON.stringify(users));
      observer.next(reg);

    });
  }
}
