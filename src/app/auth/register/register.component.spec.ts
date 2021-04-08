import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';

import {RegisterComponent} from './register.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [RegisterComponent],
      imports: [
        FormsModule,
        ReactiveFormsModule,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('form register invalid', () => {

    component.registerForm.controls.email.setValue('');
    component.registerForm.controls.password.setValue('');
    component.registerForm.controls.first_name.setValue('');
    component.registerForm.controls.last_name.setValue('');
    component.registerForm.controls.username.setValue('');
    expect(component.registerForm.valid).toBeFalsy();
  });
  it('form register valid', () => {
    component.registerForm.controls.email.setValue('test@test.com');
    component.registerForm.controls.password.setValue('test');
    component.registerForm.controls.first_name.setValue('test');
    component.registerForm.controls.last_name.setValue('test');
    component.registerForm.controls.username.setValue('tes');
    expect(component.registerForm.valid).toBeTruthy();
  });
});
