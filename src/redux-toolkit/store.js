
import { configureStore } from "@reduxjs/toolkit"
import cartsReducer from './cartSlice';
import productReducer from './productSlice'
import filterSlice from "./filterSlice";
import selectCartSlice from "./selectCartSlice";

const store = configureStore({
    reducer: {
        cart: cartsReducer,
        product: productReducer,
        filter: filterSlice,
        selectCart: selectCartSlice
    }
})



export default store


