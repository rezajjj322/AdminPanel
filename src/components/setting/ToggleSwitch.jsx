import PropTypes from "prop-types"

const ToggleSwitch = ({ label, isOn, onToggle }) => {
    return (
        <div className="relative inline-flex items-center justify-between">
            <span className="text-gray-300">{label}</span>
            <button
            className={`relative inline-flex items-center w-12 h-6 rounded-full my-1
            ${isOn ? "bg-indigo-600" : "bg-gray-500"}`}
            onClick={onToggle}
            >
                <span
                className={`inline-block size-4 rounded-full transition duration-300 bg-white
                ${isOn ? "translate-x-7" : "translate-x-1"}`} 
                />
            </button>
        </div>
    )
}

ToggleSwitch.propTypes = {
    label: PropTypes.string.isRequired,
    isOn: PropTypes.bool.isRequired,
    onToggle: PropTypes.func.isRequired,
}

export default ToggleSwitch