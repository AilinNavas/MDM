import Image from "next/image"
import {
  ArrowRight,
  Star,
  ChevronRight,
  BarChart,
  Clock,
  Shield,
  DollarSign,
  Search,
} from "lucide-react"

import { generalFaqs } from "@/app/data/faqs"
import FaqSection from "@/components/FaqSection"
import { Button } from "@/components/ui/button"
import ServiceOverview from "../components/home/Services"
import PricingSection from "@/components/home/PricingSection"


export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">



      <main className="flex-1">
        {/* 1️⃣ Hero Section with Dynamic Gradient Background */}
        <section className="relative overflow-hidden py-20 bg-[#1D3557]">
          <div className="container grid gap-8 md:grid-cols-2 md:items-center">
            <div className="space-y-6">
              <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-white md:text-5xl lg:text-6xl uppercase text-center md:text-left">
                Dental SEO for <span className="text-[#4CAF50]">Revenue.</span>
                <span className="block text-[#F4A261]">Not vanity.</span>
              </h1>
              <p className="text-xl text-white">
                SEO, web design, and marketing systems built for growth-minded dentists—without the high costs or
                long-term contracts.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Button
                asChild
                className="bg-gradient-to-r from-[#4CAF50] to-[#2e7d32] text-white hover:from-[#45a049] hover:to-[#256029] transition-all shadow-lg rounded-md uppercase" size="lg">
                 <a href="https://calendar.app.google/Fgof8rYL83ijGYUi8" target="_blank"> Get Started Today</a>
                </Button>
               
              </div>
            </div>
            <div className="relative h-[400px] w-full overflow-hidden rounded-lg shadow-lg">
              <Image
                src="/images/herohome.webp"
                alt="Dental marketing professional"
                fill
                className="object-cover"
                priority
              />

              {/* Google Search Overlay */}
              <div className="absolute bottom-4 left-4 right-4 rounded-lg bg-white bg-opacity-90 p-3 shadow-lg">
                <div className="flex items-center">
                  <Search className="mr-2 h-5 w-5 text-[#4285F4]" />
                  <div className="text-sm font-medium">Best Dentist Near Me</div>
                  <div className="ml-auto flex space-x-1">
                    <div className="h-3 w-3 rounded-full bg-[#4285F4]"></div>
                    <div className="h-3 w-3 rounded-full bg-[#EA4335]"></div>
                    <div className="h-3 w-3 rounded-full bg-[#FBBC05]"></div>
                    <div className="h-3 w-3 rounded-full bg-[#34A853]"></div>
                  </div>
                </div>
                <div className="mt-2 text-xs text-[#1D3557]">
                  <span className="font-bold">Your Practice</span> - Showing in top results with our SEO
                </div>
              </div>
            </div>
          </div>

          {/* Add script for dynamic gradient that responds to cursor */}
          <script
            dangerouslySetInnerHTML={{
              __html: `
    document.addEventListener('DOMContentLoaded', function() {
      const gradientElement = document.getElementById('dynamic-gradient-bg');
      if (!gradientElement) return;
      
      // Default animation
      let gradientPos = { x: 50, y: 50 };
      let targetPos = { x: 50, y: 50 };
      let animating = false;
      
      // Add keyframes for the gradient animation
      const style = document.createElement('style');
      style.textContent = \`
        @keyframes gradientAnimation {
          0% { background-position: 0% 50% }
          50% { background-position: 100% 50% }
          100% { background-position: 0% 50% }
        }
      \`;
      document.head.appendChild(style);
      
      // Track mouse movement
      document.addEventListener('mousemove', function(e) {
        // Calculate mouse position as percentage of window
        const x = (e.clientX / window.innerWidth) * 100;
        const y = (e.clientY / window.innerHeight) * 100;
        
        // Set target position with some constraints to avoid extreme positions
        targetPos = {
          x: Math.max(30, Math.min(70, x)),
          y: Math.max(30, Math.min(70, y))
        };
        
        if (!animating) {
          animating = true;
          requestAnimationFrame(updateGradient);
        }
      });
      
      // Smooth animation function
      function updateGradient() {
        // Ease towards target position
        gradientPos.x += (targetPos.x - gradientPos.x) * 0.05;
        gradientPos.y += (targetPos.y - gradientPos.y) * 0.05;
        
        // Apply the position to the gradient
        gradientElement.style.backgroundPosition = \`\${gradientPos.x}% \${gradientPos.y}%\`;
        
        // Continue animation if still moving
        if (
          Math.abs(targetPos.x - gradientPos.x) > 0.1 ||
          Math.abs(targetPos.y - gradientPos.y) > 0.1
        ) {
          requestAnimationFrame(updateGradient);
        } else {
          animating = false;
        }
      }
      
      // Start with a random movement to make it dynamic even without mouse interaction
      setInterval(() => {
        if (!animating) {
          targetPos = {
            x: 30 + Math.random() * 40,
            y: 30 + Math.random() * 40
          };
          animating = true;
          requestAnimationFrame(updateGradient);
        }
      }, 3000);
    });
  `,
            }}
          />
        </section>

        {/* 2️⃣ Key Differentiators with Static Icons with Luminous Effect */}
        {/* Key Differentiators - Modern Design */}
        <section className="bg-[#F5F5F5] py-20 px-6 relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-0 left-0 w-96 h-96 bg-[#4CAF50] rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#F4A261] rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2"></div>
          </div>

          <div className="container mx-auto relative z-10">
            {/* Header */}
            <div className="text-center mb-16">
              <h2 className="mb-6 text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#1D3557] leading-tight uppercase">
                Why Choose Us?

              </h2>
              <p className="text-xl text-[#1D3557]/80 max-w-3xl mx-auto leading-relaxed">
                We deliver exceptional value with transparency, flexibility, and guaranteed results.
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto">
              {[
                {
                  title: "Best Value",
                  description: "One option for each service that includes everything needed, value is maximized",
                  icon: <BarChart className="h-8 w-8" />,
                  gradient: "from-[#4CAF50] to-[#2e7d32]",
                },
                {
                  title: "No Long-Term Contracts",
                  description: "Month-to-month flexibility with guaranteed results",
                  icon: <Clock className="h-8 w-8" />,
                  gradient: "from-[#F4A261] to-[#e67e22]",
                },
                {
                  title: "90-Day Money Back",
                  description: "100% money back guarantee, no questions asked",
                  icon: <Shield className="h-8 w-8" />,
                  gradient: "from-[#4CAF50] to-[#2e7d32]",
                },
                {
                  title: "Budget Friendly",
                  description: "Save up to $50,000 in yearly marketing expenses compared to competitors",
                  icon: <DollarSign className="h-8 w-8" />,
                  gradient: "from-[#F4A261] to-[#e67e22]",
                },
              ].map((item, i) => (
                <div key={i} className="group">
                  <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 h-full transition-all duration-500 hover:shadow-2xl hover:border-[#4CAF50]/20 text-center relative overflow-hidden hover:-translate-y-2">
                    {/* Background Glow Effect */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-3xl`}></div>

                    {/* Icon Container */}
                    <div className="relative mb-6">
                      <div className={`w-16 h-16 bg-gradient-to-br ${item.gradient} rounded-2xl flex items-center justify-center mx-auto shadow-lg group-hover:scale-110 transition-all duration-300 `}>
                        <div className="text-white">
                          {item.icon}
                        </div>
                      </div>

                      {/* Floating Ring Effect */}
                      <div className={`absolute inset-0 w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br ${item.gradient} opacity-20 scale-125 group-hover:scale-150 transition-transform duration-500 blur-md`}></div>
                    </div>

                    {/* Content */}
                    <div className="relative z-10">
                      <h3 className="mb-4 text-xl font-bold text-[#1D3557] leading-tight">
                        {item.title}
                      </h3>
                      <p className="text-[#1D3557]/80 leading-relaxed">
                        {item.description}
                      </p>
                    </div>

                    {/* Bottom Accent Line */}
                    <div className={`absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r ${item.gradient} rounded-b-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        <ServiceOverview />

        {/* 4️⃣ Success Stories & Social Proof - Redesigned with One Impactful Review */}
        <section id="testimonials" className="bg-[#F5F5F5] py-16">
          <div className="container">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#1D3557] text-center leading-tight uppercase mb-6">Success Story</h2>

            <div className="mx-auto max-w-4xl overflow-hidden rounded-xl bg-white shadow-lg">
              <div className="grid md:grid-cols-5">
                {/* Image Column */}
                <div className="relative md:col-span-2">
                  {/* <div className="absolute inset-0 bg-gradient-to-r from-[]/80 to-transparent z-10"></div> */}
                  <Image
                    src="/images/top1.webp"
                    alt="Dr. Sarah Johnson"
                    width={600}
                    height={700}
                    className="h-full w-full object-cover"
                  />
                </div>

                {/* Content Column */}
                <div className="p-8 md:col-span-3 flex flex-col justify-center">
                  <div className="flex mb-4">
                    {[1, 2, 3, 4, 5].map((_, i) => (
                      <Star key={i} className="h-6 w-6 fill-[#F4A261] text-[#F4A261]" />
                    ))}
                  </div>

                  <blockquote className="mb-6">
                    <p className="text-xl font-medium italic text-[#1D3557] mb-4">
                      "Joel has been a valuable asset to my endodontic practice.{" "}
                      <span className="text-[#F4A261] font-bold">
                        He skills with SEO have constantly positioned my practice at the top of the search results.
                      </span>
                      I would not hesitate to recommend Joel to anyone looking to better position their practice through
                      digital marketing."
                    </p>

                    <div className="flex items-center">
                      <div className="mr-4 w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden shrink-0">
                        <Image
                          src="/images/neal.png"
                          alt="Dr. Neal Horn"
                          width={80}
                          height={80}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <div className="font-bold text-[#1D3557]">Dr. Neal Horn</div>
                        <div className="text-[#A8A8A8]">Southside Endodontics, Fort Worth</div>
                      </div>
                    </div>

                  </blockquote>


                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 5️⃣ Pricing Section with Modern Animation */}

        <PricingSection />


        {/* Process Section - Minimalist Timeline */}
        <section id="process" className="relative bg-[#F5F5F5] py-20 overflow-hidden">
          {/* Subtle Background Elements */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#4CAF50] rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-[#F4A261] rounded-full blur-3xl"></div>
          </div>

          <div className="container mx-auto px-6 relative z-10">
            {/* Header */}
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#1D3557] leading-tight uppercase mb-6">
                Our Simple Process
              </h2>
              <p className="text-xl text-[#1D3557]/80 max-w-2xl mx-auto leading-relaxed">
                We make growing your dental practice straightforward and transparent
              </p>
            </div>

            {/* Timeline Container */}
            <div className="max-w-6xl mx-auto">
              {/* Central Timeline Line */}
              <div className="relative">
                {/* Vertical Line for Mobile */}
                <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#4CAF50] via-[#F4A261]  md:hidden"></div>

                {/* Horizontal Line for Desktop */}
                <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-[#4CAF50] via-[#F4A261] to-[#4CAF50] transform -translate-y-1/2"></div>

                {/* Process Steps */}
                <div className="space-y-16 md:space-y-0 md:grid md:grid-cols-4 md:gap-8">
                  {[
                    {
                      step: "01",
                      title: "Discovery Call",
                      description: "We learn about your practice goals and challenges",
                      color: "from-[#4CAF50] to-[#2e7d32]",
                      position: "top"
                    },
                    {
                      step: "02",
                      title: "Custom Strategy",
                      description: "We create a tailored plan for your specific needs",
                      color: "from-[#4CAF50] to-[#2e7d32]",
                      position: "bottom"
                    },
                    {
                      step: "03",
                      title: "Implementation",
                      description: "We execute the strategy with precision and care",
                      color: "from-[#4CAF50] to-[#2e7d32]",
                      position: "top"
                    },
                    {
                      step: "04",
                      title: "Growth & Scaling",
                      description: "We optimize and scale based on performance data",
                      color: "from-[#4CAF50] to-[#2e7d32]",
                      position: "bottom"
                    }
                  ].map((process, i) => (
                    <div key={i} className="relative">
                      {/* Mobile Layout */}
                      <div className="md:hidden flex items-start space-x-6 pl-4">
                        {/* Step Circle */}
                        <div className="flex-shrink-0 relative">
                          <div className={`w-16 h-16 bg-gradient-to-br ${process.color} rounded-2xl flex items-center justify-center shadow-lg relative z-10`}>
                            <span className="text-white font-bold text-lg">{process.step}</span>
                          </div>
                        </div>

                        {/* Content */}
                        <div className="flex-1 pb-8">
                          <h3 className="text-2xl font-bold text-[#1D3557] mb-3">{process.title}</h3>
                          <p className="text-[#1D3557]/80 leading-relaxed">{process.description}</p>
                        </div>
                      </div>

                      {/* Desktop Layout */}
                      <div className="hidden md:block">
                        <div className={`${process.position === 'bottom' ? 'pt-20' : 'pb-20'} text-center`}>
                          {/* Step Circle */}
                          <div className="relative inline-block mb-6">
                            <div className={`w-20 h-20 bg-gradient-to-br ${process.color} rounded-2xl flex items-center justify-center shadow-xl mx-auto relative z-10 hover:scale-110 transition-transform duration-300`}>
                              <span className="text-white font-bold text-xl">{process.step}</span>
                            </div>

                          </div>

                          {/* Content */}
                          <div className="max-w-xs mx-auto">
                            <h3 className="text-xl font-bold text-[#1D3557] mb-3 leading-tight">{process.title}</h3>
                            <p className="text-[#1D3557]/80 text-sm leading-relaxed">{process.description}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom CTA */}
            <div className="mt-20 text-center">


              <button className="bg-gradient-to-r from-[#4CAF50] to-[#2e7d32] text-white font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <a href="https://calendar.app.google/Fgof8rYL83ijGYUi8" target="_blank">Schedule Your Free Consultation</a>
              </button>


            </div>

          </div>
        </section>


        {/* 7️⃣ FAQ Section with Modern Animation */}

        <FaqSection faqs={generalFaqs} id="faqs" />


      </main>


    </div>
  )
}
