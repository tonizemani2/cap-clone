"use client"

import { motion } from "framer-motion"
import { ArrowUpRight, Mail, Phone, MapPin, Users, Building2 } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export function ContactCTA() {
  return (
    <div className="py-12 relative">
      {/* Background image */}
      <div className="absolute inset-0 opacity-10 z-0">
        <Image
          src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=1000&auto=format&fit=crop"
          alt="Office background"
          fill
          className="object-cover"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="bg-gradient-to-b from-gray-900/40 to-gray-900/20 backdrop-blur-sm p-8 rounded-lg border border-white/10 relative overflow-hidden group"
        >
          {/* Decorative element */}
          <div className="absolute -top-20 -right-20 w-40 h-40 bg-white/5 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

          <div className="relative z-10">
            <div className="p-3 bg-white/5 rounded-full inline-block mb-6">
              <Building2 className="h-6 w-6 text-white/80" />
            </div>

            <h2 className="text-3xl md:text-4xl font-extralight mb-6 tracking-tight bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
              Get in Touch
            </h2>
            <p className="text-lg text-gray-300 font-light mb-8 leading-relaxed">
              Contact us to discuss how we can help you achieve your strategic objectives. Our team is ready to provide
              tailored solutions for your business needs.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <Mail className="h-5 w-5 mr-3 mt-1 text-white/80" />
                <div>
                  <div className="font-light">Email</div>
                  <a href="mailto:info@nassaustreetpartners.com" className="text-gray-300 hover:text-white">
                    info@nassaustreetpartners.com
                  </a>
                </div>
              </div>
              <div className="flex items-start">
                <Phone className="h-5 w-5 mr-3 mt-1 text-white/80" />
                <div>
                  <div className="font-light">Phone</div>
                  <a href="tel:+12125551234" className="text-gray-300 hover:text-white">
                    +1 (212) 555-1234
                  </a>
                </div>
              </div>
              <div className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 mt-1 text-white/80" />
                <div>
                  <div className="font-light">Headquarters</div>
                  <div className="text-gray-300">100 Nassau Street, New York, NY 10038</div>
                </div>
              </div>
            </div>

            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-3 border border-white text-white hover:bg-white hover:text-black transition-colors group relative overflow-hidden"
            >
              <span className="absolute inset-0 w-0 bg-white group-hover:w-full transition-all duration-500 ease-out -z-10"></span>
              <span className="relative z-10 group-hover:text-black transition-colors duration-300">Contact Us</span>
              <ArrowUpRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 relative z-10 group-hover:text-black transition-colors duration-300" />
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-gradient-to-b from-gray-900/40 to-gray-900/20 backdrop-blur-sm p-8 rounded-lg border border-white/10 relative overflow-hidden group"
        >
          {/* Decorative element */}
          <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-white/5 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

          <div className="relative z-10">
            <div className="p-3 bg-white/5 rounded-full inline-block mb-6">
              <Users className="h-6 w-6 text-white/80" />
            </div>

            <h2 className="text-3xl md:text-4xl font-extralight mb-6 tracking-tight bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
              Join Our Team
            </h2>
            <p className="text-lg text-gray-300 font-light mb-8 leading-relaxed">
              We're always looking for talented individuals to join our team. If you're passionate about finance and
              advisory services, we'd love to hear from you.
            </p>

            <div className="space-y-4 mb-8">
              <div>
                <div className="font-light mb-1">Current Openings</div>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-white rounded-full mr-3"></span>
                    Vice President - M&A (New York)
                  </li>
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-white rounded-full mr-3"></span>
                    Associate - Capital Markets (London)
                  </li>
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-white rounded-full mr-3"></span>
                    Analyst - Healthcare (New York)
                  </li>
                </ul>
              </div>
            </div>

            <Link
              href="/careers"
              className="inline-flex items-center px-8 py-3 border border-white text-white hover:bg-white hover:text-black transition-colors group relative overflow-hidden"
            >
              <span className="absolute inset-0 w-0 bg-white group-hover:w-full transition-all duration-500 ease-out -z-10"></span>
              <span className="relative z-10 group-hover:text-black transition-colors duration-300">View Careers</span>
              <ArrowUpRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 relative z-10 group-hover:text-black transition-colors duration-300" />
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
