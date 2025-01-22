import { Component } from '@angular/core';
import { HeaderOneComponent } from '../../shared/layout/header/header-one/header-one.component';
import { BreadcrumbThreeComponent } from '../../shared/components/breadcrumb/breadcrumb-three/breadcrumb-three.component';
import { FooterOneComponent } from '../../shared/layout/footer/footer-one/footer-one.component';
import { BlogAreaTwoComponent } from '../../shared/components/blog/blog-area-two/blog-area-two.component';

@Component({
  selector: 'app-blog',
  imports: [
    HeaderOneComponent,
    BreadcrumbThreeComponent,
    BlogAreaTwoComponent,
    FooterOneComponent,
  ],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.scss'
})
export class BlogComponent {

}
