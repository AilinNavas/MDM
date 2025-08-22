"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { useRouter, usePathname } from "next/navigation"
import { Menu, X, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"

const navLinks = [
  { href: "/#process", label: "Our Process" },
  { href: "/#pricing", label: "Pricing" },
  { href: "/#testimonials", label: "Success Stories" },
  { href: "/#faqs", label: "FAQ" },
  { href: "/about-us", label: "About Us" },
]

const services = [
  { href: "/services/marketing-system", label: "Marketing System" },
  { href: "/services/seo-package", label: "SEO Package" },
  { href: "/services/web-design", label: "Web Design" },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [showServices, setShowServices] = useState(false)
  const [showMobileServices, setShowMobileServices] = useState(false)
  const pathname = usePathname()
  const router = useRouter()
  const servicesRef = useRef<HTMLDivElement>(null)
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    setIsOpen(false)
    setShowServices(false)
    setShowMobileServices(false)
  }, [pathname])

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isOpen && !(event.target as Element).closest("header")) {
        setIsOpen(false)
      }
    }

    if (isOpen) {
      document.addEventListener("click", handleClickOutside)
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }

    return () => {
      document.removeEventListener("click", handleClickOutside)
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [])

  const isActive = (href: string) => {
    if (href.startsWith("/#")) return pathname === "/"
    return pathname === href || pathname.startsWith(href + "/")
  }

  const handleNavClick = (href: string) => {
    if (href.startsWith("/#") && pathname !== "/") {
      router.push(href)
    }
  }

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
      timeoutRef.current = null
    }
    setShowServices(true)
  }

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setShowServices(false)
    }, 150)
  }

  const handleServiceClick = (href: string) => {
    setShowServices(false)
    setShowMobileServices(false)
    setIsOpen(false)
    router.push(href)
  }

  const toggleMobileServices = () => {
    setShowMobileServices((prev) => !prev)
  }

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled ? "bg-[#1D3557] shadow-lg" : "bg-[#1D3557]"
      }`}
    >
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <Link href="/" className="flex-shrink-0">
          <Image
            src="/images/logo2.webp"
            width={200}
            height={100}
            alt="logo-company"
            className="h-12 w-auto"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex lg:items-center lg:gap-8">
          {/* Services Dropdown */}
          <div className="relative" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} ref={servicesRef}>
            <button
              className="flex items-center gap-1 text-white hover:text-[#4CAF50] transition-colors duration-200 font-medium uppercase"
              aria-expanded={showServices}
              aria-haspopup="true"
            >
              Services
              <ChevronDown
                size={16}
                className={`transition-transform duration-200 ${showServices ? "rotate-180" : ""}`}
              />
            </button>

            {/* Desktop Dropdown */}
            <div
              className={`absolute left-0 top-full mt-2 w-56 bg-[#1D3557] border border-white/10 rounded-lg shadow-xl transition-all duration-200 ${
                showServices ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2"
              }`}
            >
              <div className="py-2">
                {services.map((service) => (
                  <button
                    key={service.href}
                    onClick={() => handleServiceClick(service.href)}
                    className="w-full text-left px-4 py-3 text-sm text-white hover:bg-white/10 hover:text-[#4CAF50] transition-colors duration-200 font-medium"
                  >
                    {service.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Other Navigation Links */}
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => handleNavClick(link.href)}
              className="uppercase font-medium text-white hover:text-[#4CAF50] transition-colors duration-200"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA & Mobile Menu Button */}
        <div className="flex items-center gap-4">
          <Button asChild className="hidden lg:block bg-[#4CAF50] hover:bg-[#2e7d32] text-white transition-all duration-200 shadow-lg rounded-lg uppercase font-semibold">
            <a  href="https://calendar.app.google/Fgof8rYL83ijGYUi8" target="_blank">Contact Us</a>
          </Button>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-white hover:text-[#4CAF50] transition-colors duration-200"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="lg:hidden fixed inset-x-0 top-16 bg-[#1D3557] border-t border-white/10 shadow-lg z-40">
          <div className="container mx-auto px-4 py-4 space-y-2 max-h-[calc(100vh-4rem)] overflow-y-auto">
            {/* Mobile Services */}
            <div>
              <button
                onClick={toggleMobileServices}
                className="w-full flex items-center justify-between text-white px-3 py-3 font-medium hover:bg-white/10 rounded-lg transition-colors duration-200 uppercase"
                aria-expanded={showMobileServices}
              >
                Services
                <ChevronDown
                  size={18}
                  className={`transition-transform duration-200 ${showMobileServices ? "rotate-180" : ""}`}
                />
              </button>

              {/* Mobile Services Submenu */}
              {showMobileServices && (
                <div className="pl-6 pt-2 space-y-1 animate-in slide-in-from-top-2 duration-200">
                  {services.map((service) => (
                    <button
                      key={service.href}
                      onClick={() => handleServiceClick(service.href)}
                      className="w-full text-left text-white/90 py-2 hover:text-[#4CAF50] transition-colors duration-200 font-medium"
                    >
                      {service.label}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile Navigation Links */}
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => {
                  handleNavClick(link.href)
                  setIsOpen(false)
                }}
                className="block text-white px-3 py-3 rounded-lg transition-colors duration-200 hover:bg-white/10 font-medium uppercase"
              >
                {link.label}
              </Link>
            ))}

            {/* Mobile CTA */}
            <div className="pt-4 border-t border-white/10">
              <Button
              asChild
                className="w-full bg-[#4CAF50] hover:bg-[#2e7d32] text-white transition-all duration-200 shadow-lg rounded-lg uppercase font-semibold py-3"
                onClick={() => setIsOpen(false)}
              ><a  href="https://calendar.app.google/Fgof8rYL83ijGYUi8" target="_blank">
                Contact Us</a>
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Mobile Overlay */}
      {isOpen && <div className="lg:hidden fixed inset-0 top-16 bg-black/30 z-30" onClick={() => setIsOpen(false)} />}
    </header>
  )
}
