import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BlogSidebarComponent } from '../blog-sidebar/blog-sidebar.component';
import { IBlog } from '../../../types/blog-type';

@Component({
  selector: 'app-blog-details-area',
  imports: [
    CommonModule,
    RouterModule,
    BlogSidebarComponent,
  ],
  templateUrl: './blog-details-area.component.html',
  styleUrl: './blog-details-area.component.scss'
})
export class BlogDetailsAreaComponent {

  @Input() blog!: IBlog;
  
  comments = [
    {
      id: 1,
      avatar: '/assets/img/blog/comment01.png',
      name: 'John William',
      date: 'September 6, 2024',
      content: 'Axcepteur sint occaecat atat non proident, sunt culpa officia deserunt mollit anim id est labor umLor emdolor uni enim ad minim veniam quis nostrud today.',
      replies: [
        {
          id: 2,
          avatar: '/assets/img/blog/comment02.png',
          name: 'Hanry Foul',
          date: 'September 6, 2024',
          content: 'Axcepteur sint occaecat atat non proident, sunt culpa officia deserunt mollit anim id est labor enim ad minim veniam quis nostrud today.'
        }
      ]
    },
    {
      id: 3,
      avatar: '/assets/img/blog/comment03.png',
      name: 'Luna Rose',
      date: 'September 6, 2024',
      content: 'Axcepteur sint occaecat atat non proident, sunt culpa officia deserunt mollit anim id est labor umLor emdolor eam enim ad minim veniam quis nostrud today.'
    }
  ];
}
