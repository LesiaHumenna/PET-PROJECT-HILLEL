import { configureStore, createSlice } from "@reduxjs/toolkit";
//import { toast } from "react-toastify";
import { userSlice } from "./userSlice";


const productsSlice = createSlice({
    name: 'products',
    initialState: {
        items: [],
        filtedProducts: []
    },
    reducers:{
        installValue(state, action){
           state.items = action.payload;
        },
        filtedProd(state, action){
            state.filtedProducts = action.payload;
        }
    }
})
const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [],
        totalQuantity: 0,
        totalAmount: 0,
        isVisible: false
    },
    reducers: {

    }})

const store = configureStore({
    reducer: {
        cart: cartSlice.reducer,
        user: userSlice.reducer,
        products: productsSlice.reducer
    }
});

export const cartActions = cartSlice.actions;
export const userActions = userSlice.actions;
export const productsActions = productsSlice.actions;
export default store;