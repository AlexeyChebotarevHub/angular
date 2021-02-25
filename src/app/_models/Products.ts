
export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
}

export interface Products {
  count: number;
  products: Product[];
}
