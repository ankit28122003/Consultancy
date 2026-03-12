import React from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import AnimatedServiceCard from '../components/AnimatedServiceCard'
import { motion } from 'framer-motion'
import { services } from '../data/services'

// Filter Income Tax related services
const taxServices = services.filter(service => 
  service.slug.includes('tax') || service.slug.includes('tds') || service.slug.includes('itr') || 
  service.slug.includes('tan') || ['business-tax-filing', 'partnership-firm-itr', 'llp-itr-filing'].includes(service.slug)
)

export default function IncomeTax() {
  return (
    <div className="min-h-screen bg-gray-50">
      <SEO 
        title="Income Tax Services | ITR Filing, TDS Returns, TAN | Supriya Consultancy"
        description="Expert income tax filing for individuals, businesses, companies. ITR-1 to ITR-7, TDS returns, TAN registration, tax planning and advisory."
        keywords="ITR filing, income tax return, TDS return, TAN registration, income tax consultancy"
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-900 via-red-900 to-amber-900 text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10" />
        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block bg-white/20 backdrop-blur-sm px-6 py-2 rounded-full text-sm font-semibold mb-6">
              Tax Season Ready
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Expert{' '}
              <span className="bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent">
                Income Tax Services
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-orange-100 mb-8 max-w-3xl mx-auto leading-relaxed">
              ITR Filing for Individuals, Businesses & Companies | TDS Returns | TAN Registration | 
              Maximum Refunds | Tax Planning | Audit Representation
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="bg-white text-orange-900 px-10 py-4 rounded-2xl font-bold text-lg hover:bg-orange-50 transition-all duration-300 shadow-2xl hover:shadow-3xl transform hover:-translate-y-1">
                File ITR Now
              </Link>
              <Link to="/services" className="border-2 border-white/50 text-white px-10 py-4 rounded-2xl font-bold text-lg hover:bg-white/20 backdrop-blur-sm transition-all duration-300">
                All Tax Services
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
              { num: '15,000+', label: 'ITRs Filed' },
              { num: '₹50+ Cr', label: 'Refunds Claimed' },
              { num: '50+', label: 'CAs on Team' },
              { num: '24 hrs', label: 'Response Time' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform">
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
              Income Tax Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Complete tax solutions for every business structure and individual needs
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {taxServices.slice(0, 9).map((service, index) => (  // Limit to 9 for layout
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
            <span className="inline-block bg-orange-100 text-orange-800 px-6 py-2 rounded-full text-sm font-semibold mb-6">
              Maximum Refunds Guaranteed
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Smart{' '}
              <span className="text-orange-600">Tax Planning</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "📋",
                title: "Individual ITRs",
                desc: "ITR-1, ITR-2, ITR-3, ITR-4 with maximum deductions and exemptions"
              },
              {
                icon: "🏢",
                title: "Business Returns",
                desc: "ITR-3, ITR-5, ITR-6 for proprietorships, firms, companies"
              },
              {
                icon: "💼",
                title: "Company Taxation",
                desc: "Corporate tax returns, MAT, transfer pricing, audit representation"
              },
              {
                icon: "📊",
                title: "TDS Compliance",
                desc: "24Q, 26Q, 27Q quarterly returns, correction statements"
              },
              {
                icon: "🎯",
                title: "Tax Planning",
                desc: "Section 80C, 80D deductions, HRA, capital gains optimization"
              },
              {
                icon: "⚖️",
                title: "Assessment Support",
                desc: "Scrutiny cases, appeals, rectifications, refunds tracking"
              }
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="group bg-gradient-to-br from-gray-50 to-orange-50 p-8 rounded-3xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-white/50 hover:border-orange-200"
              >
                <div className="text-4xl mb-6">{benefit.icon}</div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-orange-600 transition-colors">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-orange-900 to-red-900 text-white py-24">
        <div className="max-w-4xl mx-auto text-center px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              File Your{' '}
              <span className="text-yellow-400">ITR Today</span>
            </h2>
            <p className="text-xl mb-12 text-orange-100 max-w-2xl mx-auto">
              Professional tax filing with maximum refunds and zero penalties.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link to="/contact" className="bg-yellow-400 text-gray-900 px-12 py-6 rounded-2xl font-bold text-xl hover:bg-yellow-300 transition-all shadow-2xl hover:shadow-3xl transform hover:-translate-y-2">
                File ITR Now
              </Link>
              <Link to="/services" className="border-2 border-white px-12 py-6 rounded-2xl font-bold text-xl hover:bg-white hover:text-gray-900 transition-all backdrop-blur-sm">
                Explore Tax Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
