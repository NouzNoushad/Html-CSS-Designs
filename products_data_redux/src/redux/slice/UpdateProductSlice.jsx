import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"

const initialState = {
    loading: false,
    result: {},
    error: ""
}

export const updateProductDetails = createAsyncThunk('updateProduct/updateProductDetails', async (product) => {
    const formData = new FormData()
    formData.append("name", product.name);
    formData.append("brand", product.brand);
    formData.append("price", product.price);
    formData.append("description", product.description);
    formData.append("image", product.file);

    const url = `http://localhost:3000/update_product/${product.id}`;

    return await axios.post(url, formData, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    }).then((response) => {
        console.log(response)
        return response.data
    }).catch((error) => {
        console.log(error)
    })
})

const productUpdateSlice = createSlice({
    name: 'updateProduct',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(updateProductDetails.pending, (state) => {
            state.loading = true
        })
        builder.addCase(updateProductDetails.fulfilled, (state, action) => {
            state.loading = false
            state.result = action.payload
        })
        builder.addCase(updateProductDetails.rejected, (state, action) => {
            state.loading = false
            state.error = action.error.message
        })
    }
})

export default productUpdateSlice.reducer