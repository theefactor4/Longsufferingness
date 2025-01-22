import { Component, Input, ElementRef } from '@angular/core';
import Vivus from 'vivus';

@Component({
  selector: 'app-svg-icon-anim',
  standalone: true,
  imports: [],
  templateUrl: './svg-icon-anim.component.html',
  styleUrl: './svg-icon-anim.component.scss'
})
export class SvgIconAnimComponent {
  @Input() icon!: string; // SVG file path
  @Input() id!: string;

  private vivusInstance: Vivus | null = null;

  constructor(private elementRef: ElementRef) {}

  ngAfterViewInit(): void {
    const svgElement = this.elementRef.nativeElement.querySelector(`#${this.id}`);

    if (svgElement) {
      this.vivusInstance = new Vivus(svgElement, {
        duration: 180,
        file: this.icon,
      });

      svgElement.addEventListener('mouseenter', this.handleMouseEnter.bind(this));
    }
  }

  private handleMouseEnter(): void {
    if (this.vivusInstance) {
      this.vivusInstance.reset().play();
    }
  }

  ngOnDestroy(): void {
    const svgElement = this.elementRef.nativeElement.querySelector(`#${this.id}`);
    if (svgElement) {
      svgElement.removeEventListener('mouseenter', this.handleMouseEnter.bind(this));
    }
  }
}
