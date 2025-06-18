"use client"
import { Button } from "@/components/ui/button"
import { Check, Truck } from "lucide-react"

const orderDetails = {
  id: "ORD123456",
  date: "June 18, 2025",
  status: "Processing",
  items: [
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
  ],
  shipping: {
    address: "123 Green Street",
    city: "Plantville",
    state: "CA",
    zip: "12345",
  },
}

export default function OrderPage() {
  const subtotal = orderDetails.items.reduce((acc, item) => acc + item.price * item.quantity, 0)
  const shipping = 5.99
  const total = subtotal + shipping

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
  }

  return (    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
          <div>
            <h1 className="text-4xl font-bold text-white">Order Details</h1>
            <p className="text-gray-400">Order #{orderDetails.id}</p>
          </div>
          <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
            <div className="w-2 h-2 rounded-full bg-green-500"></div>
            <span className="text-white">{orderDetails.status}</span>
          </div>
        </div>

        {/* Order Progress */}
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 mb-8">
          <div className="flex justify-between">
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center mb-2">
                <Check className="h-6 w-6 text-white" />
              </div>
              <span className="text-white text-sm">Order Placed</span>
            </div>
            <div className="flex-1 border-t-2 border-white/20 relative top-5"></div>
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center mb-2">
                <Truck className="h-6 w-6 text-white" />
              </div>
              <span className="text-gray-400 text-sm">Shipped</span>
            </div>
            <div className="flex-1 border-t-2 border-white/20 relative top-5"></div>
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center mb-2">
                <Check className="h-6 w-6 text-white" />
              </div>
              <span className="text-gray-400 text-sm">Delivered</span>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Order Items */}
          <div className="lg:col-span-2 space-y-4">
            {orderDetails.items.map((item) => (
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
                    <p className="text-gray-400">Quantity: {item.quantity}</p>
                    <p className="text-gray-400">${item.price} each</p>
                  </div>
                  <div className="text-white font-semibold">
                    ${(item.price * item.quantity).toFixed(2)}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="space-y-4">            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <h2 className="text-xl font-semibold text-white mb-4">Shipping Information</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="block text-gray-300">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-gray-300">Email</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="address" className="block text-gray-300">Address</label>
                  <input
                    type="text"
                    id="address"
                    className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500"
                    required
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="city" className="block text-gray-300">City</label>
                    <input
                      type="text"
                      id="city"
                      className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="state" className="block text-gray-300">State</label>
                    <input
                      type="text"
                      id="state"
                      className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500"
                      required
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="zip" className="block text-gray-300">ZIP Code</label>
                  <input
                    type="text"
                    id="zip"
                    className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500"
                    required
                  />
                </div>
              </form>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <h2 className="text-xl font-semibold text-white mb-4">Order Summary</h2>
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}