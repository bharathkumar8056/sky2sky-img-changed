import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export const metadata = {
  title: "Our Products | Sky 2 Sky Global Exports",
  description:
    "Premium agricultural products including palm jaggery powder, cane sugar, pickles, and honey for global export.",
}

export default function ProductsPage() {
  const allProducts = [
    {
      id: "palm-jaggery",
      name: "Palm Jaggery Powder",
      category: "Sweetener",
      description: "Pure, natural sweetness from palm trees. Perfect for beverages and traditional recipes.",
      minOrder: "250 kg",
      price: "Contact for quote",
      highlights: [
        "100% natural and organic",
        "No additives or preservatives",
        "Rich mineral content",
        "Traditional production method",
      ],
      image: "/assets/Palm-jaggery-powder.png",
    },
    {
      id: "cane-sugar",
      name: "Cane Sugar",
      category: "Sweetener",
      description: "Premium quality cane sugar crystals for industrial and commercial use.",
      minOrder: "1000 kg",
      price: "Contact for quote",
      highlights: ["High purity crystals", "Consistent quality", "Bulk packaging available", "Industrial grade"],
      image: "/assets/cane sugar.png",
    },
    {
      id: "pickles",
      name: "Traditional Pickles",
      category: "Condiment",
      description: "Authentic Indian pickles with varieties: Lemon, Citron, Mango, Garlic & Mixed Vegetables.",
      minOrder: "500 kg",
      price: "Contact for quote",
      highlights: ["Five varieties available", "Traditional spice blend", "No artificial colors", "Long shelf life"],
      image: "/indian-pickles-jars-colorful.jpg",
    },
    {
      id: "honey",
      name: "Premium Honey",
      category: "Natural Product",
      description: "Pure honey varieties including 7-in-1 mixed dry fruits, with Amla, Ginger & Garlic.",
      minOrder: "200 liters",
      price: "Contact for quote",
      highlights: [
        "Five premium varieties",
        "Raw and unprocessed",
        "Natural antioxidants",
        "Health benefits certified",
      ],
      image: "/honey-jar-golden-natural.jpg",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Page Header */}
      <section className="py-12 md:py-16 bg-muted/30 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Products</h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Premium agricultural products sourced and exported with international quality standards.
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {allProducts.map((product) => (
              <div
                key={product.id}
                className="group bg-card border border-border rounded-xl overflow-hidden hover:border-primary/50 transition-all duration-300"
              >
                {/* Product Image */}
                <div className="relative overflow-hidden h-64 md:h-72 bg-muted/50">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold">
                    {product.category}
                  </div>
                </div>

                {/* Product Content */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2">{product.name}</h3>
                  <p className="text-muted-foreground mb-4">{product.description}</p>

                  {/* Highlights */}
                  <div className="space-y-2 mb-6">
                    {product.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm">
                        <div className="w-2 h-2 bg-primary rounded-full" />
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>

                  {/* Footer */}
                  <div className="space-y-3 border-t border-border pt-4">
                    <div>
                      <p className="text-xs text-muted-foreground">Minimum Order Quantity</p>
                      <p className="text-lg font-semibold text-primary">{product.minOrder}</p>
                    </div>
                    <Link
                      href={`/products/${product.id}`}
                      className="flex items-center justify-center w-full px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-semibold group/btn"
                    >
                      View Details{" "}
                      <ArrowRight size={16} className="ml-2 group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  )
}
