import { Component, Input } from '@angular/core';
import { IProduct } from '../../../types/product-type';
import { RouterModule } from '@angular/router';
import { CartService } from '../../../../service/cart.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-shop-item',
  imports: [CommonModule,RouterModule],
  templateUrl: './shop-item.component.html',
  styleUrl: './shop-item.component.scss'
})
export class ShopItemComponent {

  @Input() item!: IProduct;

  constructor(
    public cartService: CartService,
  ) {}
  // add to cart
  addToCart(product: IProduct) {
    this.cartService.addCartProduct(product);
  }
  // Function to check if an item is in the cart
  isItemInCart(item: IProduct): boolean {
    return this.cartService.getCartProducts().some((prd: IProduct) => prd.id === item.id);
  }
}
