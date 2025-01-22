import { Component } from '@angular/core';
import { HeaderOneComponent } from '../../shared/layout/header/header-one/header-one.component';
import { BreadcrumbThreeComponent } from '../../shared/components/breadcrumb/breadcrumb-three/breadcrumb-three.component';
import { FooterOneComponent } from '../../shared/layout/footer/footer-one/footer-one.component';
import { ShopAreaComponent } from '../../shared/components/shop/shop-area/shop-area.component';

@Component({
  selector: 'app-shop',
  imports: [
    HeaderOneComponent,
    BreadcrumbThreeComponent,
    ShopAreaComponent,
    FooterOneComponent,
  ],
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.scss'
})
export class ShopComponent {

}
