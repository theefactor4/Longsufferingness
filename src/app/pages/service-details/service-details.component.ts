import { Component } from '@angular/core';
import { HeaderOneComponent } from '../../shared/layout/header/header-one/header-one.component';
import { BreadcrumbOneComponent } from '../../shared/components/breadcrumb/breadcrumb-one/breadcrumb-one.component';
import { FooterOneComponent } from '../../shared/layout/footer/footer-one/footer-one.component';
import { DotsComponent } from '../../shared/components/svg/dots.component';
import { FaqAreaComponent } from '../../shared/components/faq-area/faq-area.component';

@Component({
  selector: 'app-service-details',
  imports: [
    HeaderOneComponent,
    BreadcrumbOneComponent,
    DotsComponent,
    FaqAreaComponent,
    FooterOneComponent,
  ],
  templateUrl: './service-details.component.html',
  styleUrl: './service-details.component.scss'
})
export class ServiceDetailsComponent {

}
