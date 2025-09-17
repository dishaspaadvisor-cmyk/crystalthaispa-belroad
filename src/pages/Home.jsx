import React from 'react'
import Herosection from './Herosection'
import Services from '../components/Services'
import About from './About'
import Interior from './Interior'
import Contact from './Contact'

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Herosection />

      {/* About Section */}
      <About />

      {/* Services Section */}
      <Services />

      {/* Interior Section */}
      <Interior />

      {/* Contact Section */}
      <Contact />
    </div>
  )
}

export default Home
