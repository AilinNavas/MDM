'use client'

import Link from 'next/link'
import { ChevronRight, Facebook, Instagram, Mail } from 'lucide-react'
import Image from 'next/image'

const Footer = () => {
  return (
    <footer className="bg-[#1D3557] border-t pt-12">
    

      {/* Bloque central: logo + redes + llamado a la acción */}
      <div className="max-w-7xl mx-auto px-4 pb-12 text-center flex flex-col items-center">
        <Image
          alt="logo-my-business"
          src="/images/logo2.webp"
          width={300}
          height={200}
          className="h-auto w-48 md:w-64 mb-6"
        />

        <div className="flex gap-4 mb-4">
          {[
            { href: 'https://facebook.com', icon: <Facebook />, label: 'Facebook' },
            { href: 'https://instagram.com', icon: <Instagram />, label: 'Instagram' },
            { href: 'mailto:info@yourbusiness.com', icon: <Mail />, label: 'Email' },
          ].map(({ href, icon, label }) => (
            <Link
              key={label}
              href={href}
              target="_blank"
              aria-label={label}
              className="w-9 h-9 flex items-center justify-center rounded-full  text-white hover:text-[#F4A261]  transition-all duration-300"
            >
              <div className="w-6 h-6">{icon}</div>
            </Link>
          ))}
        </div>

        
      </div>

      {/* Línea inferior */}
      <div className="border-t border-slate-400/50 py-6">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between text-sm text-slate-400">
          <p className="mb-2 md:mb-0">© {new Date().getFullYear()} Mucho Marketing LLC. All rights reserved.</p>
          <div className="flex space-x-4">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-and-conditions" className="hover:text-white transition-colors">
              Terms and Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
