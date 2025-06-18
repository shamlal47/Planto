import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"

export default function BestO2Section() {
  return (
    <section className="px-6 py-16">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-block border-2 border-green-500 rounded-lg px-6 py-2 mb-8">
            <h2 className="text-green-400 font-semibold text-lg">Our Best o2</h2>
          </div>
        </div>        {/* Main Content */}
        <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Plant Image */}
            <div className="relative w-full h-[400px] flex items-center justify-center">
              <Image 
                src="/p1.png" 
                alt="Best O2 Plant" 
                width={400} 
                height={400} 
                className="object-contain w-full h-full"
              />
            </div>

            {/* Content */}
            <div className="space-y-6">
              <h3 className="text-white font-bold text-2xl lg:text-3xl leading-tight">
                We Have Small And Best O2 Plants Collection's
              </h3>

              <div className="space-y-4 text-gray-300">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua. Ut enim ad minim veniam.
                </p>
              </div>

              <Button className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-full">Explore</Button>
            </div>

            {/* Navigation Arrows */}
            <div className="absolute right-4 bottom-4 flex items-center space-x-2">
              <Button variant="ghost" size="icon" className="text-white hover:text-green-400 w-8 h-8">
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <span className="text-gray-400 text-sm">01/04</span>
              <Button variant="ghost" size="icon" className="text-white hover:text-green-400 w-8 h-8">
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center space-x-2 mt-12">
          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
          <div className="w-2 h-2 bg-white/30 rounded-full"></div>
          <div className="w-2 h-2 bg-white/30 rounded-full"></div>
        </div>
      </div>
    </section>
  )
}
