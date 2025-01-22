import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { blogDataTwo } from '../../../data/blog-data';

@Component({
  selector: 'app-blog-area',
  imports: [CommonModule,RouterModule],
  templateUrl: './blog-area.component.html',
  styleUrl: './blog-area.component.scss'
})
export class BlogAreaComponent {

  @Input() style_2: boolean = false;

  blogData = blogDataTwo
}
