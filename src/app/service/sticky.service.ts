import { Injectable, Renderer2, RendererFactory2 } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StickyService {
  private sticky = new BehaviorSubject<boolean>(false);
  private isStickyVisible = new BehaviorSubject<boolean>(false);
  private lastScrollTop = 0;
  private renderer: Renderer2;
  private removeScrollListener: () => void = () => {};

  constructor(rendererFactory: RendererFactory2) {
    this.renderer = rendererFactory.createRenderer(null, null);
  }

  getStickyStatus() {
    return this.sticky.asObservable();
  }

  getStickyVisibility() {
    return this.isStickyVisible.asObservable();
  }

  initializeSticky(): void {

    const handleScroll = () => {
      const windowTop = window.scrollY;

      if (windowTop > 0) {
        this.sticky.next(true);
      } else {
        this.sticky.next(false);
        this.isStickyVisible.next(false);
      }

      if (this.sticky.value) {
        if (windowTop < this.lastScrollTop) {
          this.isStickyVisible.next(true);
        } else {
          this.isStickyVisible.next(false);
        }
      }

      this.lastScrollTop = windowTop;
    };

    this.removeScrollListener = this.renderer.listen('window', 'scroll', handleScroll);
  }

  destroySticky(): void {
    this.removeScrollListener();
    this.sticky.next(false);
    this.isStickyVisible.next(false);
  }
}
