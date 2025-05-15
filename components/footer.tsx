import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export function Footer() {
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

      <div className="container mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex flex-col mb-4">
              <span className="text-lg md:text-xl font-serif tracking-wider text-white">XERA</span>
              <span className="text-xs md:text-sm tracking-[0.3em] font-light mt-[-2px] text-white/80">
                C A P I T A L
              </span>
            </div>
            <p className="text-sm text-gray-400 mb-4">
              A boutique advisory firm offering tailored capital raising and strategic partnerships.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-white/10 transition-colors">
                <Linkedin className="h-4 w-4 text-white/80" />
              </a>
              <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-white/10 transition-colors">
                <Twitter className="h-4 w-4 text-white/80" />
              </a>
              <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-white/10 transition-colors">
                <Facebook className="h-4 w-4 text-white/80" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-light mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/services" className="hover:text-white transition-colors">
                  Capital Raising
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition-colors">
                  M&A Advisory
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition-colors">
                  Strategic Partnerships
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition-colors">
                  Growth Strategy
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-light mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-light mb-4">Contact</h4>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Mail className="h-4 w-4 mr-2 text-white/60" />
                <a href="mailto:info@xeracapital.com" className="hover:text-white transition-colors">
                  info@xeracapital.com
                </a>
              </li>
              <li className="flex items-center">
                <Phone className="h-4 w-4 mr-2 text-white/60" />
                <a href="tel:+12125551234" className="hover:text-white transition-colors">
                  +1 (212) 555-1234
                </a>
              </li>
              <li className="flex items-start">
                <MapPin className="h-4 w-4 mr-2 mt-1 text-white/60" />
                <span>350 Fifth Avenue, New York, NY 10118</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-800/30">
          <div className="mb-4 md:mb-0">
            <p>© {new Date().getFullYear()} Xera Capital. All rights reserved.</p>
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
        </div>
      </div>
    </footer>
  )
}
