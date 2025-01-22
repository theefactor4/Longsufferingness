import { Component } from '@angular/core';
import { HeaderOneComponent } from '../../shared/layout/header/header-one/header-one.component';
import { BreadcrumbOneComponent } from '../../shared/components/breadcrumb/breadcrumb-one/breadcrumb-one.component';
import { FooterOneComponent } from '../../shared/layout/footer/footer-one/footer-one.component';
import { VideoAreaComponent } from '../../shared/components/video/video-area/video-area.component';
import { RoadMapAreaComponent } from '../../shared/components/road-map/road-map-area/road-map-area.component';
import { ServiceAreaTwoComponent } from '../../shared/components/services/service-area-two/service-area-two.component';
import { VideoPopupComponent } from '../../shared/components/video/video-popup/video-popup.component';

@Component({
  selector: 'app-services',
  imports: [
    HeaderOneComponent,
    BreadcrumbOneComponent,
    ServiceAreaTwoComponent,
    VideoAreaComponent,
    RoadMapAreaComponent,
    FooterOneComponent,
    VideoPopupComponent,
  ],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent {

}
