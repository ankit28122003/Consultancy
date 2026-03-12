import {BrowserRouter,Routes,Route} from "react-router-dom"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

import Home from "./pages/Home"
import About from "./pages/About"
import Services from "./pages/Services"
import Contact from "./pages/Contact"
import GST from "./pages/GST"
import CompanyRegistration from "./pages/CompanyRegistration"
import Trademark from "./pages/Trademark"
import IncomeTax from "./pages/IncomeTax"
import Compliance from "./pages/Compliance"
import ServicePage from "./pages/ServicePage"
import Blog from "./pages/Blog"
import BlogPost from "./pages/BlogPost"
import WhatsAppButton from "./components/WhatsAppButton"

function App(){

return(

<BrowserRouter>

<Navbar/>

<Routes>

<Route path="/" element={<Home/>}/>
<Route path="/about" element={<About/>}/>
<Route path="/services" element={<Services/>}/>
<Route path="/gst-services" element={<GST/>}/>
<Route path="/company-registration" element={<CompanyRegistration/>}/>
<Route path="/trademark" element={<Trademark/>}/>
<Route path="/income-tax" element={<IncomeTax/>}/>
<Route path="/compliance" element={<Compliance/>}/>
<Route path="/contact" element={<Contact/>}/>
<Route path="/service/:slug" element={<ServicePage/>}/>
<Route path="/blog" element={<Blog/>}/>
<Route path="/blog/:slug" element={<BlogPost/>}/>

</Routes>

<WhatsAppButton/>

<Footer/>

</BrowserRouter>

)

}

export default App
