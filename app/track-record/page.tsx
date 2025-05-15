import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ScrollReveal } from "@/components/scroll-reveal"
import { PageTransition } from "@/components/page-transition"
import { Background } from "@/components/background"
import { KeyStats } from "@/components/key-stats"
import { TrackRecordVisualization } from "@/components/track-record-visualization"
import { Testimonials } from "@/components/testimonials"

export default function TrackRecord() {
  return (
    <PageTransition>
      <div className="min-h-screen bg-black text-white">
        <div className="relative">
          {/* Background with subtle parallax effect */}
          <Background imageUrl="/images/nyc-skyline.jpg" opacity={0.15} overlayOpacity={0.98} />

          <div className="relative z-10">
            <Navbar />

            <div className="container mx-auto px-6 md:px-12 pt-32 pb-16">
              <ScrollReveal>
                <div className="max-w-4xl">
                  <h1 className="text-5xl md:text-6xl font-extralight mb-6 tracking-tight">Track Record</h1>
                  <p className="text-xl text-gray-300 font-light leading-relaxed">
                    A history of successful transactions and client partnerships across multiple industries and
                    geographies.
                  </p>
                </div>
              </ScrollReveal>

              <div className="mt-20">
                <ScrollReveal>
                  <KeyStats />
                </ScrollReveal>
              </div>

              <div className="mt-20">
                <ScrollReveal>
                  <div className="mb-12">
                    <h2 className="text-3xl md:text-4xl font-extralight mb-4 tracking-tight">Transaction Breakdown</h2>
                    <p className="text-lg text-gray-300 font-light">
                      Analysis of our transactions by type and geographic region.
                    </p>
                  </div>
                  <TrackRecordVisualization />
                </ScrollReveal>
              </div>

              <div className="mt-24">
                <ScrollReveal>
                  <div className="mb-12">
                    <h2 className="text-3xl md:text-4xl font-extralight mb-4 tracking-tight">Selected Transactions</h2>
                    <p className="text-lg text-gray-300 font-light">
                      A selection of our notable transactions across various sectors.
                    </p>
                  </div>

                  <div className="space-y-8">
                    <div className="bg-gray-900/30 backdrop-blur-sm p-8 rounded-lg hover:bg-gray-800/30 transition-colors duration-300">
                      <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
                        <h3 className="text-2xl font-extralight mb-2 md:mb-0">Technology Sector</h3>
                        <div className="text-xs bg-gray-800 px-3 py-1 rounded-full w-fit">2021-2023</div>
                      </div>
                      <ul className="space-y-4 text-gray-300 font-light">
                        <li className="flex items-start">
                          <span className="w-1.5 h-1.5 bg-white rounded-full mr-3 mt-2"></span>
                          <span>
                            <strong className="font-normal">Cross-border acquisition:</strong> Advised a US-based
                            technology company on its $500 million acquisition of a European software provider.
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="w-1.5 h-1.5 bg-white rounded-full mr-3 mt-2"></span>
                          <span>
                            <strong className="font-normal">Growth equity financing:</strong> Raised $200 million for a
                            SaaS company to accelerate product development and international expansion.
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="w-1.5 h-1.5 bg-white rounded-full mr-3 mt-2"></span>
                          <span>
                            <strong className="font-normal">Strategic sale:</strong> Advised a cybersecurity company on
                            its $350 million sale to a strategic buyer.
                          </span>
                        </li>
                      </ul>
                    </div>

                    <div className="bg-gray-900/30 backdrop-blur-sm p-8 rounded-lg hover:bg-gray-800/30 transition-colors duration-300">
                      <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
                        <h3 className="text-2xl font-extralight mb-2 md:mb-0">Healthcare Sector</h3>
                        <div className="text-xs bg-gray-800 px-3 py-1 rounded-full w-fit">2020-2023</div>
                      </div>
                      <ul className="space-y-4 text-gray-300 font-light">
                        <li className="flex items-start">
                          <span className="w-1.5 h-1.5 bg-white rounded-full mr-3 mt-2"></span>
                          <span>
                            <strong className="font-normal">Growth equity financing:</strong> Raised $150 million for a
                            healthcare technology company to fund its expansion into new markets.
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="w-1.5 h-1.5 bg-white rounded-full mr-3 mt-2"></span>
                          <span>
                            <strong className="font-normal">Strategic partnership:</strong> Facilitated a partnership
                            between a US healthcare provider and a European medical device manufacturer.
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="w-1.5 h-1.5 bg-white rounded-full mr-3 mt-2"></span>
                          <span>
                            <strong className="font-normal">Minority investment:</strong> Advised on a $100 million
                            minority investment in a biotechnology company focused on novel therapeutics.
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </ScrollReveal>
              </div>

              <div className="mt-24">
                <ScrollReveal>
                  <Testimonials />
                </ScrollReveal>
              </div>
            </div>

            <Footer />
          </div>
        </div>
      </div>
    </PageTransition>
  )
}
