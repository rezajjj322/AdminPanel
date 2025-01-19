import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { motion } from "framer-motion";

const SalesData = [
  {name: "Jul", sales: "4100"},
  {name: "Aug", sales: "3400"},
  {name: "Sep", sales: "4400"},
  {name: "Oct", sales: "4900"},
  {name: "Nov", sales: "5200"},
  {name: "Dec", sales: "5300"},
  {name: "Jan", sales: "5000"},
  {name: "Feb", sales: "2000"},
  {name: "Mar", sales: "6500"},
  {name: "Apr", sales: "6700"},
  {name: "May", sales: "7000"},
  {name: "Jun", sales: "7200"},
];

const SalesoverviewCharts = () => {
  return (
    <motion.div
      className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl border p-6 border-gray-600 mt-5"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
    >
      <h2 className="text-lg font-medium text-white">Sales Overview</h2>

      <div className="h-80">
        <ResponsiveContainer width={"100%"} height={"100%"}>
          <LineChart data={SalesData}>
            <CartesianGrid strokeDasharray={"3 3"} stroke="#485563" />
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
                type="monotone"
                dataKey="sales"
                stroke="#6366F1"
                strokeWidth={3}
                dot={{ fill: "#6366f1", strokeWidth: 2, r: 6 }}
                activeDot={{r: 8, strokeWidth: 2}}
              />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
};

export default SalesoverviewCharts;
