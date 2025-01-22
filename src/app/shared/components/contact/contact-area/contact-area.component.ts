import { Component } from '@angular/core';
import { ContactSvgComponent } from '../../svg/contact-svg.component';
import { LocationSvgComponent } from '../../svg/location-svg.component';

@Component({
  selector: 'app-contact-area',
  imports: [ContactSvgComponent,LocationSvgComponent],
  templateUrl: './contact-area.component.html',
  styleUrl: './contact-area.component.scss'
})
export class ContactAreaComponent {

}
