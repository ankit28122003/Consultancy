import { motion } from "framer-motion"
import { Link } from "react-router-dom"

export default function Hero(){

return(

<section className="bg-gradient-to-r from-blue-900 to-indigo-900 text-white py-28">

<div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

<motion.div
initial={{opacity:0,x:-50}}
animate={{opacity:1,x:0}}
transition={{duration:1}}
>

<h1 className="text-5xl font-bold leading-tight mb-6">

Professional GST, Company Registration & Compliance Services

</h1>

<p className="text-lg mb-8">

Supriya Consultancy helps businesses with GST, Income Tax, Trademark Registration, MSME registration and corporate compliance.

</p>

<Link to="/contact">

<button className="bg-white text-blue-900 px-8 py-4 rounded-xl font-semibold hover:scale-105 transition">

Free Consultation

</button>

</Link>

</motion.div>

<motion.img
src="/hero.jpg"
className="w-80 mx-auto"
animate={{y:[0,-20,0]}}
transition={{duration:4,repeat:Infinity}}
/>

</div>

</section>

)

}