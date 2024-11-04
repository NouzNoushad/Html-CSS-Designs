import { useState } from "react"
import { useEffect } from "react"
import axios from "axios"

export default function Users() {
    const [users, setUsers] = useState([])

    useEffect(() => {
        const url = "http://localhost:3000/get_user"
        axios.get(url).then((response) => {
            console.log(response.data["userList"])
            setUsers(response.data['userList'])
        }).catch((error) => {
            console.log(error)
        })
    }, [])

    return (
        <section className="py-[5rem]">
            <div className="max-w-[1150px] mx-auto px-5 xl:px-0">
                <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-[20px]">
                    {
                        users.map((user, index) =>
                            <div key={index} className="bg-white flex flex-col items-center px-[15px] py-[25px] rounded-md">
                                <div className="h-[200px] w-full rounded-md bg-gray-50">
                                    <img src={user["image"]} alt="" className="w-full h-full object-contain" />
                                </div>
                                <h2 className="pt-5 text-[1.1rem] font-[500]">{user["name"]}</h2>
                                <h3 className="text-gray-400 pt-2">{user["email"]}</h3>
                            </div>
                        )
                    }
                </div>
            </div>
        </section>
    )
}
