"use client"

import { Suspense, lazy } from "react"
import { Navbar } from "@/components/navbar"
import { EnhancedFooterV2 } from "@/components/enhanced-footer-v2"
import { PageTransition } from "@/components/page-transition"
import { BackgroundVideo } from "@/components/background-video"
import { IntroAnimation } from "@/components/intro-animation"
import { GridBackground } from "@/components/grid-background"
import { EnhancedHero } from "@/components/enhanced-hero"
import { EnhancedContactCTA } from "@/components/enhanced-contact-cta"
import { SuccessCases } from "@/components/success-cases"
import { DetailedSuccessCases } from "@/components/detailed-success-cases"
import { TeamLeadership } from "@/components/team-leadership"
import { ArrowUpRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import Script from "next/script"

// Lazy load heavy components
const LazyParticleBackground = lazy(() =>
  import("@/components/particle-background").then((mod) => ({ default: mod.ParticleBackground })),
)

export default function Home() {
  const services = [
    {
      title: "M&A Advisory",
      description:
        "We provide comprehensive M&A advisory services for privately-held middle market companies seeking successful exits.",
      link: "/services",
      image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1000&auto=format&fit=crop",
    },
    {
      title: "Private Equity",
      description: "We help companies navigate private equity transactions, from initial investment to eventual exit.",
      link: "/services",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop",
    },
    {
      title: "Strategic Advisory",
      description: "We provide strategic guidance to help companies maximize value and prepare for successful exits.",
      link: "/services",
      image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1000&auto=format&fit=crop",
    },
  ]

  return (
    <PageTransition>
      <IntroAnimation />
      <main className="min-h-screen bg-black text-white">
        <div className="relative min-h-screen flex flex-col">
          {/* Background video with fallback image */}
          <BackgroundVideo
            fallbackImageUrl="https://images.unsplash.com/photo-1522441815192-d9f04eb0615c?q=80&w=2000&auto=format&fit=crop"
            videoUrl="https://assets.mixkit.co/videos/preview/mixkit-aerial-view-of-new-york-city-at-night-time-lapse-4818-large.mp4"
          />

          {/* Enhanced particle background */}
          <Suspense fallback={<GridBackground animated={false} />}>
            <LazyParticleBackground />
          </Suspense>

          <div className="relative z-10 flex flex-col min-h-screen">
            <Navbar />

            <EnhancedHero />

            {/* Success Cases Section - Single instance */}
            <section className="container mx-auto px-4 sm:px-6 md:px-12 py-12 md:py-24 border-t border-gray-800/30 relative">
              <div className="relative z-10">
                <Suspense fallback={<div className="h-40 flex items-center justify-center">Loading...</div>}>
                  <DetailedSuccessCases />
                </Suspense>
              </div>
            </section>

            {/* Services Section - Improved mobile padding and interactions */}
            <section className="container mx-auto px-4 sm:px-6 md:px-12 py-16 md:py-32 border-t border-gray-800/30 relative">
              {/* Section background */}
              <div className="absolute inset-0 z-0">
                <Image
                  src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=2000&auto=format&fit=crop"
                  alt="Background"
                  fill
                  className="object-cover opacity-5"
                />
                <GridBackground columns={8} rows={8} opacity={0.05} />
              </div>

              <div className="relative z-10">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="max-w-4xl"
                >
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-extralight mb-4 tracking-tight bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
                    Our Services
                  </h2>
                  <div className="h-px w-24 bg-gradient-to-r from-white/10 via-white/60 to-white/10 mb-6"></div>
                  <p className="text-base sm:text-lg text-gray-300 font-light leading-relaxed">
                    We provide a range of M&A advisory services to help our clients achieve successful exits.
                  </p>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 mt-12 md:mt-16">
                  {services.map((service, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="relative"
                    >
                      <div className="bg-gradient-to-b from-gray-900/40 to-gray-900/20 backdrop-blur-sm p-6 md:p-8 rounded-lg group h-full relative overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-500 active:scale-[0.98]">
                        {/* Background image */}
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-700 z-0">
                          <Image
                            src={service.image || "/placeholder.svg"}
                            alt={service.title}
                            fill
                            className="object-cover"
                          />
                        </div>

                        {/* Hover effect overlay */}
                        <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out"></div>

                        <div className="relative z-10">
                          <h3 className="text-xl md:text-2xl font-extralight mb-3 md:mb-4 group-hover:translate-x-2 transition-transform duration-500">
                            {service.title}
                          </h3>
                          <p className="text-sm md:text-base text-gray-300 font-light mb-4 md:mb-6">{service.description}</p>
                          <Link
                            href={service.link}
                            className="inline-flex items-center text-sm border-b border-white pb-1 hover:pl-2 transition-all duration-300 group-hover:pl-2 active:opacity-70"
                          >
                            Learn More
                            <ArrowUpRight className="ml-1 h-3 w-3 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                          </Link>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </section>

            {/* Our Process Section - Improved mobile padding */}
            <section className="container mx-auto px-4 sm:px-6 md:px-12 py-16 md:py-32 border-t border-gray-800/30 relative">
              <div className="absolute inset-0 z-0">
                <Image
                  src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2000&auto=format&fit=crop"
                  alt="Background"
                  fill
                  className="object-cover opacity-5"
                />
                <GridBackground columns={8} rows={8} opacity={0.05} />
              </div>

              <div className="relative z-10">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="max-w-4xl"
                >
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-extralight mb-4 tracking-tight bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
                    Our Process
                  </h2>
                  <div className="h-px w-24 bg-gradient-to-r from-white/10 via-white/60 to-white/10 mb-6"></div>
                  <p className="text-base sm:text-lg text-gray-300 font-light leading-relaxed">
                    We follow a proven process to ensure successful outcomes for our clients.
                  </p>
                </motion.div>

                <div className="mt-12 md:mt-16">
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
                    {[
                      {
                        step: "01",
                        title: "Initial Consultation",
                        description:
                          "We begin with a confidential discussion to understand your goals, timeline, and expectations.",
                      },
                      {
                        step: "02",
                        title: "Strategic Planning",
                        description:
                          "We develop a customized strategy tailored to your specific situation and objectives.",
                      },
                      {
                        step: "03",
                        title: "Market Approach",
                        description:
                          "We identify and approach potential buyers or partners while maintaining strict confidentiality.",
                      },
                      {
                        step: "04",
                        title: "Transaction Execution",
                        description: "We manage the entire process from negotiation to due diligence and closing.",
                      },
                    ].map((process, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="bg-gradient-to-b from-gray-900/40 to-gray-900/20 backdrop-blur-sm p-6 md:p-8 rounded-lg border border-white/10 hover:border-white/20 transition-colors duration-500 group"
                      >
                        <div className="text-3xl md:text-4xl font-thin text-white/30 mb-3 md:mb-4 group-hover:text-white/50 transition-colors">
                          {process.step}
                        </div>
                        <h3 className="text-lg md:text-xl font-light mb-3 md:mb-4">{process.title}</h3>
                        <p className="text-sm md:text-base text-gray-300 font-light">{process.description}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* Team Leadership Section - Improved mobile padding */}
            <section className="container mx-auto px-4 sm:px-6 md:px-12 py-16 md:py-32 border-t border-gray-800/30 relative">
              <div className="absolute inset-0 z-0">
                <Image
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2000&auto=format&fit=crop"
                  alt="Background"
                  fill
                  className="object-cover opacity-5"
                />
                <GridBackground columns={8} rows={8} opacity={0.05} />
              </div>

              <div className="relative z-10">
                <Suspense fallback={<div className="h-60 flex items-center justify-center">Loading...</div>}>
                  <TeamLeadership />
                </Suspense>
              </div>
            </section>

            {/* Contact CTA Section - Improved mobile padding */}
            <section className="container mx-auto px-4 sm:px-6 md:px-12 py-16 md:py-32 border-t border-gray-800/30 relative">
              {/* Section background */}
              <div className="absolute inset-0 z-0">
                <Image
                  src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=2000&auto=format&fit=crop"
                  alt="Background"
                  fill
                  className="object-cover opacity-5"
                />
                <GridBackground columns={8} rows={8} opacity={0.05} />
              </div>

              <div className="relative z-10">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="max-w-4xl mx-auto text-center mb-12"
                >
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-extralight mb-4 tracking-tight bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
                    Schedule a Consultation
                  </h2>
                  <div className="h-px w-24 bg-gradient-to-r from-white/10 via-white/60 to-white/10 mb-6 mx-auto"></div>
                  <p className="text-base sm:text-lg text-gray-300 font-light leading-relaxed">
                    Book a 30-minute consultation to discuss your business needs and how we can help.
                  </p>
                </motion.div>

                <div className="bg-gradient-to-b from-gray-900/40 to-gray-900/20 backdrop-blur-sm p-8 rounded-lg border border-white/10">
                  <div className="calendly-inline-widget" data-url="https://calendly.com/toni-xera/30min" style={{ minWidth: "320px", height: "700px" }}></div>
                  <Script src="https://assets.calendly.com/assets/external/widget.js" strategy="lazyOnload" />
                </div>
              </div>
            </section>

            <EnhancedFooterV2 />
          </div>
        </div>
      </main>
    </PageTransition>
  )
}
