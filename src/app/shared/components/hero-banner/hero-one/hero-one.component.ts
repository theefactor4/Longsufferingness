import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BtnBgComponent } from '../../svg/btn-bg.component';

@Component({
  selector: 'app-hero-one',
  standalone: true,
  imports: [CommonModule,RouterModule,BtnBgComponent],
  templateUrl: './hero-one.component.html',
  styleUrl: './hero-one.component.scss'
})
export class HeroOneComponent {

  public brands = [
    '/assets/img/brand/brand_logo01.png',
    '/assets/img/brand/brand_logo02.png',
    '/assets/img/brand/brand_logo03.png'
  ];

  hoveredIndex:number | null = null;

  handleHoverIndex(index: number | null) {
    this.hoveredIndex = index;
  }
}
