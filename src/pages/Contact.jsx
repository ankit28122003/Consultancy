import { useRef, useState } from "react"
import emailjs from "@emailjs/browser"
import SEO from "../components/SEO"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"

export default function Contact() {
  const form = useRef()
  const [status, setStatus] = useState("")
  const [loading, setLoading] = useState(false)

  const sendEmail = (e) => {
    e.preventDefault()
    setLoading(true)
    setStatus("")

    emailjs.sendForm(
      "service_supriya",
      "template_supriya",
      form.current,
      "public_key_supriya"
    )
      .then(
        () => {
          setStatus("success")
          setLoading(false)
          form.current.reset()
        },
        (error) => {
          setStatus("error")
          setLoading(false)
          console.log(error.text)
        }
      )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <SEO
        title="Contact Supriya Consultancy"
        description="Contact Supriya Consultancy for GST registration, company registration, trademark registration and tax services in Delhi."
        keywords="contact GST consultant, company registration Delhi, trademark services, income tax filing"
      />

      <section className="bg-gradient-to-r from-blue-900 to-indigo-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
            <p className="text-xl text-blue-200">
              Get in touch for professional business consulting services
            </p>
          </motion.div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-2xl shadow-lg p-8"
          >
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Send us a Message</h2>
            
            {status === "success" && (
              <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg mb-6">
                <p className="font-medium">Thank you! Your message has been sent successfully.</p>
                <p className="text-sm">We will get back to you within 24 hours.</p>
              </div>
            )}
            
            {status === "error" && (
              <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg mb-6">
                <p className="font-medium">Oops! Something went wrong.</p>
                <p className="text-sm">Please try again or contact us directly.</p>
              </div>
            )}

            <form ref={form} onSubmit={sendEmail} className="space-y-6">
              <div>
                <label className="block text-gray-700 font-medium mb-2">Full Name *</label>
                <input
                  name="from_name"
                  placeholder="Enter your full name"
                  required
                  className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">Email Address *</label>
                <input
                  name="from_email"
                  type="email"
                  placeholder="Enter your email address"
                  required
                  className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">Phone Number</label>
                <input
                  name="phone"
                  type="tel"
                  placeholder="Enter your phone number"
                  className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">Service Interested In</label>
                <select
                  name="service"
                  className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                >
                  <option value="">Select a service</option>
                  <option value="GST Registration">GST Registration</option>
                  <option value="GST Return Filing">GST Return Filing</option>
                  <option value="Company Registration">Company Registration</option>
                  <option value="LLP Registration">LLP Registration</option>
                  <option value="Trademark Registration">Trademark Registration</option>
                  <option value="Income Tax Filing">Income Tax Filing</option>
                  <option value="MSME Udyam Registration">MSME Udyam Registration</option>
                  <option value="FSSAI License">FSSAI License</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">Message *</label>
                <textarea
                  name="message"
                  placeholder="Tell us about your requirements..."
                  rows="5"
                  required
                  className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-800 transition disabled:bg-gray-400 disabled:cursor-not-allowed"
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="space-y-8"
          >
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold mb-6 text-gray-800">Contact Information</h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Office Address</h3>
                    <p className="text-gray-600">Delhi, India</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Email</h3>
                    <p className="text-gray-600">info@supriyaconsultancy.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Phone</h3>
                    <p className="text-gray-600">+91 98765 43210</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Business Hours</h3>
                    <p className="text-gray-600">Mon - Sat: 9:00 AM - 7:00 PM</p>
                    <p className="text-gray-600">Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-700 to-indigo-800 rounded-2xl p-8 text-white">
              <h2 className="text-2xl font-bold mb-4">Our Services</h2>
              <ul className="space-y-2 mb-6">
                <li>→ GST Registration & Filing</li>
                <li>→ Company & LLP Registration</li>
                <li>→ Trademark Registration</li>
                <li>→ Income Tax Filing</li>
                <li>→ MSME Udyam Registration</li>
                <li>→ FSSAI License</li>
              </ul>
              <Link to="/services">
                <button className="w-full bg-white text-blue-800 py-3 rounded-lg font-semibold hover:bg-blue-50 transition">
                  View All Services
                </button>
              </Link>
            </div>
          </motion.div>
        </div>

        <div className="mt-12">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501864.812341092!2d76.085603!3d28.457523!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x37205a8c2c8e599e!2sDelhi%2C%20India!5e0!3m2!1sen!2sus!4v1634567890123!5m2!1sen!2sus"
            className="w-full h-96 rounded-xl shadow-lg"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            title="Location Map"
          ></iframe>
        </div>
      </div>
    </div>
  )
}
