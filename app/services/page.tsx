import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ScrollReveal } from "@/components/scroll-reveal"
import { PageTransition } from "@/components/page-transition"
import { GridBackground } from "@/components/grid-background"
import { BarChart3, Handshake, TrendingUp, Globe } from "lucide-react"

export default function Services() {
  const services = [
    {
      title: "Capital Raising",
      description:
        "We help clients raise capital from institutional investors across the globe. Our approach is tailored to each client's specific needs and objectives.",
      icon: <BarChart3 className="h-10 w-10 mb-4 text-white/80" />,
    },
    {
      title: "Strategic Partnerships",
      description:
        "We facilitate strategic partnerships between companies to drive growth and create long-term value. Our global network enables us to connect businesses across borders.",
      icon: <Handshake className="h-10 w-10 mb-4 text-white/80" />,
    },
    {
      title: "Mergers & Acquisitions",
      description:
        "We advise clients on mergers and acquisitions to help them achieve their strategic objectives. Our team has extensive experience in deal structuring and execution.",
      icon: <TrendingUp className="h-10 w-10 mb-4 text-white/80" />,
    },
    {
      title: "Growth Strategy",
      description:
        "We work with clients to develop and implement growth strategies that create sustainable value. Our approach is data-driven and focused on results.",
      icon: <Globe className="h-10 w-10 mb-4 text-white/80" />,
    },
  ]

  return (
    <PageTransition>
      <div className="min-h-screen bg-black text-white">
        <div className="relative">
          {/* Grid Background */}
          <div className="absolute inset-0 z-0">
            <GridBackground columns={8} rows={8} opacity={0.05} />
          </div>

          <div className="relative z-10">
            <Navbar />

            <div className="container mx-auto px-6 md:px-12 pt-32 pb-16">
              <ScrollReveal>
                <div className="max-w-4xl">
                  <h1 className="text-5xl md:text-6xl font-extralight mb-6 tracking-tight">Services</h1>
                  <p className="text-xl text-gray-300 font-light leading-relaxed">
                    We provide a range of advisory services to help our clients achieve their strategic objectives.
                  </p>
                </div>
              </ScrollReveal>

              <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-12">
                {services.map((service, index) => (
                  <ScrollReveal key={index} delay={index * 0.15} direction={index % 2 === 0 ? "left" : "right"}>
                    <div className="bg-gray-900/30 backdrop-blur-sm p-8 rounded-lg border border-white/10 hover:border-white/20 transition-all duration-500 group h-full">
                      {service.icon}
                      <h3 className="text-2xl font-extralight mb-4 group-hover:translate-x-1 transition-transform duration-300">
                        {service.title}
                      </h3>
                      <p className="text-gray-300 font-light leading-relaxed">{service.description}</p>
                    </div>
                  </ScrollReveal>
                ))}
              </div>

              <ScrollReveal delay={0.3}>
                <div className="mt-24">
                  <h3 className="text-2xl font-extralight mb-8">Our Approach</h3>

                  <div className="bg-gray-900/30 backdrop-blur-sm p-8 rounded-lg border border-white/10 hover:border-white/20 transition-all duration-500">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                      <div className="text-center">
                        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-800/50 mb-4">
                          <span className="text-2xl font-extralight">01</span>
                        </div>
                        <h4 className="text-xl font-extralight mb-2">Understand</h4>
                        <p className="text-gray-300 font-light">
                          We take the time to understand your business, goals, and challenges.
                        </p>
                      </div>
                      <div className="text-center">
                        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-800/50 mb-4">
                          <span className="text-2xl font-extralight">02</span>
                        </div>
                        <h4 className="text-xl font-extralight mb-2">Strategize</h4>
                        <p className="text-gray-300 font-light">
                          We develop a tailored strategy to address your specific needs.
                        </p>
                      </div>
                      <div className="text-center">
                        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-800/50 mb-4">
                          <span className="text-2xl font-extralight">03</span>
                        </div>
                        <h4 className="text-xl font-extralight mb-2">Execute</h4>
                        <p className="text-gray-300 font-light">
                          We execute the strategy with precision and attention to detail.
                        </p>
                      </div>
                    </div>

                    <p className="text-lg text-gray-300 font-light mb-6 leading-relaxed">
                      At Xera Capital, we believe in building long-term relationships with our clients. Our
                      approach is collaborative, transparent, and focused on delivering results.
                    </p>
                    <p className="text-lg text-gray-300 font-light mb-6 leading-relaxed">
                      We work closely with our clients to understand their business, their goals, and the challenges
                      they face. This enables us to provide tailored advice and solutions that create real value.
                    </p>
                    <p className="text-lg text-gray-300 font-light leading-relaxed">
                      Our global network and deep industry expertise allow us to connect our clients with the right
                      partners, investors, and opportunities to drive growth and create long-term value.
                    </p>
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
