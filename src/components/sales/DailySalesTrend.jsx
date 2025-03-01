import { motion } from "framer-motion";
import { Bar, BarChart, Legend, ResponsiveContainer, Tooltip } from "recharts";


const dailyData = [
    { name: "Jul", sales: "4000" },
    { name: "Aug", sales: "2300" },
    { name: "Sep", sales: "2000" },
    { name: "Oct", sales: "3000" },
    { name: "Nov", sales: "3500" },
    { name: "Dec", sales: "5000" },
    { name: "Jan", sales: "5200" },
  ];
const DailySalesTrend = () => {
    return (
        <motion.div className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl border p-6 border-gray-600 mt-5"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
        >
            <h2 className="text-lg font-medium text-white">Daily Sales Trend</h2>
            <div className="w-full h-80">
                <ResponsiveContainer>

                
                    <BarChart width={150} height={40} data={dailyData}>
                    <Legend />
                    <Tooltip />
                        <Bar dataKey="sales" fill="#10B981" />
                    </BarChart>
                    
                </ResponsiveContainer>
            </div>
        </motion.div>
    )
}

export default DailySalesTrend