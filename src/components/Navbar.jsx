import { Link } from "react-router-dom"
import { useState } from "react"
import { serviceCategories } from "../data/services"

function Navbar() {
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  const [openCategory, setOpenCategory] = useState(null)

  const toggleMobileMenu = () => setIsMobileOpen(!isMobileOpen)
const toggleServices = () => {
    setOpenCategory(openCategory ? null : 'services')
  }

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      {/* Desktop + Mobile Logo & Hamburger */}
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
        <div className="flex items-center gap-3">
          <img src="/logo.png" alt="Supriya Consultancy" className="w-10" />
          <span className="font-bold text-xl text-gray-800 md:block hidden">
            Supriya Consultancy
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6 items-center">
          <Link to="/" className="text-gray-700 hover:text-blue-700 font-medium transition">
            Home
          </Link>
          <Link to="/about" className="text-gray-700 hover:text-blue-700 font-medium transition">
            About
          </Link>
          
          {/* Services Dropdown (Desktop) */}
          <div className="relative">
            <button 
              className="text-gray-700 hover:text-blue-700 font-medium transition flex items-center gap-1"
              onMouseEnter={() => setIsServicesOpen(true)}
            >
              Services
              <svg className="w-4 h-4 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            
            {/* Desktop Dropdown */}
            {isServicesOpen && (
              <div 
                className="absolute top-full mt-2 bg-white shadow-2xl rounded-2xl border border-gray-100 w-[calc(100vw-2rem)] lg:w-[700px] lg:max-w-[90vw] max-w-md left-1/2 -translate-x-1/2 z-50 max-h-[70vh] overflow-y-auto"
                onMouseLeave={() => setIsServicesOpen(false)}
              >
                <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-6">
                  {serviceCategories.map((category) => (
                    <div key={category.slug} className="space-y-3">
                      <h3 className="font-bold text-blue-700 text-sm uppercase tracking-wide border-b border-gray-200 pb-2">
                        {category.category}
                      </h3>
                      <ul className="space-y-2">
                        {category.services.slice(0, 3).map((service) => (
                          <li key={service.slug}>
                            <Link 
                              to={`/service/${service.slug}`}
                              className="text-gray-600 hover:text-blue-700 text-sm block transition py-1"
                              onClick={() => setIsServicesOpen(false)}
                            >
                              {service.title}
                            </Link>
                          </li>
                        ))}
                        {category.services.length > 3 && (
                          <Link to={`/services#${category.slug}`} className="text-xs text-blue-600 hover:underline block">
                            More →
                          </Link>
                        )}
                      </ul>
                    </div>
                  ))}
                </div>
                <div className="bg-gray-50 p-4 text-center border-t border-gray-100">
                  <Link to="/services" className="text-blue-700 font-semibold hover:underline">
                    View All Services →
                  </Link>
                </div>
              </div>
            )}
          </div>

          <Link to="/contact" className="bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-800 transition">
            Contact
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button 
          className="md:hidden p-1 -mr-1 rounded-lg text-gray-700 hover:text-blue-700 hover:bg-gray-100 transition"
          onClick={toggleMobileMenu}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileOpen && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black/50 z-40 md:hidden"
            onClick={toggleMobileMenu}
          />
          
          {/* Mobile Drawer */}
          <motion.div 
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="fixed right-0 top-0 h-full w-80 bg-white shadow-2xl z-50 md:hidden overflow-y-auto"
          >
            {/* Mobile Header */}
            <div className="p-6 border-b border-gray-100 flex justify-between items-center">
              <div className="flex items-center gap-3">
                <img src="/logo.png" alt="Supriya Consultancy" className="w-10" />
                <span className="font-bold text-lg">Menu</span>
              </div>
              <button onClick={toggleMobileMenu} className="p-2 rounded-lg hover:bg-gray-100">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Mobile Nav Links */}
            <div className="p-6 space-y-4">
              <Link to="/" className="block py-3 px-4 rounded-lg hover:bg-blue-50 font-medium transition" onClick={toggleMobileMenu}>
                Home
              </Link>
              <Link to="/about" className="block py-3 px-4 rounded-lg hover:bg-blue-50 font-medium transition" onClick={toggleMobileMenu}>
                About
              </Link>

  {/* Mobile Services List */}
              <div>
                <button 
                  className="w-full text-left py-3 px-4 rounded-lg hover:bg-blue-50 font-medium flex justify-between items-center transition"
                  onClick={toggleServices}
                >
                  Services
                  <svg className={`w-5 h-5 transition-transform ${openCategory === 'services' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className={`overflow-hidden transition-all duration-300 ease-in-out ${openCategory === 'services' ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                  {serviceCategories.map((category) => (
                    <div key={category.slug} className="border-b border-gray-100 last:border-b-0">
                      <Link 
                        to={`/services#${category.slug}`}
                        className="block py-4 pl-4 pr-8 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-blue-700 transition flex items-center gap-2"
                        onClick={toggleMobileMenu}
                      >
                        📁 {category.category}
                      </Link>
                      <ul className="ml-8 space-y-1 mb-4">
                        {category.services.slice(0, 4).map((service) => (
                          <li key={service.slug}>
                            <Link 
                              to={`/service/${service.slug}`}
                              className="text-xs text-gray-600 hover:text-blue-700 block py-1 pl-2 -ml-1 rounded transition"
                              onClick={toggleMobileMenu}
                            >
                              • {service.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              <Link to="/contact" className="block py-3 px-4 bg-blue-700 text-white rounded-lg font-semibold text-center hover:bg-blue-800 transition" onClick={toggleMobileMenu}>
                Contact Us
              </Link>
            </div>
          </motion.div>
        </>
      )}
    </nav>
  )
}

export default Navbar

