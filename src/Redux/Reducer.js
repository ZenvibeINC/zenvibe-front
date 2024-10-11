import {
    GET_ALL_PRODUCTS,
    GET_ALL_CATEGORIES,
    CREATE_PRODUCT,
    GET_ALL_USERS,
    SEARCH_PRODUCT,
    DELETE_PRODUCT,
    UPDATE_PRODUCT,
    LOGIN,
    LOGOUT,
    REGISTER,
    ADD_TO_CART,
    REMOVE_FROM_CART,
    ADD_FAVORITE,
    REMOVE_FAVORITE
} from "./Actions";

const initialState = {
    products: [],
    categories: [],
    users: [],
    cart: [],
    favorites: [],
    search: []
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_PRODUCTS:
            return {
                ...state,
                products: action.payload
            };
        case GET_ALL_CATEGORIES:
            return {
                ...state,
                categories: action.payload
            };
        case CREATE_PRODUCT:
            return {
                ...state,
                products: [...state.products, action.payload]
            };
        case GET_ALL_USERS:
            return {
                ...state,
                users: action.payload
            };
        case SEARCH_PRODUCT:
            return {
                ...state,
                search: action.payload
            };
        case DELETE_PRODUCT:
            return {
                ...state,
                products: state.products.filter(
                    (product) => product._id !== action.payload
                )
            };
        case UPDATE_PRODUCT:
            return {
                ...state,
                products: state.products.map((product) =>
                    product._id === action.payload._id ? action.payload : product
                )
            };
        case LOGIN:
            return {
                ...state,
                user: action.payload
            };
        case LOGOUT:
            return {
                ...state,
                user: null
            };
        case REGISTER:
            return {
                ...state,
                user: action.payload
            };
        case ADD_TO_CART:
            return {
                ...state,
                cart: [...state.cart, action.payload]
            };
        case REMOVE_FROM_CART:
            return {
                ...state,
                cart: state.cart.filter((product) => product._id !== action.payload)
            };
        case ADD_FAVORITE:
            return {
                ...state,
                favorites: [...state.favorites, action.payload]
            };
        case REMOVE_FAVORITE:
            return {
                ...state,
                favorites: state.favorites.filter(
                    (product) => product._id !== action.payload
                )
            }; 
        default:
            return state;
    }
};

export default rootReducer;