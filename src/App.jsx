import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import OurNorthStar from './components/OurNorthStar'
import MeetFounder from './components/MeetFounder'
import WhyWeExist from './components/WhyWeExist'
import OurMethodology from './components/OurMethodology'
import OneVision from './components/OneVision'

function App() {
  return (
    <div
      className="min-h-screen"
      style={{
        background: `linear-gradient(to bottom,
          #0A0A0A 0%,
          #0A1A10 25%,
          #0A2A1B 40%,
          #000000 58%,
          #00264D 72%,
          #001A3D 85%,
          #0A0A0A 100%
        )`
      }}
    >
      <Header />
      <Hero />
      <OurNorthStar />
      <MeetFounder />
      <WhyWeExist />
      <OurMethodology />
      <OneVision />
    </div>
  )
}

export default App
