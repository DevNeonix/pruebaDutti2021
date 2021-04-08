import {Component} from '@angular/core';
import userList from '../assets/json/users.json';
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'massimo-dutti';

  constructor(private router: Router) {
    const users = localStorage.getItem('users');
    const user = localStorage.getItem('user');
    // llenar datos de prueba
    if (!users) {
      // tslint:disable-next-line:no-console
      localStorage.setItem('users', JSON.stringify(userList));
    }
    if (user) {
      this.router.navigateByUrl('/principal');
    }

  }
}
