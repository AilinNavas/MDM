
'use client'

import { Check, ArrowRight, Play } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import { useState } from 'react'

const HeroVsl = () => {
 
  const highlights = [
    'No contracts. No commitments.',
    '100% custom design based on your brand',
    'HIPAA-compliant forms & SEO-optimized',
    'Real results, risk-free',
  ]

 

  const scrollToContact = () => {
    const element = document.getElementById('contact-form')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="hero-vsl" className="relative overflow-hidden bg-[#1D3557] py-20">
      <div className="container px-4 sm:px-6 mx-auto">
        <div className="mx-auto">
          <div className="grid gap-8 md:grid-cols-2 md:items-center">
            {/* Left Side */}
            <div className="space-y-6">
              <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-white md:text-5xl lg:text-6xl uppercase text-center md:text-left">
                See Your New Dental Website{' '}
                <span className="text-[#4CAF50]">Before You Pay a Dime</span>
              </h1>

              <p className="text-xl text-white text-center md:text-left">
                We&apos;ll design a custom homepage and service page for your practice—based on your story, tone, and
                goals. You only pay if you love it.
              </p>

              <div className="space-y-3 ">
                {highlights.map((highlight, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#4CAF50]">
                      <Check className="h-4 w-4 text-white" />
                    </div>
                    <span className="text-lg font-medium text-white">{highlight}</span>
                  </div>
                ))}
              </div>

              <div className="flex justify-center md:justify-start">
                <div className="pt-4">
                  <motion.div whileHover={{ scale: 1.05 }} transition={{ type: 'spring', stiffness: 250 }}>
                    <Button
                      size="lg"
                      className="w-full bg-gradient-to-r from-[#4CAF50] to-[#2e7d32] text-white hover:from-[#45a049] hover:to-[#256029] transition-all shadow-lg rounded-md uppercase text-lg tracking-wide"
                    >
                      Book My Free Design Meeting
                      <ArrowRight className="ml-2 h-5 w-5 hidden md:block" />
                    </Button>
                  </motion.div>
                  <p className='text-center text-sm text-gray-500 pt-2 font-semibold'>We’ll build your homepage first — pay only if you're thrilled.<span className='text-[#4CAF50]'> $3,497</span></p>
                </div>
              </div>
            </div>

            {/* Right Side - Canva Video Embed */}
            <div className="order-first md:order-last pr-3 md:pr-0">
              <div className="relative w-full aspect-video rounded-md overflow-hidden shadow-lg">
     
                <iframe
                  src="https://www.canva.com/design/DAGsm90S8zY/wYVdgERxYXD8L3VgbkQjfQ/watch?embed"
                  title="Canva Video"
                  className="w-full h-full rounded-md"
                  allowFullScreen
                ></iframe>
              </div>

              <p className="mt-4 text-center text-sm font-medium text-[#1D3557]">
                Watch: How We Build Your Website Before You Ever Pay
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroVsl

