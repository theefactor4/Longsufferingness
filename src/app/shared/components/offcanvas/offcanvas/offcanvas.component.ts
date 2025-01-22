import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-offcanvas',
  imports: [CommonModule,RouterModule],
  templateUrl: './offcanvas.component.html',
  styleUrl: './offcanvas.component.scss'
})
export class OffcanvasComponent {

  @Input() isOffCanvasOpen: boolean = false; // Input property for controlling visibility
  @Output() isOffCanvasOpenChange = new EventEmitter<boolean>(); // Output for two-way binding

  currentYear = new Date().getFullYear();

  // Sample social data (to mimic the social_data array)
  socialData = [
    { link: '/facebook', icon: 'flaticon-facebook' },
    { link: '/twitter', icon: 'flaticon-twitter' },
    { link: '/instagram', icon: 'flaticon-instagram' },
  ];

  // Handle close functionality
  handleCloseOffCanvas(audioPath: string): void {
    this.isOffCanvasOpenChange.emit(false); // Notify parent to close off-canvas
    const audio = new Audio(audioPath);
    audio.play();
  }
}
