"use client"

import type React from "react"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Mail, Phone, MapPin, Clock, ChevronDown } from "lucide-react"
import { useState } from "react"

export default function ContactPage() {
  const [expandedFaq, setExpandedFaq] = useState<string | null>(null)

  const faqs = [
    {
      id: "moq",
      question: "What are the minimum order quantities?",
      answer:
        "Our minimum order quantities are: Palm Jaggery Powder (250 kg), Cane Sugar (1000 kg), Pickles (500 kg - mixed varieties like Lemon, Citron, Mango, Garlic, Mixed Vegetables), and Honey (200 liters - available in 5 varieties including Pure, 7-in-1 Mixed Dry Fruits, Amla, Ginger, and Garlic). These can be adjusted based on specific requirements.",
    },
    {
      id: "payment",
      question: "What payment methods do you accept?",
      answer:
        "We offer three flexible payment options: 100% Advance payment for fastest processing, 50% Advance + 50% Letter of Credit for balanced arrangements, and 100% Letter of Credit for established business partners. Please contact us to discuss which option works best for your business. We accept wire transfers, SWIFT payments, and international banking channels.",
    },
    {
      id: "delivery",
      question: "What is your delivery timeline?",
      answer:
        "Standard delivery time is 5-10 days from port, depending on the product type, packaging requirements, and whether shipping is by air or sea. Processing takes 2-3 business days after payment. International shipping adds 7-30 days based on destination and customs clearance. Air freight typically delivers in 7-14 days internationally, while sea freight takes 20-30 days.",
    },
    {
      id: "shipping",
      question: "Do you handle international shipping?",
      answer:
        "Yes, we arrange both air and sea shipping to destinations worldwide from Chennai port, Tamil Nadu. Air shipping is ideal for urgent orders and smaller shipments with faster delivery (7-14 days). Sea freight is cost-effective for large shipments with longer transit times (20-30 days). We work with reliable, trusted freight partners to ensure safe delivery of all products.",
    },
    {
      id: "quality",
      question: "How do you ensure product quality?",
      answer:
        "All our products meet international quality standards and certifications. We conduct rigorous testing for purity, safety, and compliance. Products are sourced from certified suppliers and processed using traditional methods combined with modern quality controls. Every batch is inspected before shipment to ensure premium quality reaches our customers.",
    },
    {
      id: "varieties",
      question: "Can you customize product varieties?",
      answer:
        "For pickles, we offer Lemon, Citron, Mango, Garlic, and Mixed Vegetables varieties - you can customize your 500 kg order based on your preference. For honey, we have Pure Honey, 7-in-1 Mixed Dry Fruits, Honey with Amla, Ginger, and Garlic - select your preferred varieties from our 200-liter minimum. Custom blends may be available upon request for larger orders.",
    },
    {
      id: "storage",
      question: "What is the shelf life of your products?",
      answer:
        "Palm Jaggery Powder has a shelf life of 12 months, Cane Sugar is stable for long-term storage, Pickles and Honey each have 24-month shelf lives. All products should be stored in cool, dry conditions for optimal quality and longevity. Proper storage ensures you get maximum value from your order.",
    },
    {
      id: "samples",
      question: "Can I request product samples?",
      answer:
        "Yes, we offer product samples for evaluation before placing bulk orders. Contact us directly via WhatsApp (+91 8668029301), email (sky2skyglobalexports@gmail.com), or phone to discuss sample availability, packaging sizes, shipping arrangements, and associated costs.",
    },
  ]

  const toggleFaq = (id: string) => {
    setExpandedFaq(expandedFaq === id ? null : id)
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Page Header */}
      <section className="py-12 md:py-16 bg-muted/30 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">Contact Us</h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Get in touch with our team for inquiries, quotes, and business partnerships.
          </p>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {/* Phone */}
            <a
              href="tel:+918668029301"
              className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-colors group"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <Phone size={24} className="text-primary" />
              </div>
              <h3 className="font-bold text-lg mb-2 text-foreground">Phone</h3>
              <p className="font-bold text-base" style={{ color: "#D2AF26" }}>
                +91 8668 029 301
              </p>
            </a>

            {/* Email */}
            <a
              href="mailto:sky2skyglobalexports@gmail.com"
              className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-colors group"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <Mail size={24} className="text-primary" />
              </div>
              <h3 className="font-bold text-lg mb-2 text-foreground">Email</h3>
              <p className="font-bold text-sm break-all" style={{ color: "#D2AF26" }}>
                sky2skyglobalexports@gmail.com
              </p>
            </a>

            {/* Location */}
            <div className="bg-card border border-border rounded-xl p-6">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <MapPin size={24} className="text-primary" />
              </div>
              <h3 className="font-bold text-lg mb-2 text-foreground">Location</h3>
              <p className="text-muted-foreground">8/32, Middle Street, Arasanga Nagar, Themangulam, Nazerath,
Thoothukudi - 628617</p>
            </div>

            {/* WhatsApp */}
            <a
              href="https://wa.me/918668029301"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-accent/10 border-2 border-accent rounded-xl p-6 hover:bg-accent/20 transition-colors group"
            >
              <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-accent/30 transition-colors">
                <MessageCircleIcon size={24} className="text-accent" />
              </div>
              <h3 className="font-bold text-lg mb-2 text-foreground">WhatsApp</h3>
              <p className="font-bold" style={{ color: "#D2AF26" }}>
                Chat Now
              </p>
            </a>
          </div>

          {/* Main CTA */}
          <div className="bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20 rounded-xl p-8 text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">Quick Response Guaranteed</h2>
            <p className="text-lg text-muted-foreground mb-6">
              Contact us via WhatsApp for the fastest response to your inquiries and quotes.
            </p>
            <a
              href="https://wa.me/918668029301"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-3 rounded-lg hover:opacity-90 transition-opacity font-semibold text-foreground"
              style={{ backgroundColor: "#D2AF26" }}
            >
              Send Message on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center text-foreground">
            Frequently Asked Questions
          </h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Find answers to common questions about our products and services.
          </p>

          <div className="space-y-3">
            {faqs.map((faq) => (
              <button
                key={faq.id}
                onClick={() => toggleFaq(faq.id)}
                className="w-full bg-background border border-border rounded-lg p-6 text-left hover:border-primary/50 transition-colors"
              >
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-lg font-semibold pr-4 text-foreground">{faq.question}</h3>
                  <ChevronDown
                    size={20}
                    className={`text-primary flex-shrink-0 transition-transform ${
                      expandedFaq === faq.id ? "rotate-180" : ""
                    }`}
                  />
                </div>
                {expandedFaq === faq.id && <p className="text-muted-foreground mt-4 leading-relaxed">{faq.answer}</p>}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-secondary rounded-xl p-8 md:p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Have Additional Questions?</h2>
            <p className="text-lg text-white/90 mb-8">
              Our team is ready to assist you with detailed product information, custom quotes, and partnership
              opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/918668029301"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-semibold"
              >
                Message on WhatsApp
              </a>
              <a
                href="tel:+918668029301"
                className="inline-flex items-center justify-center px-6 py-3 border-2 border-white text-white rounded-lg hover:bg-white/10 transition-colors font-semibold"
              >
                Call Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Business Hours */}
      <section className="py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-start gap-4 bg-card border border-border rounded-lg p-6">
            <Clock size={24} className="text-primary flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-bold text-lg mb-2 text-foreground">Available 24/7</h3>
              <p className="text-muted-foreground">
                You can reach us anytime via email or WhatsApp. For phone inquiries, we're available during standard
                business hours in India (IST).
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  )
}

function MessageCircleIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  )
}
