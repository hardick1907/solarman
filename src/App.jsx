import { BrowserRouter,Route,Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Hero from "./Pages/Hero";
import OurWork from "./Pages/OurWork";
import Services from "./Pages/Services";
import ScrollToTop from "./lib/ScrollToTop";
import CaseStudies from "./Pages/CaseStudies";

const App = () => {
  return (
    <div data-theme="light">
      <BrowserRouter>
      <ScrollToTop />
        <Header />
        <Navbar />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/ourwork" element={<OurWork />} />
          <Route path="/services" element={<Services/>}/>
          <Route path="/casestudies" element={<CaseStudies/>}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App