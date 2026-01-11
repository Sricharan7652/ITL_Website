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
          #0A0A0A 10%,
          #0A1A10 20%,
          #0A2A1B 35%,
          #0A2A1B 48%,
          #000000 56%,
          #000000 62%,
          #00264D 68%,
          #001A3D 82%,
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
