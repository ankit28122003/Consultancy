import React from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import AnimatedServiceCard from '../components/AnimatedServiceCard'
import { motion } from 'framer-motion'
import { services } from '../data/services'

// Filter Trademark & IP related services
const trademarkServices = services.filter(service => 
  service.slug.includes('trademark') || service.slug.includes('logo') || 
  ['udyam-registration', 'msme-registration'].includes(service.slug)
)

export default function Trademark() {
  return (
    <div className="min-h-screen bg-gray-50">
      <SEO 
        title="Trademark Registration | Brand Protection | Logo Registration | Supriya Consultancy"
        description="Register your trademark, logo, brand name with IPO. Complete protection process including search, filing, response to examination, registration."
        keywords="trademark registration, logo trademark, brand registration, trademark renewal, trademark search India"
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-900 via-indigo-900 to-violet-900 text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10" />
        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block bg-white/20 backdrop-blur-sm px-6 py-2 rounded-full text-sm font-semibold mb-6">
              Brand Protection
            </span>
<h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-fuchsia-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
                Trademark & Logo
              </span>{' '}
              Registration
            </h1>
            <p className="text-xl md:text-2xl text-indigo-100 mb-8 max-w-3xl mx-auto leading-relaxed">
              Protect your brand identity, logo and business name with official Trademark Registration from 
              Controller General of Patents Designs & Trademarks. Complete process guaranteed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="bg-white text-purple-900 px-10 py-4 rounded-2xl font-bold text-lg hover:bg-purple-50 transition-all duration-300 shadow-2xl hover:shadow-3xl transform hover:-translate-y-1">
                Register Trademark
              </Link>
              <Link to="/services" className="border-2 border-white/50 text-white px-10 py-4 rounded-2xl font-bold text-lg hover:bg-white/20 backdrop-blur-sm transition-all duration-300">
                Brand Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { num: '2,000+', label: 'Trademarks Registered' },
              { num: '95%', label: 'Success Rate' },
              { num: '18 Months', label: 'Processing Time' },
              { num: '10 Years', label: 'Protection Period' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform">
                  {stat.num}
                </div>
                <div className="text-gray-600 font-semibold">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-6">
              Trademark Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Complete brand protection solutions from search to registration
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {trademarkServices.map((service, index) => (
              <AnimatedServiceCard
                key={service.slug}
                {...service}
                delay={index * 0.1}
                link={`/service/${service.slug}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-20"
          >
            <span className="inline-block bg-indigo-100 text-indigo-800 px-6 py-2 rounded-full text-sm font-semibold mb-6">
              Legal Brand Protection
            </span>
<h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Secure Your{' '}
              <span className="text-purple-600">Brand Identity</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "🔍",
                title: "Trademark Search",
                desc: "45 Class comprehensive availability search before filing"
              },
              {
                icon: "📄",
                title: "Application Filing",
                desc: "TM-A filing with IPO, priority watch, status tracking"
              },
              {
                icon: "⚖️",
                title: "Examination Response",
                desc: "Hearing representation, objections clearance, amendments"
              },
              {
                icon: "📢",
                title: "Publication & Opposition",
                desc: "Journal publication monitoring, opposition handling"
              },
              {
                icon: "🏆",
                title: "Registration Certificate",
                desc: "Final registration with 10-year protection certificate"
              },
              {
                icon: "🔄",
                title: "Renewal Services",
                desc: "TM-12 renewal filing before 10-year expiry"
              }
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="group bg-gradient-to-br from-gray-50 to-purple-50 p-8 rounded-3xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-white/50 hover:border-purple-200"
              >
                <div className="text-4xl mb-6">{benefit.icon}</div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-purple-600 transition-colors">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-purple-900 to-indigo-900 text-white py-24">
        <div className="max-w-4xl mx-auto text-center px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
          >
<h2 className="text-4xl md:text-5xl font-bold mb-6">
              Protect Your{' '}
              <span className="text-fuchsia-400">Brand Today</span>
            </h2>
            <p className="text-xl mb-12 text-indigo-100 max-w-2xl mx-auto">
              Don't let others use your brand name. Secure it legally now.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link to="/contact" className="bg-fuchsia-400 text-gray-900 px-12 py-6 rounded-2xl font-bold text-xl hover:bg-fuchsia-300 transition-all shadow-2xl hover:shadow-3xl transform hover:-translate-y-2">
                Trademark Search
              </Link>
              <Link to="/services" className="border-2 border-white px-12 py-6 rounded-2xl font-bold text-xl hover:bg-white hover:text-gray-900 transition-all backdrop-blur-sm">
                All IP Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
