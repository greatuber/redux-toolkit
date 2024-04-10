
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


// // Now in this Object no-one can change the value of "STATUSE" in initialState.
export const STATUSE = Object.freeze({
    IDLE: 'idle',
    LOADING: 'loading',
    ERROR: 'error'
})


const productSlice = createSlice({

    name: 'product',

    initialState: {
        data: [],
        status: STATUSE.IDLE
    },

    reducers: {

        // setProducts(state, action) {
        //     state.data = action.payload
        // },

        // setStatus(state, action) {
        //     state.status = action.payload
        // }

      


    },

    extraReducers: (builder)=>{
         builder
         .addCase(fetchProducts.pending, (state, action)=>{
             state.status = STATUSE.LOADING
         })
         .addCase(fetchProducts.fulfilled, (state,action)=>{
             state.data = action.payload
             state.status = STATUSE.IDLE
         })
         .addCase(fetchProducts.rejected, (state, action)=>{
             state.status = STATUSE.ERROR
         })
            
         
    }
})

export const { setProducts, setStatus   } = productSlice.actions
export default productSlice.reducer


// // Thunk is a kind of middleware.

// // // createAsyncThunk is a new method of Thunk in Redux-Toolkit.
export const fetchProducts = createAsyncThunk( 'products/fetch', async ()=>{

    const resp = await fetch('https://fakestoreapi.com/products')
    const result = await resp.json()
    return result

})


// // // Thunk in a function, Which returns the "async function". (This is Old method)
// export function fetchProducts() {

//     return async function fetchProductsThunk(dispatch, getState) {

//         dispatch(setStatus(STATUSE.LOADING))

//         try {

//             const resp = await fetch('https://fakestoreapi.com/products')
//             const result = await resp.json()
//             dispatch(setProducts(result))
//             dispatch(setStatus(STATUSE.IDLE))

//         } catch (error) {
//             dispatch(setStatus(STATUSE.ERROR))
//         }

//     }

// }