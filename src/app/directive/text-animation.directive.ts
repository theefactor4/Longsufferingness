import { Directive, ElementRef, Renderer2, Input } from '@angular/core';

@Directive({
  selector: '[appTextAnimation]',
  standalone: true,
})
export class TextAnimationDirective {
  @Input() appTextAnimation: boolean = false; // Input to control animation trigger

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngAfterViewInit(): void {
    if (this.appTextAnimation) {
      const element = this.el.nativeElement;

      const observer = new IntersectionObserver(
        (entries, observer) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              this.animateText(element); // Trigger animation
              observer.unobserve(element); // Stop observing to prevent re-triggering
            }
          });
        },
        { threshold: 0.1 } // Adjust threshold for triggering animation
      );

      observer.observe(element);
    }
  }

  private animateText(element: HTMLElement): void {
    const text = element.innerText;
    const wait = parseInt(element.getAttribute('data-wait') || '0', 10);
    const speed = parseInt(element.getAttribute('data-speed') || '4', 10);
    const animationDelay = speed / 100;

    element.innerHTML = '<em>321...</em>';
    this.renderer.addClass(element, 'ready');

    const characters = text.split('');
    element.innerHTML = ''; // Clear existing content

    setTimeout(() => {
      characters.forEach((char, index) => {
        const span = document.createElement('span');
        span.textContent = char;
        span.style.animationDelay = `${index * animationDelay}s`;
        element.appendChild(span);
      });
    }, wait);
  }
}
