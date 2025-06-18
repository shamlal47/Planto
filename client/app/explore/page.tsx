import { Button } from "@/components/ui/button"
import { Filter, Search } from "lucide-react"

const plants = [
  {
    id: 1,
    name: "Calathea Plant",
    type: "Indoor",
    price: 29.99,
    image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=300&h=300&fit=crop&crop=center",
  },
  {
    id: 2,
    name: "Snake Plant",
    type: "Indoor",
    price: 24.99,
    image: "https://images.unsplash.com/photo-1593482892290-f54421a6c9c0?w=300&h=300&fit=crop&crop=center",
  },
  {
    id: 3,
    name: "Monstera Deliciosa",
    type: "Indoor",
    price: 39.99,
    image: "https://images.unsplash.com/photo-1614594225760-cd65264a5538?w=300&h=300&fit=crop&crop=center",
  },
  // Add more plants here
]

export default function ExplorePage() {
  return (    <div className="min-h-screen">
      {/* Search and Filter Section */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-8">
          <h1 className="text-4xl font-bold text-white">Explore Plants</h1>
          <div className="flex items-center gap-4 w-full md:w-auto">
            <div className="relative flex-1 md:w-64">
              <input
                type="text"
                placeholder="Search plants..."
                className="w-full px-4 py-2 pl-10 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
            <Button className="bg-white/10 hover:bg-white/20 text-white border border-white/20">
              <Filter className="h-5 w-5 mr-2" />
              Filter
            </Button>
          </div>
        </div>

        {/* Plant Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {plants.map((plant) => (
            <div
              key={plant.id}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 hover:border-white/40 transition-all"
            >
              <div className="aspect-square mb-4 rounded-lg overflow-hidden">
                <img
                  src={plant.image}
                  alt={plant.name}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="space-y-2">
                <p className="text-gray-400 text-sm">{plant.type}</p>
                <h3 className="text-white font-semibold text-lg">{plant.name}</h3>
                <div className="flex justify-between items-center">
                  <span className="text-white font-bold">${plant.price}</span>
                  <Button className="bg-green-500 hover:bg-green-600 text-white">
                    Add to Cart
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
