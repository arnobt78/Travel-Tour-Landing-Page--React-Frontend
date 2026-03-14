import { Fragment } from 'react'
import { AppProvider } from './context/AppContext'
import About from './components/About'
import EducationalBanner from './components/EducationalBanner'
import Footer from './components/Footer'
import KeyConceptsSection from './components/KeyConceptsSection'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Services from './components/Services'
import Tours from './components/Tours'

function App() {
  return (
    <AppProvider>
      <Fragment>
        <Navbar />
        <Hero />
        <EducationalBanner />
        <About />
        <Services />
        <Tours />
        <KeyConceptsSection />
        <Footer />
      </Fragment>
    </AppProvider>
  )
}

export default App
