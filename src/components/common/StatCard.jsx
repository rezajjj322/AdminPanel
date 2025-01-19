import { motion } from "framer-motion";
import PropTypes from "prop-types";

const StatCard = ({ name, icon: Icon, value, color }) => {
  return (
    <motion.div
      className="bg-gray-800 bg-opacity-45 overflow-hidden shadow-lg rounded-xl border border-gray-700 cursor-pointer"
      whileHover={{
        y: -5,
      }}
    >
      <div className="px-4 py-5 sm:p-6">
        <span className="flex items-center">
          <Icon size={20} className="mr-2" style={{ color }} />
          {name}
        </span>
        <p>{value}</p>
      </div>
    </motion.div>
  );
};

StatCard.propTypes = {
    name: PropTypes.string.isRequired,
    icon: PropTypes.elementType.isRequired,
    value: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
}

export default StatCard;