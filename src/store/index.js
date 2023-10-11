import { configureStore, createSlice } from "@reduxjs/toolkit";
//import { toast } from "react-toastify";
import { userSlice } from "./userSlice";

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
        user: userSlice.reducer
    }
});

export const cartActions = cartSlice.actions;
export const userActions = userSlice.actions;

export default store;