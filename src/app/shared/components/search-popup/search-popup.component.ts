import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-search-popup',
  imports: [CommonModule],
  templateUrl: './search-popup.component.html',
  styleUrl: './search-popup.component.scss'
})
export class SearchPopupComponent {

  @Input() isSearchOpen: boolean = false; // Input property for controlling visibility
  @Output() isSearchOpenChange = new EventEmitter<boolean>(); // Output for two-way binding

  // Handle close search logic
  handleCloseSearch(audioPath: string): void {
    this.isSearchOpenChange.emit(false); // Emit event to parent
    const audio = new Audio(audioPath);
    audio.play();
  }
}
