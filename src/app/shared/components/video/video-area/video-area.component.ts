import { Component } from '@angular/core';
import { UtilsService } from '../../../../service/utils.service';
import { BtnBgComponent } from '../../svg/btn-bg.component';

@Component({
    standalone: true,
    selector: 'app-video-area',
    imports: [BtnBgComponent],
    templateUrl: './video-area.component.html',
    styleUrl: './video-area.component.scss'
})
export class VideoAreaComponent {

    constructor(public utilsService:UtilsService) { };
}
