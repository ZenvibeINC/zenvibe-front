export interface Product {
    _id: string;
    name: string;
    price: number;
    // otros campos que tiene el producto
  }
  
  export interface User {
    name: string;
    email: string;
    phone: number;
    password: string;
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