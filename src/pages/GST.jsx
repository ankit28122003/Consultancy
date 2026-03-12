import React from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import AnimatedServiceCard from '../components/AnimatedServiceCard'
import { motion } from 'framer-motion'
import { services } from '../data/services'

// Filter GST related services
const gstServices = services.filter(service => 
  service.slug.startsWith('gst') || ['gstr-9-filing'].includes(service.slug)
)

export default function GST() {
  return (
    <div className="min-h-screen bg-gray-50">
      <SEO 
        title="GST Services | Registration, Returns, Annual Filing | Supriya Consultancy"
        description="Complete GST solutions: Registration, monthly/quarterly returns (GSTR-1, 3B), annual returns, notice replies, and consultancy. Expert CA support."
        keywords="GST registration, GST return filing, GSTR 3B, GSTR 1, GST annual return, GST consultancy"
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-emerald-900 via-green-900 to-teal-900 text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10" />
        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block bg-white/20 backdrop-blur-sm px-6 py-2 rounded-full text-sm font-semibold mb-6">
              GST Made Simple
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Complete{' '}
              <span className="bg-gradient-to-r from-yellow-400 via-lime-300 to-emerald-400 bg-clip-text text-transparent">
                GST Solutions
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-emerald-100 mb-8 max-w-3xl mx-auto leading-relaxed">
              GST Registration, Returns Filing (GSTR-1, GSTR-3B), Annual Returns, Notice Replies & Expert Consultancy. 
              Stay compliant, claim ITC, avoid penalties.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="bg-white text-emerald-900 px-10 py-4 rounded-2xl font-bold text-lg hover:bg-emerald-50 transition-all duration-300 shadow-2xl hover:shadow-3xl transform hover:-translate-y-1">
                Start GST Registration
              </Link>
              <Link to="/services" className="border-2 border-white/50 text-white px-10 py-4 rounded-2xl font-bold text-lg hover:bg-white/20 backdrop-blur-sm transition-all duration-300">
                All GST Services
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
              { num: '10,000+', label: 'GST Returns Filed' },
              { num: '5,000+', label: 'Registrations Done' },
              { num: '₹0', label: 'Penalties Saved' },
              { num: '7 Days', label: 'Registration Time' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform">
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
              GST Services We Offer
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From registration to annual reconciliation - we've got you covered
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {gstServices.map((service, index) => (
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
            <span className="inline-block bg-emerald-100 text-emerald-800 px-6 py-2 rounded-full text-sm font-semibold mb-6">
              GST Compliance Guaranteed
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Error-Free{' '}
              <span className="text-emerald-600">GST Filing</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "📄",
                title: "Monthly Returns",
                desc: "GSTR-1, GSTR-3B filing with auto-reconciliation and ITC matching"
              },
              {
                icon: "📊",
                title: "Annual Returns",
                desc: "GSTR-9, GSTR-9C preparation with audit support and reconciliation"
              },
              {
                icon: "⚠️",
                title: "Notice Management",
                desc: "GST notices, DRC-01 replies, assessment support, refunds processing"
              },
              {
                icon: "🔐",
                title: "GST Registration",
                desc: "New registration, amendment, cancellation, LUT/Bond filing"
              },
              {
                icon: "📈",
                title: "GST Consultancy",
                desc: "ITC reversal, transition credits, composition scheme advisory"
              },
              {
                icon: "💰",
                title: "Refund Services",
                desc: "Export refunds, inverted duty structure, excess payment refunds"
              }
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="group bg-gradient-to-br from-gray-50 to-emerald-50 p-8 rounded-3xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-white/50 hover:border-emerald-200"
              >
                <div className="text-4xl mb-6">{benefit.icon}</div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-emerald-600 transition-colors">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-emerald-900 to-teal-900 text-white py-24">
        <div className="max-w-4xl mx-auto text-center px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Simplify Your{' '}
              <span className="text-lime-300">GST Compliance</span>
            </h2>
            <p className="text-xl mb-12 text-emerald-100 max-w-2xl mx-auto">
              Leave GST headaches to experts. Focus on growing your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link to="/contact" className="bg-lime-400 text-gray-900 px-12 py-6 rounded-2xl font-bold text-xl hover:bg-lime-300 transition-all shadow-2xl hover:shadow-3xl transform hover:-translate-y-2">
                File GST Returns
              </Link>
              <Link to="/services" className="border-2 border-white px-12 py-6 rounded-2xl font-bold text-xl hover:bg-white hover:text-gray-900 transition-all backdrop-blur-sm">
                More Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
