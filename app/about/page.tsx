import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import Link from "next/link"
import { CheckCircle, Globe, Zap, Users } from "lucide-react"
import { ImageWithFallback } from "@/components/image-with-fallback"

export const metadata = {
  title: "About Us | Sky 2 Sky Global Exports",
  description:
    "Learn about Sky 2 Sky Global Exports, our mission, values, and commitment to quality agricultural products.",
}

export default function AboutPage() {
  const values = [
    {
      icon: Globe,
      title: "Global Quality",
      description: "Meeting international standards for every product we export",
    },
    {
      icon: Users,
      title: "Partnership Focus",
      description: "Building long-term relationships with reliable buyers worldwide",
    },
    {
      icon: Zap,
      title: "Fast & Reliable",
      description: "Efficient delivery and consistent supply chain management",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Page Header */}
      <section className="py-12 md:py-16 bg-muted/30 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Sky 2 Sky Global Exports</h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Committed to delivering premium agricultural products with excellence and reliability.
          </p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Who We Are</h2>
              <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                Sky 2 Sky Global Exports is a premier agricultural export company based in Thoothukudi, Tamil Nadu, India.
                We specialize in premium quality products including palm jaggery powder, cane sugar, traditional
                pickles, and pure honey.
              </p>
              <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                Our commitment is to connect Indian agricultural excellence with global markets. We maintain strict
                quality control and ensure timely delivery with flexible payment options.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                With expertise in international trade, we serve clients across the globe with reliability, transparency,
                and competitive pricing.
              </p>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-[#D2AF26]/10 to-[#6c170e]/10 rounded-xl overflow-hidden border border-border h-96 flex items-center justify-center">
                <ImageWithFallback
                  src="/company-agriculture-export-premium.jpg"
                  fallbackSrc="/agricultural-company-team-premium.jpg"
                  alt="Sky 2 Sky Global Exports team and agricultural products"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value) => {
              const Icon = value.icon
              return (
                <div key={value.title} className="bg-background p-8 rounded-xl border border-border text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Icon size={24} className="text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Get In Touch</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-card border border-border p-8 rounded-xl">
              <h3 className="text-xl font-bold mb-4">Phone</h3>
              <a href="tel:+918668029301" className="text-primary text-lg font-semibold hover:underline">
                +91 8668 029 301
              </a>
            </div>
            <div className="bg-card border border-border p-8 rounded-xl">
              <h3 className="text-xl font-bold mb-4">Email</h3>
              <a
                href="mailto:sky2skyglobalexports@gmail.com"
                className="text-primary text-lg font-semibold hover:underline break-all"
              >
                sky2skyglobalexports@gmail.com
              </a>
            </div>
            <div className="bg-card border border-border p-8 rounded-xl">
              <h3 className="text-xl font-bold mb-4">Location</h3>
              <p className="text-muted-foreground">8/32, Middle Street, Arasanga Nagar, Themangulam, Nazerath,
Thoothukudi - 628617</p>
            </div>
          </div>
        </div>
      </section>

      {/* Privacy Policy Section */}
      <section id="privacy" className="py-16 md:py-24 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Privacy Policy</h2>

          <div className="space-y-6 text-foreground/90">
            <div>
              <h3 className="text-xl font-bold mb-3">1. Information We Collect</h3>
              <p className="leading-relaxed">
                We collect information you provide directly to us, such as your name, email address, phone number,
                company details, and inquiry information when you contact us for quotes or product information.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-3">2. How We Use Your Information</h3>
              <p className="leading-relaxed mb-3">We use the information we collect to:</p>
              <ul className="space-y-2 ml-4">
                <li className="flex items-start gap-3">
                  <CheckCircle size={20} className="text-primary flex-shrink-0 mt-0.5" />
                  <span>Respond to your inquiries and provide product quotes</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle size={20} className="text-primary flex-shrink-0 mt-0.5" />
                  <span>Process orders and manage shipping details</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle size={20} className="text-primary flex-shrink-0 mt-0.5" />
                  <span>Communicate about products and services</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle size={20} className="text-primary flex-shrink-0 mt-0.5" />
                  <span>Improve our website and service quality</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-3">3. Data Security</h3>
              <p className="leading-relaxed">
                We implement industry-standard security measures to protect your personal information. All data
                submitted through contact forms and inquiries is handled confidentially and securely.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-3">4. Information Sharing</h3>
              <p className="leading-relaxed">
                We do not share your personal information with third parties without your consent, except when required
                by law or necessary to fulfill your orders.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-3">5. Contact Us</h3>
              <p className="leading-relaxed">
                If you have any questions about our privacy practices, please contact us at{" "}
                <a href="mailto:sky2skyglobalexports@gmail.com" className="text-primary hover:underline">
                  sky2skyglobalexports@gmail.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Terms of Service Section */}
      <section id="terms" className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Terms of Service</h2>

          <div className="space-y-6 text-foreground/90">
            <div>
              <h3 className="text-xl font-bold mb-3">1. Product Specifications</h3>
              <p className="leading-relaxed">
                All product specifications, minimum order quantities, and delivery timelines are provided in good faith.
                We reserve the right to adjust specifications based on availability and market conditions.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-3">2. Payment Terms</h3>
              <p className="leading-relaxed mb-3">We offer flexible payment options:</p>
              <ul className="space-y-2 ml-4">
                <li className="flex items-start gap-3">
                  <CheckCircle size={20} className="text-primary flex-shrink-0 mt-0.5" />
                  <span>100% Advance Payment</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle size={20} className="text-primary flex-shrink-0 mt-0.5" />
                  <span>50% Advance + 50% Letter of Credit</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle size={20} className="text-primary flex-shrink-0 mt-0.5" />
                  <span>Letter of Credit (100%)</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-3">3. Delivery & Shipping</h3>
              <p className="leading-relaxed">
                Delivery time is typically 5-10 days depending on product type, packaging, and shipping method (Air or
                Sea). Delivery times are estimates and not guaranteed. The buyer is responsible for arranging customs
                clearance and local port charges.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-3">4. Quality Assurance</h3>
              <p className="leading-relaxed">
                We guarantee that all products are of premium quality and meet international standards. Any complaints
                regarding product quality must be reported within 7 days of receipt.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-3">5. Order Cancellation</h3>
              <p className="leading-relaxed">
                Orders cannot be cancelled after payment has been received and products are being prepared for shipment.
                Any cancellation requests must be made in writing before production begins.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-3">6. Liability</h3>
              <p className="leading-relaxed">
                Sky 2 Sky Global Exports is not liable for any indirect, incidental, or consequential damages arising
                from the use of our products or services.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-3">7. Amendments</h3>
              <p className="leading-relaxed">
                We reserve the right to modify these terms at any time. Continued use of our services after
                modifications constitutes your acceptance of the updated terms.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-[#6c170e] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl  text-white font-bold mb-6">Ready to Work With Us?</h2>
          <p className="text-lg text-white/90 mb-8">
            Contact us today for product information, quotes, and to begin your partnership with Sky 2 Sky.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-3 bg-white text-[#6c170e] rounded-lg hover:opacity-95 transition-colors font-semibold"
          >
            Contact Us
          </Link>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  )
}
