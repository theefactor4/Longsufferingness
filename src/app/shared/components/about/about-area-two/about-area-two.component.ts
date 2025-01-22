import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SvgIconAnimComponent } from '../../svg-icon-anim/svg-icon-anim.component';
import { UtilsService } from '../../../../service/utils.service';

@Component({
  selector: 'app-about-area-two',
  imports: [CommonModule,RouterModule,SvgIconAnimComponent],
  templateUrl: './about-area-two.component.html',
  styleUrl: './about-area-two.component.scss'
})
export class AboutAreaTwoComponent {

  constructor(public utilsService:UtilsService) { }
}
