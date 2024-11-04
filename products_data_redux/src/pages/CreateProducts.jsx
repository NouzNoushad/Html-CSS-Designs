import { Form, useNavigate, useParams } from "react-router-dom";
import NavSection from "../components/Nav";
import { useEffect, useRef, useState } from "react";
import axios from "axios";

export default function CreateProducts() {
    const { productId } = useParams()
    const navigation = useNavigate()
    const [name, setName] = useState("")
    const [brand, setBrand] = useState("")
    const [price, setPrice] = useState(0.0)
    const [description, setDescription] = useState("")
    const [file, setFile] = useState(null)
    const [fileName, setFileName] = useState("")
    const [filePath, setFilePath] = useState("")

    const inputRef = useRef(null)

    const handleClick = (e) => {
        e.preventDefault()
        if (!inputRef || !inputRef.current) return
        inputRef.current.click()
    }

    const handleFileUpload = (e) => {
        const files = e.target.files
        if (!files) return
        const file = files[0]
        console.log(file);
        setFile(file)
        setFileName(file.name)
    }

    const addProductData = () => {
        console.log(`name: ${name}, brand: ${brand}, price: ${price}, description: ${description} image: ${file.name}`)
        const formData = new FormData()
        formData.append("name", name);
        formData.append("brand", brand);
        formData.append("price", price);
        formData.append("description", description);
        formData.append("image", file);

        const url = "http://localhost:3000/create_products";

        axios.post(url, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }).then((response) => {
            console.log(response);
            navigation('/')
        }).catch((error) => {
            console.log(error)
        })
    }

    const updateProductData = () => {
        const formData = new FormData()
        formData.append("name", name);
        formData.append("brand", brand);
        formData.append("price", price);
        formData.append("description", description);
        formData.append("image", file);

        const url = `http://localhost:3000/update_product/${productId}`;

        axios.post(url, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }).then((response) => {
            console.log(response);
            navigation('/')
        }).catch((error) => {
            console.log(error)
        })
    }

    const handleAddProducts = () => {
        if (productId !== 'id') {
            updateProductData()
        } else {
            addProductData()
        }

        // reset form
        setFile(null)
        setName("")
        setBrand("")
        setPrice(0.0)
        setDescription("")
    }

    useEffect(() => {
        if (productId !== 'id') {
            const url = `http://localhost:3000/get_product/${productId}`
            axios.get(url).then((response) => {
                console.log(response.data.product['name']);
                const product = response.data.product
                setName(product['name'])
                setBrand(product['brand'])
                setPrice(product['price'])
                setDescription(product['description'])
                setFilePath(product['image'])
                const fileName = product['image'].split('/').pop()
                console.log(fileName)
                setFileName(fileName)
            }).catch((error) => {
                console.log(error)
            })
        }
    }, [productId])

    return (
        <section>
            <NavSection showAddButton={false} />
            <div className="flex items-center justify-center px-5 pt-[calc(10vh+4rem)] pb-[4rem]">
                <Form className="w-[800px] px-[30px] py-[50px] border rounded-md bg-white relative before:absolute before:w-full md:before:w-[34.7%] before:h-full before:bg-green-400 before:top-0 before:left-0 before:rounded-s-md flex flex-col gap-[20px]">
                    <div className="grid grid-cols-1 md:grid-cols-3 relative">
                        <div className="col-span-1 flex items-center justify-start md:px-[20px] py-[5px] bg-green-400 md:bg-white rounded-md me-0 md:me-[30px]">
                            <h3 className="text-white md:text-green-400 font-[500]">Name</h3>
                        </div>
                        <div className="col-span-2 ms-0 md:ms-[30px]">
                            <input type="text" placeholder="Enter product name" className="border px-[10px] py-[10px] rounded-md w-full" value={name} onChange={(e) => setName(e.target.value)} />
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 relative">
                        <div className="col-span-1 flex items-center justify-start md:px-[20px] py-[5px] bg-green-400 md:bg-white rounded-md me-0 md:me-[30px]">
                            <h3 className="text-white md:text-green-400 font-[500]">Brand</h3>
                        </div>
                        <div className="col-span-2 ms-0 md:ms-[30px]">
                            <input type="text" placeholder="Enter product brand" className="border px-[10px] py-[10px] rounded-md w-full" value={brand} onChange={(e) => setBrand(e.target.value)} />
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 relative">
                        <div className="col-span-1 flex items-center justify-start md:px-[20px] py-[5px] bg-green-400 md:bg-white rounded-md me-0 md:me-[30px]">
                            <h3 className="text-white md:text-green-400 font-[500]">Price</h3>
                        </div>
                        <div className="col-span-2 ms-0 md:ms-[30px]">
                            <input type="number" placeholder="Enter product price" className="border px-[10px] py-[10px] rounded-md w-full" value={price} onChange={(e) => setPrice(e.target.value)} />
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 relative">
                        <div className="col-span-1 flex items-center justify-start md:px-[20px] py-[5px] bg-green-400 md:bg-white rounded-md me-0 md:me-[30px]">
                            <h3 className="text-white md:text-green-400 font-[500]">Description</h3>
                        </div>
                        <div className="col-span-2 ms-0 md:ms-[30px]">
                            <textarea type="number" placeholder="Enter product description" className="border px-[10px] py-[10px] rounded-md w-full" value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 relative">
                        <div className="col-span-1 flex items-center justify-start md:px-[20px] py-[5px] bg-green-400 md:bg-white rounded-md me-0 md:me-[30px]">
                            <h3 className="text-white md:text-green-400 font-[500]">Image</h3>
                        </div>
                        <div className="col-span-2 ms-0 md:ms-[30px]">
                            <div className={filePath !== "" ? "h-[250px]" : "hidden"}>
                                <img src={filePath} alt="" className="h-full" />
                            </div>
                            <div className="border rounded-md w-full flex flex-col sm:flex-row bg-white" >
                                <h1 className="grow py-[10px] px-[10px] text-gray-400 text-[1rem]">{fileName !== "" ? fileName : 'Upload product image'}</h1>
                                <input type="file" hidden onChange={handleFileUpload} ref={inputRef} />
                                <button onClick={handleClick} className="border border-green-400 text-green-400 w-[200px] my-[3px] rounded-md uppercase font-[600] text-[0.9rem] transition-all duration-300 hover:text-white hover:bg-green-400 py-[10px] sm:py-0 mx-auto sm:mx-1">Upload</button>
                            </div>
                        </div>
                    </div>
                    <div className="mt-[3rem] relative flex w-full justify-center md:justify-end">
                        <button onClick={handleAddProducts} className="bg-white md:bg-green-400 px-[10px] py-[10px] w-[200px] text-green-400 md:text-white rounded-md font-bold text-center uppercase text-[0.9rem] transition-all duration-300 md:hover:bg-green-500 self-end">{productId !== 'id' ? "Update Product" : "Add Product"}</button>
                    </div>
                </Form>
            </div>
        </section>
    )
}
