import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"

const initialState = {
    loading: false,
    product: {},
    error: ''
}

export const getProductDetails = createAsyncThunk('product/getProductDetails', async (productId) => {
    return axios.get(`http://localhost:3000/get_product/${productId}`).then((res) => res.data)
})

const productDetailsSlice = createSlice({
    name: 'product',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(getProductDetails.pending, (state) => {
            state.loading = true
        })
        builder.addCase(getProductDetails.fulfilled, (state, action) => {
            state.loading = false
            state.product = action.payload
        })
        builder.addCase(getProductDetails.rejected, (state, action) => {
            state.loading = false
            state.error = action.error.message
        })
    }
})

export default productDetailsSlice.reducer