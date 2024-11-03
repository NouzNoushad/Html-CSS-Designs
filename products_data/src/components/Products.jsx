import axios from "axios"
import { useEffect, useState } from "react"

export default function ProductsSection() {
    const [products, setProducts] = useState([])

    useEffect(() => {
        const url = "http://localhost:3000/get_products"
        axios.get(url).then((response) => {
            console.log(response.data)
            setProducts(response.data["products"])
        }).catch((error) => {
            console.log(error)
        })
    }, [])
    return (
        <section className="pt-[calc(10vh+4rem)] pb-[4rem] bg-green-50">
            <div className="max-w-[1200px] mx-auto px-5 xl:px-0">
                <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-[20px]">
                    {
                        products.map((product, index) =>
                            <a href={`/product_details/${product['_id']}`} key={index} className="bg-white rounded-md px-[20px] pt-[20px] pb-[10px] border">
                                <div className="h-[250px] w-full bg-gray-300 rounded-md">
                                    <img src={product['image']} alt="" className="h-full w-full bg-contain" />
                                </div>
                                <div className="py-[15px] flex flex-row items-end justify-between">
                                    <div className="space-y-1">
                                        <h2 className="font-[500] text-[1.1rem]">{product['name']}</h2>
                                        <h3 className="text-[0.9rem]">{product['brand']}</h3>
                                    </div>
                                    <p className="font-[500] text-[1.2rem]">$500</p>
                                </div>
                            </a>
                        )
                    }
                </div>

            </div>
        </section>
    )
}
