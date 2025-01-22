

export interface IProduct {
  id: number;
  img: string;
  title: string;
  quantity: number;
  price: number;
  category: string;
  description: string;
  status: string;
  rating?: number;
  gallery?: string[];
  orderQuantity?: number;
}