import { IProductCard } from "components/general/ProductCard/interfaces";

export interface IProductsInfiniteQuery {
  data: IProductCard[];
  nextId: number | undefined;
}
