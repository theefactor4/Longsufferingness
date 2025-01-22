import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ContactSvgComponent } from '../../../components/svg/contact-svg.component';
import { LocationSvgComponent } from '../../../components/svg/location-svg.component';

@Component({
  selector: 'app-footer-three',
  imports: [RouterModule,ContactSvgComponent,LocationSvgComponent],
  templateUrl: './footer-three.component.html',
  styleUrl: './footer-three.component.scss'
})
export class FooterThreeComponent {
  currentYear = new Date().getFullYear();
}
