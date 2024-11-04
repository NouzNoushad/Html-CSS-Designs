import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"

const initialState = {
    loading: false,
    result: {},
    error: ""
}

export const deleteProductDetails = createAsyncThunk('deleteProduct/deleteProductDetails', async (productId) => {
    return axios.delete(`http://localhost:3000/delete_product/${productId}`).then((res) => {
        return res.data
    })
})

const productDeleteSlice = createSlice({
    name: 'deleteProduct',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(deleteProductDetails.pending, (state) => {
            state.loading = true
        })
        builder.addCase(deleteProductDetails.fulfilled, (state, action) => {
            state.loading = false
            state.result = action.payload
        })
        builder.addCase(deleteProductDetails.rejected, (state, action) => {
            state.loading = false
            state.error = action.error.message
        })
    }
})

export default productDeleteSlice.reducer