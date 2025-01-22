import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IBlog } from '../../../types/blog-type';
import { BlogItemComponent } from '../blog-item/blog-item.component';
import { BlogSidebarComponent } from '../blog-sidebar/blog-sidebar.component';
import { PaginationComponent } from '../../pagination/pagination.component';
import { PaginationService } from '../../../../service/pagination.service';
import { UtilsService } from '../../../../service/utils.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-blog-area-two',
  imports: [
    CommonModule,
    BlogItemComponent,
    BlogSidebarComponent,
    PaginationComponent
  ],
  templateUrl: './blog-area-two.component.html',
  styleUrl: './blog-area-two.component.scss'
})
export class BlogAreaTwoComponent {

  public blogs: IBlog[] = [];
  public pageSize: number = 3;
  public paginate: any = {};
  public pageNo: number = 1;

  constructor(
    public paginationService: PaginationService,
    public utilsService: UtilsService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      this.pageNo = params['page'] ? params['page'] : this.pageNo;
      this.utilsService.blogs.subscribe((response) => {
        this.blogs = response;
        this.paginate = this.paginationService.getPager(this.blogs.length, Number(+this.pageNo), this.pageSize);
        this.blogs = this.blogs.slice(this.paginate.startIndex, this.paginate.endIndex + 1);
      });
    });
  }
  

  setPage(page: number) {
    this.router
      .navigate([], {
        relativeTo: this.route,
        queryParams: { page: page },
        queryParamsHandling: 'merge',
        skipLocationChange: false,
      })
      .finally(() => {
        window.scrollTo(0, 0);
      });
  }
}
