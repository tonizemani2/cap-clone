import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { GridBackground } from "@/components/grid-background"
import Image from "next/image"

export default function Careers() {
  const openPositions = [
    {
      title: "Vice President - M&A",
      location: "New York",
      type: "Full-time",
      description:
        "We are seeking an experienced Vice President to join our M&A advisory team in New York. The ideal candidate will have 7+ years of investment banking experience with a focus on M&A transactions.",
    },
    {
      title: "Associate - Capital Markets",
      location: "London",
      type: "Full-time",
      description:
        "We are looking for an Associate to join our Capital Markets team in London. The ideal candidate will have 3-5 years of experience in investment banking or capital markets.",
    },
    {
      title: "Analyst - Healthcare",
      location: "New York",
      type: "Full-time",
      description:
        "We are seeking an Analyst to join our Healthcare team in New York. The ideal candidate will have 1-3 years of experience in investment banking or consulting with exposure to the healthcare sector.",
    },
    {
      title: "Associate - Technology",
      location: "Singapore",
      type: "Full-time",
      description:
        "We are looking for an Associate to join our Technology team in Singapore. The ideal candidate will have 3-5 years of experience in investment banking or consulting with a focus on the technology sector.",
    },
  ]

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="relative">
        {/* Grid Background */}
        <div className="absolute inset-0 z-0">
          <GridBackground columns={8} rows={8} opacity={0.05} />
        </div>

        <div className="relative z-10">
          <Navbar />

          <div className="container mx-auto px-6 md:px-12 pt-32 pb-16">
            <div className="max-w-4xl">
              <h1 className="text-5xl md:text-6xl font-extralight mb-6">Careers</h1>
              <p className="text-xl text-gray-300 font-light leading-relaxed">
                Join our team of experienced professionals and help shape the future of global advisory.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-20">
              <div>
                <h3 className="text-2xl font-extralight mb-8">Why Join Us</h3>
                <div className="bg-gray-900/30 backdrop-blur-sm p-8 rounded-lg border border-white/10 hover:border-white/20 transition-all duration-500">
                  <p className="text-gray-300 font-light mb-6 leading-relaxed">
                    We offer a unique opportunity to work on complex, cross-border transactions across a range of industries. 
                    Our boutique structure allows for significant responsibility and client exposure at all levels.
                  </p>
                  <p className="text-gray-300 font-light mb-6 leading-relaxed">
                    We value intellectual curiosity, analytical rigor, and a collaborative approach. Our team members
                    benefit from:
                  </p>
                  <ul className="space-y-3 text-gray-300 font-light">
                    <li className="flex items-start">
                      <span className="w-1.5 h-1.5 bg-white rounded-full mr-3 mt-2"></span>
                      <span>Direct exposure to senior leadership and client relationships</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-1.5 h-1.5 bg-white rounded-full mr-3 mt-2"></span>
                      <span>Global perspective with international opportunities</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-1.5 h-1.5 bg-white rounded-full mr-3 mt-2"></span>
                      <span>Collaborative culture that values diverse perspectives</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-1.5 h-1.5 bg-white rounded-full mr-3 mt-2"></span>
                      <span>Competitive compensation and benefits package</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-1.5 h-1.5 bg-white rounded-full mr-3 mt-2"></span>
                      <span>Structured career development path</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-extralight mb-8">Our Culture</h3>
                <div className="bg-gray-900/30 backdrop-blur-sm p-8 rounded-lg border border-white/10 hover:border-white/20 transition-all duration-500">
                  <p className="text-gray-300 font-light mb-6 leading-relaxed">
                    We believe that our people are our greatest asset. We foster a culture of excellence, integrity, and
                    collaboration, where diverse perspectives are valued and everyone has the opportunity to make an
                    impact.
                  </p>
                  <p className="text-gray-300 font-light mb-6 leading-relaxed">
                    Our team members come from a variety of backgrounds and bring unique experiences and perspectives to
                    their work. We believe this diversity makes us stronger and better able to serve our clients.
                  </p>
                  <p className="text-gray-300 font-light leading-relaxed">
                    We are committed to the professional development of our team members and provide opportunities for
                    continuous learning and growth. We believe in promoting from within and providing a clear path for
                    career advancement.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-24">
              <h3 className="text-2xl font-extralight mb-8">Open Positions</h3>

              <div className="space-y-8">
                {openPositions.map((position, index) => (
                  <div key={index} className="bg-gray-900/30 backdrop-blur-sm p-8 rounded-lg border border-white/10 hover:border-white/20 transition-all duration-500">
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                      <h3 className="text-2xl font-extralight">{position.title}</h3>
                      <div className="flex space-x-4 mt-2 md:mt-0">
                        <span className="text-xs bg-gray-800 px-3 py-1 rounded-full">{position.location}</span>
                        <span className="text-xs bg-gray-800 px-3 py-1 rounded-full">{position.type}</span>
                      </div>
                    </div>
                    <p className="text-gray-300 font-light mb-6 leading-relaxed">{position.description}</p>
                    <button className="px-6 py-2 border border-white text-white hover:bg-white hover:text-black transition-colors">
                      Apply Now
                    </button>
                  </div>
                ))}
              </div>

              <div className="mt-12 bg-gray-900/30 backdrop-blur-sm p-8 rounded-lg border border-white/10 hover:border-white/20 transition-all duration-500">
                <h3 className="text-2xl font-extralight mb-4">Don't see a position that fits?</h3>
                <p className="text-gray-300 font-light mb-6 leading-relaxed">
                  We're always interested in connecting with talented individuals. Send your resume and a brief
                  introduction to careers@xeracapital.com.
                </p>
              </div>
            </div>
          </div>

          <Footer />
        </div>
      </div>
    </div>
  )
}
