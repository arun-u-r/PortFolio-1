import { BrowserRouter as Router } from "react-router-dom";
import './index.css'
import { Suspense, lazy, useEffect, useState } from "react"

import {
  AboutSection,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Loader,
  Navbar,
  Tech,
  Works,
} from "./components";
import Footer from "./components/Footer";
// const Navbar = lazy(() => import('./components/Navbar'))
// const Hero = lazy(() => import('./components/Hero'))


const App = () => {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    return () => {
      clearTimeout(timer)
    }
  }, [])


  return (
    <Router>
      {/* <Suspense fallback={<Loader />}> */}
      {isLoading ? (<Loader />) : (
      <div className="relative z-0 bg-tertiary ">
        <div className=" bg-hero-gif bg-cover bg-no-repeat bg-center ">
          
          <Navbar />
          <Hero />
        </div>
        {/* <LoaderDuo /> */}
        <AboutSection />
        <Tech />
        <Experience />
        <Works />
        <Feedbacks />
        <div className="relative z-0 justify-center items-center">
          <Contact />
        </div>
        <Footer/>
      </div>



        // </Suspense>
      )}
    </Router>
  );
};

export default App;
