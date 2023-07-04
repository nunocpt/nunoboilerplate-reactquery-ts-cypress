export interface IProductCard{
    id: string;
    title: string;
    image: string; 
    description: string;
    price: string;
    quantity?: string;
}
  
export interface ProductCardInCartProps {
    productCardData: IProductCard;
    changeQuantity: (productId: string, quantity: string) => void;
    removeProduct: (productId: string) => void;
}
  