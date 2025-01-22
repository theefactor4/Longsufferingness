import { ActivatedRoute, Params, Router, RouterModule } from '@angular/router';
import {Component,ElementRef, ViewChild, NgZone} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewportScroller } from '@angular/common';
import product_data from '../../../data/product-data';
import { ProductService } from '../../../../service/product.service';
import * as noUiSlider from 'nouislider';
import { maxPrice } from '../../../utils';


@Component({
  selector: 'app-shop-sidebar',
  imports: [
    // NgxSliderModule,
    CommonModule,
    RouterModule,
  ],
  templateUrl: './shop-sidebar.component.html',
  styleUrl: './shop-sidebar.component.scss'
})
export class ShopSidebarComponent {

  related__products = [...product_data].slice(0,3);
  unique_categories = [...new Set(product_data.map(item => item.category))];
  
  getProductCount(category: string): number {
    return product_data.filter((product) => product.category === category).length;
  }
  
  activeQuery: string = '';
  minPrice: number = 0;
  maxPrice: number = maxPrice();
  searchText: string = '';
  
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private viewScroller: ViewportScroller,
    public productService: ProductService,
    private ngZone: NgZone
  ) {
    this.maxPrice = this.productService.maxPrice;
    this.route.queryParams.subscribe((queryParams) => {
      this.activeQuery = queryParams['category'];
    });
  }

  // Category Filter route
  handleCategoryRoute(value: string): void {
    const newCategory = value.toLowerCase();

    // Define the query parameters as an object
    const queryParams: Params = {
      category: newCategory,
    };

    this.router
      .navigate([], {
        relativeTo: this.route,
        queryParams, // Pass the queryParams object here
        queryParamsHandling: 'merge',
        skipLocationChange: false,
      })
      .finally(() => {
        this.viewScroller.setOffset([120, 120]);
      });
  }


  // handle price filtering
  handlePriceRoute(): void {
    const [minPrice, maxPrice] = this.priceValue;

    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { minPrice, maxPrice },
      queryParamsHandling: 'merge', // Merge with existing query params
      skipLocationChange: false, // Reflect changes in the browser URL
    });
  }


  ngOnInit(): void {
    // Parse query parameters and set initial priceValue
    this.route.queryParams.subscribe((params) => {
      this.minPrice = parseFloat(params['minPrice']) || 0;
      this.maxPrice = parseFloat(params['maxPrice']) || this.maxPrice;
      this.priceValue = [this.minPrice, this.maxPrice];
    });
  }

  priceValue: number[] = [0, this.maxPrice]; 

  @ViewChild('priceSlider', { static: false }) priceSlider!: ElementRef;

  ngAfterViewInit(): void {
    noUiSlider.create(this.priceSlider.nativeElement, {
      start: [0, this.maxPrice],
      connect: true,
      range: {
        min: 0,
        max: this.maxPrice,
      },
    });

    this.priceSlider.nativeElement.noUiSlider.on('change', (values: string[]) => {
      this.ngZone.run(() => {
        this.priceValue = values.map((v) => parseFloat(v));
        this.handlePriceRoute();
      });
    });
  }



   // Handle set search query
   setSearchQuery(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    this.searchText = inputElement.value.trim(); 
  }

  // Handle button click
  setSearchQueryFromButton(): void {
    if (this.searchText.trim()) {
      this.updateQueryParams();
    }
  }

  // Update query parameters
  private updateQueryParams(): void {
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { searchText: this.searchText },
      queryParamsHandling: 'merge', // Merge with existing query params
    });
  }
}
