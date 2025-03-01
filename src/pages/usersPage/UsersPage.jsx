import { motion } from "framer-motion";
import { UserCheck, UserIcon, UserPlus, UserX } from "lucide-react";

import Header from "../../components/common/Header"
import StatCard from "../../components/common/StatCard"
import UsersTable from "../../components/users/UsersTable";
import UserGrowthChart from "../../components/users/UserGrowthChart";
import UserActivityHeatMap from "../../components/users/UserActivityHeatMap";

const UsersPage = () => {

    return (
        <div className="flex-1 overflow-auto relative">
            <Header title="Users" />
            <main className="max-w-7xl py-6 px-4">
                <motion.div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
                    <StatCard name="Total Users" icon={UserIcon} value="15321" color="#6366F1" />
                    <StatCard name="New Users Today" icon={UserCheck} value="258" color="#10b981" />
                    <StatCard name="Active Users" icon={UserPlus} value="2460" color="#F59E0B" />
                    <StatCard name="Rate" icon={UserX} value="2.4%" color="#EF4444" />
                </motion.div>

                <UsersTable />

                {/* User Chart */}
                <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                    <UserGrowthChart />
                    <UserActivityHeatMap />
                </div>
            </main>
        </div>
    )
}

export default UsersPage