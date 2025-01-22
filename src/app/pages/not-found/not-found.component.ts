import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderOneComponent } from '../../shared/layout/header/header-one/header-one.component';
import { BreadcrumbOneComponent } from '../../shared/components/breadcrumb/breadcrumb-one/breadcrumb-one.component';
import { FooterOneComponent } from '../../shared/layout/footer/footer-one/footer-one.component';

@Component({
  selector: 'app-not-found',
  imports: [
    RouterModule,
    HeaderOneComponent,
    BreadcrumbOneComponent,
    FooterOneComponent,
  ],
  templateUrl: './not-found.component.html',
  styleUrl: './not-found.component.scss'
})
export class NotFoundComponent {

}
