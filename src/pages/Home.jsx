import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { serviceCategories } from "../data/services"

function Home() {
  const featuredServices = [
    serviceCategories[3]?.services[0],
    serviceCategories[0]?.services[3],
    serviceCategories[2]?.services[2],
    serviceCategories[4]?.services[0],
    serviceCategories[1]?.services[1],
    serviceCategories[2]?.services[0],
  ].filter(Boolean)

  return (
    <div>
      <section className="bg-gradient-to-r from-blue-900 to-indigo-900 text-white py-24">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Professional Accounting & Business Compliance Services
            </h1>
            <p className="text-lg mb-6 text-blue-200">
              GST, Company Registration, Trademark, Income Tax Filing and Business Compliance handled by professionals.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/contact">
                <button className="bg-white text-blue-900 px-6 py-3 rounded-lg font-semibold hover:scale-105 transition">
                  Book Consultation
                </button>
              </Link>
              <Link to="/services">
                <button className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition">
                  Our Services
                </button>
              </Link>
            </div>
          </motion.div>
          <motion.img
            src="/hero.jpg"
            alt="Supriya Consultancy"
            className="w-180 mx-auto"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          />
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto text-center px-6">
          <h2 className="text-4xl font-bold mb-4 text-gray-800">Our Services</h2>
          <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
            Comprehensive business solutions for your company registration, tax filing, and compliance needs.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {serviceCategories.map((category, index) => (
              <motion.div
                key={category.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white shadow-xl p-6 rounded-xl hover:shadow-2xl transition group"
              >
                <h3 className="font-bold text-xl mb-3 text-gray-800">{category.category}</h3>
                {/* <p className="text-gray-600 mb-4">{category.services.length} services</p> */}
                <Link to="/services" className="text-blue-700 font-medium hover:underline">
                  View Services
                </Link>
              </motion.div>
            ))}
          </div>
          <div className="mt-12">
            <Link to="/services">
              <button className="bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-800 transition">
                View All Services
              </button>
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-gray-100 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Popular Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {featuredServices.map((service, index) => (
              <Link key={service.slug} to={`/service/${service.slug}`}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition"
                >
                  <h3 className="font-bold text-xl mb-3 text-gray-800">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto text-center px-6">
          <h2 className="text-4xl font-bold mb-10 text-gray-800">Why Choose Us</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="font-bold text-lg mb-2">Expert Accountants</h3>
              <p className="text-gray-600">Qualified CA professionals</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} viewport={{ once: true }} className="text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-bold text-lg mb-2">Affordable Pricing</h3>
              <p className="text-gray-600">Best rates in market</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} viewport={{ once: true }} className="text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="font-bold text-lg mb-2">Fast Processing</h3>
              <p className="text-gray-600">Quick turnaround</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} viewport={{ once: true }} className="text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="font-bold text-lg mb-2">100% Compliance</h3>
              <p className="text-gray-600">Government approved</p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="bg-blue-900 text-white py-16 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Start Your Business?</h2>
        <p className="mb-8 text-blue-200">Contact us today for a free consultation</p>
        <Link to="/contact">
          <button className="bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition">
            Get Started
          </button>
        </Link>
      </section>
    </div>
  )
}

export default Home

