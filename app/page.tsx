"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import Link from "next/link"
import { ArrowRight, Award, Truck, Shield, Zap, Check, Globe, Users, TrendingUp } from "lucide-react"
import { ImageWithFallback } from "@/components/image-with-fallback"

export default function Home() {
  const products = [
    {
      id: "palm-jaggery",
      name: "Palm Jaggery Powder",
      description: "Pure, natural sweetness from palm trees. Perfect for beverages and traditional recipes.",
      minOrder: "250 kg",
      image: "/assets/Palm-Jaggery-powder.png",
      slug: "palm-jaggery",
    },
    {
      id: "cane-sugar",
      name: "Cane Sugar",
      description: "Premium quality cane sugar crystals for industrial and commercial use.",
      minOrder: "1000 kg",
      image: "/assets/cane-sugar1.png",
      slug: "cane-sugar",
    },
    {
      id: "pickles",
      name: "Traditional Pickles",
      description: "Authentic Indian pickles - 5 varieties including Lemon, Citron, Mango, Garlic & Mixed Vegetables.",
      minOrder: "500 kg",
      image: "/indian-pickles-jars-colorful.jpg",
      slug: "pickles",
    },
    {
      id: "honey",
      name: "Premium Honey",
      description: "Pure honey varieties including 7-in-1 mixed dry fruits, with Amla, Ginger & Garlic.",
      minOrder: "200 liters",
      image: "/honey-jar-golden-natural.jpg",
      slug: "honey",
    },
  ]

  const features = [
    {
      icon: Award,
      title: "Quality Assured",
      description: "Premium products meeting international quality standards and certifications",
    },
    {
      icon: Truck,
      title: "Fast Delivery",
      description: "5-10 days delivery based on product type and chosen shipping method",
    },
    {
      icon: Shield,
      title: "Trusted Partner",
      description: "Reliable global exports with flexible payment and delivery options",
    },
  ]

  const whyChooseUs = [
    {
      icon: Zap,
      title: "Fast Response",
      description: "Quick quotes and order processing via WhatsApp and email within 24 hours",
    },
    {
      icon: Check,
      title: "Certified Quality",
      description: "All products tested for purity, safety and compliance with international standards",
    },
    {
      icon: Award,
      title: "Experience",
      description: "Years of expertise in agricultural exports with global customer base",
    },
    {
      icon: Shield,
      title: "Reliable Shipping",
      description: "Both air and sea shipping options with trusted freight partners worldwide",
    },
    {
      icon: Truck,
      title: "Flexible MOQ",
      description: "Competitive minimum order quantities with options for custom arrangements",
    },
    {
      icon: ArrowRight,
      title: "Easy Ordering",
      description: "Simple ordering process with 100% advance, 50/50, or LC payment flexibility",
    },
  ]

  const premiumBenefits = [
    {
      icon: Globe,
      title: "Global Reach",
      description: "Export to any country with efficient international shipping logistics and customs support",
    },
    {
      icon: TrendingUp,
      title: "Market Competitive",
      description: "Competitive pricing with volume discounts for bulk orders and long-term partnerships",
    },
    {
      icon: Users,
      title: "Dedicated Support",
      description: "Personal account manager for your business ensuring smooth operations and quick issue resolution",
    },
  ]

  const handleScrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" })
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative overflow-hidden py-12 md:py-24 lg:py-32">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/8 via-background to-accent/8" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6">
              <div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">
                  Sky 2 Sky <br />
                  <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    Global Exports
                  </span>
                </h1>
                <p className="text-lg md:text-xl text-foreground/80">
                  Premium agricultural products from India to the world. Authentic quality, reliable partnerships, and
                  fast delivery.
                </p>
              </div>

              <p className="text-base text-foreground/75 leading-relaxed">
                Specializing in palm jaggery powder, cane sugar, traditional pickles, and pure honey. We serve global
                markets with flexible payment options and multiple shipping solutions. Direct exports from Chennai,
                Tamil Nadu with over a decade of industry expertise.
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                <Link
                  href="/products"
                  onClick={handleScrollToTop}
                  className="inline-flex items-center justify-center px-6 py-3 bg-[#D2AF26] text-[#2C1810] rounded-lg hover:bg-[#D2AF26]/90 transition-colors font-semibold"
                >
                  Explore Products <ArrowRight size={18} className="ml-2" />
                </Link>
                <a
                  href="https://wa.me/918668029301"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3 border-2 border-[#D2AF26] text-[#D2AF26] rounded-lg hover:bg-[#D2AF26]/10 transition-colors font-semibold"
                >
                  Get Quote Now
                </a>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-4 pt-8 border-t border-border">
                <div>
                  <p className="text-2xl md:text-3xl font-bold text-primary">4+</p>
                  <p className="text-sm text-muted-foreground">Product Lines</p>
                </div>
                <div>
                  <p className="text-2xl md:text-3xl font-bold text-primary">Global</p>
                  <p className="text-sm text-muted-foreground">Export Ready</p>
                </div>
                <div>
                  <p className="text-2xl md:text-3xl font-bold text-primary">Fast</p>
                  <p className="text-sm text-muted-foreground">Delivery</p>
                </div>
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative">
              <div className="relative rounded-xl overflow-hidden shadow-lg h-96 md:h-[500px] bg-muted flex items-center justify-center">
                <ImageWithFallback
                  src="/agricultural-products-spices-honey-premium-export.jpg"
                  fallbackSrc="/agricultural-products-spices-honey-premium.jpg"
                  alt="Premium agricultural products"
                  className="w-full h-full object-cover"
                />
                <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-accent/20 rounded-full blur-3xl -z-10" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-muted/30 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {features.map((feature) => {
              const Icon = feature.icon
              return (
                <div
                  key={feature.title}
                  className="bg-background p-8 rounded-xl border border-border hover:border-primary/50 hover:shadow-lg transition-all"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center mb-4">
                    <Icon size={24} className="text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              )
            })}
          </div>

          <div className="bg-gradient-to-r from-primary/8 to-accent/8 border border-primary/20 rounded-xl p-8 md:p-12 mb-16">
            <h3 className="text-2xl md:text-3xl font-bold mb-8">Our Commitment to Excellence</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {whyChooseUs.map((item) => {
                const Icon = item.icon
                return (
                  <div key={item.title} className="flex gap-4">
                    <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon size={20} className="text-primary-foreground" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">{item.title}</h4>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          <div className="bg-gradient-to-r from-primary/8 to-accent/8 border border-primary/20 rounded-xl p-8 md:p-12 mb-16">
            <h3 className="text-2xl md:text-3xl font-bold mb-8">Premium Partnership Benefits</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {premiumBenefits.map((item) => {
                const Icon = item.icon
                return (
                  <div key={item.title} className="bg-background rounded-lg p-6 border border-secondary/10">
                    <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4">
                      <Icon size={24} className="text-secondary" />
                    </div>
                    <h4 className="font-semibold mb-2">{item.title}</h4>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Products Preview */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Our Premium Products</h2>
            <p className="text-lg text-muted-foreground">
              Carefully selected agricultural exports with detailed specifications and competitive minimum order
              quantities
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <Link
                key={product.id}
                href={`/products/${product.slug}`}
                className="group bg-background border border-border rounded-xl overflow-hidden hover:border-primary/50 hover:shadow-lg transition-all duration-300"
              >
                <div className="relative h-72 bg-muted overflow-hidden">
                  <ImageWithFallback
                    src={product.image}
                    fallbackSrc={`/placeholder.svg?height=288&width=300&query=${product.name}`}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors" />
                </div>
                <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors text-foreground">
                  {product.name}
                </h3>
                <p className="text-sm text-muted-foreground mb-3">{product.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                    MOQ: {product.minOrder}
                  </span>
                  <ArrowRight size={16} className="text-primary group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/products"
              onClick={handleScrollToTop}
              className="inline-flex items-center justify-center px-6 py-3 bg-[#6c170e] text-white rounded-lg hover:bg-[#6c170e]/90 transition-colors font-semibold"
            >
              View All Products <ArrowRight size={18} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Business Terms & Logistics */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-background to-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-foreground">
            Business Terms & Logistics
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* Lead Times */}
            <div className="bg-background border border-border rounded-xl p-8 hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold mb-6 text-primary">Lead Times</h3>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  <strong className="text-foreground">Processing Time:</strong> 2-3 business days for order confirmation
                  and product preparation once payment is received.
                </p>
                <p>
                  <strong className="text-foreground">Port Delivery:</strong> 5-10 days from port based on product type
                  and packaging requirements. Palm Jaggery and Honey typically require 5-7 days, while Pickles and Cane
                  Sugar may take 7-10 days.
                </p>
                <p>
                  <strong className="text-foreground">International Shipping:</strong> Additional 7-30 days depending on
                  destination, shipping method (air or sea), and customs clearance time. Air freight typically delivers
                  in 7-14 days, while sea freight takes 20-30 days.
                </p>
                <p>
                  <strong className="text-foreground">Custom Arrangements:</strong> Expedited processing available for
                  bulk orders. Contact us for specific timeline requirements.
                </p>
              </div>
            </div>

            {/* Payment Policy */}
            <div className="bg-background border border-border rounded-xl p-8 hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold mb-6 text-primary">Payment Policy</h3>
              <div className="space-y-4 text-muted-foreground">
                <div>
                  <strong className="text-foreground">Option 1: 100% Advance</strong>
                  <p className="text-sm mt-1">
                    Full payment before shipment. Fastest processing and guaranteed priority.
                  </p>
                </div>
                <div>
                  <strong className="text-foreground">Option 2: 50% Advance + 50% L/C</strong>
                  <p className="text-sm mt-1">
                    Half payment upfront, remaining through Letter of Credit upon shipment.
                  </p>
                </div>
                <div>
                  <strong className="text-foreground">Option 3: 100% Letter of Credit</strong>
                  <p className="text-sm mt-1">Full L/C payment available for established business partners.</p>
                </div>
                <p className="pt-4 border-t border-border">
                  <strong className="text-foreground">Bank Details:</strong> Available upon request. Multiple payment
                  methods accepted including wire transfer, SWIFT, and international banking channels.
                </p>
              </div>
            </div>

            {/* Shipping Policy */}
            <div className="bg-background border border-border rounded-xl p-8 hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold mb-6 text-primary">Shipping Policy</h3>
              <div className="space-y-4 text-muted-foreground">
                <div>
                  <strong className="text-foreground">Air Freight</strong>
                  <p className="text-sm mt-1">
                    Recommended for urgent orders and smaller shipments. Faster delivery (7-14 days internationally) but
                    higher costs.
                  </p>
                </div>
                <div>
                  <strong className="text-foreground">Sea Freight</strong>
                  <p className="text-sm mt-1">
                    Cost-effective for large shipments. Longer transit time (20-30 days) but better rates for bulk
                    orders.
                  </p>
                </div>
                <div>
                  <strong className="text-foreground">Port Location</strong>
                  <p className="text-sm mt-1">
                    All shipments from Chennai port, Tamil Nadu. Professional packaging ensures product integrity during
                    transit.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Minimum Order Quantities */}
          <div className="bg-gradient-to-r from-primary/8 to-accent/8 border border-primary/20 rounded-xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold mb-8 text-foreground">Minimum Order Quantities</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-background rounded-lg p-6 border border-primary/10">
                <h4 className="font-bold text-lg mb-2 text-primary">Palm Jaggery Powder</h4>
                <p className="text-3xl font-bold text-foreground mb-2">250 kg</p>
                <p className="text-sm text-muted-foreground">Natural, pure sweetness from palm trees</p>
              </div>
              <div className="bg-background rounded-lg p-6 border border-primary/10">
                <h4 className="font-bold text-lg mb-2 text-primary">Cane Sugar</h4>
                <p className="text-3xl font-bold text-foreground mb-2">1,000 kg</p>
                <p className="text-sm text-muted-foreground">Premium quality crystals for commercial use</p>
              </div>
              <div className="bg-background rounded-lg p-6 border border-primary/10">
                <h4 className="font-bold text-lg mb-2 text-primary">Pickles</h4>
                <p className="text-3xl font-bold text-foreground mb-2">500 kg</p>
                <p className="text-sm text-muted-foreground">
                  5 varieties: Lemon, Citron, Mango, Garlic, Mixed Vegetables
                </p>
              </div>
              <div className="bg-background rounded-lg p-6 border border-primary/10">
                <h4 className="font-bold text-lg mb-2 text-primary">Honey</h4>
                <p className="text-3xl font-bold text-foreground mb-2">200 liters</p>
                <p className="text-sm text-muted-foreground">5 varieties: Pure, 7-in-1, Amla, Ginger, Garlic</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mt-6 p-4 bg-background rounded-lg border border-primary/10">
              All minimum order quantities can be customized based on specific buyer requirements. Contact us for
              flexible arrangements on larger orders or specific product combinations.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Ready to Work With Us?</h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Get in touch with our team for competitive pricing, custom quotes, and flexible payment arrangements. We're
            here to support your business growth with reliable, quality products.
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
              href="mailto:sky2skyglobalexports@gmail.com"
              className="inline-flex items-center justify-center px-6 py-3 border-2 border-white text-white rounded-lg hover:bg-white/10 transition-colors font-semibold"
            >
              Email Us
            </a>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  )
}
