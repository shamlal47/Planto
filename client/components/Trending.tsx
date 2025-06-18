import ProductCard from "./ui/ProductCard"

export default function TrendingPlants() {
  const plants = [
    {
      id: 1,
      title: "Monstera Deliciosa",
      description:
        "Perfect for adding tropical vibes to your home. Easy to care for and grows beautifully in indirect light.",
      price: "Rs. 899/-",
      image: "https://images.unsplash.com/photo-1545241047-6083a3684587?w=300&h=300&fit=crop&crop=center",
    },
    {
      id: 2,
      title: "Snake Plant",
      description:
        "Low maintenance plant that purifies air and thrives in low light conditions. Perfect for beginners.",
      price: "Rs. 599/-",
      image: "https://images.unsplash.com/photo-1593691509543-c55fb32d8de5?w=300&h=300&fit=crop&crop=center",
    },
    {
      id: 3,
      title: "Fiddle Leaf Fig",
      description: "Statement plant with large glossy leaves. Adds elegance and natural beauty to any living space.",
      price: "Rs. 1299/-",
      image: "https://images.unsplash.com/photo-1586093248292-4e6636ce8b97?w=300&h=300&fit=crop&crop=center",
    },
    {
      id: 4,
      title: "Peace Lily",
      description: "Beautiful flowering plant that blooms white flowers. Great for improving indoor air quality.",
      price: "Rs. 749/-",
      image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=300&h=300&fit=crop&crop=center",
    },
    {
      id: 5,
      title: "Rubber Plant",
      description: "Glossy dark green leaves make this plant a perfect decorative addition to modern homes.",
      price: "Rs. 679/-",
      image: "https://images.unsplash.com/photo-1509423350716-97f2360af2e4?w=300&h=300&fit=crop&crop=center",
    },
    {
      id: 6,
      title: "Pothos Golden",
      description: "Trailing vine plant perfect for hanging baskets or shelves. Very easy to propagate and maintain.",
      price: "Rs. 449/-",
      image: "https://images.unsplash.com/photo-1463154545680-d59320fd685d?w=300&h=300&fit=crop&crop=center",
    },
  ]

  return (
    <section className="px-4 sm:px-6 py-8 sm:py-12">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-2 sm:mb-4">Our Trendy plants</h2>
          <p className="text-green-200 text-sm sm:text-lg">Discover our collection of beautiful, healthy plants</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {plants.map((plant) => (
            <ProductCard
              key={plant.id}
              title={plant.title}
              description={plant.description}
              price={plant.price}
              image={plant.image}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
