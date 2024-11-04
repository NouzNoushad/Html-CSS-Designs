import { configureStore } from '@reduxjs/toolkit'
import productsSlice from "./ProductSlice"
import productDetailsSlice from "./ProductDetailsSlice"

export const store = configureStore({
    reducer: {
        products: productsSlice,
        product: productDetailsSlice,
    },
})