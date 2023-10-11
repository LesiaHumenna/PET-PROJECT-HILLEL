import { createSlice } from "@reduxjs/toolkit";
import { auth } from "/src/API/firebase";


export const userSlice = createSlice({
    name: 'user',
    initialState: {
        isLoggedIn: false,
        name: '',
        email: '',
        userId: '',
        orders: [],
        cart: ''
    },
    reducers: {
        setActiveUser(state, action) {
            state.isLoggedIn = true;
            state.name = action.payload.name;
            state.email = action.payload.email;
            state.userId = action.payload.userId;
            state.orders = action.payload.orders;
            state.cart = action.payload.cart;
        },
        logout(state) {
            state.isLoggedIn = false;
            state.name = '';
            state.email = '';
            state.userId = '';
            state.orders = '';
            state.cart = '';
        }
    }
});