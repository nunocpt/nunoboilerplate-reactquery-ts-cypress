export interface IProductCard{
  id: string;
  title: string;
  image: string; 
  description: string;
  price: string;
  quantity?: string;
}

export interface ProductCardProps {
  productCardData: IProductCard;
  addProductToCart: (product: IProductCard) => void;
}
