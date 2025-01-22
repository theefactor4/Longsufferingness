import { Component } from '@angular/core';
import menu_data, { ISubMenu } from '../../../data/menu-data';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header-nav-menus',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './header-nav-menus.component.html',
  styleUrl: './header-nav-menus.component.scss'
})
export class HeaderNavMenusComponent {

  menuData = menu_data;

  constructor(private router: Router) {}

  isActive(link: string): boolean {
    return this.router.url === link;
  }

  hasActiveSubMenu(subMenu: ISubMenu[]): boolean {
    return subMenu.some((sub) => this.isActive(sub.link));
  }

  isMenuActive(menu: any): boolean {
    if (!menu.sub_menu) {
      // Check if the current route matches the menu link
      return this.isActive(menu.link);
    }

    // Check if any submenu item is active
    return this.hasActiveSubMenu(menu.sub_menu);
  }
}
