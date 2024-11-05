/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getProducts } from "../redux/slice/ProductSlice"

export default function ProductsSection() {
    let dispatch = useDispatch()
    const { loading, products, error } = useSelector((state) => state.products['products'])

    useEffect(() => {
        dispatch(getProducts())
    }, [])
    return (
        <section className="pt-[calc(10vh+4rem)] pb-[4rem] bg-green-50">
            <div className="max-w-[1200px] mx-auto px-5 xl:px-0">
                <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-[20px]">
                    {
                        products ? products.map((product, index) =>
                            <a href={`/product_details/${product['_id']}`} key={index} className="bg-white rounded-md px-[20px] pt-[20px] pb-[10px] border">
                                <div className="h-[250px] w-full bg-gray-300 rounded-md">
                                    <img src={product['image']} alt="" className="h-full w-full bg-contain" />
                                </div>
                                <div className="py-[15px] flex flex-row items-end justify-between">
                                    <div className="space-y-1">
                                        <h2 className="font-[500] text-[1.1rem]">{product['name']}</h2>
                                        <h3 className="text-[0.9rem]">{product['brand']}</h3>
                                    </div>
                                    <p className="font-[500] text-[1.2rem]">${product['price']}</p>
                                </div>
                            </a>
                        ) : null
                    }
                </div>

            </div>
        </section>
    )
}
