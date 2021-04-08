import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {User} from "../../core/interfaces/user";

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.scss']
})
export class PrincipalComponent implements OnInit {
  user: User;

  constructor(private router: Router) {
    const luser = localStorage.getItem('user');
    this.user = JSON.parse(luser);
  }

  ngOnInit(): void {
  }

  logout() {
    localStorage.removeItem('user');
    this.router.navigateByUrl('/auth/login');
  }
}
