"use client"

import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"

export function EnhancedFooter() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="mt-auto py-12 px-6 md:px-12 text-gray-400 text-xs border-t border-gray-800/30 relative">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5 z-0">
        <Image
          src="https://images.unsplash.com/photo-1557683316-973673baf926?q=80&w=1000&auto=format&fit=crop"
          alt="Background pattern"
          fill
          className="object-cover"
        />
      </div>

      {/* Animated grid lines */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-px bg-white/5 w-full"
            style={{ top: `${i * 20}%` }}
            animate={{
              x: ["-100%", "100%"],
              opacity: [0.05, 0.1, 0.05],
            }}
            transition={{
              duration: 20 + i * 5,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
              delay: i * 2,
            }}
          />
        ))}

        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-px bg-white/5 h-full"
            style={{ left: `${i * 20}%` }}
            animate={{
              y: ["-100%", "100%"],
              opacity: [0.05, 0.1, 0.05],
            }}
            transition={{
              duration: 25 + i * 3,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
              delay: i * 1.5,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex flex-col mb-4">
              <span className="text-lg md:text-xl font-serif tracking-wider text-white">NASSAU STREET</span>
              <span className="text-xs md:text-sm tracking-[0.3em] font-light mt-[-2px] text-white/80">
                P A R T N E R S
              </span>
            </div>
            <p className="text-sm text-gray-400 mb-4">
              A boutique advisory firm offering tailored capital raising and strategic partnerships.
            </p>
            <div className="flex space-x-4">
              <motion.a
                href="#"
                className="p-2 bg-white/5 rounded-full hover:bg-white/10 transition-colors"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <Linkedin className="h-4 w-4 text-white/80" />
              </motion.a>
              <motion.a
                href="#"
                className="p-2 bg-white/5 rounded-full hover:bg-white/10 transition-colors"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <Twitter className="h-4 w-4 text-white/80" />
              </motion.a>
              <motion.a
                href="#"
                className="p-2 bg-white/5 rounded-full hover:bg-white/10 transition-colors"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <Facebook className="h-4 w-4 text-white/80" />
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="text-white font-light mb-4">Services</h4>
            <ul className="space-y-2">
              {["Capital Raising", "M&A Advisory", "Strategic Partnerships", "Growth Strategy"].map((item, i) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.2 + i * 0.1 }}
                >
                  <Link href="/services" className="hover:text-white transition-colors flex items-center group">
                    <motion.span
                      className="w-1 h-1 bg-white/30 rounded-full mr-2 group-hover:bg-white"
                      whileHover={{ scale: 1.5 }}
                    />
                    <span className="group-hover:translate-x-1 transition-transform">{item}</span>
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="text-white font-light mb-4">Company</h4>
            <ul className="space-y-2">
              {["About", "Team", "Careers", "Contact"].map((item, i) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.2 + i * 0.1 }}
                >
                  <Link
                    href={`/${item.toLowerCase()}`}
                    className="hover:text-white transition-colors flex items-center group"
                  >
                    <motion.span
                      className="w-1 h-1 bg-white/30 rounded-full mr-2 group-hover:bg-white"
                      whileHover={{ scale: 1.5 }}
                    />
                    <span className="group-hover:translate-x-1 transition-transform">{item}</span>
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h4 className="text-white font-light mb-4">Contact</h4>
            <ul className="space-y-2">
              <motion.li
                className="flex items-center"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.3 }}
              >
                <Mail className="h-4 w-4 mr-2 text-white/60" />
                <a href="mailto:info@nassaustreetpartners.com" className="hover:text-white transition-colors">
                  info@nassaustreetpartners.com
                </a>
              </motion.li>
              <motion.li
                className="flex items-center"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.4 }}
              >
                <Phone className="h-4 w-4 mr-2 text-white/60" />
                <a href="tel:+12125551234" className="hover:text-white transition-colors">
                  +1 (212) 555-1234
                </a>
              </motion.li>
              <motion.li
                className="flex items-start"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.5 }}
              >
                <MapPin className="h-4 w-4 mr-2 mt-1 text-white/60" />
                <span>100 Nassau Street, New York, NY 10038</span>
              </motion.li>
            </ul>
          </motion.div>
        </div>

        <motion.div
          className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-800/30"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <div className="mb-4 md:mb-0">
            <p>© {currentYear} Nassau Street Partners. All rights reserved.</p>
          </div>
          <div className="flex space-x-8">
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Cookies
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
