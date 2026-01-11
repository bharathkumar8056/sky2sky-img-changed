import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import Link from "next/link"
import { ArrowLeft, CheckCircle } from "lucide-react"

const productDetails = {
  "palm-jaggery": {
    name: "Palm Jaggery Powder",
    category: "Natural Sweetener",
    image: "/assets/Palm-Jaggery-powder.png",
    minOrder: "250 kg",
    delivery: "5-10 days",
    description:
      "Premium palm jaggery powder is a traditional sweetener produced from palm tree sap. Rich in minerals and nutrients, it's a natural alternative to refined sugar.",
    fullDescription: `
      Our palm jaggery powder is sourced from premium palm trees and processed using traditional methods. Each batch is carefully tested to ensure purity and quality. It's rich in iron, potassium, and other essential minerals, making it a healthier alternative to refined sugar.

      The product is ideal for:
      - Traditional Indian recipes and desserts
      - Ayurvedic formulations
      - Health-conscious sweetening
      - Commercial beverage production
      - Export markets worldwide
    `,
    specifications: [
      "Color: Brown",
      "Moisture: 2-3%",
      "Particle size: Fine powder",
      "Shelf life: 12 months",
      "Packaging: 25kg bags or custom",
    ],
    benefits: [
      "100% pure and natural",
      "No chemical additives",
      "Rich in essential minerals",
      "Supports digestive health",
      "Traditional production",
      "Long shelf life",
    ],
    paymentTerms: ["100% Advance", "50% Advance + 50% L/C", "Letter of Credit"],
  },
  "cane-sugar": {
    name: "Cane Sugar",
    category: "Industrial Sweetener",
    image: "/assets/cane-sugar1.png",
    minOrder: "1000 kg",
    delivery: "5-10 days",
    description:
      "High-quality cane sugar crystals produced from premium sugarcane. Ideal for industrial, commercial, and consumer applications.",
    fullDescription: `
      Our cane sugar is refined to meet international quality standards. The crystals are uniform in size and purity, making them suitable for all industrial applications. We maintain strict quality control throughout the production process.

      Perfect for:
      - Food and beverage industry
      - Confectionery production
      - Industrial applications
      - Export distribution
      - Retail packaging
    `,
    specifications: [
      "Type: Refined crystal sugar",
      "Purity: 99.8%",
      "Crystal size: Uniform",
      "Moisture: <0.1%",
      "Packaging: 50kg bags or bulk",
    ],
    benefits: [
      "High purity content",
      "Consistent crystal size",
      "Meets international standards",
      "Suitable for all uses",
      "Long storage stability",
      "Cost-effective pricing",
    ],
    paymentTerms: ["100% Advance", "50% Advance + 50% L/C", "Letter of Credit"],
  },
  pickles: {
    name: "Traditional Pickles",
    category: "Condiment",
    image: "/indian-pickles-jars-colorful.jpg",
    minOrder: "500 kg",
    delivery: "5-10 days",
    description:
      "Authentic Indian pickles prepared using traditional recipes and methods. Available in five distinct varieties to suit all preferences.",
    fullDescription: `
      Our pickles are made using traditional Indian recipes passed down through generations. Each variety is crafted with select ingredients and spices. We offer five delicious varieties:

      1. Lemon Pickle - Classic and tangy
      2. Citron Pickle - Mild and refreshing
      3. Mango Pickle - Sweet and spicy
      4. Garlic Pickle - Bold and aromatic
      5. Mixed Vegetables - Blend of seasonal vegetables

      All varieties are prepared without artificial colors or preservatives.
    `,
    varieties: [
      "Lemon Pickle - Classic tangy flavor",
      "Citron Pickle - Mild and refreshing",
      "Mango Pickle - Sweet and spicy blend",
      "Garlic Pickle - Bold aromatic taste",
      "Mixed Vegetables - Seasonal blend",
    ],
    specifications: [
      "Type: Oil-based traditional pickles",
      "Ingredients: Spices, salt, oil",
      "No preservatives or colors",
      "Shelf life: 24 months",
      "Packaging: 500ml to bulk sizes",
    ],
    benefits: [
      "Traditional recipes",
      "No artificial additives",
      "Rich in natural spices",
      "Long shelf life",
      "Versatile uses",
      "Export quality",
    ],
    paymentTerms: ["100% Advance", "50% Advance + 50% L/C", "Letter of Credit"],
  },
  honey: {
    name: "Premium Honey",
    category: "Natural Product",
    image: "/honey-jar-golden-natural.jpg",
    minOrder: "200 liters",
    delivery: "5-10 days",
    description:
      "Premium pure honey available in five special varieties, each offering unique flavors and health benefits.",
    fullDescription: `
      Our honey is sourced from pristine bee farms and processed minimally to retain all natural benefits. We offer five premium varieties:

      1. Pure Raw Honey - Pure, unprocessed
      2. 7-in-1 Honey with Mixed Dry Fruits - Dates, cashews, almonds, pistachios, raisins, figs
      3. Honey with Amla - Enhanced with vitamin C
      4. Honey with Ginger - Warming and therapeutic
      5. Honey with Garlic - Traditional wellness formula

      All varieties are tested for quality and purity.
    `,
    varieties: [
      "Pure Raw Honey - 100% natural",
      "7-in-1 Mixed Dry Fruits - Dates, Cashews, Almonds, Pistachios, Raisins, Figs",
      "Honey with Amla - Vitamin C enriched",
      "Honey with Ginger - Warming properties",
      "Honey with Garlic - Traditional wellness",
    ],
    specifications: [
      "Type: Pure and naturally processed",
      "Moisture: <20%",
      "Purity: 99%+",
      "Shelf life: 24 months",
      "Packaging: 500ml to 20 liter containers",
    ],
    benefits: [
      "Raw and unprocessed",
      "Natural energy boost",
      "Antioxidant rich",
      "Supports immunity",
      "Traditional wellness",
      "Premium quality",
    ],
    paymentTerms: ["100% Advance", "50% Advance + 50% L/C", "Letter of Credit"],
  },
}

