import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HeaderOneComponent } from '../../shared/layout/header/header-one/header-one.component';
import { BreadcrumbOneComponent } from '../../shared/components/breadcrumb/breadcrumb-one/breadcrumb-one.component';
import { FooterOneComponent } from '../../shared/layout/footer/footer-one/footer-one.component';
import { GoogleSvgComponent } from '../../shared/components/svg/google-svg.component';

@Component({
  selector: 'app-login',
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    HeaderOneComponent,
    BreadcrumbOneComponent,
    GoogleSvgComponent,
    FooterOneComponent,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  public loginForm!: FormGroup;
  public formSubmitted = false;


  ngOnInit () {
    this.loginForm = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.minLength(6)]),
    })
  }

  onSubmit() {
    this.formSubmitted = true;
    if (this.loginForm.valid) {
      console.log('login-form-value', this.loginForm.value);
      alert(`Login sent successfully`);

      // Reset the form
      this.loginForm.reset();
      this.formSubmitted = false; // Reset formSubmitted to false
    }
  }
  get email() { return this.loginForm.get('email') }
  get password() { return this.loginForm.get('password') }
}
