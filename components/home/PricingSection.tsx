import { FC } from "react";
import { Button } from "@/components/ui/button";
import { Check, Star, ArrowRight } from 'lucide-react';

const pricingData = [
  {
    service: "SEO",
    price: "897",
    period: "month",
    included: [
      "Keyword research & analysis",
      "On-page optimization",
      "Local SEO setup",
      "Monthly reporting",
      "Google Business Profile management"
    ],
    color: "from-[#4CAF50] to-[#2e7d32]",
  },
  {
    service: "Marketing System",
    price: "2,497",
    period: "month",
    included: [
      "Everything in SEO package",
      "Google & Meta ads management",
      "Email marketing automation",
      "Patient acquisition system",
      "Dedicated account manager"
    ],
    highlight: false,
    color: "from-[#4CAF50] to-[#2e7d32]",
    badge: "Most Popular"
  },
  {
    service: "Multi-Page Website",
    price: "3,497",
    period: "one-time",
    included: [
      "Unlimited service pages",
      "Custom SEO optimization",
      "Conversion-focused design",
      "Fast & mobile-friendly",
      "Complete analytics setup"
    ],
    color: "from-[#4CAF50] to-[#2e7d32]",
  },
];

const PricingSection: FC = () => {
  return (
    <section id="pricing" className="relative bg-[#1D3557] py-20 overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#4CAF50] rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#F4A261] rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-white rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight uppercase mb-6">
            Transparent{' '}
            <span className="text-[#4CAF50]">
              Pricing
            </span>
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
            No contracts. No hidden fees. Just results.
          </p>
        </div>

        {/* Pricing Options */}
        <div className="max-w-7xl mx-auto">
          {/* Mobile: Stacked Layout */}
          <div className="lg:hidden space-y-6">
            {pricingData.map((item, i) => (
              <div key={i} className="relative group">


                <div className={`bg-white/10 backdrop-blur-sm rounded-3xl p-6 border transition-all duration-300 hover:bg-white/15 
                `}>
                  {/* Service Header */}
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{item.service}</h3>
                    <div className="flex items-baseline justify-center gap-1">
                      <span className="text-4xl font-extrabold text-[#4CAF50]">
                        ${item.price}
                      </span>
                      <span className="text-white/70">/{item.period}</span>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="space-y-3 mb-6">
                    {item.included.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <div className={`w-5 h-5 rounded-full bg-gradient-to-r ${item.color} flex items-center justify-center flex-shrink-0 mt-0.5`}>
                          <Check className="w-3 h-3 text-white" />
                        </div>
                        <span className="text-white/90 text-sm leading-relaxed">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <button className={`w-full bg-gradient-to-r ${item.color} text-white font-semibold py-3 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105`}>
                    Get Started
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Desktop: Table Layout */}
          <div className="hidden lg:block">
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl overflow-hidden border border-white/20 shadow-2xl">
              {/* Table Header */}
              <div className="bg-white/5 border-b border-white/20">
                <div className="grid grid-cols-12 gap-6 p-6">
                  <div className="col-span-3">
                    <h3 className="text-lg font-bold text-white">Service</h3>
                  </div>
                  <div className="col-span-2">
                    <h3 className="text-lg font-bold text-white">Price</h3>
                  </div>
                  <div className="col-span-5">
                    <h3 className="text-lg font-bold text-white">What's Included</h3>
                  </div>
                  <div className="col-span-2">
                    <h3 className="text-lg font-bold text-white">Action</h3>
                  </div>
                </div>
              </div>

              {/* Table Rows */}
              {pricingData.map((item, i) => (
                <div key={i} className={`relative group transition-all duration-300 hover:bg-white/5 ${item.highlight ? 'bg-[#F4A261]/10' : ''
                  }`}>
                  {/* Highlight Indicator */}
                  {item.highlight && (
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#F4A261]"></div>
                  )}

                  <div className="grid grid-cols-12 gap-6 p-6 items-center">
                    {/* Service */}
                    <div className="col-span-3">
                      <div className="flex items-center gap-3">
                        <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${item.color}`}></div>
                        <div>
                          <h4 className="text-xl font-bold text-white">{item.service}</h4>
                          {item.highlight && (
                            <span className="text-[#F4A261] text-sm font-medium">{item.badge}</span>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Price */}
                    <div className="col-span-2">
                      <div className="flex items-baseline gap-1">
                        <span className="text-3xl font-extrabold text-[#4CAF50]">
                          ${item.price}
                        </span>
                        <span className="text-white/70 text-sm">/{item.period}</span>
                      </div>
                    </div>

                    {/* Features */}
                    <div className="col-span-5">
                      <div className="space-y-2">
                        {item.included.map((feature, idx) => (
                          <div key={idx} className="flex items-start gap-2">
                            <div className={`w-4 h-4 rounded-full bg-gradient-to-r ${item.color} flex items-center justify-center flex-shrink-0 mt-0.5`}>
                              <Check className="w-2.5 h-2.5 text-white" />
                            </div>
                            <span className="text-white/90 text-sm leading-relaxed">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* CTA */}
                    <div className="col-span-2">
                      <button className={`w-full bg-gradient-to-r ${item.color} text-white font-semibold py-2.5 px-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group-hover:scale-105`}>
                        Get Started
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/20 max-w-2xl mx-auto">


            <h3 className="text-2xl font-bold text-white mb-4">Ready to Grow Your Practice?</h3>
            <p className="text-white/80 mb-6">Choose the plan that fits your needs and start seeing results</p>

            <button className="bg-[#4CAF50] hover:bg-[#2e7d32] text-white font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 inline-flex items-center gap-2">
              Schedule Free Consultation
              <ArrowRight className="w-5 h-5" />
            </button>

            <p className="text-xs text-white/60 mt-4">
              No commitment required • 90-day money-back guarantee
            </p>
          </div>
        </div>


      </div>
    </section>
  );
};

export default PricingSection;