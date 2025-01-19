import PropTypes from "prop-types"

const Header = ({title}) => {
  return (
    <header className="bg-gray-800 bg-opacity-50 shadow-lg border-b border-gray-700">
        <div className="max-w-7xl mx-auto py-4 px-4">
            <h1 className="text-2xl font-semibold text-gray-100">{title}</h1>
        </div>
    </header>
  )
}

Header.propTypes = {
    title: PropTypes.string
}

export default Header