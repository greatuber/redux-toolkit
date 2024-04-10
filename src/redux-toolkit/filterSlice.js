import { createSlice } from "@reduxjs/toolkit";

export const filterSlice = createSlice({
    name:"filterData",
    initialState: {
        filterData : {},
        isSelect : false,
        isProduct: true,
    },
    reducers: {

        filterItem : (state, action) => {
            state.filterData = action.payload
            state.isSelect = true
            // console.log(state.isSelect);
        },
        products : (state, action) => {
            state.isProduct = action.payload
            // console.log("product", state.isProduct);
        }
       
    }
})

export const {filterItem, isSelect,products} = filterSlice.actions

export default filterSlice.reducer

