import {blogs} from "../data/blogs"
import {Link} from "react-router-dom"
import SEO from "../components/SEO"

export default function Blog(){

return(

<div className="max-w-7xl mx-auto py-20 px-6">

<SEO
title="Business Blog | Supriya Consultancy"
description="Learn about GST registration, trademark registration, MSME registration and business compliance."
keywords="GST blog, trademark blog, company registration guide"
/>

<h1 className="text-4xl font-bold mb-12 text-center">
Business & Tax Blog
</h1>

<div className="grid md:grid-cols-3 gap-8">

{blogs.map(blog=>(
<Link key={blog.slug} to={`/blog/${blog.slug}`}>

<div className="p-6 shadow-lg rounded-xl">

<h2 className="text-xl font-bold mb-3">
{blog.title}
</h2>

<p className="text-gray-600">
Read more →
</p>

</div>

</Link>
))}

</div>

</div>

)

}