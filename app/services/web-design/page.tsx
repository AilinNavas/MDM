'use client'
import Image from "next/image"
import {
  ArrowRight,
  Star,
  Clock,
  Shield,
  Check,
  X,
  Rocket,
  Zap,
} from "lucide-react"
import { motion } from "framer-motion"
import { webDesignFaqs } from "@/app/data/faqs"
import { Button } from "@/components/ui/button"
import FaqSection from "@/components/FaqSection"
import HeroVsl from "@/components/services/HeroVsl"
import LightningProcess from "@/components/services/LightningProcess"
import PricingWebDesign from "@/components/services/PricingWebDesign"


export default function WebDesignPage() {
  return (
    <div className="flex min-h-screen flex-col">


      <main className="flex-1">

        <HeroVsl />

        <PricingWebDesign />

        {/* NEW SECTION: From Meeting to Mockup Process - ENHANCED */}
        <section className="relative bg-gradient-to-br from-[#f8fafc] to-[#f1f5f9] py-20 overflow-hidden">

          <div className="container relative z-10">
            <div className="mx-auto text-center">
              {/* Enhanced Header */}
              <div className="mb-4 inline-flex items-center justify-center rounded-full bg-[#F4A261]/10 px-6 py-2">
                <svg className="h-5 w-5 text-[#F4A261] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <span className="text-sm font-bold text-[#F4A261] uppercase tracking-wide">
                  Lightning Fast Process
                </span>
              </div>

              <h2 className="text-4xl md:text-5xl font-extrabold text-[#1D3557] leading-tight uppercase">
                From Meeting to Mockup
                <br />
                <span className="text-[#4CAF50]">In Just Days, Not Weeks</span>
              </h2>

              <p className="mb-16 pt-4 text-xl text-[#1D3557] leading-relaxed max-w-4xl mx-auto">
                Our process is fast, simple, and completely risk-free.
              </p>

              {/* Enhanced 3-Step Timeline */}
              <div className="relative mb-16">
                {/* Connection line for desktop */}
                <div className="hidden lg:block absolute top-20 left-1/2 transform -translate-x-1/2 w-full max-w-4xl">
                  <div className="relative h-1">
                    <div className="absolute inset-0 bg-gradient-to-r from-[#1D3557] via-[#4CAF50] to-[#1D3557]  rounded-full opacity-20"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-[#1D3557] via-[#4CAF50] to-[#1D3557]  rounded-full animate-pulse"></div>
                  </div>
                </div>

                <div className="grid gap-12 lg:grid-cols-3 lg:gap-8">
                  {/* Step 1 - Enhanced */}
                  <div className="relative group">
                    <div className="text-center">
                      {/* Time badge */}
                      <div className="mb-4 inline-flex items-center justify-center rounded-full bg-[#1D3557]/10 px-4 py-1">
                        <Clock className="h-4 w-4 text-[#1D3557] mr-2" />
                        <span className="text-sm font-semibold text-[#1D3557]">30 Minutes</span>
                      </div>

                      {/* Enhanced icon */}
                      <div className="mb-6 flex justify-center">
                        <div className="relative">
                          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#1D3557] shadow-xl group-hover:shadow-2xl transition-all duration-300 group-hover:scale-110">
                            <svg className="h-10 w-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                              />
                            </svg>
                          </div>
                          {/* Pulse ring */}
                          <div className="absolute -inset-2 rounded-full border-2 border-[#1D3557]/20 animate-ping"></div>
                        </div>
                      </div>

                      <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:-translate-y-2">
                        <h3 className="mb-4 text-2xl font-bold text-[#003366]">Step 1: The Brand Deep-Dive</h3>
                        <p className="text-[#64748b] leading-relaxed mb-6 text-lg">
                          We meet for 30 minutes. You talk—we listen. We uncover your voice, your goals, your style, and
                          everything that makes your practice unique.
                        </p>
                        <div className="flex items-center justify-center text-[#F4A261] font-semibold">

                          <span className="text-[#003366]">You leave with zero pressure—and we get to work.</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Step 2 - Enhanced */}
                  <div className="relative group">
                    <div className="text-center">
                      {/* Time badge */}
                      <div className="mb-4 inline-flex items-center justify-center rounded-full bg-[#4CAF50]/10 px-4 py-1">
                        <Zap className="h-4 w-4 text-[#4CAF50] mr-2" />
                        <span className="text-sm font-semibold text-[#4CAF50]">3-5 Days</span>
                      </div>

                      {/* Enhanced icon */}
                      <div className="mb-6 flex justify-center">
                        <div className="relative">
                          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#4CAF50] shadow-xl group-hover:shadow-2xl transition-all duration-300 group-hover:scale-110">
                            <svg
                              className="h-10 w-10 text-white"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                              />
                            </svg>
                          </div>
                          {/* Pulse ring */}
                          <div
                            className="absolute -inset-2 rounded-full border-2 border-[#F4A261]/20 animate-ping"
                            style={{ animationDelay: "0.5s" }}
                          ></div>
                        </div>
                      </div>

                      <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:-translate-y-2 border-2 border-[#4CAF50]/20">
                        <div className="mb-3 inline-flex items-center justify-center rounded-full bg-[#4CAF50]/10 px-3 py-1">
                          <span className="text-xs font-bold text-[#4CAF50] uppercase tracking-wide">FREE</span>
                        </div>
                        <h3 className="mb-4 text-2xl font-bold text-[#003366]">Step 2: Your Free Custom Preview</h3>
                        <p className="text-[#64748b] leading-relaxed mb-6 text-lg">
                          In just a few days, we present a fully custom homepage and service page—built around your
                          story, brand, and patients.
                        </p>
                        <div className="flex items-center justify-center text-[#4CAF50] font-semibold">

                          <span>You see exactly what your site could be, before paying a dime.</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Step 3 - Enhanced */}
                  <div className="relative group">
                    <div className="text-center">
                      {/* Time badge */}
                      <div className="mb-4 inline-flex items-center justify-center rounded-full bg-[#1D3557]/10 px-4 py-1">
                        <Rocket className="h-4 w-4 text-[#1D3557] mr-2" />
                        <span className="text-sm font-semibold text-[#1D3557]">1-2 Weeks</span>
                      </div>

                      {/* Enhanced icon */}
                      <div className="mb-6 flex justify-center">
                        <div className="relative">
                          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#1D3557] shadow-xl group-hover:shadow-2xl transition-all duration-300 group-hover:scale-110">
                            <svg className="h-10 w-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                              />
                            </svg>
                          </div>
                          {/* Pulse ring */}
                          <div
                            className="absolute -inset-2 rounded-full border-2 border-[#4CAF50]/20 animate-ping"
                            style={{ animationDelay: "1s" }}
                          ></div>
                        </div>
                      </div>

                      <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:-translate-y-2">
                        <h3 className="mb-4 text-2xl font-bold text-[#003366]">Step 3: Final Touches & Launch</h3>
                        <p className="text-[#64748b] leading-relaxed mb-6 text-lg">
                          You approve the design, we handle the tech. Then we meet again to launch your new site and
                          show you how to turn it into a revenue-generating machine.
                        </p>
                        <div className="flex items-center justify-center text-[#1D3557] font-semibold">

                          <span>You're live—and in control.</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Enhanced CTA Section */}
              <div className="relative">
                <div className="">
                  <div className="mb-6 flex items-center justify-center">

                  </div>



                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: 'spring', stiffness: 250 }}
                    className="my-2"
                  >
                    <Button
                    asChild
                      size="lg"
                      className=" bg-gradient-to-r from-[#4CAF50] to-[#2e7d32] text-white hover:from-[#45a049] hover:to-[#256029] transition-all shadow-lg rounded-md uppercase text-lg tracking-wide"
                    ><a  href="https://calendar.app.google/Fgof8rYL83ijGYUi8" target="_blank"><Check className="hidden md:block mr-3 h-6 w-6" />
                      <span className="hidden md:block">Book Your Free Preview </span>
                    

                      <ArrowRight className="ml-2 h-5 w-5 hidden md:block" /></a>
                    </Button>
                  </motion.div>



                  <p className="text-[#4CAF50] font-semibold text-lg uppercase">See First. Pay Later. </p>

                  {/* Trust indicators */}
                  <div className="mt-6 flex flex-col md:flex-row items-center justify-center md:space-x-6 text-sm text-[#64748b]">
                    <div className="flex items-center">
                      <Shield className="h-4 w-4 mr-2 text-[#4CAF50]" />
                      <span>100% Risk-Free</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-2 text-text-[#003366]" />
                      <span>Fast Turnaround</span>
                    </div>
                    <div className="flex items-center">
                      <Star className="h-4 w-4 mr-2 text-[#F4A261] fill-current" />
                      <span>5-Star Process</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 1️⃣ Hero Section */}
        <section className="relative overflow-hidden bg-[#1D3557] py-20 text-white">

          <div className="container grid gap-8 md:grid-cols-2 md:items-center">


            {/* Website Mockup */}
            <div className="relative mx-auto max-w-md">
              {/* Desktop Mockup */}
              <div className="rounded-lg bg-white p-3 shadow-xl">
                <div className="mb-2 flex items-center gap-1">
                  <div className="h-3 w-3 rounded-full bg-red-500"></div>
                  <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                  <div className="h-3 w-3 rounded-full bg-green-500"></div>
                </div>
                <div className="overflow-hidden rounded-md">
                  <Image
                    src="/images/web-design.webp"
                    alt="Modern dental website design"
                    width={600}
                    height={400}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>

              {/* Mobile Mockup */}
              <div className="absolute -bottom-4 md:-bottom-10 right-6 md:-right-10 w-[40%] rounded-lg bg-white p-2 shadow-xl">
                <div className="mb-1 flex justify-center">
                  <div className="h-1 w-8 rounded-full bg-gray-300"></div>
                </div>
                <div className="overflow-hidden rounded-md">
                  <Image
                    src="/images/mobile.webp"
                    alt="Mobile dental website design"
                    width={150}
                    height={300}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="mt-1 flex justify-center">
                  <div className="h-3 w-3 rounded-full border border-gray-300"></div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight uppercase text-center md:text-left">
                Your Website Should Attract More Patients <span className="text-[#4CAF50]">Not Just Sit There</span>
              </h1>
              <p className="text-xl leading-relaxed text-center md:text-left ">
                We create high-converting dental websites that look great, load fast, and bring in new patients.
              </p>

              {/* Trust Badges */}
              <div className="flex flex-wrap gap-4 pt-2 justify-center md:justify-start">
                <div className="flex items-center gap-2 rounded-full bg-white/10 px-4 py-2">
                  <Check className="h-5 w-5 text-[#4CAF50]" />
                  <span className="text-sm font-medium">SEO-Optimized</span>
                </div>
                <div className="flex items-center gap-2 rounded-full bg-white/10 px-4 py-2">
                  <Check className="h-5 w-5 text-[#4CAF50]" />
                  <span className="text-sm font-medium">Mobile-Friendly</span>
                </div>
                <div className="flex items-center gap-2 rounded-full bg-white/10 px-4 py-2">
                  <Check className="h-5 w-5 text-[#4CAF50]" />
                  <span className="text-sm font-medium">No Contracts</span>
                </div>
              </div>

              <div className="pt-4 flex justify-center md:justify-start">


                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: 'spring', stiffness: 250 }}
                >
                  <Button
                  asChild
                    size="lg"
                    className="w-full bg-gradient-to-r from-[#4CAF50] to-[#2e7d32] text-white hover:from-[#45a049] hover:to-[#256029] transition-all shadow-lg rounded-md uppercase text-lg tracking-wide"
                  ><a  href="https://calendar.app.google/Fgof8rYL83ijGYUi8" target="_blank">
                    GET STARTED TODAY
                    <ArrowRight className="ml-2 h-5 w-5" /></a>
                  </Button>
                </motion.div>




              </div>
            </div>

          </div>
        </section>


        {/* 3️⃣ Web Design Packages Section */}













        {/* 5️⃣ Before & After Section */}
        <section className="bg-white py-16">
          <div className="container">
            <div className="mx-auto mb-12 text-center">
              <h2 className="mb-6 text-4xl md:text-5xl font-extrabold text-[#1D3557] leading-tight uppercase text-center">
                Before & After: The Transformation
              </h2>
              <p className="text-xl leading-relaxed text-[#1D3557]">See the difference a high-converting website makes.</p>
            </div>

            <div className="mx-auto mb-16 max-w-4xl">
              <div className="grid gap-8 md:grid-cols-2">
                {/* Before Website */}
                <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-md">
                  <div className="mb-4 inline-block rounded-full bg-red-100 px-4 py-1 text-sm font-medium text-red-600">
                    BEFORE
                  </div>
                  <div className="mb-4 overflow-hidden rounded-lg border border-gray-200">
                    <video
                      src="/videos/before.mp4"
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <X className="mr-2 h-5 w-5 text-red-500" />
                      <span className="text-gray-600">Outdated design</span>
                    </div>
                    <div className="flex items-center">
                      <X className="mr-2 h-5 w-5 text-red-500" />
                      <span className="text-gray-600">Slow loading speed</span>
                    </div>
                    <div className="flex items-center">
                      <X className="mr-2 h-5 w-5 text-red-500" />
                      <span className="text-gray-600">Poor mobile experience</span>
                    </div>
                    <div className="flex items-center">
                      <X className="mr-2 h-5 w-5 text-red-500" />
                      <span className="text-gray-600">No clear call-to-action</span>
                    </div>
                    <div className="flex items-center">
                      <X className="mr-2 h-5 w-5 text-red-500" />
                      <span className="text-gray-600">Not optimized for SEO</span>
                    </div>
                  </div>
                </div>

                {/* After Website */}
                <div className="rounded-lg border border-[#4CAF50] bg-white p-6 shadow-md">
                  <div className="mb-4 inline-block rounded-full bg-green-100 px-4 py-1 text-sm font-medium text-green-600">
                    AFTER
                  </div>
                  <div className="mb-4 overflow-hidden rounded-lg border border-gray-200">
                    <video
                      src="/videos/after.mp4"
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <Check className="mr-2 h-5 w-5 text-[#4CAF50]" />
                      <span className="font-medium text-[#1D3557]">Modern, professional design</span>
                    </div>
                    <div className="flex items-center">
                      <Check className="mr-2 h-5 w-5 text-[#4CAF50]" />
                      <span className="font-medium text-[#1D3557]">Lightning-fast loading</span>
                    </div>
                    <div className="flex items-center">
                      <Check className="mr-2 h-5 w-5 text-[#4CAF50]" />
                      <span className="font-medium text-[#1D3557]">Fully responsive on all devices</span>
                    </div>
                    <div className="flex items-center">
                      <Check className="mr-2 h-5 w-5 text-[#4CAF50]" />
                      <span className="font-medium text-[#1D3557]">Strategic CTAs that convert</span>
                    </div>
                    <div className="flex items-center">
                      <Check className="mr-2 h-5 w-5 text-[#4CAF50]" />
                      <span className="font-medium text-[#1D3557]">SEO-optimized for higher rankings</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>


            <div className="mt-10 text-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 250 }}
              >
                <Button
                asChild
                  size="lg"
                  className="bg-gradient-to-r from-[#4CAF50] to-[#2e7d32] text-white hover:from-[#45a049] hover:to-[#256029] transition-all shadow-lg rounded-md uppercase text-lg tracking-wide"
                ><a href="https://calendar.app.google/Fgof8rYL83ijGYUi8" target="_blank">
                  LET'S BUILD YOUR WEBSITE
                  <ArrowRight className="ml-2 h-5 w-5" /></a>
                </Button>
              </motion.div>
            </div>
          </div>
        </section>




        {/* 7️⃣ FAQ Section */}

        <FaqSection faqs={webDesignFaqs} />
        <LightningProcess />

      </main>

      {/* Sticky CTA Bar for Mobile */}
      <div className="fixed bottom-0 left-0 right-0 z-40 bg-white py-4 shadow-lg md:hidden border-2 border-red-600">
        <div className="container mx-auto flex items-center justify-between px-4">
          <Button asChild className="w-full bg-gradient-to-r from-[#4CAF50] to-[#2e7d32] text-white hover:from-[#45a049] hover:to-[#256029] transition-all shadow-lg rounded-md uppercase text-lg tracking-wide">
            <a  href="https://calendar.app.google/Fgof8rYL83ijGYUi8" target="_blank"><Rocket className="mr-2 h-5 w-5" />
            <span className="uppercase text-lg">Build My Website</span></a>
          </Button>
        </div>
      </div>


    </div>
  )
}
