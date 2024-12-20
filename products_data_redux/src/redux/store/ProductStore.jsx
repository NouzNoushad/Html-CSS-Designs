import { configureStore } from '@reduxjs/toolkit'
import productsSlice from "../slice/ProductSlice"
import productDetailsSlice from "../slice/ProductDetailsSlice"
import productDeleteSlice from "../slice/ProductDeleteSlice"
import createProductSlice from "../slice/AddProductSlice"
import productUpdateSlice from "../slice/UpdateProductSlice"

export const store = configureStore({
    reducer: {
        products: productsSlice,
        product: productDetailsSlice,
        deleteProduct: productDeleteSlice,
        createProduct: createProductSlice,
        updateProduct: productUpdateSlice,
    },
})