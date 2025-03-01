import { motion } from "framer-motion";
import { Cell, Legend, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";

const CategoryData = [
    { name: "Electronics", value: 4500 },
    { name: "Clothing", value: 2100 },
    { name: "Home & Garden", value: 3800 },
    { name: "Books", value: 5000 },
    { name: "Sports", value: 5900 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const SalesByCategoryChart = () => {
    return (
        <motion.div className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl border p-6 border-gray-600 mt-5"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
        >
            <h2 className="text-lg font-medium text-white">Category Destribution</h2>
            <div className="w-full h-80">
                <ResponsiveContainer>
                    <PieChart width={400} height={400}>
                        <Pie
                            data={CategoryData}
                            cx="50%"
                            cy="50%"
                            labelLine={false}
                            outerRadius={80}
                            fill="#8884d8"
                            dataKey="value"
                        >
                            {CategoryData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                        </Pie>
                        <Tooltip />
                        <Legend />
                    </PieChart>
                </ResponsiveContainer>
            </div>
        </motion.div>
    )
}

export default SalesByCategoryChart