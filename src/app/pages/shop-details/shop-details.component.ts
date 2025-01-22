import { Component } from '@angular/core';
import { of, switchMap } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from '../../shared/types/product-type';
import { ProductService } from '../../service/product.service';
import { HeaderOneComponent } from '../../shared/layout/header/header-one/header-one.component';
import { BreadcrumbThreeComponent } from '../../shared/components/breadcrumb/breadcrumb-three/breadcrumb-three.component';
import { FooterOneComponent } from '../../shared/layout/footer/footer-one/footer-one.component';
import { CommonModule } from '@angular/common';
import { ShopDetailsImagesComponent } from '../../shared/components/shop-details/shop-details-images/shop-details-images.component';
import { RelatedProductsComponent } from '../../shared/components/shop-details/related-products/related-products.component';
import { CartService } from '../../service/cart.service';


@Component({
  selector: 'app-shop-details',
  imports: [
    CommonModule,
    HeaderOneComponent,
    BreadcrumbThreeComponent,
    ShopDetailsImagesComponent,
    FooterOneComponent,
    RelatedProductsComponent,
],
  templateUrl: './shop-details.component.html',
  styleUrl: './shop-details.component.scss'
})
export class ShopDetailsComponent {

  public product: IProduct | null | undefined;
  public productImages: string[] = [];
  public models: string[] = ['Gat', 'dat4', 'rt30'];
  public selectedModel: string = this.models[0];

  constructor(
    private route: ActivatedRoute,
    public productService: ProductService,
    public cartService: CartService,
    private router: Router
  ) { }


  setActiveModel(model: string): void {
    this.selectedModel = model;
  }

  ngOnInit() {

    this.route.paramMap.pipe(
      switchMap(params => {
        const productId = params.get('id');
        if (productId) {
          return this.productService.getProductById(productId);
        }
        return of<IProduct | null>(null); // Emit null if there's no blogId
      })
    ).subscribe((product: IProduct | null | undefined) => {
      if (!product) {
        // product not found, navigate to 404 page
        this.router.navigate(['/not-found']);
      } else {
        this.product = product;
        this.productImages = [this.product.img, ...(this.product.gallery || [])];
      }
    });
  }
}
