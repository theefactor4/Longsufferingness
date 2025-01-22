import sal from 'sal.js';
import { Component } from '@angular/core';
import { HeaderFourComponent } from '../../shared/layout/header/header-four/header-four.component';
import { HeroFiveComponent } from '../../shared/components/hero-banner/hero-five/hero-five.component';
import { ShopCategoryComponent } from '../../shared/components/shop/shop-category/shop-category.component';
import { ShopOfferAreaComponent } from '../../shared/components/shop/shop-offer-area/shop-offer-area.component';
import { HomeFiveShopAreaComponent } from '../../shared/components/shop/home-five-shop-area/home-five-shop-area.component';
import { ShopDealAreaComponent } from '../../shared/components/shop/shop-deal-area/shop-deal-area.component';
import { CtaAreaComponent } from '../../shared/components/cta-area/cta-area.component';
import { FooterFourComponent } from '../../shared/layout/footer/footer-four/footer-four.component';

@Component({
  selector: 'app-home-five',
  imports: [
    HeaderFourComponent,
    HeroFiveComponent,
    ShopCategoryComponent,
    ShopOfferAreaComponent,
    HomeFiveShopAreaComponent,
    ShopDealAreaComponent,
    CtaAreaComponent,
    FooterFourComponent,
  ],
  templateUrl: './home-five.component.html',
  styleUrl: './home-five.component.scss'
})
export class HomeFiveComponent {

  ngAfterViewInit() {
    setTimeout(() => {
      sal({ threshold: 0.1, once: true, root: null });
    }, 500)
  }
}
