"use client"
import { Button } from "@/components/ui/button"
import { ShoppingBag } from "lucide-react"

interface ProductCardProps {
  title: string
  description: string
  price: string
  image: string
  className?: string
}

export default function ProductCard({ title, description, price, image, className = "" }: ProductCardProps) {
  return (
    <div className={`bg-white/10 backdrop-blur-sm rounded-3xl p-4 sm:p-6 border border-white/20 ${className}`}>
      <div className="space-y-3 sm:space-y-4">
        <div className="relative w-24 h-24 sm:w-32 sm:h-32 mx-auto overflow-hidden rounded-2xl">
          <img
            src={
              image || "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=300&h=300&fit=crop&crop=center"
            }
            alt={title || "Plant"}
            className="w-full h-full object-cover"
            onError={(e) => {
              const target = e.target as HTMLImageElement
              target.src =
                "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=300&h=300&fit=crop&crop=center"
            }}
          />
        </div>
        <div className="space-y-1 sm:space-y-2 text-center">
          <h3 className="text-white font-semibold text-base sm:text-lg line-clamp-1">{title}</h3>
          <p className="text-gray-300 text-xs sm:text-sm line-clamp-2">{description}</p>
          <p className="text-green-400 font-bold text-lg sm:text-xl">{price}</p>
        </div>
        <div className="flex items-center space-x-2 sm:space-x-3 pt-1">
          <Button className="bg-green-500 hover:bg-green-600 text-white rounded-full px-4 sm:px-6 py-1.5 text-xs sm:text-sm flex-1">
            Explore
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="text-white hover:text-green-400 border border-white/30 rounded-full h-8 w-8 sm:h-10 sm:w-10"
          >
            <ShoppingBag className="h-3 w-3 sm:h-4 sm:w-4" />
          </Button>
        </div>
      </div>
    </div>
  )
}
