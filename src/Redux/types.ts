export interface Product {
    _id: string;
    name: string;
    price: number;
    // otros campos que tiene el producto
  }
  
  export interface User {
    id: string;
    name: string;
    // otros campos del usuario
  }
  
  export interface AppState {
    products: Product[];
    categories: string[];
    users: User[];
    cart: Product[];
    favorites: Product[];
    search: Product[];
    user?: User | null;
  }