import { Form } from "react-router-dom";
import NavSection from "../components/Nav";
import { useRef, useState } from "react";
import axios from "axios";

export default function AddUser() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [file, setFile] = useState(null)
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
        console.log(file.name);
        setFile(file)
    }

    const addUserData = () => {
        console.log(`name: ${name}, email: ${email}, image: ${file.name}`)
        const formData = new FormData()
        formData.append("name", name);
        formData.append("email", email);
        formData.append("image", file);

        const url = "http://localhost:3000/create_user";

        axios.post(url, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }).then((response) => {
            console.log(response);
        }).catch((error) => {
            console.log(error)
        })
    }

    const handleAddUser = () => {
        // add user data
        addUserData()
        // reset form
        setFile(null)
        setName("")
        setEmail("")
    }

    return (
        <section className="flex flex-col h-[100vh]">
            <NavSection title={"Add User"} showAddButton={false} />
            <div className="bg-[#fafcff] grow flex items-center justify-center px-5">
                <Form className="w-[800px] px-[30px] py-[50px] border rounded-md bg-white relative before:absolute before:w-full md:before:w-[34.7%] before:h-full before:bg-blue-400 before:top-0 before:left-0 before:rounded-s-md flex flex-col gap-[20px]">
                    <div className="grid grid-cols-1 md:grid-cols-3 relative">
                        <div className="col-span-1 flex items-center justify-start md:px-[20px] py-[5px] bg-blue-400 md:bg-white rounded-md me-0 md:me-[30px]">
                            <h3 className="text-white md:text-blue-400 font-[500]">Full Name</h3>
                        </div>
                        <div className="col-span-2 ms-0 md:ms-[30px]">
                            <input type="text" placeholder="Enter your name" className="border px-[10px] py-[10px] rounded-md w-full" value={name} onChange={(e) => setName(e.target.value)} />
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 relative">
                        <div className="col-span-1 flex items-center justify-start md:px-[20px] py-[5px] bg-blue-400 md:bg-white rounded-md me-0 md:me-[30px]">
                            <h3 className="text-white md:text-blue-400 font-[500]">Email</h3>
                        </div>
                        <div className="col-span-2 ms-0 md:ms-[30px]">
                            <input type="email" placeholder="Enter your email" className="border px-[10px] py-[10px] rounded-md w-full" value={email} onChange={(e) => setEmail(e.target.value)} />
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 relative">
                        <div className="col-span-1 flex items-center justify-start md:px-[20px] py-[5px] bg-blue-400 md:bg-white rounded-md me-0 md:me-[30px]">
                            <h3 className="text-white md:text-blue-400 font-[500]">Image</h3>
                        </div>
                        <div className="col-span-2 ms-0 md:ms-[30px]">
                            <div className="border rounded-md w-full flex flex-col sm:flex-row bg-white" >
                                <h1 className="grow py-[10px] px-[10px] text-gray-400 text-[1rem]">Upload your image</h1>
                                <input type="file" hidden onChange={handleFileUpload} ref={inputRef} />
                                <button onClick={handleClick} className="border border-blue-400 text-blue-400 w-[200px] my-[3px] rounded-md uppercase font-[600] text-[0.9rem] transition-all duration-300 hover:text-white hover:bg-blue-400 py-[10px] sm:py-0 mx-auto sm:mx-1">Upload</button>
                            </div>
                        </div>
                    </div>
                    <div className="mt-[3rem] relative flex w-full justify-center md:justify-end">
                        <button onClick={handleAddUser} className="bg-white md:bg-blue-400 px-[10px] py-[10px] w-[200px] text-blue-400 md:text-white rounded-md font-bold text-center uppercase text-[0.9rem] transition-all duration-300 md:hover:bg-blue-500 self-end">Add User</button>
                    </div>
                </Form>
            </div>
        </section>
    )
}
