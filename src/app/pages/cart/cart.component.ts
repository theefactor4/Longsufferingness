import { Component } from '@angular/core';
import { HeaderOneComponent } from '../../shared/layout/header/header-one/header-one.component';
import { BreadcrumbOneComponent } from '../../shared/components/breadcrumb/breadcrumb-one/breadcrumb-one.component';
import { FooterOneComponent } from '../../shared/layout/footer/footer-one/footer-one.component';
import { CartService } from '../../service/cart.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cart',
  imports: [
    FormsModule,
    CommonModule,
    RouterModule,
    HeaderOneComponent,
    BreadcrumbOneComponent,
    FooterOneComponent,
  ],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent {

  couponCode: string = '';
  shipCost: number = 0;

  constructor (public cartService:CartService) {}

  handleCouponSubmit() {
    console.log(this.couponCode);
    // Add coupon code handling logic here
    if(this.couponCode){
      // logic here

      // when submitted the from than empty will be coupon code
      this.couponCode = ''
    }
  }

  handleShippingCost(value: number | string) {
    if (value === 'free') {
      this.shipCost = 0;
    } else {
      this.shipCost = value as number;
    }
  }
}
