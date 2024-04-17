
import Home from './pages/home/home'
import About from './pages/about/about'
import Services from './pages/services/services'
import Portfolio from './pages/portfolio/portfolio'
import Extra1 from './pages/extra1/extra1'
import Testimonial from './pages/testimonials/testimonial'
import Contact from './pages/contact/contact'
import Footer from './pages/footer/footer'
import { useEffect } from 'react'
import 'animate.css';

function App() {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const viewport = document.querySelector('meta[name=viewport]');
      if (viewport) {
        viewport.setAttribute('content', viewport.content + `, height=${window.innerHeight}`);
      }
    }
  }, []);

  return (
    <>
     <Home />
     <About />
     <Services />
     <Portfolio />
     <Extra1 />
     <Testimonial />
     <Contact />
     <Footer />
    </>
  )
}

export default App
