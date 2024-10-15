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