import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { HeaderOneComponent } from '../../shared/layout/header/header-one/header-one.component';
import { BreadcrumbOneComponent } from '../../shared/components/breadcrumb/breadcrumb-one/breadcrumb-one.component';
import { FooterOneComponent } from '../../shared/layout/footer/footer-one/footer-one.component';
import { GoogleSvgComponent } from '../../shared/components/svg/google-svg.component';

@Component({
  selector: 'app-register',
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    HeaderOneComponent,
    BreadcrumbOneComponent,
    GoogleSvgComponent,
    FooterOneComponent,
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent {
  public registerForm!: FormGroup;
  public formSubmitted = false;

  ngOnInit(): void {
    this.registerForm = new FormGroup(
      {
        fname: new FormControl(null, [Validators.required]),
        lname: new FormControl(null, [Validators.required]),
        email: new FormControl(null, [Validators.required, Validators.email]),
        password: new FormControl(null, [Validators.required, Validators.minLength(6)]),
        conpassword: new FormControl(null, [Validators.required]),
      },
      { validators: this.matchPasswords('password', 'conpassword') }
    );
  }

  onSubmit(): void {
    this.formSubmitted = true;
    if (this.registerForm.valid) {
      console.log('register-form-value', this.registerForm.value);
      alert(`Registration successful`);

      // Reset the form
      this.registerForm.reset();
      this.formSubmitted = false; // Reset formSubmitted to false
    }
  }

  matchPasswords(passwordKey: string, confirmPasswordKey: string) {
    return (formGroup: AbstractControl): ValidationErrors | null => {
      const passwordControl = formGroup.get(passwordKey);
      const confirmPasswordControl = formGroup.get(confirmPasswordKey);

      if (!passwordControl || !confirmPasswordControl) {
        return null; // Form is invalid
      }

      if (confirmPasswordControl.errors && !confirmPasswordControl.errors['passwordMismatch']) {
        return null; // Other errors exist
      }

      if (passwordControl.value !== confirmPasswordControl.value) {
        confirmPasswordControl.setErrors({ passwordMismatch: true });
      } else {
        confirmPasswordControl.setErrors(null);
      }

      return null;
    };
  }

  get fname() {
    return this.registerForm.get('fname');
  }
  get lname() {
    return this.registerForm.get('lname');
  }
  get email() {
    return this.registerForm.get('email');
  }
  get password() {
    return this.registerForm.get('password');
  }
  get conpassword() {
    return this.registerForm.get('conpassword');
  }
}
