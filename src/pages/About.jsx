import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import SEO from "../components/SEO"

export default function About(){

return(

<div>

<SEO
title="About Supriya Consultancy | Accounting, GST & Business Registration Services Delhi"
description="Supriya Consultancy is a trusted accounting and compliance consultancy in Delhi offering GST registration, company registration, trademark services, income tax filing and MSME registration for businesses."
keywords="GST consultant Delhi, company registration Delhi, trademark registration Delhi, MSME registration Delhi, income tax filing consultant Delhi, Supriya Consultancy"
/>


{/* HERO SECTION */}

<section className="bg-gradient-to-r from-blue-900 to-indigo-900 text-white py-24">

<div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

<motion.div
initial={{opacity:0,y:40}}
animate={{opacity:1,y:0}}
transition={{duration:1}}
>

<h1 className="text-5xl font-bold mb-6">

About Supriya Consultancy

</h1>

<p className="text-xl mb-6">

Your trusted partner for all your accounting and business compliance solutions.

</p>

<p className="text-lg leading-relaxed">

Based in Delhi, Supriya Consultancy helps startups, entrepreneurs and businesses with GST services, company registration, trademark registration, income tax filing and regulatory compliance across India.

</p>

</motion.div>

<motion.img
src="/aboutus1.webp"
className="w-120 mx-auto rounded"
initial={{opacity:0,scale:0.8}}
animate={{opacity:1,scale:1}}
transition={{duration:1}}
/>

</div>

</section>


{/* COMPANY STORY */}

<section className="py-20">

<div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-14 items-center">

<motion.img
src="/aboutus2.jpg"
className="rounded-xl shadow-lg"
initial={{opacity:0,x:-40}}
whileInView={{opacity:1,x:0}}
transition={{duration:1}}
/>

<motion.div
initial={{opacity:0,x:40}}
whileInView={{opacity:1,x:0}}
transition={{duration:1}}
>

<h2 className="text-3xl font-bold mb-6">

Who We Are

</h2>

<p className="text-gray-700 mb-4">

Supriya Consultancy is a professional accounting and compliance consultancy founded by Supriya with the goal of simplifying financial and legal processes for businesses.

</p>

<p className="text-gray-700 mb-4">

Over the past 3 years, we have helped more than 200 businesses successfully manage registrations, tax filings, and regulatory compliance.

</p>

<p className="text-gray-700">

Our services include GST registration and return filing, company and LLP registration, trademark registration, MSME (Udyam) registration, income tax filing, and corporate compliance solutions.

</p>

</motion.div>

</div>

</section>


{/* STATS SECTION */}

<section className="bg-gray-100 py-20">

<div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-10 text-center">

<div>
<h3 className="text-4xl font-bold text-blue-700">200+</h3>
<p>Businesses Served</p>
</div>

<div>
<h3 className="text-4xl font-bold text-blue-700">3+</h3>
<p>Years Experience</p>
</div>

<div>
<h3 className="text-4xl font-bold text-blue-700">1000+</h3>
<p>GST Returns Filed</p>
</div>

<div>
<h3 className="text-4xl font-bold text-blue-700">50+</h3>
<p>Registrations Completed</p>
</div>

</div>

</section>


{/* MISSION & VISION */}

<section className="py-20">

<div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12">

<motion.div
initial={{opacity:0,y:40}}
whileInView={{opacity:1,y:0}}
transition={{duration:1}}
className="bg-white shadow-lg p-8 rounded-xl"
>

<h3 className="text-2xl font-bold mb-4">

Our Mission

</h3>

<p className="text-gray-700">

Our mission is to provide affordable, reliable and transparent financial and compliance services to businesses so that they can focus on growth while we handle the legal and tax complexities.

</p>

</motion.div>


<motion.div
initial={{opacity:0,y:40}}
whileInView={{opacity:1,y:0}}
transition={{duration:1}}
className="bg-white shadow-lg p-8 rounded-xl"
>

<h3 className="text-2xl font-bold mb-4">

Our Vision

</h3>

<p className="text-gray-700">

Our vision is to become a trusted consultancy partner for entrepreneurs and businesses across India by delivering professional accounting, tax and compliance solutions with integrity and expertise.

</p>

</motion.div>

</div>

</section>


{/* WHY CHOOSE US */}

<section className="bg-gray-100 py-20">

<div className="max-w-7xl mx-auto px-6 text-center">

<h2 className="text-3xl font-bold mb-12">

Why Businesses Choose Us

</h2>

<div className="grid md:grid-cols-3 gap-10">

<div className="bg-white shadow-lg p-6 rounded-xl">
<h3 className="font-semibold text-xl mb-2">Professional Expertise</h3>
<p>Expert guidance for GST, tax, compliance and business registrations.</p>
</div>

<div className="bg-white shadow-lg p-6 rounded-xl">
<h3 className="font-semibold text-xl mb-2">Quick Processing</h3>
<p>Fast and efficient completion of registrations and filings.</p>
</div>

<div className="bg-white shadow-lg p-6 rounded-xl">
<h3 className="font-semibold text-xl mb-2">Affordable Services</h3>
<p>Transparent pricing designed for startups and small businesses.</p>
</div>

<div className="bg-white shadow-lg p-6 rounded-xl">
<h3 className="font-semibold text-xl mb-2">Trusted by Clients</h3>
<p>200+ businesses trust Supriya Consultancy for compliance services.</p>
</div>

<div className="bg-white shadow-lg p-6 rounded-xl">
<h3 className="font-semibold text-xl mb-2">Complete Solutions</h3>
<p>All accounting and compliance services under one roof.</p>
</div>

<div className="bg-white shadow-lg p-6 rounded-xl">
<h3 className="font-semibold text-xl mb-2">Dedicated Support</h3>
<p>Personalized guidance for every client and business need.</p>
</div>

</div>

</div>

</section>


{/* CALL TO ACTION */}

<section className="py-20 text-center">

<h2 className="text-3xl font-bold mb-6">

Start Your Business Journey With Confidence

</h2>

<p className="mb-8 text-gray-600">

Get expert help for GST registration, company registration, trademark services and tax filings.

</p>

<Link to="/contact">

<button className="bg-blue-700 text-white px-8 py-4 rounded-xl hover:bg-blue-800 transition">

Contact Supriya Consultancy

</button>

</Link>

</section>

</div>

)

}