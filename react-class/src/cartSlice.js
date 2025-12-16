import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        item: []
    },
    reducers: {
        cartItem: (state, action) => {
            const existing = state.data.find(item => item.id === action.payload.id);
            if(existing){
                existing.quantity+=1;
            }else{
                state.item.push({...action.payload,})
            }
        }
    }
})


// https://chatgpt.com/gg/v/69414cc6d52881988b2e8ca2d7892ef5?token=7gpf5VIvf8itmF3k-V4GCA