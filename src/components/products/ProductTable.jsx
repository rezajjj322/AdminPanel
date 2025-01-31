import { motion } from "framer-motion";
import { Edit, Search, Trash2 } from "lucide-react";
import { useState } from "react";

const productData = [
  {
    id: 1,
    name: "Wireless Earbuds",
    category: "Electronic",
    price: 59.6,
    stock: 143,
    sales: 1200,
  },
  {
    id: 2,
    name: "Leather Wallet",
    category: "Accessories",
    price: 39.99,
    stock: 91,
    sales: 800,
  },
  {
    id: 3,
    name: "Smart Watch",
    category: "Electronic",
    price: 199.99,
    stock: 62,
    sales: 650,
  },
  {
    id: 4,
    name: "Yoga Math",
    category: "Fitness",
    price: 29.99,
    stock: 210,
    sales: 950,
  },
  {
    id: 5,
    name: "Coffee Maker",
    category: "Home",
    price: 79.99,
    stock: 78,
    sales: 720,
  },
];

const ProductTable = () => {
  const [search, setSearch] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(productData);

  const handelSearch = (e) => {
    setSearch(e)
    const filtred = productData.filter((product) => product.name.toLowerCase().includes(e) ||
      product.category.toLowerCase().includes(e)
    );
    setFilteredProducts(filtred);
  };

  return (
    <motion.div
      className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl border p-6 border-gray-600 mt-5"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
    >
      <div className="flex justify-between items-center mb-6">
        <h2>Product List</h2>
        <div className="relative">
          <input
            type="text"
            value={search}
            placeholder="search products..."
            className="bg-gray-700 text-white rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={(e) => handelSearch(e.target.value.toLowerCase())}
          />
          <Search className="absolute left-3 top-2.5 text-gray-400" />
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-700">
          <thead>
            <tr>
              <th className="px-6 py-3 text-left text-xs uppercase text-gray-400">
                Name
              </th>
              <th className="px-6 py-3 text-left text-xs uppercase text-gray-400">
                category
              </th>
              <th className="px-6 py-3 text-left text-xs uppercase text-gray-400">
                price
              </th>
              <th className="px-6 py-3 text-left text-xs uppercase text-gray-400">
                stock
              </th>
              <th className="px-6 py-3 text-left text-xs uppercase text-gray-400">
                sales
              </th>
              <th className="px-6 py-3 text-left text-xs uppercase text-gray-400">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-700">
            {filteredProducts.map((item) => (
              <motion.tr
                key={item.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <td className="flex gap-2 items-center px-6 py-4 font-medium text-gray-100">
                  <img
                    src="https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZWFyYnVkc3xlbnwwfHwwfHx8MA%3D%3D"
                    alt="product"
                    className="w-10 h-10 rounded-full"
                  />
                  {item.name}
                </td>
                <td className="px-6 py-4 font-medium text-gray-100">
                  {item.category}
                </td>
                <td className="px-6 py-4 font-medium text-gray-100">
                  {item.price.toFixed(2)}
                </td>
                <td className="px-6 py-4 font-medium text-gray-100">
                  {item.stock}
                </td>
                <td className="px-6 py-4 font-medium text-gray-100">
                  {item.sales}
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
  );
};

export default ProductTable;
