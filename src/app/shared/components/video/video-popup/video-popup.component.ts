import { Component } from '@angular/core';
import { UtilsService } from '../../../../service/utils.service';

@Component({
  selector: 'app-video-popup',
  imports: [],
  templateUrl: './video-popup.component.html',
  styleUrl: './video-popup.component.scss'
})
export class VideoPopupComponent {
  constructor(public utilsService:UtilsService) { }
}
