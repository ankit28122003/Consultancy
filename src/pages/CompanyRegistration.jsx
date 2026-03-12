import { motion } from "framer-motion"
import SEO from "../components/SEO"
import { Link } from "react-router-dom"

export default function CompanyRegister(){

return(

<div>

<SEO
title="Company Registration Services | Supriya Consultancy"
description="Register your Private Limited Company, LLP, Partnership or Proprietorship with Supriya Consultancy in Delhi. Fast, reliable and affordable business registration services."
keywords="company registration Delhi, private limited company registration, LLP registration, partnership registration, proprietorship registration"
/>


{/* HERO SECTION */}

<section className="bg-gradient-to-r from-blue-900 to-indigo-900 text-white py-24">

<div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">

<motion.div
initial={{opacity:0,y:40}}
animate={{opacity:1,y:0}}
transition={{duration:1}}
>

<h1 className="text-5xl font-bold mb-6">

Company Registration Services

</h1>

<p className="text-lg leading-relaxed mb-6">

Start your business legally with professional company registration services from Supriya Consultancy. We help entrepreneurs register Private Limited Companies, LLPs, Partnerships and Proprietorships quickly and smoothly.

</p>

<Link to="/contact">

<button className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:scale-105 transition">

Start Your Business

</button>

</Link>

</motion.div>

<motion.img
src="/logo.png"
className="w-72 mx-auto"
initial={{opacity:0,scale:0.8}}
animate={{opacity:1,scale:1}}
transition={{duration:1}}
/>

</div>

</section>


{/* COMPANY TYPES */}

<section className="py-20">

<div className="max-w-7xl mx-auto px-6">

<h2 className="text-3xl font-bold text-center mb-12">

Types of Business Registration

</h2>

<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">


<motion.div whileHover={{scale:1.05}} className="shadow-lg p-6 rounded-xl">

<h3 className="text-xl font-bold mb-3">
Proprietorship
</h3>

<p className="text-gray-600">

Simplest form of business owned and managed by a single person with minimal compliance requirements.

</p>

</motion.div>


<motion.div whileHover={{scale:1.05}} className="shadow-lg p-6 rounded-xl">

<h3 className="text-xl font-bold mb-3">
Partnership Firm
</h3>

<p className="text-gray-600">

Business owned by two or more partners who share profits and responsibilities.

</p>

</motion.div>


<motion.div whileHover={{scale:1.05}} className="shadow-lg p-6 rounded-xl">

<h3 className="text-xl font-bold mb-3">
LLP Registration
</h3>

<p className="text-gray-600">

Limited Liability Partnership combines benefits of partnership and company structure.

</p>

</motion.div>


<motion.div whileHover={{scale:1.05}} className="shadow-lg p-6 rounded-xl">

<h3 className="text-xl font-bold mb-3">
Private Limited Company
</h3>

<p className="text-gray-600">

Best structure for startups and growing businesses with limited liability protection.

</p>

</motion.div>


</div>

</div>

</section>


{/* BENEFITS */}

<section className="bg-gray-100 py-20">

<div className="max-w-7xl mx-auto px-6">

<h2 className="text-3xl font-bold text-center mb-12">

Benefits of Company Registration

</h2>

<div className="grid md:grid-cols-3 gap-8">

<div className="bg-white p-6 shadow rounded-lg">
<h3 className="font-semibold text-xl mb-2">Legal Identity</h3>
<p>Your business gets a legal structure recognized by the government.</p>
</div>

<div className="bg-white p-6 shadow rounded-lg">
<h3 className="font-semibold text-xl mb-2">Limited Liability</h3>
<p>Protect personal assets from business liabilities.</p>
</div>

<div className="bg-white p-6 shadow rounded-lg">
<h3 className="font-semibold text-xl mb-2">Business Credibility</h3>
<p>Build trust with customers, investors and partners.</p>
</div>

<div className="bg-white p-6 shadow rounded-lg">
<h3 className="font-semibold text-xl mb-2">Easy Funding</h3>
<p>Companies can attract investors and raise funds easily.</p>
</div>

<div className="bg-white p-6 shadow rounded-lg">
<h3 className="font-semibold text-xl mb-2">Tax Benefits</h3>
<p>Enjoy tax advantages under different business structures.</p>
</div>

<div className="bg-white p-6 shadow rounded-lg">
<h3 className="font-semibold text-xl mb-2">Business Expansion</h3>
<p>Structured companies can grow and expand faster.</p>
</div>

</div>

</div>

</section>


{/* REGISTRATION PROCESS */}

<section className="py-20">

<div className="max-w-7xl mx-auto px-6">

<h2 className="text-3xl font-bold text-center mb-12">

Company Registration Process

</h2>

<div className="grid md:grid-cols-4 gap-8 text-center">

<div>
<h3 className="text-xl font-bold mb-2">Step 1</h3>
<p>Consultation and business structure selection</p>
</div>

<div>
<h3 className="text-xl font-bold mb-2">Step 2</h3>
<p>Document collection and verification</p>
</div>

<div>
<h3 className="text-xl font-bold mb-2">Step 3</h3>
<p>Government application filing</p>
</div>

<div>
<h3 className="text-xl font-bold mb-2">Step 4</h3>
<p>Certificate of incorporation issued</p>
</div>

</div>

</div>

</section>


{/* CTA */}

<section className="bg-blue-900 text-white py-20 text-center">

<h2 className="text-3xl font-bold mb-6">

Start Your Business Today

</h2>

<p className="mb-8">

Register your company with Supriya Consultancy and build a strong legal foundation for your business.

</p>

<Link to="/contact">

<button className="bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold">

Get Started

</button>

</Link>

</section>


</div>

)

}