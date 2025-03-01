import { motion } from "framer-motion";
import { useState } from "react";
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";


const SalesData = [
    { name: "Jul", sales: "4100" },
    { name: "Aug", sales: "3400" },
    { name: "Sep", sales: "4400" },
    { name: "Oct", sales: "4900" },
    { name: "Nov", sales: "5200" },
    { name: "Dec", sales: "5300" },
    { name: "Jan", sales: "5000" },
    { name: "Feb", sales: "2000" },
    { name: "Mar", sales: "5000" },
    { name: "Apr", sales: "5500" },
    { name: "May", sales: "7000" },
    { name: "Jun", sales: "7400" },
];
const getFilteredData = (timeRange) => {
    const dataCopy = [...SalesData];
    
    if (timeRange === "This Quarter") {
        return dataCopy.slice(-3)
    } else if (timeRange === "6 Month") {
        return dataCopy.slice(-6)
    } else {
        return dataCopy
    }
};
const SalesoverviewCharts = () => {
    const [selectedTimeRange, setSelectedTimeRange] = useState("This Quarter")
    const filteredData = getFilteredData(selectedTimeRange)
    return (
        <motion.div className="bg-gray-800 rounded-xl border border-gray-600 mt-5 py-6 px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
        >
            <div className="flex justify-between items-center">
                <h2 className="text-lg text-white pb-2">Sales OverView</h2>
                <select className="bg-gray-700 rounded-lg text-white px-3 py-1 focus:ring-2 focus:ring-blue-500"
                    value={selectedTimeRange}
                    onChange={(e) => setSelectedTimeRange(e.target.value)}
                >
                    <option>This Quarter</option>
                    <option>6 Month</option>
                    <option>This Year</option>
                </select>
            </div>
            <div className="w-full h-80">
                <ResponsiveContainer>
                    <AreaChart
                        width={500}
                        height={400}
                        data={filteredData}
                        margin={{
                            top: 10,
                            right: 30,
                            left: 0,
                            bottom: 0,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" stroke="#455264" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Area type="monotone" dataKey="sales" stroke="#8884d8" fill="#8884d8" />
                    </AreaChart>
                </ResponsiveContainer>
            </div>

        </motion.div>
    )
}

export default SalesoverviewCharts