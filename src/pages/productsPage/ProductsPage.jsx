import { motion } from "framer-motion";
import { AlertTriangle, DollarSign, Package, TrendingUp } from "lucide-react";

import Header from "../../components/common/Header"
import StatCard from "../../components/common/StatCard";
import ProductTable from "../../components/products/ProductTable";
import CategoryDestributionChart from "../../components/overview/CategoryDestributionChart";
import SalesTrendChart from "../../components/products/SalesTrendChart";

const ProductsPage = () => {
  return (
    <div className="flex-1 overflow-auto relative z-10">
      <Header title="Products" />
      <main className="max-w-7xl py-6 px-4">
        <motion.div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <StatCard name="Total Product" icon={Package} value="1234" color="#6366F1" />
          <StatCard name="Top Selling" icon={TrendingUp} value="89" color="#10b981" />
          <StatCard name="Low Stock" icon={AlertTriangle} value="23" color="#F59E0B" />
          <StatCard name="Total Revenue" icon={DollarSign} value={"$543,210"} color="#EF4444" />
        </motion.div>

        <ProductTable />

        {/* charts */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
           <SalesTrendChart />
           <CategoryDestributionChart />
        </div>
      </main>
    </div>
  )
}

export default ProductsPage