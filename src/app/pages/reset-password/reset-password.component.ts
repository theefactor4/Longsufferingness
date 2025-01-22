import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { HeaderOneComponent } from '../../shared/layout/header/header-one/header-one.component';
import { BreadcrumbOneComponent } from '../../shared/components/breadcrumb/breadcrumb-one/breadcrumb-one.component';
import { FooterOneComponent } from '../../shared/layout/footer/footer-one/footer-one.component';

@Component({
  selector: 'app-reset-password',
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    HeaderOneComponent,
    BreadcrumbOneComponent,
    FooterOneComponent,
  ],
  templateUrl: './reset-password.component.html',
  styleUrl: './reset-password.component.scss'
})
export class ResetPasswordComponent {

  public restPassForm!: FormGroup;
  public formSubmitted = false;


  ngOnInit () {
    this.restPassForm = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
    })
  }

  onSubmit() {
    this.formSubmitted = true;
    if (this.restPassForm.valid) {
      console.log('login-form-value', this.restPassForm.value);
      alert(`Login sent successfully`);

      // Reset the form
      this.restPassForm.reset();
      this.formSubmitted = false; // Reset formSubmitted to false
    }
  }
  get email() { return this.restPassForm.get('email') }
}
