import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderOneComponent } from '../../shared/layout/header/header-one/header-one.component';
import { BreadcrumbOneComponent } from '../../shared/components/breadcrumb/breadcrumb-one/breadcrumb-one.component';
import { FooterOneComponent } from '../../shared/layout/footer/footer-one/footer-one.component';
import { CartService } from '../../service/cart.service';
import { ToastrService } from 'ngx-toastr';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-checkout',
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    RouterModule,
    HeaderOneComponent,
    BreadcrumbOneComponent,
    FooterOneComponent,
  ],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.scss'
})
export class CheckoutComponent {

  isOpenCoupon = false;
  couponCode: string = '';

  constructor(public cartService: CartService,private toastrService: ToastrService) { }

  handleOpenCoupon() {
    this.isOpenCoupon = !this.isOpenCoupon;
  }


  handleCouponSubmit() {
    console.log(this.couponCode);
    // Add coupon code handling logic here
    if (this.couponCode) {
      // logic here

      // when submitted the from than empty will be coupon code
      this.couponCode = ''
    }
  }

  public checkoutForm!: FormGroup;
  public formSubmitted = false;



  ngOnInit () {
    this.checkoutForm = new FormGroup({
      firstName:new FormControl(null,Validators.required),
      lastName:new FormControl(null,Validators.required),
      company:new FormControl(null),
      country: new FormControl('uk', Validators.required),
      address:new FormControl(null,Validators.required),
      city:new FormControl(null,Validators.required),
      district:new FormControl('alabama',Validators.required),
      zipCode:new FormControl(null,Validators.required),
      phone:new FormControl(null,Validators.required),
      orderNote:new FormControl(null),
      email:new FormControl(null,[Validators.required,Validators.email]),
    })
  }
  

  onSubmit() {
    this.formSubmitted = true;
    if (this.checkoutForm.valid) {
      console.log('checkout-form-value', this.checkoutForm.value);
      this.toastrService.success(`Order successfully`);

      // Reset the form
      this.checkoutForm.reset();
      this.formSubmitted = false; // Reset formSubmitted to false
    }
    console.log('checkout-form', this.checkoutForm.value);
  }

  get firstName() { return this.checkoutForm.get('firstName') }
  get lastName() { return this.checkoutForm.get('lastName') }
  get company() { return this.checkoutForm.get('company') }
  get country() { return this.checkoutForm.get('country') }
  get address() { return this.checkoutForm.get('address') }
  get city() { return this.checkoutForm.get('city') }
  get district() { return this.checkoutForm.get('district') }
  get zipCode() { return this.checkoutForm.get('zipCode') }
  get phone() { return this.checkoutForm.get('phone') }
  get orderNote() { return this.checkoutForm.get('orderNote') }
  get email() { return this.checkoutForm.get('email') }
}
