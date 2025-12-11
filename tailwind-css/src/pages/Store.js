import { configureStore, createReducer } from "@reduxjs/toolkit";
import Cart from "./Cart";

const store = configureStore({
    reducer: {
        Cart: createReducer
    },
});

export default store;