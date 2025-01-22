import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { product_data_two } from '../../../data/product-data';
import { RouterModule } from '@angular/router';
import { CompareSvgComponent } from '../../svg/compare-svg.component';

@Component({
  selector: 'app-home-five-shop-area',
  imports: [CommonModule,RouterModule,CompareSvgComponent],
  templateUrl: './home-five-shop-area.component.html',
  styleUrl: './home-five-shop-area.component.scss'
})
export class HomeFiveShopAreaComponent {

  public product_data = [...product_data_two];
}
