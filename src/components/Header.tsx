import { Bell, Search, User } from "lucide-react"

const Header = () => {
  return (
    <header className="bg-white shadow-md py-4 px-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center rounded-md bg-gray-100 p-2">
          <Search className="h-5 w-5 text-gray-500" />
          <input type="text" placeholder="Search..." className="ml-2 bg-transparent outline-none" />
        </div>
        <div className="flex items-center">
          <button className="mx-4 text-gray-600 hover:text-gray-800">
            <Bell className="h-6 w-6" />
          </button>
          <button className="flex items-center text-gray-600 hover:text-gray-800">
            <User className="h-6 w-6" />
            <span className="ml-2">Admin User</span>
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header

