import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ScrollReveal } from "@/components/scroll-reveal"
import { PageTransition } from "@/components/page-transition"
import { Background } from "@/components/background"
import Image from "next/image"

export default function About() {
  return (
    <PageTransition>
      <div className="min-h-screen bg-black text-white">
        <div className="relative">
          {/* Background with subtle parallax effect */}
          <Background imageUrl="/images/nyc-skyline.jpg" opacity={0.3} overlayOpacity={0.95} />

          <div className="relative z-10">
            <Navbar />

            <div className="container mx-auto px-6 md:px-12 pt-32 pb-16">
              <ScrollReveal>
                <div className="max-w-4xl">
                  <h1 className="text-5xl md:text-6xl font-extralight mb-6 tracking-tight">About</h1>
                  <p className="text-xl text-gray-300 font-light leading-relaxed">
                    A boutique advisory firm with a global reach.
                  </p>
                </div>
              </ScrollReveal>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-20">
                <ScrollReveal direction="left">
                  <div>
                    <h3 className="text-2xl font-extralight mb-8">Our Story</h3>
                    <div className="bg-gray-900/30 backdrop-blur-sm p-8 rounded-lg hover:bg-gray-800/30 transition-colors duration-300">
                      <p className="text-gray-300 font-light mb-6 leading-relaxed">
                        Xera Capital was founded with a vision to provide tailored advisory services to
                        clients across the globe. Our founders bring decades of experience from leading financial
                        institutions and have a track record of successful transactions across multiple industries.
                      </p>
                      <p className="text-gray-300 font-light leading-relaxed">
                        Our name reflects our commitment to excellence and innovation in the capital markets,
                        combining expertise with forward-thinking solutions for our clients.
                      </p>
                    </div>
                  </div>
                </ScrollReveal>

                <ScrollReveal direction="right" delay={0.2}>
                  <div>
                    <h3 className="text-2xl font-extralight mb-8">Our Values</h3>
                    <div className="bg-gray-900/30 backdrop-blur-sm p-8 rounded-lg hover:bg-gray-800/30 transition-colors duration-300">
                      <ul className="space-y-6 text-gray-300 font-light">
                        <li>
                          <h4 className="text-white font-normal mb-2 flex items-center">
                            <span className="w-1.5 h-1.5 bg-white rounded-full mr-3"></span>
                            Integrity
                          </h4>
                          <p className="pl-6">We maintain the highest ethical standards in all our dealings.</p>
                        </li>
                        <li>
                          <h4 className="text-white font-normal mb-2 flex items-center">
                            <span className="w-1.5 h-1.5 bg-white rounded-full mr-3"></span>
                            Excellence
                          </h4>
                          <p className="pl-6">We strive for excellence in everything we do.</p>
                        </li>
                        <li>
                          <h4 className="text-white font-normal mb-2 flex items-center">
                            <span className="w-1.5 h-1.5 bg-white rounded-full mr-3"></span>
                            Partnership
                          </h4>
                          <p className="pl-6">We build long-term relationships based on trust and mutual respect.</p>
                        </li>
                        <li>
                          <h4 className="text-white font-normal mb-2 flex items-center">
                            <span className="w-1.5 h-1.5 bg-white rounded-full mr-3"></span>
                            Innovation
                          </h4>
                          <p className="pl-6">We embrace innovative thinking to solve complex problems.</p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </ScrollReveal>
              </div>

              <ScrollReveal delay={0.3}>
                <div className="mt-24">
                  <h3 className="text-2xl font-extralight mb-8">Global Presence</h3>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="bg-gray-900/30 backdrop-blur-sm p-8 rounded-lg hover:bg-gray-800/30 transition-colors duration-300 group">
                      <div className="flex items-center mb-4">
                        <Image
                          src="/placeholder.svg?height=30&width=50"
                          alt="US Flag"
                          width={30}
                          height={20}
                          className="mr-3"
                        />
                        <h4 className="text-xl font-extralight group-hover:translate-x-1 transition-transform duration-300">
                          United States
                        </h4>
                      </div>
                      <p className="text-gray-300 font-light leading-relaxed">
                        Our US operations are headquartered in New York, with a presence in key financial centers across
                        the country.
                      </p>
                    </div>

                    <div className="bg-gray-900/30 backdrop-blur-sm p-8 rounded-lg hover:bg-gray-800/30 transition-colors duration-300 group">
                      <div className="flex items-center mb-4">
                        <Image
                          src="/placeholder.svg?height=30&width=50"
                          alt="Europe Flag"
                          width={30}
                          height={20}
                          className="mr-3"
                        />
                        <h4 className="text-xl font-extralight group-hover:translate-x-1 transition-transform duration-300">
                          Europe
                        </h4>
                      </div>
                      <p className="text-gray-300 font-light leading-relaxed">
                        In Europe, we have a strong presence in London, Frankfurt, and Paris, serving clients across the
                        continent.
                      </p>
                    </div>

                    <div className="bg-gray-900/30 backdrop-blur-sm p-8 rounded-lg hover:bg-gray-800/30 transition-colors duration-300 group">
                      <div className="flex items-center mb-4">
                        <Image
                          src="/placeholder.svg?height=30&width=50"
                          alt="Asia Flag"
                          width={30}
                          height={20}
                          className="mr-3"
                        />
                        <h4 className="text-xl font-extralight group-hover:translate-x-1 transition-transform duration-300">
                          Asia
                        </h4>
                      </div>
                      <p className="text-gray-300 font-light leading-relaxed">
                        Our Asian operations are centered in Singapore and Hong Kong, with a network extending across
                        the region.
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            <Footer />
          </div>
        </div>
      </div>
    </PageTransition>
  )
}
