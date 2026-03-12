import { serviceCategories } from "../data/services"
import { Link } from "react-router-dom"
import SEO from "../components/SEO"
import { motion } from "framer-motion"

export default function Services() {
  return (
    <div className="min-h-screen bg-gray-50">
      <SEO
        title="Business Services | Supriya Consultancy"
        description="GST registration, company registration, trademark registration, income tax filing and compliance services across India."
        keywords="GST services, company registration, trademark services, MSME registration, income tax filing"
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-indigo-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
            <p className="text-xl text-blue-200 max-w-3xl mx-auto">
              Comprehensive business solutions including GST, company registration, trademark, income tax, and compliance services.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services by Category */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        {serviceCategories.map((category, catIndex) => (
          <motion.div 
            key={category.slug}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: catIndex * 0.1 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-2 h-12 bg-blue-700 rounded-full"></div>
              <h2 className="text-3xl font-bold text-gray-800">{category.category}</h2>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {category.services.map((service, serviceIndex) => (
                <Link 
                  key={service.slug} 
                  to={`/service/${service.slug}`}
                  className="group"
                >
                  <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border-b-4 border-transparent hover:border-blue-700 h-full">
                    <h3 className="text-xl font-bold mb-3 text-gray-800 group-hover:text-blue-700 transition">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">
                      {service.description}
                    </p>
                    <div className="flex items-center text-blue-700 font-medium text-sm">
                      Learn More 
                      <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* CTA Section */}
      <section className="bg-gray-100 py-16">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">Need Help Choosing a Service?</h2>
          <p className="text-gray-600 mb-8 text-lg">
            Our experts will guide you to the right service for your business needs.
          </p>
          <div className="flex justify-center gap-4">
            <Link to="/contact">
              <button className="bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-800 transition">
                Contact Us
              </button>
            </Link>
            <a href="tel:+919876543210">
              <button className="border-2 border-blue-700 text-blue-700 px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 hover:text-white transition">
                Call Now
              </button>
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
