import { Route, Routes } from "react-router-dom"
import OverViewPage from "./pages/overViewPage/OverViewPage"
import ProductsPage from "./pages/productsPage/ProductsPage"
import SideBar from "./components/sidebar/SideBar"
import UsersPage from "./pages/usersPage/UsersPage"

function App() {


  return (
    <div className="flex h-screen bg-gray-900 text-gray-100 overflow-hidden">

      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 opacity-80"/>
        <div className="absolute inset-0 backdrop-blur-sm"/>
      </div>
      <SideBar />
      <Routes>
        <Route path="/" element={<OverViewPage />}/>
        <Route path="/products" element={<ProductsPage />}/>
        <Route path="/users" element={<UsersPage />}/>
      </Routes>
    </div>
  )
}

export default App
