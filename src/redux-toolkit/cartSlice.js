
// // 
import { createSlice } from "@reduxjs/toolkit"



export const cartSlice = createSlice({

    name: "cart",

    initialState: [],

    reducers: {

        addProducts(state, action) {
        //  return state.push(action.payload)
            return [...state, {...action.payload.cart, quentity: action.payload.qty, isSelected:action.payload.isSelectedProduct}]
        },

        removeProducts(state, action) {
            return state.filter((item, index) =>  index !== action.payload )
        },

        removeUpdateProduct(state,action){
            return state.filter((item) =>  item.id !== action.payload )
            
        }

        // quentityItem(state, action){
        //     return {
        //         ...state, cart: [state, {...action.payload, qty: 1}]
        //     }
        // }
    }

})


export const { addProducts, removeProducts,removeUpdateProduct } = cartSlice.actions
export default cartSlice.reducer