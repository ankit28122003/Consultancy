import {useParams} from "react-router-dom"
import {blogs} from "../data/blogs"
import SEO from "../components/SEO"

export default function BlogPost(){

const {slug} = useParams()

const blog = blogs.find(b=>b.slug===slug)

if(!blog){
return <div className="py-20 text-center">Blog not found</div>
}

return(

<div className="max-w-4xl mx-auto py-20 px-6">

<SEO
title={`${blog.title} | Supriya Consultancy`}
description={blog.title}
keywords={blog.title}
/>

<h1 className="text-4xl font-bold mb-6">
{blog.title}
</h1>

<p className="text-lg text-gray-700 leading-relaxed">
{blog.content}
</p>

</div>

)

}