import { Button } from "./ui/button";
import { Input } from "./ui/input";


export default function Footer() {
  return (
    <footer className="px-6 py-16 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">🌱</span>
              </div>
              <span className="text-white font-semibold text-xl">Planto.</span>
            </div>
            <p className="text-gray-300 max-w-md">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua.
            </p>

            {/* Social Media */}
            <div className="flex space-x-4 pt-4">
              <Button
                variant="ghost"
                size="icon"
                className="text-white hover:text-green-400 w-10 h-10 border border-white/20 rounded-lg"
              >
                <span className="font-bold text-sm">FB</span>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="text-white hover:text-green-400 w-10 h-10 border border-white/20 rounded-lg"
              >
                <span className="font-bold text-sm">TW</span>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="text-white hover:text-green-400 w-10 h-10 border border-white/20 rounded-lg"
              >
                <span className="font-bold text-sm">LI</span>
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-white font-semibold text-lg">Quick Link's</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-300 hover:text-green-400 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-green-400 transition-colors">
                  Types Of plant's
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-green-400 transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-green-400 transition-colors">
                  Privacy
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h4 className="text-white font-semibold text-lg">For Every Update.</h4>
            <div className="space-y-3">
              <Input
                type="email"
                placeholder="Enter Email"
                className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 rounded-lg"
              />
              <Button className="bg-green-500 hover:bg-green-600 text-white w-full rounded-lg">SUBSCRIBE</Button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 mt-12 pt-8 text-center">
          <p className="text-gray-400 text-sm">planto © all right reserve</p>
        </div>
      </div>
    </footer>
  )
}
