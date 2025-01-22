import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-footer-two',
  imports: [CommonModule,RouterModule],
  templateUrl: './footer-two.component.html',
  styleUrl: './footer-two.component.scss'
})
export class FooterTwoComponent {

  currentYear: number = new Date().getFullYear();

  ngOnInit(): void {
    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver(
        (entries, observer) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.classList.add('active-footer');
              observer.unobserve(entry.target);
            }
          });
        },
        { rootMargin: '0px 0px -100px 0px' }
      );

      document.querySelectorAll('.has-footer-animation').forEach(block => {
        observer.observe(block);
      });
    } else {
      document.querySelectorAll('.has-footer-animation').forEach(block => {
        block.classList.remove('has-footer-animation');
      });
    }
  }
}
