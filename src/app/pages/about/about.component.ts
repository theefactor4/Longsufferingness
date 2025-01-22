import sal from 'sal.js';
import { Component } from '@angular/core';
import { HeaderOneComponent } from '../../shared/layout/header/header-one/header-one.component';
import { FooterOneComponent } from '../../shared/layout/footer/footer-one/footer-one.component';
import { BreadcrumbOneComponent } from '../../shared/components/breadcrumb/breadcrumb-one/breadcrumb-one.component';
import { AboutAreaFiveComponent } from '../../shared/components/about/about-area-five/about-area-five.component';
import { ServiceAreaTwoComponent } from '../../shared/components/services/service-area-two/service-area-two.component';
import { TeamAreaComponent } from '../../shared/components/team/team-area/team-area.component';

@Component({
  selector: 'app-about',
  imports: [
    HeaderOneComponent,
    BreadcrumbOneComponent,
    AboutAreaFiveComponent,
    ServiceAreaTwoComponent,
    TeamAreaComponent,
    FooterOneComponent,
  ],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {

  ngAfterViewInit() {
    setTimeout(() => {
      sal({ threshold: 0.1, once: true, root: null });
    }, 500)
  }
}
