import { useParams, Link } from "react-router-dom"
import { getServiceBySlug, serviceCategories } from "../data/services"
import SEO from "../components/SEO"
import { motion } from "framer-motion"

// Detailed service descriptions
const serviceDetails = {
  // Business Registration
  "proprietorship-registration": {
    title: "Proprietorship Registration",
    description: "Start your single-owner business with proper legal recognition. We handle all documentation and registration processes.",
    benefits: ["Easy to set up", "Minimal compliance", "Complete control", "Simple tax filing"],
    documents: ["Aadhaar Card", "PAN Card", "Address Proof", "Passport Size Photos"],
    process: ["Document Collection", "Name Approval", "Registration Application", "Certificate Issuance"]
  },
  "partnership-registration": {
    title: "Partnership Firm Registration",
    description: "Register your partnership firm with a legal deed. Perfect for businesses with 2-20 partners.",
    benefits: ["Legal Recognition", "Easy Formation", "Combined Resources", "Tax Benefits"],
    documents: ["Partner Photos", "Aadhaar Cards", "PAN Cards", "Address Proofs"],
    process: ["Draft Partnership Deed", "Name Approval", "Registration", "Get Certificate"]
  },
  "llp-registration": {
    title: "LLP Registration",
    description: "Limited Liability Partnership combines partnership flexibility with company liability protection.",
    benefits: ["Limited Liability", "Tax Efficiency", "Easy Ownership Transfer", "Perpetual Existence"],
    documents: ["DIN for Partners", "DSC", "Address Proofs", "NOC from Property Owner"],
    process: ["Get DSC & DIN", "Name Approval", "FiLLiP Application", "LLP Agreement", "Certificate"]
  },
  "private-limited-company": {
    title: "Private Limited Company",
    description: "India's most preferred business structure for startups. Get separate legal entity status and limited liability.",
    benefits: ["Limited Liability", "Separate Legal Entity", "Fund Raising Capacity", "Perpetual Succession"],
    documents: ["Director DIN", "DSC", "Address Proofs", "Registered Office Proof"],
    process: ["DIN & DSC", "Name Approval", "MOA & AOA", "ROC Filing", "Certificate of Incorporation"]
  },
  
  // GST Services
  "gst-registration": {
    title: "GST Registration",
    description: "Get GST registration within 3-5 business days. We handle all documentation and follow-up with authorities.",
    benefits: ["Legal Business Recognition", "Input Tax Credit", "Easy Interstate Sales", "Government Contracts"],
    documents: ["PAN Card", "Aadhaar Card", "Address Proof", "Business Proof", "Bank Account Details"],
    process: ["Document Collection", "GST Portal Application", "Verification", "ARN Generation", "GSTIN Certificate"]
  },
  "gst-return-filing": {
    title: "GST Return Filing",
    description: "Monthly and quarterly GST return filing services. Stay compliant and avoid penalties.",
    benefits: ["Avoid Penalties", "Input Tax Credit", "Compliance Guarantee", "Error-free Filing"],
    documents: ["Invoices", "GSTR-3B Data", "GSTR-1 Data", "Bank Statements"],
    process: ["Data Collection", "Return Preparation", "Reconciliation", "Filing", "Confirmation"]
  },
  "gst-lut-form": {
    title: "GST LUT Form",
    description: "Letter of Undertaking for export of goods/services without payment of integrated tax.",
    benefits: ["Export Without Tax", "Faster Customs Clearance", "Competitive Pricing", "Easy Renewal"],
    documents: ["GST Registration", "Export Invoices", "Bank Certificate", "Authorisation Letter"],
    process: ["Application Preparation", "LUT Filing", "Acknowledgement", "Bond Execution"]
  },
  "gst-annual-return": {
    title: "GST Annual Return",
    description: "Annual return filing under GST (GSTR-9) for registered businesses.",
    benefits: ["Compliance", "Reconciliation", "Tax Audit Ready", "Penalty Avoidance"],
    documents: ["Annual Returns Data", "GSTR-1", "GSTR-3B", "Audit Reports"],
    process: ["Data Compilation", "Reconciliation", "Return Preparation", "Filing"]
  },
  
  // Trademark
  "trademark-registration": {
    title: "Trademark Registration",
    description: "Protect your brand identity with professional trademark registration. Secure your logo, brand name, or slogan.",
    benefits: ["Brand Protection", "Legal Rights", "Unique Identity", "Asset Value"],
    documents: ["Logo/Brand Image", "Business Proof", "Identity Proof", "Address Proof"],
    process: ["Trademark Search", "Application Filing", "Examination", "Publication", "Registration Certificate"]
  },
  "trademark-renewal": {
    title: "Trademark Renewal",
    description: "Renew your trademark before expiration to maintain legal protection.",
    benefits: ["Continuous Protection", "Avoid Lapse", "Legal Standing"],
    documents: ["Original Certificate", "ID Proof", "Address Proof"],
    process: ["Application Filing", "Verification", "Renewal Certificate"]
  },
  
  // Income Tax
  "income-tax-filing": {
    title: "Income Tax Filing",
    description: "Professional income tax return filing for individuals. Maximize refunds and ensure compliance.",
    benefits: ["Maximum Refunds", "Tax Planning", "Compliance", "Quick Processing"],
    documents: ["Form 16", "Investment Proofs", "Bank Statements", "Property Documents"],
    process: ["Document Collection", "Income Computation", "Return Preparation", "E-Filing", "ITR-V Verification"]
  },
  "company-itr-filing": {
    title: "Company ITR Filing",
    description: "Income tax return filing for companies under ITR-6. Expert handling of corporate tax matters.",
    benefits: ["Tax Efficiency", "Compliance", "Audit Support", "Statutory Filing"],
    documents: ["Financial Statements", "Tax Audit Reports", "Form 16", "Advance Tax Documents"],
    process: ["Financial Review", "Tax Computation", "Return Preparation", "E-Filing", "Response to Notices"]
  },
  "tds-return-filing": {
    title: "TDS Return Filing",
    description: "Quarterly TDS returns (Form 24Q, 26Q, 27Q) for employers and deductors.",
    benefits: ["Penalty Avoidance", "Compliance", "Certificate Generation"],
    documents: ["TDS Challans", "Salary Details", "Vendor/Borrower Details"],
    process: ["Data Collection", "TDS Computation", "Return Preparation", "Filing", "Challan Confirmation"]
  },
  
  // MCA
  "company-compliance": {
    title: "Company Compliance",
    description: "Annual filing and statutory compliance for companies under Companies Act, 2013.",
    benefits: ["Penalty Avoidance", "Good Standing", "Audit Support", "ROC Filing"],
    documents: ["Financial Statements", "Board Resolutions", "Director Details"],
    process: ["Document Collection", "Return Preparation", "MGT-7/AOC-4 Filing", "Confirmation"]
  },
  "llp-compliance": {
    title: "LLP Compliance",
    description: "LLP annual filing and compliance services under LLP Act, 2008.",
    benefits: ["ROC Compliance", "Penalty Avoidance", "Annual Return", "Statement of Account"],
    documents: ["LLP Agreement", "Partner Details", "Financial Statements"],
    process: ["Document Collection", "Form 11 Filing", "Form 8 Filing", "Confirmation"]
  },
  "director-change": {
    title: "Director Change",
    description: "Add or remove directors in company through proper DIN process.",
    benefits: ["Legal Process", "ROC Filing", "Updated Records"],
    documents: ["DIN Details", "Board Resolution", "INC-3 Form", "Acceptance Letter"],
    process: ["Board Meeting", "Form Filing", "ROC Processing", "Update Master Data"]
  },
  
  // MSME
  "udyam-registration": {
    title: "Udyam Registration",
    description: "MSME Udyam registration for small and medium enterprises to avail government benefits.",
    benefits: ["Government Schemes", "Easy Loans", "Tax Benefits", "Market Support"],
    documents: ["Aadhaar Card", "PAN Card", "Business Details", "Investment Proof"],
    process: ["Online Application", "Self-Certification", "Udyam Certificate Generation"]
  },
  
  // FSSAI
  "fssai-registration": {
    title: "FSSAI Registration",
    description: "Food safety licence for food business operators. Get FSSAI registration/license online.",
    benefits: ["Legal Operation", "Food Safety Compliance", "Customer Trust", "Business Expansion"],
    documents: ["Address Proof", "Photo", "ID Proof", "Food Safety Plan"],
    process: ["Application Filing", "Inspection", "Certificate Issuance"]
  },
  "fssai-renewal": {
    title: "FSSAI Renewal",
    description: "Renew your FSSAI license before expiry to continue food business operations.",
    benefits: ["Uninterrupted Business", "Compliance", "Avoid Penalties"],
    documents: ["Original Certificate", "Previous Returns", "Address Proof"],
    process: ["Application", "Verification", "Renewed Certificate"]
  },
  
  // Payroll & Compliance
  "payroll-services": {
    title: "Payroll Services",
    description: "Complete payroll processing including salary calculation, PF, ESI, and tax deductions.",
    benefits: ["Accurate Calculations", "Time Savings", "Statutory Compliance", "Employee Satisfaction"],
    documents: ["Employee Data", "Salary Structure", "Leave Records", "Bank Details"],
    process: ["Data Collection", "Salary Processing", "Statutory Calculations", "Payslip Generation"]
  },
  "pf-return-filing": {
    title: "PF Return Filing",
    description: "EPF monthly returns and compliance for establishments.",
    benefits: ["Compliance", "Penalty Avoidance", "Employee Benefits"],
    documents: ["Employee Details", "Salary Data", "UAN Numbers", "ECR"],
    process: ["Data Compilation", "ECR Generation", "Return Filing", "Payment"]
  },
  "esi-return-filing": {
    title: "ESI Return Filing",
    description: "Employee State Insurance returns and compliance services.",
    benefits: ["Compliance", "Employee Coverage", "Penalty Avoidance"],
    documents: ["Employee Data", "Contributions", "Attendance Records"],
    process: ["Data Collection", "Return Preparation", "Filing", "Payment"]
  },
  "bookkeeping": {
    title: "Bookkeeping",
    description: "Professional accounting and bookkeeping services for businesses.",
    benefits: ["Financial Clarity", "Tax Readiness", "Business Insights", "Audit Support"],
    documents: ["Invoices", "Bills", "Bank Statements", "Vouchers"],
    process: ["Data Collection", "Transaction Recording", "Reconciliation", "Financial Statements"]
  },
  
  // Default for other services
  "default": {
    title: "",
    description: "Professional service handled by experienced experts. We ensure smooth and compliant processing.",
    benefits: ["Expert Guidance", "Quick Processing", "Affordable Pricing", "Dedicated Support"],
    documents: ["As per requirement"],
    process: ["Consultation", "Document Collection", "Application Processing", "Completion"]
  }
}

