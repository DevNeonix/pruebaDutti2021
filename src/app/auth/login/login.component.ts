import {Component, OnInit} from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../core/services/auth/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  showPass = false;
  loginForm: FormGroup;
  submitted = false;

  constructor(
    private authService: AuthService,
    private router: Router
  ) {

  }

  // para obtener los datos
  get f() {
    return this.loginForm.controls;
  }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.minLength(8)]),
      password: new FormControl('', [Validators.required, Validators.minLength(3)]),
    });
  }

  loginSubmit() {
    this.submitted = true;
    if (this.loginForm.valid) {
      this.authService.login(this.f.email.value, this.f.password.value).subscribe((res) => {
        localStorage.setItem('user', JSON.stringify(res));
        this.router.navigateByUrl('/principal');
      }, error => {
        console.log(error);
      });
    }

  }
}
