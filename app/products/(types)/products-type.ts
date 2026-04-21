export interface ProductType {
  id: string;
  name: string;
  price: number;
  oldPrice: number;
  description: string;
  afterSalesService: string;
  mainPoster: string;
  othersPoster: string[];
  promo: boolean;
}
