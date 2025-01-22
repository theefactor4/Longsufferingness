import { Component } from '@angular/core';
import menu_data from '../../../data/menu-data';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-mobile-menus',
  imports: [CommonModule,RouterModule],
  templateUrl: './mobile-menus.component.html',
  styleUrl: './mobile-menus.component.scss'
})
export class MobileMenusComponent {

  navTitle: string = ''; // To track which menu is open

  // Function to open or close a menu
  openMobileMenu(menu: string, audioPath: string): void {
    const audio = new Audio(audioPath);
    audio.play();

    if (this.navTitle === menu) {
      this.navTitle = ''; // Close if the same menu is clicked again
    } else {
      this.navTitle = menu; // Set the clicked menu as open
    }
  }

  // Get the menu data
  menuData = menu_data;
}