export async function generateStaticParams() {
  return [{ slug: "palm-jaggery" }, { slug: "cane-sugar" }, { slug: "pickles" }, { slug: "honey" }]
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const resolvedParams = await params
  const slug = String(resolvedParams.slug)
  
  const product = productDetails[slug as keyof typeof productDetails]
  return {
    title: `${product?.name || "Product"} | Sky 2 Sky Global Exports`,
    description: product?.description || "Premium agricultural product",
  }
}

export default async function ProductDetail({ params }: { params: { slug: string } }) {
  const resolvedParams = await params
  const slug = String(resolvedParams.slug)
  
  const product = productDetails[slug as keyof typeof productDetails]

  if (!product) {
    
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="flex items-center justify-center py-32">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Product not found</h1>
            <Link href="/products" className="text-primary hover:underline">
              Back to products
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 md:py-6">
        <Link href="/products" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground">
          <ArrowLeft size={16} /> Back to Products
        </Link>
      </div>

      {/* Product Details */}
      <section className="py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            {/* Product Image */}
            <div className="relative">
              <div className="bg-muted/30 rounded-xl overflow-hidden border border-border h-96 md:h-full flex items-center justify-center">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Product Info */}
            <div>
              <div className="mb-4">
                <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-semibold">
                  {product.category}
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold mb-4">{product.name}</h1>
              <p className="text-lg text-muted-foreground mb-6">{product.description}</p>

              {/* Key Info Box */}
              <div className="grid grid-cols-2 gap-4 p-6 bg-muted/30 rounded-lg border border-border mb-8">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Minimum Order</p>
                  <p className="text-xl font-bold text-primary">{product.minOrder}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Delivery Time</p>
                  <p className="text-xl font-bold text-primary">{product.delivery}</p>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <a
                  href="https://wa.me/918668029301"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-semibold"
                >
                  Request Quote on WhatsApp
                </a>
                <a
                  href="mailto:sky2skyglobalexports@gmail.com"
                  className="flex items-center justify-center px-6 py-3 border-2 border-primary text-primary rounded-lg hover:bg-primary/5 transition-colors font-semibold"
                >
                  Email Inquiry
                </a>
              </div>

              {/* Specifications */}
              <div className="border-t border-border pt-8">
                <h3 className="text-xl font-bold mb-4">Specifications</h3>
                <ul className="space-y-2">
                  {product.specifications.map((spec, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle size={20} className="text-primary flex-shrink-0 mt-0.5" />
                      <span>{spec}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Payment Terms */}
              <div className="border-t border-border pt-8 mt-8">
                <h3 className="text-xl font-bold mb-4">Payment Options</h3>
                <ul className="space-y-2">
                  {product.paymentTerms.map((term, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full" />
                      <span>{term}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Full Description */}
      <section className="py-16 md:py-20 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8">About This Product</h2>
          <div className="prose prose-lg max-w-none">
            {product.fullDescription.split("\n").map((paragraph, idx) => (
              <p key={idx} className="text-base text-foreground/90 mb-4 leading-relaxed">
                {paragraph.trim()}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      {product.benefits && (
        <section className="py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-12">Why Choose This Product</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {product.benefits.map((benefit, idx) => (
                <div key={idx} className="bg-card border border-border p-6 rounded-lg">
                  <div className="flex items-start gap-4">
                    <CheckCircle size={24} className="text-primary flex-shrink-0 mt-1" />
                    <p className="font-semibold">{benefit}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-[#6c170e] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl text-white font-bold mb-6">Ready to Place an Order?</h2>
          <p className="text-lg text-white/90 mb-8">
            Contact us for current pricing, bulk discounts, and flexible payment options.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/918668029301"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 bg-[#D2AF26] text-[#2C1810] rounded-lg hover:bg-[#D2AF26]/90 transition-colors font-semibold"
            >
              Chat on WhatsApp
            </a>
            <a
              href="tel:+918668029301"
              className="inline-flex items-center justify-center px-8 py-3 border-2 border-white text-white rounded-lg hover:bg-white/10 transition-colors font-semibold"
            >
              Call Us
            </a>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  )
}
