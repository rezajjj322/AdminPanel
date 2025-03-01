import { motion } from "framer-motion";
import Header from "../../components/common/Header";
import StatCard from "../../components/common/StatCard";
import { CreditCard, DollarSign, ShoppingCart, TrendingUp } from "lucide-react";
import SalesoverviewCharts from "../../components/sales/SalesoverviewCharts";
import SalesByCategoryChart from "../../components/sales/SalesByCategoryChart";
import DailySalesTrend from "../../components/sales/DailySalesTrend";


const salesStat = {
    totalRevenue: "$1,234,000",
    averageOrderValue: "$78.4",
    conversionRate: "$3.45%",
    salesGrowth: "$12.5%",
}

const SalePage = () => {
  return (
    <div className="flex-1 overflow-x-auto relative">
        <Header title="Sales" />
        <main className="max-w-7xl py-6 px-4">
            <motion.div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
                <StatCard name="Total Revenue" icon={DollarSign} value={salesStat.totalRevenue} color="#6366F1" />
                <StatCard name="Average Order Value" icon={ShoppingCart} value={salesStat.averageOrderValue} color="#10b981" />
                <StatCard name="Conversion Rate" icon={TrendingUp} value={salesStat.conversionRate} color="#F59E0B" />
                <StatCard name="Sales Growth" icon={CreditCard} value={salesStat.salesGrowth} color="#EF4444" />
            </motion.div>
            <SalesoverviewCharts />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <SalesByCategoryChart />
              <DailySalesTrend />
            </div>
        </main>
    </div>
  )
}

export default SalePage