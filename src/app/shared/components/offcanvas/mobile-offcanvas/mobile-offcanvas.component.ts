import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MobileMenusComponent } from '../../../layout/header/mobile-menus/mobile-menus.component';
import social_data from '../../../data/social-data';

@Component({
  selector: 'app-mobile-offcanvas',
  imports: [CommonModule,RouterModule,MobileMenusComponent],
  templateUrl: './mobile-offcanvas.component.html',
  styleUrl: './mobile-offcanvas.component.scss'
})
export class MobileOffcanvasComponent {

  @Input() openMobileOffCanvas: boolean = false; // Input to control visibility
  @Output() setOpenMobileOffCanvas = new EventEmitter<boolean>(); // Output to emit state change

  socialData = social_data

  // Function to handle closing the off-canvas menu and playing the audio
  handleCloseOffCanvas(audioPath: string): void {
    this.setOpenMobileOffCanvas.emit(false);
    const audio = new Audio(audioPath);
    audio.play();
  }
}
