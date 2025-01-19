import { motion } from "framer-motion";
import { BarChart2, ShoppingBag, Users, Zap } from "lucide-react";

import Header from "../../components/common/Header"
import StatCard from "../../components/common/StatCard";
import SalesoverviewCharts from "../../components/overview/SalesoverviewCharts";
import CategoryDestributionChart from "../../components/overview/CategoryDestributionChart";
import SalesChannelChart from "../../components/overview/SalesChannelChart";


const OverViewPage = () => {
  return (
    <div className="flex-1 overflow-auto relative z-10">
      <Header title="OverView"/>

      <main className="max-w-7xl mx-auto py-6 px-4 lg:px-8">
        <motion.div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <StatCard name="Total Sales" icon={Zap} value="$ 1,234" color="#6366F1"/>
          <StatCard name="New Users" icon={Users} value="$ 1,654" color="#8B5CF6"/>
          <StatCard name="Total Sales" icon={ShoppingBag} value="$ 564" color="#EC4899"/>
          <StatCard name="Total Sales" icon={BarChart2} value="$ 1,234" color="#10B981"/>
        </motion.div>

        {/* Charts */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <SalesoverviewCharts />
          <CategoryDestributionChart />
          <SalesChannelChart />
        </div>

      </main>
    </div>
  )
}

export default OverViewPage