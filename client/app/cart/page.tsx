import { Button } from "@/components/ui/button"
import { Minus, Plus, Trash2 } from "lucide-react"

const cartItems = [
  {
    id: 1,
    name: "Calathea Plant",
    price: 29.99,
    quantity: 1,
    image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=300&h=300&fit=crop&crop=center",
  },
  {
    id: 2,
    name: "Snake Plant",
    price: 24.99,
    quantity: 2,
    image: "https://images.unsplash.com/photo-1593482892290-f54421a6c9c0?w=300&h=300&fit=crop&crop=center",
  },
]

export default function CartPage() {
  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0)
  const shipping = 5.99
  const total = subtotal + shipping

  return (    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <h1 className="text-4xl font-bold text-white mb-8">Shopping Cart</h1>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20"
              >
                <div className="flex items-center gap-4">
                  <div className="w-24 h-24 rounded-lg overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-white font-semibold text-lg">{item.name}</h3>
                    <p className="text-gray-400">${item.price}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <Button
                      size="icon"
                      variant="outline"
                      className="h-8 w-8 border-white/20 text-white hover:bg-white/20"
                    >
                      <Minus className="h-4 w-4" />
                    </Button>
                    <span className="text-white w-8 text-center">{item.quantity}</span>
                    <Button
                      size="icon"
                      variant="outline"
                      className="h-8 w-8 border-white/20 text-white hover:bg-white/20"
                    >
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                  <Button
                    size="icon"
                    variant="ghost"
                    className="text-red-400 hover:text-red-300 hover:bg-red-400/10"
                  >
                    <Trash2 className="h-5 w-5" />
                  </Button>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 h-fit">
            <h2 className="text-2xl font-semibold text-white mb-6">Order Summary</h2>
            <div className="space-y-4">
              <div className="flex justify-between text-gray-300">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-gray-300">
                <span>Shipping</span>
                <span>${shipping.toFixed(2)}</span>
              </div>
              <div className="border-t border-white/20 pt-4 flex justify-between text-white font-semibold">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
              <Button className="w-full bg-green-500 hover:bg-green-600 text-white mt-6">
                Proceed to Checkout
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}