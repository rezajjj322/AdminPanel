import AiPowerdInsight from "../../components/analytics/AiPowerdInsight"
import CustomerSegmention from "../../components/analytics/CustomerSegmention"
import OverViewCards from "../../components/analytics/OverViewCards"
import ProductPerformance from "../../components/analytics/ProductPerformance"
import RevenueChart from "../../components/analytics/RevenueChart"
import Header from "../../components/common/Header"

const AnalyticsPage = () => {
  return (
    <div className="flex-1 overflow-x-auto relative">
      <Header title="Analytics" />
      <main className="max-w-7xl py-6 px-4">
        <OverViewCards />
        <RevenueChart />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          <CustomerSegmention />
          <ProductPerformance />
        </div>
        <AiPowerdInsight />
      </main>
    </div>
  )
}

export default AnalyticsPage