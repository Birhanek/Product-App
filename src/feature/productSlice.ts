import { createSlice } from "@reduxjs/toolkit";
import { ProductState } from "../DataInterface/productInterface";

const initialState:ProductState = {
    product:[],
    isLoading:false,
    isError:false,
    message:''
}

const productSlice = createSlice({
    name:'Mobile store',
    initialState,
    reducers:{}
})


export default productSlice.reducer