"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Award, Briefcase, GraduationCap, Users } from "lucide-react"

export function TeamCredentials() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const credentials = [
    {
      title: "Education",
      description: "Our team includes alumni from Harvard, Stanford, Wharton, Oxford, and other leading institutions.",
      icon: <GraduationCap className="h-6 w-6 text-white/80" />,
    },
    {
      title: "Experience",
      description:
        "Senior team members have held positions at Goldman Sachs, Morgan Stanley, McKinsey, and other top firms.",
      icon: <Briefcase className="h-6 w-6 text-white/80" />,
    },
    {
      title: "Industry Recognition",
      description:
        "Our partners have been recognized by Forbes, Financial Times, and industry associations for their expertise.",
      icon: <Award className="h-6 w-6 text-white/80" />,
    },
    {
      title: "Network",
      description:
        "We maintain relationships with over 500 institutional investors and corporate decision-makers globally.",
      icon: <Users className="h-6 w-6 text-white/80" />,
    },
  ]

  return (
    <div ref={ref} className="py-12">
      <div className="text-center mb-12">
        <h3 className="text-2xl md:text-3xl font-extralight mb-4 tracking-tight bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
          Our Credentials
        </h3>
        <div className="h-px w-16 bg-gradient-to-r from-white/10 via-white/60 to-white/10 mx-auto mb-4"></div>
        <p className="text-gray-300 font-light max-w-2xl mx-auto">
          Nassau Street Partners brings together professionals with exceptional backgrounds and expertise.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {credentials.map((credential, index) => (
          <motion.div
            key={credential.title}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-gray-900/30 backdrop-blur-sm p-6 rounded-lg border border-white/10 hover:border-white/20 transition-all duration-300 group"
          >
            <div className="p-3 bg-white/5 rounded-full inline-block mb-4 group-hover:bg-white/10 transition-colors duration-300">
              {credential.icon}
            </div>
            <h4 className="text-xl font-extralight mb-3">{credential.title}</h4>
            <p className="text-gray-300 font-light">{credential.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
