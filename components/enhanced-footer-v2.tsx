"use client"

import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook, ArrowUpRight, ChevronUp } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion"
import { useEffect, useState } from "react"

export function EnhancedFooterV2() {
  const currentYear = new Date().getFullYear()
  const [showScrollTop, setShowScrollTop] = useState(false)
  const { scrollYProgress } = useScroll()
  const opacity = useTransform(scrollYProgress, [0.7, 0.8], [0, 1])

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <footer className="relative mt-auto border-t border-gray-800/30">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5 z-0">
        <Image src="/images/world-map.jpg" alt="World map" fill className="object-cover" />
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

      {/* Footer top section with logo and newsletter */}
      <div className="relative z-10 container mx-auto px-6 md:px-12 py-16 border-b border-gray-800/30">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex flex-col mb-4">
              <span className="text-2xl md:text-3xl font-serif tracking-wider text-white">XERA</span>
              <span className="text-sm md:text-base tracking-[0.3em] font-light mt-[-2px] text-white/80">
                C A P I T A L
              </span>
            </div>
            <p className="text-gray-300 font-light max-w-md mb-6">
              A leading boutique M&A advisory firm specializing in representing privately-held middle market companies
              pursuing exits.
            </p>
            <div className="flex space-x-4">
              <motion.a
                href="#"
                className="p-2 bg-white/5 rounded-full hover:bg-white/10 transition-colors"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <Linkedin className="h-5 w-5 text-white/80" />
              </motion.a>
              <motion.a
                href="#"
                className="p-2 bg-white/5 rounded-full hover:bg-white/10 transition-colors"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <Twitter className="h-5 w-5 text-white/80" />
              </motion.a>
              <motion.a
                href="#"
                className="p-2 bg-white/5 rounded-full hover:bg-white/10 transition-colors"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <Facebook className="h-5 w-5 text-white/80" />
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-gradient-to-b from-gray-900/40 to-gray-900/20 backdrop-blur-sm p-6 rounded-lg border border-white/10"
          >
            <h3 className="text-lg font-extralight mb-4">Let's Connect</h3>
            <p className="text-sm text-gray-300 font-light mb-4">
              Contact us to discuss your M&A needs and how we can help you achieve a successful exit.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center px-6 py-2 bg-white text-black hover:bg-gray-200 transition-colors rounded-md"
            >
              Contact Us
              <ArrowUpRight className="ml-1 h-4 w-4" />
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Main footer content */}
      <div className="container mx-auto px-6 md:px-12 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="text-white font-light mb-4 text-lg">Quick Links</h4>
            <ul className="space-y-3">
              {["About", "Why Us", "Success Cases", "Team", "Insights"].map((item, i) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.2 + i * 0.1 }}
                >
                  <Link
                    href={`/${item.toLowerCase().replace(/\s+/g, "-")}`}
                    className="hover:text-white transition-colors flex items-center group"
                  >
                    <motion.span
                      className="w-1 h-1 bg-white/30 rounded-full mr-2 group-hover:bg-white"
                      whileHover={{ scale: 1.5 }}
                    />
                    <span className="text-gray-400 group-hover:text-white group-hover:translate-x-1 transition-all">
                      {item}
                    </span>
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
            <h4 className="text-white font-light mb-4 text-lg">Services</h4>
            <ul className="space-y-3">
              {["M&A Advisory", "Private Equity", "Strategic Advisory", "Additional Services"].map((item, i) => (
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
                    <span className="text-gray-400 group-hover:text-white group-hover:translate-x-1 transition-all">
                      {item}
                    </span>
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
            <h4 className="text-white font-light mb-4 text-lg">Success Cases</h4>
            <ul className="space-y-3">
              {["Northwest Physicians Network", "Starwave", "Claircom", "Insight Schools"].map((item, i) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.2 + i * 0.1 }}
                >
                  <Link href="/success-cases" className="hover:text-white transition-colors flex items-center group">
                    <motion.span
                      className="w-1 h-1 bg-white/30 rounded-full mr-2 group-hover:bg-white"
                      whileHover={{ scale: 1.5 }}
                    />
                    <span className="text-gray-400 group-hover:text-white group-hover:translate-x-1 transition-all">
                      {item}
                    </span>
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h4 className="text-white font-light mb-4 text-lg">Contact</h4>
            <ul className="space-y-3">
              <motion.li
                className="flex items-center"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.3 }}
              >
                <Mail className="h-4 w-4 mr-2 text-white/60" />
                <a href="mailto:info@xeracapital.com" className="text-gray-400 hover:text-white transition-colors">
                  info@xeracapital.com
                </a>
              </motion.li>
              <motion.li
                className="flex items-center"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.4 }}
              >
                <Mail className="h-4 w-4 mr-2 text-white/60" />
                <a href="mailto:contact@xeracapital.com" className="text-gray-400 hover:text-white transition-colors">
                  contact@xeracapital.com
                </a>
              </motion.li>
              <motion.li
                className="flex items-center"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.5 }}
              >
                <Phone className="h-4 w-4 mr-2 text-white/60" />
                <a href="tel:+12065551234" className="text-gray-400 hover:text-white transition-colors">
                  +1 (206) 555-1234
                </a>
              </motion.li>
              <motion.li
                className="flex items-start"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.6 }}
              >
                <MapPin className="h-4 w-4 mr-2 mt-1 text-white/60" />
                <span className="text-gray-400">1000 Second Avenue, Suite 1200, Seattle, WA 98104</span>
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
          <div className="mb-4 md:mb-0 text-gray-500 text-sm">
            <p>© {currentYear} Xera Capital. All Rights Reserved.</p>
            <p className="mt-2 text-xs text-gray-600">
              Xera Capital is an affiliate of Harris Northwest Advisors. The success cases and track record presented on
              this website represent work completed by Harris Northwest Advisors. All rights to showcase this work have
              been transferred to Xera Capital.
            </p>
          </div>
          <div className="flex space-x-8 text-sm">
            <a href="#" className="text-gray-500 hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-500 hover:text-white transition-colors">
              Terms & Conditions
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll to top button */}
      <motion.button
        style={{ opacity }}
        className={`fixed bottom-8 right-8 p-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 hover:bg-white/20 transition-colors z-50 ${
          showScrollTop ? "visible" : "invisible"
        }`}
        onClick={scrollToTop}
        whileHover={{ y: -5 }}
        transition={{ type: "spring", stiffness: 400 }}
      >
        <ChevronUp className="h-5 w-5" />
      </motion.button>
    </footer>
  )
}