function getServiceDetail(slug) {
  return serviceDetails[slug] || { ...serviceDetails.default, title: slug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()) }
}

export default function ServicePage() {
  const { slug } = useParams()
  const service = getServiceBySlug(slug)
  const detail = getServiceDetail(slug)

  if (!service) {
    return (
      <div className="text-center py-20">
        <h1 className="text-2xl font-bold">Service not found</h1>
        <Link to="/services" className="text-blue-600 hover:underline mt-4 block">
          View All Services
        </Link>
      </div>
    )
  }

  // Find related services from same category
  const relatedServices = serviceCategories
    .find(cat => cat.category === service.category)
    ?.services.filter(s => s.slug !== slug) || []

  return (
    <div className="min-h-screen bg-gray-50">
      <SEO
        title={`${service.title} | Supriya Consultancy`}
        description={service.description}
        keywords={service.title}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-indigo-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-blue-300 font-medium">{service.category}</span>
            <h1 className="text-4xl md:text-5xl font-bold mt-2 mb-6">{detail.title}</h1>
            <p className="text-xl text-gray-200 max-w-2xl">{detail.description}</p>
            <Link to="/contact">
              <button className="mt-8 bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition">
                Get Started
              </button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-10">
          
          {/* Left Content */}
          <div className="md:col-span-2 space-y-10">
            
            {/* Benefits */}
            <motion.div 
              className="bg-white rounded-2xl shadow-lg p-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <h2 className="text-2xl font-bold mb-6 text-gray-800">Key Benefits</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {detail.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <svg className="w-6 h-6 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Documents Required */}
            <motion.div 
              className="bg-white rounded-2xl shadow-lg p-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h2 className="text-2xl font-bold mb-6 text-gray-800">Documents Required</h2>
              <div className="grid md:grid-cols-2 gap-3">
                {detail.documents.map((doc, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                    <svg className="w-5 h-5 text-blue-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    <span className="text-gray-700">{doc}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Process */}
            <motion.div 
              className="bg-white rounded-2xl shadow-lg p-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <h2 className="text-2xl font-bold mb-6 text-gray-800">Our Process</h2>
              <div className="space-y-4">
                {detail.process.map((step, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-blue-700 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                      {index + 1}
                    </div>
                    <span className="text-gray-700 text-lg">{step}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Sidebar */}
          <div className="space-y-6">
            {/* Contact Card */}
            <div className="bg-gradient-to-br from-blue-700 to-indigo-800 rounded-2xl p-6 text-white">
              <h3 className="text-xl font-bold mb-4">Need Help?</h3>
              <p className="text-blue-100 mb-4">Our experts are ready to assist you with {detail.title}.</p>
              <Link to="/contact">
                <button className="w-full bg-white text-blue-800 py-3 rounded-lg font-semibold hover:bg-blue-50 transition">
                  Enquire Now
                </button>
              </Link>
            </div>

            {/* Why Choose Us */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-xl font-bold mb-4 text-gray-800">Why Choose Us?</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-600">200+ Businesses Served</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-600">Expert CA Support</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-600">Fast Processing</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-600">Affordable Pricing</span>
                </li>
              </ul>
            </div>

            {/* Related Services */}
            {relatedServices.length > 0 && (
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h3 className="text-xl font-bold mb-4 text-gray-800">Related Services</h3>
                <ul className="space-y-3">
                  {relatedServices.slice(0, 4).map((relService) => (
                    <li key={relService.slug}>
                      <Link 
                        to={`/service/${relService.slug}`}
                        className="text-blue-600 hover:text-blue-800 hover:underline text-sm"
                      >
                        → {relService.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <section className="bg-blue-900 text-white py-16">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-8 text-blue-200">Contact us today for a free consultation on {detail.title}.</p>
          <Link to="/contact">
            <button className="bg-white text-blue-900 px-10 py-4 rounded-xl font-semibold hover:bg-blue-50 transition text-lg">
              Contact Us Now
            </button>
          </Link>
        </div>
      </section>
    </div>
  )
}

