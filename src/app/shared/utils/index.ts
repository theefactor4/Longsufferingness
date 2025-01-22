import product_data from '../data/product-data';

export function maxPrice(): number {
  const max_price = product_data.reduce((max, product) => {
    return product.price > max ? product.price : max;
  }, 0);
  return max_price;
}
