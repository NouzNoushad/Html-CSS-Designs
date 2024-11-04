/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import NavSection from "../components/Nav";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProductDetails } from "../redux/ProductDetailsSlice";

export default function ProductDetails() {
    const { productId } = useParams()
    const navigate = useNavigate()

    let dispatch = useDispatch()

    const { loading, product, error } = useSelector((state) => state.product['product'])

    useEffect(() => {
        dispatch(getProductDetails(productId))
    }, [productId])

    const handleProductDelete = () => {
        const url = `http://localhost:3000/delete_product/${productId}`;
        axios.delete(url).then((response) => {
            console.log(response.data)
            navigate('/')
        }).catch((error) => console.log(error))
    }
    return (
        <div>
            {console.log(product)}
            <NavSection showAddButton={false} />
            {
                product != null ? <div className="pb-[4rem] pt-[calc(10vh+4rem)] max-w-[600px] mx-auto px-5 xl:px-0">
                    <div className="border rounded-md px-[20px] py-[30px] bg-white">
                        <div className="h-[300px] w-full bg-gray-100 rounded-md flex items-center justify-center">
                            <img src={product['image']} alt="" className="h-full bg-contain" />
                        </div>
                        <div className="pt-[10px]">
                            <div className="flex flex-row items-end justify-between">
                                <div className="">
                                    <h2 className="text-[1.2rem] font-[500]">{product['name']}</h2>
                                    <h3 className="font-[500]">{product['brand']}</h3>
                                </div>
                                <p className="text-[1.3rem] font-[500]">${product['price']}</p>
                            </div>
                            <p className="py-3">{product['description']}</p>
                            <div className="flex flex-row items-center md:justify-end justify-center gap-[5px] pt-5">
                                <a href={`/create_products/${product['_id']}`} className="rounded-md px-[40px] py-[5px] border-2 text-blue-400 border-blue-400 transition-all duration-300 hover:bg-blue-400 hover:border-blue-400 hover:text-white">Edit</a>
                                <button onClick={handleProductDelete} className="rounded-md px-[40px] py-[5px] border-2 text-red-400 border-red-400 transition-all duration-300 hover:bg-red-400 hover:border-red-400 hover:text-white">Delete</button>
                            </div>
                        </div>
                    </div>
                </div> : <div className=""></div>
            }
        </div>
    )
}
