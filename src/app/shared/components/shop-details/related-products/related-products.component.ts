import { Component } from '@angular/core';
import product_data from '../../../data/product-data';
import { CommonModule } from '@angular/common';
import { ShopItemComponent } from '../../shop/shop-item/shop-item.component';

@Component({
  selector: 'app-related-products',
  imports: [
    CommonModule,
    ShopItemComponent,
  ],
  templateUrl: './related-products.component.html',
  styleUrl: './related-products.component.scss'
})
export class RelatedProductsComponent {

  related_products = [...product_data].slice(0,4)
}
