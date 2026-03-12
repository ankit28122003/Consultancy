import { useEffect } from "react"

export default function SEO({title, description, keywords}) {

useEffect(()=>{

document.title = title

const metaDescription = document.querySelector("meta[name='description']")
if(metaDescription){
metaDescription.setAttribute("content",description)
}

const metaKeywords = document.querySelector("meta[name='keywords']")
if(metaKeywords){
metaKeywords.setAttribute("content",keywords)
}

},[title,description,keywords])

return null
}