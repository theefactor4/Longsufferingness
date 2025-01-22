import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import blog_data from '../../../data/blog-data';

@Component({
  selector: 'app-blog-sidebar',
  imports: [CommonModule,RouterModule],
  templateUrl: './blog-sidebar.component.html',
  styleUrl: './blog-sidebar.component.scss'
})
export class BlogSidebarComponent {

  instagram_images = [
    {link:'https://www.instagram.com/',img:'/assets/img/instagram/insta01.jpg'},
    {link:'https://www.instagram.com/',img:'/assets/img/instagram/insta02.jpg'},
    {link:'https://www.instagram.com/',img:'/assets/img/instagram/insta03.jpg'},
    {link:'https://www.instagram.com/',img:'/assets/img/instagram/insta04.jpg'},
    {link:'https://www.instagram.com/',img:'/assets/img/instagram/insta05.jpg'},
    {link:'https://www.instagram.com/',img:'/assets/img/instagram/insta06.jpg'},
  ]

  recent_posts = blog_data.slice(0,3);
}
