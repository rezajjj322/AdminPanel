import { motion } from "framer-motion";
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";


const userActivityData = [
  { name: "Mon", "0-4": 20, "4-8": 40, "8-12": 60, "12-16": 80, "16-20": 30 },
  { name: "Tue", "0-4": 20, "4-8": 40, "8-12": 60, "12-16": 80, "16-20": 40 },
  { name: "Wed", "0-4": 20, "4-8": 40, "8-12": 60, "12-16": 80, "16-20": 50 },
  { name: "Thu", "0-4": 20, "4-8": 40, "8-12": 60, "12-16": 80, "16-20": 60 },
  { name: "Fri", "0-4": 20, "4-8": 40, "8-12": 60, "12-16": 80, "16-20": 70 },
  { name: "Sat", "0-4": 20, "4-8": 40, "8-12": 60, "12-16": 80, "16-20": 80 },
  { name: "Sun", "0-4": 20, "4-8": 40, "8-12": 60, "12-16": 80, "16-20": 90 },
]

const UserActivityHeatMap = () => {
  return (
    <motion.div className="bg-gray-800 bg-opacity-50 rounded-xl border border-gray-600 p-6 mt-5"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
    >
      <h2 className="text-xl text-white">User Activity HeatMap</h2>
      <div style={{ width: "100%", height: 300 }}>
        <ResponsiveContainer>
          <BarChart data={userActivityData}>
            <CartesianGrid strokeDasharray={"3 3"} stroke="#485563" />
            <XAxis dataKey="name" />
            <YAxis stroke="#9ca3af" />
            <Tooltip />
            <Legend />
            <Bar dataKey="0-4" stackId="a" fill="#8884d8" />
            <Bar dataKey="4-8" stackId="a" fill="#8B5CF6" />
            <Bar dataKey="8-12" stackId="a" fill="#EC4899" />
            <Bar dataKey="12-16" stackId="a" fill="#10B981" />
            <Bar dataKey="16-20" stackId="a" fill="#F59E0B" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  )
}

export default UserActivityHeatMap
