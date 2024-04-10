import { createSlice } from "@reduxjs/toolkit";



export const selectCartSlice = createSlice({
    name:"selectCart",
    initialState:{

        cartItem : [],
        // updateItem : [],
        isCart : true,
        // isSelectedItem: false,
        quentity: 1

    },

    reducers:{
        selectedCart : (state, action) => {
            state.cartItem = action.payload   
            
        },

        updateProduct : (state, action) => {
            state.cartItem = action.payload
        }, 

        isCart : (state, action) => {
            state.isCart = action.payload
        },

        quentity : (state, action) => {
            state.quentity = action.payload
        },
        // isSelectedItem:(state, action) => {
        //     state.isSelectedItem = action.payload
        // }

    }
})

export const {selectedCart, updateProduct,isCart, quentity, cartItem } = selectCartSlice.actions

export default selectCartSlice.reducer

