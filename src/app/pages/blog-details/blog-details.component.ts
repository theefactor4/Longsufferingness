import { Component } from '@angular/core';
import { IBlog } from '../../shared/types/blog-type';
import { ActivatedRoute, Router } from '@angular/router';
import { UtilsService } from '../../service/utils.service';
import { of, switchMap } from 'rxjs';
import { HeaderOneComponent } from '../../shared/layout/header/header-one/header-one.component';
import { BreadcrumbThreeComponent } from '../../shared/components/breadcrumb/breadcrumb-three/breadcrumb-three.component';
import { FooterOneComponent } from '../../shared/layout/footer/footer-one/footer-one.component';
import { BlogDetailsAreaComponent } from '../../shared/components/blog/blog-details-area/blog-details-area.component';

@Component({
  selector: 'app-blog-details',
  imports: [
    HeaderOneComponent,
    BreadcrumbThreeComponent,
    BlogDetailsAreaComponent,
    FooterOneComponent,
  ],
  templateUrl: './blog-details.component.html',
  styleUrl: './blog-details.component.scss'
})
export class BlogDetailsComponent {

  public blog: IBlog | null | undefined;
  public related_blogs:IBlog[] = [];

  constructor(
    private route: ActivatedRoute,
    public utilsService: UtilsService,
    private router: Router
  ) { }

  ngOnInit() {

    this.route.paramMap.pipe(
      switchMap(params => {
        const blogId = params.get('id');
        if (blogId) {
          return this.utilsService.getBlogById(blogId);
        }
        return of<IBlog | null>(null); // Emit null if there's no blogId
      })
    ).subscribe((blog: IBlog | null | undefined) => {
      if (!blog) {
        // blog not found, navigate to 404 page
        this.router.navigate(['/not-found']);
      } else {
        this.blog = blog;
      }
    });
  }
}
