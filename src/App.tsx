import ScrollToTop from "./components/common/ScrollToTop";
import Navbar from "./components/navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Footer from "./components/Footer/Footer";
import About from "./pages/About";
import Services from "./components/Services/Services.js"
import Contact from "./pages/Contact.js";
import Projects from "./pages/Project.js";

const App = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>

      <ScrollToTop />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/portfolio" element={<Projects />} />
    
          
        </Routes>
      </main>

      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default App;