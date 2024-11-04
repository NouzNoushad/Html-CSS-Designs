import { configureStore } from '@reduxjs/toolkit'
import productsSlice from "./ProductSlice"
import productDetailsSlice from "./ProductDetailsSlice"
import productDeleteSlice from "./ProductDeleteSlice"

export const store = configureStore({
    reducer: {
        products: productsSlice,
        product: productDetailsSlice,
        deleteProduct: productDeleteSlice,
    },
})