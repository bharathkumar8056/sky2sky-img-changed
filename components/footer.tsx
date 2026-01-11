"use client"

import type React from "react"

import Link from "next/link"
import { Mail, Phone, MapPin, Instagram } from "lucide-react"
import { ImageWithFallback } from "./image-with-fallback"

export function Footer() {
  const currentYear = new Date().getFullYear()

  const handleQuickLinkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    setTimeout(() => {
      if (typeof window !== "undefined") {
        window.scrollTo({ top: 0, behavior: "smooth" })
      }
    }, 0)
  }

  return (
    <footer className="bg-secondary text-primary-foreground mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-lg overflow-hidden bg-white flex items-center justify-center">
                <ImageWithFallback
                  src="/assets/sky2sky-logo.png"
                  fallbackSrc="/assets/sky2sky-logo.png"
                  alt="Sky 2 Sky logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <h4 className="text-lg font-bold">Sky 2 Sky</h4>
                <span className="text-sm text-primary-foreground/80">Global Exports</span>
              </div>
            </div>
            <p className="text-sm text-primary-foreground/80 mb-4">
              Premium agricultural products for global markets since establishment.
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Phone size={16} />
                <a href="tel:+918668029301" className="text-sm hover:underline">
                  +91 8668 029 301
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={16} />
                <a href="mailto:sky2skyglobalexports@gmail.com" className="text-sm hover:underline">
                  sky2skyglobalexports@gmail.com
                </a>
              </div>
              <div className="flex items-start gap-2">
                <MapPin size={16} className="mt-0.5" />
                <span className="text-sm">Chennai, Tamil Nadu, India</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link onClick={handleQuickLinkClick} href="/" className="text-sm hover:underline">
                  Home
                </Link>
              </li>
              <li>
                <Link onClick={handleQuickLinkClick} href="/about" className="text-sm hover:underline">
                  About Us
                </Link>
              </li>
              <li>
                <Link onClick={handleQuickLinkClick} href="/products" className="text-sm hover:underline">
                  Products
                </Link>
              </li>
              <li>
                <Link onClick={handleQuickLinkClick} href="/contact" className="text-sm hover:underline">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-lg font-bold mb-4">Products</h4>
            <ul className="space-y-2">
              <li>
                <Link onClick={handleQuickLinkClick} href="/products/palm-jaggery" className="text-sm hover:underline">
                  Palm Jaggery Powder
                </Link>
              </li>
              <li>
                <Link onClick={handleQuickLinkClick} href="/products/cane-sugar" className="text-sm hover:underline">
                  Cane Sugar
                </Link>
              </li>
              <li>
                <Link onClick={handleQuickLinkClick} href="/products/pickles" className="text-sm hover:underline">
                  Pickles
                </Link>
              </li>
              <li>
                <Link onClick={handleQuickLinkClick} href="/products/honey" className="text-sm hover:underline">
                  Honey
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h4 className="text-lg font-bold mb-4">Connect With Us</h4>
            <p className="text-sm text-primary-foreground/80 mb-4">Follow us on social media.</p>
            <div className="flex gap-4 mb-6">
              <a
                href="https://www.instagram.com/bkb_incorporation/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm hover:underline"
              >
                <Instagram size={16} />
                BKB Incorporation
              </a>
            </div>
            <div className="flex gap-4 mb-6">
              <a
                href="https://www.instagram.com/brandsparksm/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm hover:underline"
              >
                <Instagram size={16} />
                Brandspark
              </a>
            </div>
            <a
              href="https://wa.me/918668029301"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex px-3 py-2 bg-primary-foreground text-secondary rounded-lg hover:bg-primary-foreground/90 text-sm font-medium"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-primary-foreground/20 pt-8">
          <div className="mb-4">
            <p className="text-sm text-primary-foreground/70">
              Developed By{" "}
              <a
                href="https://www.instagram.com/bkb_incorporation/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold hover:underline"
              >
                BKB Incorporation
              </a>{" "}
              in association with{" "}
              <a
                href="https://www.instagram.com/brandsparksm/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold hover:underline"
              >
                Brandspark
              </a>
            </p>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-primary-foreground/70">
            <p>&copy; {currentYear} Sky 2 Sky Global Exports. All rights reserved.</p>
            <div className="flex gap-4 mt-4 md:mt-0">
              <Link onClick={handleQuickLinkClick} href="/about#privacy" className="hover:underline">
                Privacy Policy
              </Link>
              <Link onClick={handleQuickLinkClick} href="/about#terms" className="hover:underline">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
