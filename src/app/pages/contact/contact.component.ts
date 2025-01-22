import { Component } from '@angular/core';
import { HeaderOneComponent } from '../../shared/layout/header/header-one/header-one.component';
import { FooterOneComponent } from '../../shared/layout/footer/footer-one/footer-one.component';
import { BreadcrumbThreeComponent } from '../../shared/components/breadcrumb/breadcrumb-three/breadcrumb-three.component';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HeaderOneComponent,
    BreadcrumbThreeComponent,
    FooterOneComponent,
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

  public contactForm!: FormGroup;
  public formSubmitted = false;


  ngOnInit () {
    this.contactForm = new FormGroup({
      name:new FormControl(null,Validators.required),
      email:new FormControl(null,[Validators.required,Validators.email]),
      message:new FormControl(null,Validators.required),
    })
  }

  onSubmit() {
    this.formSubmitted = true;
    if (this.contactForm.valid) {
      console.log('contact-form-value', this.contactForm.value);
      alert(`Message sent successfully`);

      // Reset the form
      this.contactForm.reset();
      this.formSubmitted = false; // Reset formSubmitted to false
    }
    console.log('contact-form', this.contactForm);
  }

  get name() { return this.contactForm.get('name') }
  get email() { return this.contactForm.get('email') }
  get message() { return this.contactForm.get('message') }
}
