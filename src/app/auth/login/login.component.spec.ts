import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';
import {LoginComponent} from './login.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";


describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [
        FormsModule,
        ReactiveFormsModule,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));
  beforeEach(async () => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', async () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('form login invalid', () => {
    component.loginForm.controls.email.setValue('');
    component.loginForm.controls.password.setValue('');
    expect(component.loginForm.valid).toBeFalsy();
  });
  it('form login valid', () => {
    component.loginForm.controls.email.setValue('pepe@pepe.es');
    component.loginForm.controls.password.setValue('123456');
    expect(component.loginForm.valid).toBeTruthy();
  });
});
