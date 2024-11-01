/* eslint-disable react/prop-types */
export default function NavSection({ title, showAddButton }) {
    return (
        <nav className="bg-blue-400 h-[10vh]">
            <div className="max-w-[1150px] mx-auto px-5 xl:px-0 py-3 h-full">
                <div className="flex flex-row items-center justify-between h-full">
                    <h1 className="text-white uppercase font-bold text-[1.05rem]">{title}</h1>
                    <div className="space-x-[2rem]">
                        <a href={`/`} className="text-white font-[600]">Home</a>
                        <a href={`/add_user`} className={(showAddButton) ? "bg-white px-[10px] py-[5px] rounded-md font-[600] text-[0.9rem]" : "hidden"}>Add User</a>
                    </div>

                </div>
            </div>
        </nav>
    )
}
