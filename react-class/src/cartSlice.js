import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        item: []
    },

    reducers: {
        additem: (state, action) => {
            const existing = state.data.find(item => item.id === action.payload.id);
            if (existing) {
                existing.quantity += 1;
            } else {
                state.item.push({ ...action.payload, })
            }
        },
        removeItem: (state, action) => {
            state.item = state.item.filter(item => item.id !== action.payload)

        },

        increaseQty: (state, action) => {
            const item = state.item.find(i => i.id === action.payload)
            if (item) item.quantity += 1;
        },

        decreaseQty: (state, action) => {
            const item = state.item.find(i => id === action.payload)
            if (item && item.quantity > 1) {
                item.quantity -= 1;
            }
            else {
                state.item = state.item.filter(i.id !== action.payload)
            }
        }
        



    }
})


// https://chatgpt.com/gg/v/69414cc6d52881988b2e8ca2d7892ef5?token=7gpf5VIvf8itmF3k-V4GCA