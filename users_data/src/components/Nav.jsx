export default function NavSection() {
    return (
        <nav className="bg-blue-400">
            <div className="max-w-[1150px] mx-auto px-5 xl:px-0 py-3">
                <div className="flex flex-row items-center justify-between">
                    <h1 className="text-white uppercase font-bold text-[1.1rem]">User Data</h1>
                    <button className="bg-white px-[10px] py-[5px] rounded-lg font-[600] text-[0.9rem]">Add User</button>
                </div>
            </div>
        </nav>
    )
}
