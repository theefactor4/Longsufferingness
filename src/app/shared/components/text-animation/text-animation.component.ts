import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { TextAnimationDirective } from '../../../directive/text-animation.directive';

@Component({
  selector: 'app-text-animation',
  standalone: true,
  imports: [CommonModule,TextAnimationDirective],
  templateUrl: './text-animation.component.html',
  styleUrl: './text-animation.component.scss'
})
export class TextAnimationComponent {

  @Input() title!: string;
  @Input() style2: boolean = false;

}
