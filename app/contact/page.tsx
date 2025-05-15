import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ImprovedContactForm } from "@/components/improved-contact-form"
import { PageTransition } from "@/components/page-transition"
import { ScrollReveal } from "@/components/scroll-reveal"
import { GridBackground } from "@/components/grid-background"

export default function Contact() {
  const offices = [
    {
      city: "New York",
      address: "350 Fifth Avenue",
      cityState: "New York, NY 10118",
      phone: "+1 (212) 555-1234",
      email: "newyork@xeracapital.com",
    },
    {
      city: "London",
      address: "10 Finsbury Square",
      cityState: "London EC2A 1AF, UK",
      phone: "+44 20 7123 4567",
      email: "london@xeracapital.com",
    },
    {
      city: "Singapore",
      address: "One Raffles Quay, North Tower",
      cityState: "Singapore 048583",
      phone: "+65 6123 4567",
      email: "singapore@xeracapital.com",
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
                  <h1 className="text-5xl md:text-6xl font-extralight mb-6">Contact Us</h1>
                  <p className="text-xl text-gray-300 font-light leading-relaxed">
                    Get in touch with our team to discuss how we can help you achieve your strategic objectives.
                  </p>
                </div>
              </ScrollReveal>

              <div className="mt-20">
                <ScrollReveal>
                  <ImprovedContactForm />
                </ScrollReveal>
              </div>

              <div className="mt-24">
                <ScrollReveal>
                  <h3 className="text-2xl font-extralight mb-8">Our Offices</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {offices.map((office, index) => (
                      <div
                        key={index}
                        className="bg-gray-900/30 backdrop-blur-sm p-8 rounded-lg border border-white/10 hover:border-white/20 transition-all duration-500 group"
                      >
                        <h4 className="text-xl font-extralight mb-4 group-hover:translate-x-1 transition-transform duration-300">
                          {office.city}
                        </h4>
                        <div className="space-y-2 text-gray-300 font-light">
                          <p>{office.address}</p>
                          <p>{office.cityState}</p>
                          <p className="pt-4">{office.phone}</p>
                          <p>{office.email}</p>
                        </div>
                      </div>
                    ))}
                  </div>
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
