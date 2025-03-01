import { ArrowDownRight, ArrowUpRight, BarChart2, DollarSign, ShoppingBag, Users } from "lucide-react";
import { motion } from "framer-motion";

const statItem = [
  { name: "Revenue", value: "1,234,567", change: -5.5, icon: BarChart2, },
  { name: "Users", value: "45,322", change: 1.1, icon: ShoppingBag, },
  { name: "Orders", value: "8,764", change: -3.2, icon: Users, },
  { name: "Page Views", value: "100,101", change: 15.7, icon: DollarSign, },
];
const OverViewCards = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 lg:grid-cols-4 mb-5">
      {statItem.map((item, index) => (
        <motion.div key={index} className="bg-gray-900 border border-gray-700 rounded-lg cursor-pointer"
        whileHover={{y: -5}}
          initial={{ opacity: 0, y: 20 }}
          animate={{opacity: 1, y: 0}}
        >
          <div className="flex justify-between items-center px-4 py-5 sm:p-6">
            <div>
              <h3 className="text-sm text-gray-400">{item.name}</h3>
              <p className="text-lg text-gray-400">{item.value}</p>
            </div>
            <div className={`w-10 h-10 flex justify-center items-center rounded-full ${item.change >= 0 ? "bg-lime-700" : "bg-orange-900"}`}>
              <item.icon  />
            </div>
          </div>
          <div>
            {item.change >= 0 ? <ArrowUpRight className="text-lime-800" />  : <ArrowDownRight className="text-orange-900" />}
            <span className="ml-1">{Math.abs(item.change)}%</span>
            <span className="ml-2">vs Last Period</span>
          </div>
        </motion.div>
      ))}
    </div>
  )
}

export default OverViewCards