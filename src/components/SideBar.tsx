import Link from "next/link"
import { Home, ShoppingBag, Users } from "lucide-react"

const Sidebar = () => {
  return (
    <div className="bg-gray-800 text-white w-64 space-y-6 py-7 px-2 absolute inset-y-0 left-0 transform -translate-x-full md:relative md:translate-x-0 transition duration-200 ease-in-out">
      <Link href="/" className="text-white flex items-center space-x-2 px-4">
        <ShoppingBag className="w-8 h-8" />
        <span className="text-2xl font-extrabold">Admin</span>
      </Link>
      <nav>
        <Link href="/" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 hover:text-white">
          <Home className="inline-block mr-2 w-5 h-5" /> Dashboard
        </Link>
        <Link
          href="/products"
          className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 hover:text-white"
        >
          <ShoppingBag className="inline-block mr-2 w-5 h-5" /> Products
        </Link>
        <Link
          href="/customer"
          className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 hover:text-white"
        >
          <Users className="inline-block mr-2 w-5 h-5" /> Customers
        </Link>
      </nav>
    </div>
  )
}

export default Sidebar

