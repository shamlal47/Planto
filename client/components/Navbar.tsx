import { Search, ShoppingBag, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-transparent">
      <div className="flex items-center space-x-2">
        <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center">
          <span className="text-white font-bold text-sm">🌱</span>
        </div>
        <span className="text-white font-semibold text-lg">Planto.</span>
      </div>

      <div className="hidden md:flex items-center space-x-8">
        <a href="#" className="text-white hover:text-green-400 transition-colors">
          Home
        </a>
        <a href="#" className="text-gray-300 hover:text-green-400 transition-colors">
          Plants Type
        </a>
        <a href="#" className="text-gray-300 hover:text-green-400 transition-colors">
          More
        </a>
        <a href="#" className="text-gray-300 hover:text-green-400 transition-colors">
          Contact
        </a>
      </div>

      <div className="flex items-center space-x-4">
        <Button variant="ghost" size="icon" className="text-white hover:text-green-400">
          <Search className="h-5 w-5" />
        </Button>
        <Button variant="ghost" size="icon" className="text-white hover:text-green-400">
          <ShoppingBag className="h-5 w-5" />
        </Button>
        <Button variant="ghost" size="icon" className="text-white hover:text-green-400 md:hidden">
          <Menu className="h-5 w-5" />
        </Button>
      </div>
    </nav>
  )
}
