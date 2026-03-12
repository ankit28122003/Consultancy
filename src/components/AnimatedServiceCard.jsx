import {motion} from "framer-motion"
import {Link} from "react-router-dom"

export default function AnimatedServiceCard({title,desc,link}){

return(

<motion.div
whileHover={{scale:1.05}}
className="bg-white shadow-xl p-6 rounded-xl border hover:border-blue-500 transition"
>

<h3 className="text-xl font-bold mb-3">

{title}

</h3>

<p className="text-gray-600 mb-4">

{desc}

</p>

<Link to={link}>

<button className="text-blue-700 font-semibold">

Learn More →

</button>

</Link>

</motion.div>

)

}