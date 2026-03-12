import React from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import AnimatedServiceCard from '../components/AnimatedServiceCard'
import { motion } from 'framer-motion'
import { services, serviceCategories } from '../data/services'

// Filter compliance related services
const complianceServices = services.filter(service => 
  ['company-compliance', 'llp-compliance', 'payroll-services', 'pf-return-filing', 'esi-return-filing', 'proprietorship-compliance', 'dpt-3-filing', 'roc-filing', 'mca-annual-return'].includes(service.slug)
)

const complianceCategories = serviceCategories.filter(cat => 
  cat.slug === 'mca-company' || cat.slug === 'compliance-services'
)

export default function Compliance() {
  return (
    <div className="min-h-screen bg-gray-50">
      <SEO 
        title="Compliance Services | Company, LLP, PF, ESI Returns | Supriya Consultancy"
        description="Complete compliance solutions including ROC filings, company annual returns, LLP compliance, PF/ESI returns, and statutory filings. Stay penalty-free with expert CA support."
        keywords="company compliance, LLP compliance, ROC filing, PF return, ESI return, statutory compliance"
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 via-purple-900 to-indigo-900 text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10" />
        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block bg-white/20 backdrop-blur-sm px-6 py-2 rounded-full text-sm font-semibold mb-6">
              Statutory & ROC Compliance
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Complete{' '}
              <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                Compliance
              </span>{' '}
              Solutions
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
              Stay compliant with ROC filings, company annual returns, LLP compliance, PF/ESI returns, and all statutory requirements. 
              Avoid penalties with our expert CA team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="bg-white text-blue-900 px-10 py-4 rounded-2xl font-bold text-lg hover:bg-blue-50 transition-all duration-300 shadow-2xl hover:shadow-3xl transform hover:-translate-y-1">
                Get Compliance Quote
              </Link>
              <Link to="/services" className="border-2 border-white/50 text-white px-10 py-4 rounded-2xl font-bold text-lg hover:bg-white/20 backdrop-blur-sm transition-all duration-300">
                View All Services
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
              { num: '500+', label: 'Compliance Filings' },
              { num: '250+', label: 'Companies Served' },
              { num: '100%', label: 'Penalty Free' },
              { num: '24 hrs', label: 'Response Time' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform">
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
              Our Compliance Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive compliance solutions for companies, LLPs, and statutory requirements
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {complianceServices.map((service, index) => (
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
            <span className="inline-block bg-green-100 text-green-800 px-6 py-2 rounded-full text-sm font-semibold mb-6">
              Why Choose Our Compliance Services
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              100%{' '}
              <span className="text-blue-600">Penalty-Free</span> Compliance
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "📋",
                title: "Expert ROC Filings",
                desc: "MGT-7, AOC-4, DPT-3, DIR-3 KYC - all MCA compliance handled perfectly"
              },
              {
                icon: "⚖️",
                title: "Statutory Returns",
                desc: "PF, ESI, TDS, GST annual returns with 100% accuracy and on-time filing"
              },
              {
                icon: "🛡️",
                title: "Penalty Protection",
                desc: "Proactive compliance monitoring prevents notices and late fees"
              },
              {
                icon: "📊",
                title: "Director Compliance",
                desc: "DIN eKYC, director changes, disqualification prevention services"
              },
              {
                icon: "🔒",
                title: "LLP Compliance",
                desc: "Form 11, Form 8, statement of accounts & solvency"
              },
              {
                icon: "💼",
                title: "Payroll Compliance",
                desc: "Complete PF, ESI, PT, professional tax compliance"
              }
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="group bg-gradient-to-br from-gray-50 to-blue-50 p-8 rounded-3xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-white/50 hover:border-blue-200"
              >
                <div className="text-4xl mb-6">{benefit.icon}</div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-blue-600 transition-colors">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-900 to-indigo-900 text-white py-24">
        <div className="max-w-4xl mx-auto text-center px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready for{' '}
              <span className="text-yellow-400">100% Compliance</span>?
            </h2>
            <p className="text-xl mb-12 text-blue-100 max-w-2xl mx-auto">
              Don't risk penalties. Our CA experts handle all your compliance needs seamlessly.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link to="/contact" className="bg-yellow-400 text-gray-900 px-12 py-6 rounded-2xl font-bold text-xl hover:bg-yellow-300 transition-all shadow-2xl hover:shadow-3xl transform hover:-translate-y-2">
                Start Compliance Now
              </Link>
              <Link to="/services" className="border-2 border-white px-12 py-6 rounded-2xl font-bold text-xl hover:bg-white hover:text-gray-900 transition-all backdrop-blur-sm">
                Explore Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
