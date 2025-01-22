
import { Injectable } from '@angular/core';
import { of,Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import product_data, { all_products } from '../shared/data/product-data';
import { IProduct } from '../shared/types/product-type';


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  public filter_offcanvas: boolean = false;

  // Get Products
  public get products(): Observable<IProduct[]> {
    return of(product_data);
  }
  public get allProducts(): Observable<IProduct[]> {
    return of(all_products);
  }

  constructor() { }

  // Get Products By id
  public getProductById(id: string): Observable<IProduct | undefined> {
    return this.allProducts.pipe(map(items => {
      const product = items.find(p => p.id === Number(id));
      return product;
    }));
  }
  // Get max price
  public get maxPrice(): number {
    const max_price = product_data.reduce((max, product) => {
      return product.price > max ? product.price : max;
    }, 0);
    return max_price
  }

    // Get Product Filter
    public filterProducts(filter: any= []): Observable<IProduct[]> {
      return this.products.pipe(map(product =>
        product.filter((item: IProduct) => {
          if (!filter.length) return true
          return item;
        })
      ));
    }


      // Sorting Filter
  public sortProducts(products: IProduct[], payload: string): any {

    if(payload === 'asc') {
      return products.sort((a, b) => {
        if (a.id < b.id) {
          return -1;
        } else if (a.id > b.id) {
          return 1;
        }
        return 0;
      })
    } else if (payload === 'desc') {
      return products.slice().sort((a, b) => b.id - a.id);
    } else if (payload === 'latest') {
      return products.slice().reverse();
    } else if (payload === 'low') {
      return products.sort((a, b) => {
        if (a.price < b.price) {
          return -1;
        } else if (a.price > b.price) {
          return 1;
        }
        return 0;
      })
    } else if (payload === 'high') {
      return products.sort((a, b) => {
        if (a.price > b.price) {
          return -1;
        } else if (a.price < b.price) {
          return 1;
        }
        return 0;
      })
    }
  }

}
