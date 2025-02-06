import { UserButton, useUser } from "@clerk/nextjs"
import { Bell, Search, User } from "lucide-react"

const Header = () => {
  return (
    <header className="bg-white shadow-md py-4 px-4">
      <div className="flex items-center justify-center">
        <div className="flex items-center">
          <UserButton />
         </div>
      </div>
    </header>
  )
}

export default Header

