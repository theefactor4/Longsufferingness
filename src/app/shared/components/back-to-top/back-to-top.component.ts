import { Component } from '@angular/core';

@Component({
  selector: 'app-back-to-top',
  standalone: true,
  imports: [],
  templateUrl: './back-to-top.component.html',
  styleUrl: './back-to-top.component.scss',
})
export class BackToTopComponent {
  ngAfterViewInit(): void {
    const result = document.querySelector('.scroll__top') as HTMLElement | null;
    if (result) {
      document.addEventListener('scroll', () => {
        if (window.scrollY > 200) {
          result.classList.add('open');
        } else {
          result.classList.remove('open');
        }
      });

      result.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    }
  }
}
