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
interface GetAllUsersAction {
  type: ActionTypes.GET_ALL_USERS;
  payload: User[];
}
interface LoginAction {
  type: ActionTypes.LOGIN;
  payload: User;
}
interface LogoutAction {
  type: ActionTypes.LOGOUT;
}
interface RegisterAction {
  type: ActionTypes.REGISTER;
  payload: User;
}
interface AddcartAction {
  type: ActionTypes.ADD_TO_CART;
  payload: Product;
}
interface RemovecartAction {
  type: ActionTypes.REMOVE_FROM_CART;
  payload: Product;
}
interface AddfavoriteAction {
  type: ActionTypes.ADD_FAVORITE;
  payload: Product;
}
interface RemovefavoriteAction {
  type: ActionTypes.REMOVE_FAVORITE;
  payload: Product;
}

// Repite para todas las demás acciones...

export type Action =
  | GetAllProductsAction
  | CreateProductAction
  | DeleteProductAction
  | UpdateProductAction
  | GetAllUsersAction
  | LoginAction
  | LogoutAction
  | RegisterAction
  | AddcartAction
  | RemovecartAction
  | AddfavoriteAction
  | RemovefavoriteAction