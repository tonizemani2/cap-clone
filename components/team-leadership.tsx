"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"
import { Linkedin } from "lucide-react"
import { LegalDisclaimer } from "./legal-disclaimer"

export function TeamLeadership() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const team = [
    {
      name: "Edward Harris",
      title: "Managing Partner",
      bio: "Ed has over 25 years of experience in investment banking and M&A advisory. He has led numerous successful transactions across various industries, with a focus on technology and healthcare.",
      image: "/images/team-1.jpg",
      credentials: [
        "MBA, Harvard Business School",
        "Former Managing Director at Goldman Sachs",
        "Board Member of XYZ Corp",
      ],
    },
    {
      name: "Sarah Johnson",
      title: "Partner",
      bio: "Sarah specializes in private equity transactions and has advised on deals totaling over $5 billion. Her expertise in strategic positioning has consistently delivered exceptional outcomes for clients.",
      image: "/images/team-2.jpg",
      credentials: ["MBA, Wharton School", "Former VP at Morgan Stanley", "15+ years in investment banking"],
    },
    {
      name: "Michael Chen",
      title: "Senior Director",
      bio: "Michael brings deep industry knowledge in technology and SaaS companies. His background in both operational leadership and investment banking provides a unique perspective on value creation.",
      image: "/images/team-3.jpg",
      credentials: ["MBA, Stanford Graduate School of Business", "Former CEO of Tech Startup", "20+ successful exits"],
    },
    {
      name: "Jennifer Williams",
      title: "Director",
      bio: "Jennifer specializes in healthcare M&A, with particular expertise in life sciences and medical devices. She has advised on numerous complex transactions in regulated industries.",
      image: "/images/team-4.jpg",
      credentials: ["MBA, Columbia Business School", "Former VP at JP Morgan", "Healthcare industry specialist"],
    },
  ]

  return (
    <div ref={ref} className="py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-extralight mb-4 tracking-tight bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
          Leadership Team
        </h2>
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: "6rem" } : { width: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="h-px w-24 bg-gradient-to-r from-white/10 via-white/60 to-white/10 mx-auto mb-6"
        />
        <p className="text-lg text-gray-300 font-light max-w-2xl mx-auto">
          Our affiliate's leadership team brings decades of experience in M&A advisory and investment banking
        </p>
      </motion.div>

      {/* Legal Disclaimer */}
      <div className="mb-12">
        <LegalDisclaimer variant="compact" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
        {team.map((member, index) => (
          <motion.div
            key={member.name}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            className="bg-gradient-to-b from-gray-900/40 to-gray-900/20 backdrop-blur-sm rounded-lg overflow-hidden border border-white/10 hover:border-white/30 transition-all duration-500 group"
          >
            <div className="md:flex">
              <div className="md:w-2/5 relative h-64 md:h-auto">
                <Image
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/50 backdrop-blur-[1px]"></div>

                <div className="absolute inset-0 flex flex-col items-center justify-center p-6">
                  <h3 className="text-2xl font-light text-white mb-2">{member.name}</h3>
                  <p className="text-gray-300 mb-4">{member.title}</p>
                  <motion.a
                    href="#"
                    className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <Linkedin className="h-5 w-5 text-white/80" />
                  </motion.a>
                </div>
              </div>

              <div className="p-6 md:w-3/5">
                <p className="text-gray-300 font-light mb-4 leading-relaxed">{member.bio}</p>
                <div className="space-y-1">
                  <h4 className="text-sm font-medium text-white/80 mb-2">Credentials:</h4>
                  {member.credentials.map((credential, i) => (
                    <div key={i} className="flex items-start">
                      <div className="w-1.5 h-1.5 rounded-full bg-white/50 mt-1.5 mr-2"></div>
                      <p className="text-sm text-gray-400">{credential}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="mt-16 p-8 bg-gradient-to-b from-gray-900/40 to-gray-900/20 backdrop-blur-sm rounded-lg border border-white/10 text-center"
      >
        <h3 className="text-2xl font-extralight mb-4">Unparalleled Expertise</h3>
        <p className="text-gray-300 font-light max-w-3xl mx-auto">
          Our affiliate's leadership team has advised on transactions totaling over $20 billion across various
          industries, bringing deep expertise and a proven track record to every client engagement.
        </p>
      </motion.div>
    </div>
  )
}
