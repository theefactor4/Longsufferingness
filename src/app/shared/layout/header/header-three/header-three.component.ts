import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderNavMenusComponent } from '../header-nav-menus/header-nav-menus.component';
import { OffcanvasComponent } from '../../../components/offcanvas/offcanvas/offcanvas.component';
import { MobileOffcanvasComponent } from '../../../components/offcanvas/mobile-offcanvas/mobile-offcanvas.component';

@Component({
  selector: 'app-header-three',
  imports: [CommonModule,RouterModule,HeaderNavMenusComponent,OffcanvasComponent,MobileOffcanvasComponent],
  templateUrl: './header-three.component.html',
  styleUrl: './header-three.component.scss'
})
export class HeaderThreeComponent {


  isOffCanvasOpen = false;
  openMobileOffCanvas = false;

  handleOpenOffCanvas(audioPath: string): void {
    this.isOffCanvasOpen = true;
    const audio = new Audio(audioPath);
    audio.play();
  }
  handleOpenMobileOffCanvas(audioPath: string): void {
    this.openMobileOffCanvas = true;
    const audio = new Audio(audioPath);
    audio.play();
  }
}
