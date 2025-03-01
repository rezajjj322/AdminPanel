import { motion } from "framer-motion";
import { DollarSign, ShoppingBag, TrendingUp, Users } from "lucide-react";

const insights = [
    { icon: TrendingUp, color: "#008000", insight: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text" },
    { icon: Users, color: "#0000ff", insight: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text" },
    { icon: ShoppingBag, color: "#800080", insight: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text" },
    { icon: DollarSign, color: "#ffff00", insight: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text" },
]

const AiPowerdInsight = () => {
    return (
        <motion.div
            className="bg-gray-800 rounded-xl border border-gray-600 mt-5 py-6 px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
        >
            <h2 className="text-xl font-semibold ">Ai-Powered Insight</h2>
            <div className="space-y-4">
                {insights.map((item, index) => (
                    <div key={index} className="flex items-center">
                        <div className={`p-2 m-2 rounded-full border border-gray-200 ${item.color}`}>
                            <item.icon className={`w-6 h-6 ${item.color}`} />
                        </div>
                        <p>{item.insight}</p>
                    </div>
                ))}
            </div>
        </motion.div>
    )
}

export default AiPowerdInsight