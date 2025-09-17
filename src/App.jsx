import { useState } from 'react'
import './App.css'
import Header from './components/Common/Header'
import Herosection from './pages/Herosection'
import Services from './pages/Services'
import About from './pages/About'
import Contact from './pages/Contact'
import Interior from './pages/Interior'
import Popup from './components/Popup'
import MobileViewFooter from './components/mobileViewFooter'
import Footer from './components/Common/Footer'

function App() {
  const [isPopupOpen, setIsPopupOpen] = useState(false)

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Header with Navigation */}
      <Header scrollToSection={scrollToSection} />
      
      {/* Main Content - All sections on one page */}
      <main className="pb-20 md:pb-0">
        {/* Hero Section */}
        <section id="home">
          <Herosection />
        </section>

        {/* Services Section */}
        <section id="services">
          <Services />
        </section>

        {/* About Section */}
        <section id="about">
          <About />
        </section>

        {/* Interior Section */}
        <section id="interior">
          <Interior />
        </section>

        {/* Contact Section */}
        <section id="contact">
          <Contact />
        </section>
      </main>

      {/* Desktop Footer - Hidden on mobile */}
      <div className="hidden md:block">
        <Footer />
      </div>

      {/* Mobile View Footer - Only visible on mobile */}
      <MobileViewFooter />

      {/* Popup */}
      <Popup isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} autoShow={true} />
    </div>
  )
}

export default App
