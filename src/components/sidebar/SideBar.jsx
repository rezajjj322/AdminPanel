import {
  BarChart2,
  DollarSign,
  Menu,
  Settings,
  ShoppingBag,
  TrendingUp,
  Users,
} from "lucide-react";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";

const sideBarItem = [
  { name: "OverView", icon: BarChart2, color: "#6366f1", href: "/" },
  { name: "Products", icon: ShoppingBag, color: "#8B5CF6", href: "/products" },
  { name: "Users", icon: Users, color: "#EC4899", href: "/users" },
  { name: "Sales", icon: DollarSign, color: "#10B981", href: "/sales" },
  { name: "Orders", icon: ShoppingBag, color: "#F59E0B", href: "/orders" },
  { name: "Analytics", icon: TrendingUp, color: "#3B82F6", href: "/analytics" },
  { name: "Setting", icon: Settings, color: "#6EE7B7", href: "/setting" },
];

const SideBar = () => {
  const [isSideBarOpen, setIsSideBarOpen] = useState(true);

  return (
    <>
      <motion.div
        className={`relative z-10 transition-all duration-200 ease-in-out flex-shrink-0`}
        animate={{ width: isSideBarOpen ? 210 : 90 }}
      >
        <div className="h-full bg-gray-800 bg-opacity-50 backdrop-blur-md p-4 flex flex-col border-r border-gray-800">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsSideBarOpen(!isSideBarOpen)}
            onHoverStart={() => console.log("hover started!")}
            className="p-2 rounded-full hover:bg-gray-700 max-w-fit"
          >
            <Menu />
          </motion.button>

          <nav className="mt-8 flex-grow">
            {sideBarItem.map((item, index) => (
              <Link key={index} to={item.href}>
                <motion.div className={`flex items-center m-1 p-4 text-sm font-medium rounded-lg hover:bg-gray-700 ${isSideBarOpen ? "hover:ml-4" : "ml-0"} transition-all duration-150`}>
                  <item.icon size={20} style={{ color: item.color }} />
                  <AnimatePresence>
                    {isSideBarOpen && (
                      <motion.span
                        className="ml-4"
                        initial={{ opacity: 0, width: 0 }}
                        animate={{ opacity: 1, width: "auto" }}
                        exit={{ opacity: 0, width: 0 }}
                        transition={{ duration: 0.2, delay: 0.3 }}
                      >
                        {item.name}
                      </motion.span>
                    )}
                  </AnimatePresence>
                </motion.div>
              </Link>
            ))}
          </nav>
        </div>
      </motion.div>
    </>
  );
};

export default SideBar;
