import {Component} from '@angular/core';
import userList from '../assets/json/users.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'massimo-dutti';

  constructor() {
    const users = localStorage.getItem('users');
    if (!users) {
      // tslint:disable-next-line:no-console
      console.info('ingresando usuarios de prueba al localstorage');
      localStorage.setItem('users', JSON.stringify(userList));

    }
  }
}
