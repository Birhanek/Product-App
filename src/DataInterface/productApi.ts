import {createAsyncThunk} from '@reduxjs/toolkit'
import Product from './productInterface'

const Product_API = 'https://dummyjson.com'

export const getAllProduct =  createAsyncThunk('Mobile store/getAllProduct',async(_,thunkApi)=>{

    const response = await fetch(`${Product_API}/products`)
    const data:Product[] = await response.json()
    return data
})