import { createSlice } from "@reduxjs/toolkit";

const Cart = createSlice({
    name: 'cart',
    initialState: {
        item: []
    },

    reducers: {
        addItem: (state, action) => {
            const existing = state.item.find(i => i.id === action.payload.id);
            if (existing) {
                existing.quantity += 1;
            } else {
                state.item.push({ ...action.payload, quantity: 1 });
            }
        },

        removeItem: (state, action) => {
            state.item = state.item.filter(i => i.id !== action.payload);
        },

        increaseQty: (state, action) => {
            const item = state.item.find(i => i.id === action.payload);
            if (item) {
                item.quantity += 1;
            }
        },

        decreaseQty: (state, action) => {
            const item = state.item.find(i => i.id === action.payload);
            if (item && item.quantity > 1) {
                item.quantity -= 1;
            } else {
                state.item = state.item.filter(i => i.id !== action.payload);
            }
        },

        clearCart: (state) => {
            state.item = [];
        }
    }
});


export const { addItem, removeItem, increaseQty, decreaseQty, clearCart } = Cart.actions;


export default Cart.reducer;
