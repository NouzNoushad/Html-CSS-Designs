import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"

const initialState = {
    loading: false,
    result: {},
    error: ""
}

export const createNewProduct = createAsyncThunk('createProduct/createNewProduct', async (product) => {
    // console.log(`name: ${product.name}, brand: ${product.brand}, price: ${product.price}, description: ${product.description} image: ${product.file.name}`)
    const formData = new FormData()
    formData.append("name", product.name);
    formData.append("brand", product.brand);
    formData.append("price", product.price);
    formData.append("description", product.description);
    formData.append("image", product.file);

    const url = "http://localhost:3000/create_products";

    return await axios.post(url, formData, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    }).then((response) => {
        console.log(response);
        return response.data
    }).catch((error) => {
        console.log(error)
    })
})

const createProductSlice = createSlice({
    name: 'createProduct',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(createNewProduct.pending, (state) => {
            state.loading = true
        })
        builder.addCase(createNewProduct.fulfilled, (state, action) => {
            state.loading = false
            state.result = action.payload
        })
        builder.addCase(createNewProduct.rejected, (state, action) => {
            state.loading = false
            state.error = action.error.message
        })
    }
})

export default createProductSlice.reducer