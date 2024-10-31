import { Form } from "react-router-dom";
import NavSection from "../components/Nav";

export default function AddUser() {
    return (
        <section className="flex flex-col h-[100vh]">
            <NavSection title={"Add User"} showAddButton={false} />
            <div className="bg-[#fafcff] grow flex items-center justify-center px-5">
                <Form className="w-[800px] px-[30px] py-[50px] border rounded-md bg-white relative before:absolute before:w-full md:before:w-[34.7%] before:h-full before:bg-blue-400 before:top-0 before:left-0 before:rounded-s-md flex flex-col gap-[20px]">
                    <div className="grid grid-cols-1 md:grid-cols-3 relative">
                        <div className="col-span-1 flex items-center justify-start px-[20px] py-[5px] bg-white rounded-t-md md:rounded-md me-0 md:me-[30px]">
                            <h3 className="text-blue-400 font-[500]">Full Name</h3>
                        </div>
                        <div className="col-span-2 ms-0 md:ms-[30px]">
                            <input type="text" placeholder="Enter your name" className="border px-[10px] py-[10px] rounded-b-md md:rounded-md w-full" />
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 relative">
                        <div className="col-span-1 flex items-center justify-start px-[20px] py-[5px] bg-white rounded-t-md md:rounded-md me-0 md:me-[30px]">
                            <h3 className="text-blue-400 font-[500]">Email</h3>
                        </div>
                        <div className="col-span-2 ms-0 md:ms-[30px]">
                            <input type="email" placeholder="Enter your email" className="border px-[10px] py-[10px] rounded-b-md md:rounded-md w-full" />
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 relative">
                        <div className="col-span-1 flex items-center justify-start px-[20px] py-[5px] bg-white rounded-t-md md:rounded-md me-0 md:me-[30px]">
                            <h3 className="text-blue-400 font-[500]">Image</h3>
                        </div>
                        <div className="col-span-2 ms-0 md:ms-[30px]">
                            <div className="border rounded-b-md md:rounded-md w-full flex flex-col sm:flex-row bg-white" >
                                <h1 className="grow py-[10px] px-[10px] text-gray-400 text-[1rem]">Upload your image</h1>
                                <button className="border border-blue-400 text-blue-400 w-[200px] my-[3px] rounded-md uppercase font-[600] text-[0.9rem] transition-all duration-300 hover:text-white hover:bg-blue-400 py-[10px] sm:py-0 mx-auto sm:mx-1">Upload</button>
                            </div>
                        </div>
                    </div>
                    <div className="pt-[3rem] relative w-fit md:ms-auto mx-auto">
                        <button className="bg-white md:bg-blue-400 px-[10px] py-[10px] w-[200px] text-blue-400 md:text-white rounded-md font-bold text-center uppercase text-[0.9rem] transition-all duration-300 md:hover:bg-blue-500">Add User</button>
                    </div>
                </Form>
            </div>
        </section>
    )
}
