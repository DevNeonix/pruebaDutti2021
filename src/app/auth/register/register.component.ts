import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../services/auth.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;

  constructor(private authService: AuthService, private router: Router) {
    this.registerForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email, Validators.minLength(8)]),
      password: new FormControl('', [Validators.required, Validators.minLength(3)]),
      first_name: new FormControl('', [Validators.required]),
      last_name: new FormControl('', [Validators.required]),
      username: new FormControl('', [Validators.required]),
    });
  }

  get f() {
    return this.registerForm.controls;
  }

  ngOnInit(): void {
  }

  registerSubmit() {
    this.submitted = true;
    if (this.registerForm.valid) {
      this.authService.register(this.registerForm.value).subscribe(res => {
        localStorage.setItem('user', JSON.stringify(res));
        this.router.navigateByUrl('/principal');
      }, err => {
        alert(err);
      });
    }
    // console.log(this.registerForm.value);
  }
}
