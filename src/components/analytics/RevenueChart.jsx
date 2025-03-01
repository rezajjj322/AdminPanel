import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"
import { motion } from "framer-motion";
import { useState } from "react";

const AnalyticsData = [
    { name: "Jul", sales: "4100" },
    { name: "Aug", sales: "3400" },
    { name: "Sep", sales: "4400" },
    { name: "Oct", sales: "4900" },
    { name: "Nov", sales: "5200" },
    { name: "Dec", sales: "5300" },
    { name: "Jan", sales: "5000" },
    { name: "Feb", sales: "2000" },
    { name: "Mar", sales: "5000" },
    { name: "Apr", sales: "1000" },
    { name: "May", sales: "7000" },
    { name: "Jun", sales: "7400" },
];

const getFilterData = (timeRange) => {
    const dataCopy = [...AnalyticsData]

    if (timeRange === "Quarter") {
        return dataCopy.slice(-3)
    } else if (timeRange === "6 Month") {
        return dataCopy.slice(-6)
    } else {
        return dataCopy
    }
}

const RevenueChart = () => {
    const [analyticsTimeRange, setAnalyticsTimeRange] = useState("Quarter")
    const filtredData = getFilterData(analyticsTimeRange)
    return (
        <motion.div className="bg-gray-800 border border-gray-600 rounded-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}>
            <div className="flex justify-between items-center m-4">
                <h2 className="text-lg">Revenue Chart</h2>
                <select
                    className="bg-gray-700 h-10 focus:ring-2 focus:ring-yellow-500"
                    value={analyticsTimeRange}
                    onChange={(e) => setAnalyticsTimeRange(e.target.value)}
                >
                    <option>Quarter</option>
                    <option>6 Month</option>
                    <option>Year</option>
                </select>
            </div>
            <div className="w-full h-80 mt-6">
                <ResponsiveContainer>
                    <AreaChart
                        width={500}
                        height={400}
                        data={filtredData}
                        margin={{
                            top: 10,
                            right: 30,
                            left: 0,
                            bottom: 0,
                        }}
                    >
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Area type="monotone" dataKey="sales" stackId="1" stroke="#8884d8" fill="#8884d8" />
                        <Area type="monotone" dataKey="sales" stackId="1" stroke="#ffc658" fill="#ffc658" />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
        </motion.div>
    )
}

export default RevenueChart