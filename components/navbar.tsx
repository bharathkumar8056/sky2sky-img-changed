"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import { ImageWithFallback } from "./image-with-fallback"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/products", label: "Products" },
    { href: "/contact", label: "Contact" },
  ]

  const handleNavClick = (href: string) => {
    setIsOpen(false)
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" })
    }
  }

  return (
    <nav className="sticky top-0 z-50 bg-gradient-to-r from-[#6c170e] via-[#5c1408] to-[#4c0f06] text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <Link href="/" onClick={() => handleNavClick("/")} className="flex items-center gap-2">
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg overflow-hidden bg-white flex items-center justify-center">
              <ImageWithFallback
                src="/assets/sky2sky-logo.png"
                fallbackSrc="/assets/sky2sky-logo.png"
                alt="Sky 2 Sky logo"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="hidden md:flex flex-col">
              <span className="text-sm font-bold leading-tight">Sky 2 Sky</span>
              <span className="text-xs text-white/80">Global Exports</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => handleNavClick(link.href)}
                className="text-white hover:text-white/80 transition-colors font-medium"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* WhatsApp Button */}
          <a
            href="https://wa.me/918668029301"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center justify-center px-4 py-2 bg-[#D2AF26] text-[#6c170e] rounded-lg hover:bg-[#D2AF26]/90 transition-colors text-sm font-medium"
          >
            Get Quote
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 hover:bg-[#D2AF26]/20 rounded-lg transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => handleNavClick(link.href)}
                className="block px-4 py-2 text-white hover:bg-[#D2AF26]/20 rounded-lg transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <a
              href="https://wa.me/918668029301"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full px-4 py-2 bg-[#D2AF26] text-[#6c170e] rounded-lg hover:bg-[#D2AF26]/90 transition-colors text-center font-medium"
            >
              Get Quote
            </a>
          </div>
        )}
      </div>
    </nav>
  )
}
