import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-shop-category',
  imports: [CommonModule,RouterModule],
  templateUrl: './shop-category.component.html',
  styleUrl: './shop-category.component.scss'
})
export class ShopCategoryComponent {

  categoryData = [
    {
      id: 1,
      imgSrc: '/assets/img/products/product-5-1.png',
      title: "Keyboard",
      columnClass: "col-lg-6",
    },
    {
      id: 2,
      imgSrc: '/assets/img/products/product-5-2.png',
      title: "Headset",
      columnClass: "col-xl-3 col-lg-6",
    },
    {
      id: 3,
      imgSrc: '/assets/img/products/product-5-3.png',
      title: "Joystick",
      columnClass: "col-xl-3 col-lg-6",
    },
    {
      id: 4,
      imgSrc: '/assets/img/products/product-5-4.png',
      title: "Accessories",
      columnClass: "col-xl-3 col-lg-6",
    },
    {
      id: 5,
      imgSrc: '/assets/img/products/product-5-5.png',
      title: "Microphone",
      columnClass: "col-xl-3 col-lg-6",
    },
    {
      id: 6,
      imgSrc: '/assets/img/products/product-5-6.png',
      title: "Desk Table",
      columnClass: "col-lg-6",
    }
  ]
}
