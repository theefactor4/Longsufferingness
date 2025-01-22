import { Component, Input } from '@angular/core';
import { IBlog } from '../../../types/blog-type';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-blog-item',
  imports: [RouterModule],
  templateUrl: './blog-item.component.html',
  styleUrl: './blog-item.component.scss'
})

export class BlogItemComponent {
  @Input() blog!: IBlog;
}
