
import { Legend, PolarAngleAxis, PolarGrid, PolarRadiusAxis, Radar, RadarChart, ResponsiveContainer, Tooltip } from "recharts"
import { motion } from "framer-motion";

const CustomerData = [
    { subject: 'Math', A: 120, B: 110, fullMark: 150, },
    { subject: 'Chinese', A: 98, B: 130, fullMark: 150, },
    { subject: 'English', A: 86, B: 130, fullMark: 150, },
    { subject: 'Geography', A: 99, B: 100, fullMark: 150, },
    { subject: 'Physics', A: 85, B: 90, fullMark: 150, },
    { subject: 'History', A: 65, B: 85, fullMark: 150, },
];

const CustomerSegmention = () => {
    return (
        <motion.div
            className="bg-gray-800 rounded-xl border border-gray-600 mt-5 py-6 px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
        >
            <div className="w-full h-80">
                <h2 className="text-lg">Customer Segmention</h2>
                <ResponsiveContainer>
                    <RadarChart cx="50%" cy="50%" outerRadius="80%" data={CustomerData}>
                        <PolarGrid />
                        <PolarAngleAxis dataKey="subject" />
                        <PolarRadiusAxis />
                        <Radar name="segment A" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
                        <Radar name="segment B" dataKey="B" stroke="#108981" fill="#8884d8" fillOpacity={0.6} />
                        <Legend />
                        <Tooltip />
                    </RadarChart>
                </ResponsiveContainer>
            </div>
        </motion.div>
    )
}

export default CustomerSegmention