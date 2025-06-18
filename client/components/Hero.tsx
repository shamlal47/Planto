import { Button } from "@/components/ui/button"
import { Play } from "lucide-react"

export default function Hero() {
  return (
    <section className="px-6 py-12 relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight">Breath Natural</h1>
            <p className="text-gray-300 text-lg max-w-md">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua.
            </p>
            <div className="flex items-center space-x-4">
              <Button className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-full">Explore</Button>
              <Button variant="ghost" className="text-white hover:text-green-400 flex items-center space-x-2">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <Play className="h-4 w-4 fill-current" />
                </div>
                <span>Live Demo</span>
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-6 max-w-sm ml-auto border border-white/20">
              <div className="text-center space-y-4">
                <div className="relative w-32 h-32 mx-auto">
                  <img
                    src="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=300&h=300&fit=crop&crop=center"
                    alt="Trendy House Plant"
                    className="w-full h-full object-cover rounded-2xl"
                  />
                </div>
                <div>
                  <p className="text-gray-300 text-sm">Trendy House Plant</p>
                  <h3 className="text-white font-semibold text-lg">Calathea plant</h3>
                </div>
                <Button className="bg-white/20 hover:bg-white/30 text-white border border-white/30 rounded-full px-6">
                  Buy Now
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
