import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderNavMenusComponent } from '../header-nav-menus/header-nav-menus.component';
import { SvgIconAnimComponent } from '../../../components/svg-icon-anim/svg-icon-anim.component';
import { StickyService } from '../../../../service/sticky.service';
import { Router, NavigationEnd } from '@angular/router';
import { Subscription } from 'rxjs';
import { SearchPopupComponent } from '../../../components/search-popup/search-popup.component';
import { OffcanvasComponent } from '../../../components/offcanvas/offcanvas/offcanvas.component';
import { MobileOffcanvasComponent } from '../../../components/offcanvas/mobile-offcanvas/mobile-offcanvas.component';

@Component({
  selector: 'app-header-one',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    SvgIconAnimComponent,
    HeaderNavMenusComponent,
    SearchPopupComponent,
    OffcanvasComponent,
    MobileOffcanvasComponent,
  ],
  templateUrl: './header-one.component.html',
  styleUrl: './header-one.component.scss',
})
export class HeaderOneComponent {

  @Input() style_2 = false;
  isSearchOpen = false;
  isOffCanvasOpen = false;
  openMobileOffCanvas = false;

  sticky = false;
  isStickyVisible = false;
  private routerSubscription: Subscription | null = null;

  constructor(private stickyService: StickyService, private router: Router) {}

  ngOnInit(): void {
    this.initializeStickyService();
  
    // Listen for route changes
    this.routerSubscription = this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        // Destroy the previous sticky service instance
        this.stickyService.destroySticky();
  
        // Reinitialize StickyService after DOM updates
        setTimeout(() => {
          this.initializeStickyService();
        });
      }
    });
  }
  
  private initializeStickyService(): void {

      this.stickyService.initializeSticky();
  
      // Subscribe to sticky status
      this.stickyService.getStickyStatus().subscribe((status) => {
        this.sticky = status;
      });
  
      // Subscribe to sticky visibility
      this.stickyService.getStickyVisibility().subscribe((isVisible) => {
        this.isStickyVisible = isVisible;
      });

  }
  
  ngOnDestroy(): void {
    // Clean up StickyService and router subscription
    this.stickyService.destroySticky();
    this.routerSubscription?.unsubscribe();
  }
  

  handleOpenSearch(audioPath: string): void {
    this.isSearchOpen = true;
    const audio = new Audio(audioPath);
    audio.play();
  }
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
