import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ScrollReveal } from "@/components/scroll-reveal"
import { PageTransition } from "@/components/page-transition"
import { ArrowUpRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Team() {
  const teamMembers = [
    {
      name: "Jane Smith",
      title: "Managing Partner",
      bio: "Jane has over 20 years of experience in investment banking and private equity. Prior to founding Nassau Street Partners, she was a Managing Director at a leading global investment bank.",
      image: "/images/team-1.jpg",
    },
    {
      name: "John Davis",
      title: "Partner",
      bio: "John specializes in mergers and acquisitions, with a focus on the technology and healthcare sectors. He has advised on transactions with an aggregate value of over $50 billion.",
      image: "/images/team-2.jpg",
    },
    {
      name: "Sarah Johnson",
      title: "Partner",
      bio: "Sarah leads our European operations. She has extensive experience in capital raising and strategic advisory, with a particular focus on the consumer and retail sectors.",
      image: "/images/team-3.jpg",
    },
    {
      name: "Michael Chen",
      title: "Partner",
      bio: "Michael heads our Asian operations. He has over 15 years of experience in cross-border transactions and has advised clients across a range of industries.",
      image: "/images/team-4.jpg",
    },
  ]

  return (
    <PageTransition>
      <div className="min-h-screen bg-black text-white">
        <div className="relative">
          {/* Background Image with Overlay */}
          <div className="absolute inset-0 z-0 h-[50vh]">
            <div className="absolute inset-0 bg-black/70 z-10"></div>
            <Image src="/images/nyc-skyline.jpg" alt="New York City Skyline" fill priority className="object-cover" />
          </div>

          <div className="relative z-10">
            <Navbar />

            <div className="container mx-auto px-6 md:px-12 pt-32 pb-16">
              <ScrollReveal>
                <div className="max-w-4xl">
                  <h1 className="text-5xl md:text-6xl font-extralight mb-6">Our Team</h1>
                  <p className="text-xl text-gray-300 font-light leading-relaxed">
                    Meet the experienced professionals who lead Nassau Street Partners.
                  </p>
                </div>
              </ScrollReveal>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-20">
                {teamMembers.map((member, index) => (
                  <ScrollReveal key={index} delay={index * 0.15} direction={index % 2 === 0 ? "left" : "right"}>
                    <div className="bg-gray-900/30 backdrop-blur-sm rounded-lg overflow-hidden group">
                      <div className="aspect-[4/3] relative">
                        <Image
                          src={member.image || "/placeholder.svg"}
                          alt={member.name}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                      </div>
                      <div className="p-8">
                        <h3 className="text-2xl font-extralight mb-1">{member.name}</h3>
                        <p className="text-gray-400 mb-4 text-sm">{member.title}</p>
                        <p className="text-gray-300 font-light">{member.bio}</p>
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>

              <ScrollReveal delay={0.3}>
                <div className="mt-24">
                  <h3 className="text-2xl font-extralight mb-8">Join Our Team</h3>

                  <div className="bg-gray-900/30 backdrop-blur-sm p-8 rounded-lg">
                    <p className="text-lg text-gray-300 font-light mb-6 leading-relaxed">
                      At Nassau Street Partners, we value intellectual curiosity, analytical rigor, and a collaborative
                      approach. We offer a dynamic work environment and opportunities for professional growth.
                    </p>
                    <p className="text-lg text-gray-300 font-light mb-8 leading-relaxed">
                      If you're interested in joining our team, please visit our Careers page to learn more about
                      current opportunities.
                    </p>
                    <div>
                      <Link
                        href="/careers"
                        className="inline-flex items-center px-8 py-3 border border-white text-white hover:bg-white hover:text-black transition-colors group"
                      >
                        View Open Positions
                        <ArrowUpRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                      </Link>
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
