import { ActionTypes } from "./ActionTypes.ts";
import { Product, User } from "./types.ts";

interface GetAllProductsAction {
  type: ActionTypes.GET_ALL_PRODUCTS;
  payload: Product[];
}

interface CreateProductAction {
  type: ActionTypes.CREATE_PRODUCT;
  payload: Product;
}
interface DeleteProductAction {
  type: ActionTypes.DELETE_PRODUCT;
  payload: string;
}
interface UpdateProductAction {
  type: ActionTypes.UPDATE_PRODUCT;
  payload: Product;
}


// Repite para todas las demás acciones...

export type Action =
  | GetAllProductsAction
  | CreateProductAction
  | DeleteProductAction
  | UpdateProductAction