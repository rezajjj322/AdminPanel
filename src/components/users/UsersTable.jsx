import { useState } from "react"
import { motion } from "framer-motion";
import { Edit, Search, Trash2 } from "lucide-react";

const userData = [
    { id: 1, name: "John duck", email: "john@example.com", role: "Customer", Status: "Active" },
    { id: 2, name: "Bob duck", email: "bob@example.com", role: "Admin", Status: "Active" },
    { id: 3, name: "Jane smite", email: "jane@example.com", role: "Customer", Status: "inActive" },
    { id: 4, name: "Alice duck", email: "alice@example.com", role: "Customer", Status: "Active" },
    { id: 5, name: "Charlie duck", email: "charlie@example.com", role: "Customer", Status: "Active" },
    { id: 6, name: "john duck", email: "john@example.com", role: "Customer", Status: "inActive" }
]
const UsersTable = () => {
    const [search, setSearch] = useState("")
    const [filteredUsers, setFiltredUsers] = useState(userData);

    const handelSearch = (e) => {
        setSearch(e)
        const filtred = userData.filter((user) => user.name.toLowerCase().includes(e) ||
            user.email.toLowerCase().includes(e))
        setFiltredUsers(filtred)
    }
    
    return (
        <motion.div
            className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl border p-6 border-gray-600 mt-5"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
        >
            <div className="flex justify-between items-center mb-6">
                <h2>Users List</h2>
                <div className="relative">
                    <input
                        type="text"
                        value={search}
                        placeholder="search User..."
                        className="bg-gray-700 text-white rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        onChange={(e) => handelSearch(e.target.value.toLowerCase())}
                    />
                    <Search className="absolute left-3 top-2.5 text-gray-400" />
                </div>
            </div>
            <div className="overflow-x-auto">
                <table className="min-w-full divide-y">
                    <thead className="">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs uppercase text-gray-400">Name</th>
                            <th className="px-6 py-3 text-left text-xs uppercase text-gray-400">email</th>
                            <th className="px-6 py-3 text-left text-xs uppercase text-gray-400">Role</th>
                            <th className="px-6 py-3 text-left text-xs uppercase text-gray-400">Status</th>
                            <th className="px-6 py-3 text-left text-xs uppercase text-gray-400">Action</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-700">
                        {filteredUsers.map((user) => (
                            <motion.tr key={user.id} initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.3 }}>
                                <td className="px-6 py-4 font-medium">{user.name}</td>
                                <td className="px-6 py-4 font-medium">{user.email}</td>
                                <td className="px-6 py-4 font-medium">
                                    <span className="bg-blue-800 rounded-full px-2">
                                      {user.role}
                                    </span>
                                    
                                </td>
                                <td className="px-6 py-4 font-medium">
                                    <span className={`inline-flex rounded-full px-2 ${user.Status === "Active" ? "bg-green-800 text-white" : "bg-red-800 text-white"
                                        }`}>
                                        {user.Status}
                                    </span>

                                </td>
                                <td className="px-6 py-4 font-medium text-gray-100">
                                    <button className="text-indigo-400 mr-2">
                                        <Edit size={18} />
                                    </button>
                                    <button className="text-red-400">
                                        <Trash2 size={18} />
                                    </button>
                                </td>
                            </motion.tr>
                        ))}
                    </tbody>
                </table>
            </div>

        </motion.div>
    )
}

export default UsersTable
