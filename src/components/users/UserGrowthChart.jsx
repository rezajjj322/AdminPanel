import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { motion } from "framer-motion";

const UserGrowthData = [
  { name: "Jul", sales: "1500" },
  { name: "Aug", sales: "2000" },
  { name: "Sep", sales: "2500" },
  { name: "Oct", sales: "3000" },
  { name: "Nov", sales: "3500" },
  { name: "Dec", sales: "5000" },
  { name: "Jan", sales: "6000" },
];

const UserGrowthChart = () => {
  return (
    <motion.div
      className="bg-gray-800 bg-opacity-50 shadow-lg rounded-xl p-6 border border-gray-600 mt-5"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
    >
      <h2 className="text-lg font-medium text-white">User Growth</h2>
      <div className="h-80">
        <ResponsiveContainer width={"100%"} height={"100%"}>
          <LineChart data={UserGrowthData}>
            <XAxis dataKey={"name"} />
            <YAxis stroke="#9ca3af" />
            <Tooltip
              contentStyle={{
                backgroundColor: "rgba(31, 41, 55, 0.8)",
                borderColor: "#485563",
              }}
              itemStyle={{ color: "#b0bac4" }}
            />
            <Line
              type="bomb"
              dataKey="sales"
              stroke="#6366F1"
              strokeWidth={3}
              dot={{ fill: "#6366f1", strokeWidth: 2, r: 6 }}
              activeDot={{ r: 8, strokeWidth: 2 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  )
}

export default UserGrowthChart