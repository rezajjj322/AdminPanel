import { motion } from "framer-motion";
import PropTypes from "prop-types";


const SettingSection = ({ icon: Icon, title, children }) => {
    return (
        <motion.div
            className="bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl border p-6 border-gray-600 mt-5"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
        >
            <div className="flex items-center">
                <Icon className="text-indigo-400 m-2" size-24 />
                <h2>{title}</h2>
            </div>
            {children}
        </motion.div>
    )
}

SettingSection.propTypes = {
    icon: PropTypes.elementType.isRequired,
    title: PropTypes.string.isRequired,
    children: PropTypes.string.isRequired,
}
export default SettingSection
