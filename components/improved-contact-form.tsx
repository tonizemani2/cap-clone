"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { ArrowUpRight, CheckCircle, Clock, Mail, Phone } from "lucide-react"

export function ImprovedContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    interest: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError("")

    // Simulate form submission
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500))
      setIsSubmitted(true)
      setFormData({ name: "", email: "", company: "", phone: "", interest: "", message: "" })
    } catch (err) {
      setError("There was an error submitting your message. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const benefits = [
    "Confidential initial consultation",
    "Tailored solutions for your specific needs",
    "No obligation to proceed",
    "Response within 24 hours",
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div>
        <h3 className="text-2xl font-extralight mb-6">Contact Us</h3>

        {isSubmitted ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-gray-900/30 backdrop-blur-sm p-8 rounded-lg border border-white/10 text-center"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/10 mb-6">
              <CheckCircle className="h-8 w-8 text-white" />
            </div>
            <h4 className="text-xl font-extralight mb-4">Thank You!</h4>
            <p className="text-gray-300 font-light mb-6">
              Your message has been received. A member of our team will contact you shortly to discuss your needs.
            </p>
            <button
              onClick={() => setIsSubmitted(false)}
              className="px-6 py-2 border border-white text-white hover:bg-white hover:text-black transition-colors"
            >
              Send Another Message
            </button>
          </motion.div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="space-y-6 bg-gray-900/30 backdrop-blur-sm p-8 rounded-lg border border-white/10"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-light text-gray-300 mb-1">
                  Name*
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-gray-800/50 border border-gray-700 rounded-md focus:outline-none focus:ring-1 focus:ring-white"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-light text-gray-300 mb-1">
                  Email*
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-gray-800/50 border border-gray-700 rounded-md focus:outline-none focus:ring-1 focus:ring-white"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="company" className="block text-sm font-light text-gray-300 mb-1">
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-gray-800/50 border border-gray-700 rounded-md focus:outline-none focus:ring-1 focus:ring-white"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-light text-gray-300 mb-1">
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-gray-800/50 border border-gray-700 rounded-md focus:outline-none focus:ring-1 focus:ring-white"
                />
              </div>
            </div>

            <div>
              <label htmlFor="interest" className="block text-sm font-light text-gray-300 mb-1">
                I'm interested in*
              </label>
              <select
                id="interest"
                name="interest"
                required
                value={formData.interest}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-gray-800/50 border border-gray-700 rounded-md focus:outline-none focus:ring-1 focus:ring-white"
              >
                <option value="">Select an option</option>
                <option value="Capital Raising">Capital Raising</option>
                <option value="M&A Advisory">M&A Advisory</option>
                <option value="Strategic Partnerships">Strategic Partnerships</option>
                <option value="Growth Strategy">Growth Strategy</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-light text-gray-300 mb-1">
                Message*
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-gray-800/50 border border-gray-700 rounded-md focus:outline-none focus:ring-1 focus:ring-white"
              />
            </div>

            {error && <p className="text-red-400 text-sm">{error}</p>}

            <div className="text-xs text-gray-400 mb-4">
              By submitting this form, you agree to our privacy policy and consent to being contacted regarding your
              inquiry.
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full px-6 py-3 bg-white text-black hover:bg-gray-200 transition-colors disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center"
            >
              {isSubmitting ? "Sending..." : "Submit Inquiry"}
              {!isSubmitting && <ArrowUpRight className="ml-2 h-4 w-4" />}
            </button>
          </form>
        )}
      </div>

      <div className="space-y-8">
        <div className="bg-gray-900/30 backdrop-blur-sm p-8 rounded-lg border border-white/10">
          <h4 className="text-xl font-extralight mb-6">Why Contact Us</h4>
          <ul className="space-y-4">
            {benefits.map((benefit, index) => (
              <li key={index} className="flex items-start">
                <CheckCircle className="h-5 w-5 mr-3 mt-0.5 text-white/80" />
                <span className="text-gray-300 font-light">{benefit}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-gray-900/30 backdrop-blur-sm p-8 rounded-lg border border-white/10">
          <h4 className="text-xl font-extralight mb-6">Direct Contact</h4>
          <div className="space-y-4">
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
              <Clock className="h-5 w-5 mr-3 mt-1 text-white/80" />
              <div>
                <div className="font-light">Hours</div>
                <div className="text-gray-300">Monday - Friday: 9:00 AM - 6:00 PM EST</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
