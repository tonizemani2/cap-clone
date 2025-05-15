"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { XeraLogo } from "./xera-logo"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { href: "/track-record", label: "Track Record" },
    { href: "/services", label: "Services" },
    { href: "/about", label: "About" },
    { href: "/transactions", label: "Transactions" },
  ]

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-6 md:px-12 py-6 transition-all duration-500 ${
          scrolled ? "bg-black/80 backdrop-blur-md border-b border-white/10" : "bg-transparent"
        }`}
      >
        <div className="flex-shrink-0">
          <Link href="/" className="text-white group flex items-center">
            <XeraLogo size="sm" className="mr-3" />
            <div className="flex flex-col">
              <span className="text-lg md:text-xl font-serif tracking-wider group-hover:text-gradient transition-all duration-300">
                XERA
              </span>
              <span className="text-xs md:text-sm tracking-[0.3em] font-light mt-[-2px] text-white/80 group-hover:text-white transition-all duration-300">
                C A P I T A L
              </span>
            </div>
          </Link>
        </div>

        <div className="hidden md:flex space-x-8 text-sm font-light">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`hover:opacity-80 transition-opacity relative group ${
                pathname === link.href ? "text-white" : "text-gray-400"
              }`}
            >
              {link.label}
              <motion.span
                className="absolute left-0 right-0 bottom-0 h-[1px] bg-gradient-to-r from-white/30 via-white to-white/30"
                initial={{ scaleX: pathname === link.href ? 1 : 0, opacity: pathname === link.href ? 1 : 0 }}
                whileHover={{ scaleX: 1, opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
            </Link>
          ))}
        </div>

        <div className="md:hidden">
          <button
            className="text-white p-1 hover:bg-white/10 rounded-full transition-colors"
            onClick={() => setIsOpen(true)}
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/95 backdrop-blur-md z-50 flex flex-col p-6"
          >
            <div className="flex justify-between items-center">
              <Link href="/" className="text-white flex items-center" onClick={() => setIsOpen(false)}>
                <XeraLogo size="sm" className="mr-3" />
                <div className="flex flex-col">
                  <span className="text-lg md:text-xl font-serif tracking-wider">XERA</span>
                  <span className="text-xs md:text-sm tracking-[0.3em] font-light mt-[-2px] text-white/80">
                    C A P I T A L
                  </span>
                </div>
              </Link>
              <button onClick={() => setIsOpen(false)} className="p-1 hover:bg-white/10 rounded-full transition-colors">
                <X className="h-6 w-6 text-white" />
              </button>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-col space-y-6 items-center justify-center h-full"
            >
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                >
                  <Link
                    href={link.href}
                    className={`text-xl font-light hover:text-gradient transition-all duration-300 ${
                      pathname === link.href ? "text-gradient" : "text-gray-400"
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
