import { Subscription } from 'rxjs';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import { StickyService } from '../../../../service/sticky.service';
import { HeaderNavMenusComponent } from '../header-nav-menus/header-nav-menus.component';
import { OffcanvasComponent } from '../../../components/offcanvas/offcanvas/offcanvas.component';
import { MobileOffcanvasComponent } from '../../../components/offcanvas/mobile-offcanvas/mobile-offcanvas.component';

@Component({
  selector: 'app-header-four',
  imports: [
    CommonModule,
    RouterModule,
    HeaderNavMenusComponent,
    OffcanvasComponent,
    MobileOffcanvasComponent,
  ],
  templateUrl: './header-four.component.html',
  styleUrl: './header-four.component.scss'
})
export class HeaderFourComponent {

  sticky = false;
  isStickyVisible = false;
  isOffCanvasOpen = false;
  openMobileOffCanvas = false;

  constructor(private stickyService: StickyService, private router: Router) {};
  private routerSubscription: Subscription | null = null;

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
