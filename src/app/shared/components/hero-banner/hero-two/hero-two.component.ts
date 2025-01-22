import { Component } from '@angular/core';
import { SvgIconAnimComponent } from '../../svg-icon-anim/svg-icon-anim.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-hero-two',
  imports: [RouterModule,SvgIconAnimComponent],
  templateUrl: './hero-two.component.html',
  styleUrl: './hero-two.component.scss'
})
export class HeroTwoComponent {

}
