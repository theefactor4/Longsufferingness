import { CommonModule, ViewportScroller } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { ShopSidebarComponent } from '../shop-sidebar/shop-sidebar.component';
import { ProductService } from '../../../../service/product.service';
import { PaginationService } from '../../../../service/pagination.service';
import { IProduct } from '../../../types/product-type';
import { PaginationComponent } from '../../pagination/pagination.component';
import { SvgIconAnimComponent } from '../../svg-icon-anim/svg-icon-anim.component';
import { ShopItemComponent } from '../shop-item/shop-item.component';

@Component({
  selector: 'app-shop-area',
  imports: [
    CommonModule,
    RouterModule,
    ShopSidebarComponent,
    PaginationComponent,
    SvgIconAnimComponent,
    ShopItemComponent,
  ],
  templateUrl: './shop-area.component.html',
  styleUrl: './shop-area.component.scss'
})
export class ShopAreaComponent {

  public products: IProduct[] = [];
  public minPrice: number = 0;
  public maxPrice: number = 0;
  public category: string | null = null;
  public pageNo: number = 1;
  public pageSize: number = 6;
  public paginate: any = {}; // Pagination use only
  public sortBy: string = 'asc'; // Sorting Order
  public searchText: string | null = null; // Sorting Order




  changeSorting(event: Event): void {
    const selectElement = event.target as HTMLSelectElement;
    const selectedValue = selectElement.value;
    this.sortByFilter(selectedValue);
  }

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public productService: ProductService,
    public paginationService: PaginationService,
    private viewScroller: ViewportScroller
  ) {
    // Get Max Price
    this.maxPrice = this.productService.maxPrice;
    // Get Query params..
    this.route.queryParams.subscribe((params) => {
      // console.log('params', params);
      this.minPrice = params['minPrice'] ? params['minPrice'] : this.minPrice;
      this.maxPrice = params['maxPrice'] ? params['maxPrice'] : this.maxPrice;

      this.category = params['category'] ? params['category'] : null;
      this.pageNo = params['page'] ? params['page'] : this.pageNo;
      this.sortBy = params['sortBy'] ? params['sortBy'] : 'asc';
      this.searchText = params['searchText'] ? params['searchText'] : null;

      // Get Filtered Products..
      this.productService.filterProducts().subscribe((response) => {
        // Sorting Filter
        this.products = this.productService.sortProducts(response, this.sortBy);
        // Category Filter
        if (this.category){
          this.products = this.products.filter(
            (p) => p.category.toLowerCase() === this.category?.toLowerCase()
          );
        }
        if (this.searchText) {
          this.products = this.products.filter(
            (p) => p.title.toLowerCase().includes((this.searchText as string).toLowerCase())
          );
        }

        // Price Filter
        this.products = this.products.filter(
          (p) => p.price >= Number(this.minPrice) && p.price <= Number(this.maxPrice)
        );
        // Paginate Products
        this.paginate = this.paginationService.getPager(this.products.length,Number(+this.pageNo),this.pageSize);
        this.products = this.products.slice(this.paginate.startIndex,this.paginate.endIndex + 1);
      });
    });
  }
  // SortBy Filter
  sortByFilter(value:string) {
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { sortBy: value ? value : null},
      queryParamsHandling: 'merge', // preserve the existing query params in the route
      skipLocationChange: false  // do trigger navigation
    }).finally(() => {
      this.viewScroller.setOffset([120, 120]);
    });
  }

  // product Pagination
  setPage(page: number) {
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { page: page },
      queryParamsHandling: 'merge', // preserve the existing query params in the route
      skipLocationChange: false  // do trigger navigation
    }).finally(() => {
      this.viewScroller.setOffset([120, 120]);
      this.viewScroller.scrollToAnchor('products'); // Anchore Link
    });
  }

  handleResetFilter () {
    this.minPrice = 0;
    this.maxPrice = this.productService.maxPrice;
    this.pageNo = 1;
    this.router.navigate(['shop']);
  }
}
