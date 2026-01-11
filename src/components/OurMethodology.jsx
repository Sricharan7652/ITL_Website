import React from 'react'

const OurMethodology = () => {
  return (
    <section className="relative py-24 bg-gradient-to-b from-[#0A0A0A] to-[#00264D] overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-gradient-to-b from-[#00264D]/40 to-[#00264D]/80 pointer-events-none" />

      <div className="relative z-10 max-w-[1080px] mx-auto px-6">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start mb-24 gap-12">
          <div className="max-w-[532px]">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-2.5 h-2.5 bg-white box-border" />
              <span className="text-white/80 font-ibm-sans text-xs tracking-wider uppercase">
                OUR METHODOLOGY
              </span>
            </div>
            <h2 className="text-white font-serif text-[54px] leading-[1.1]">
              How We Transform<br />Leadership
            </h2>
          </div>
          <div className="max-w-[480px] pt-8">
            <p className="text-white font-ibm-sans text-[20px] leading-relaxed">
              Trusted leadership isn't built on theory alone. Our integrated approach combines rigorous research, practical training to create lasting organizational change.
            </p>
          </div>
        </div>

        {/* Three Vertical Sections Staggered */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-[800px]">
          {/* Column 1 - Top Aligned */}
          <div className="relative flex flex-col justify-start">
            {/* Background Bar */}
            <div className="absolute top-0 left-0 w-[150px] h-full bg-gradient-to-b from-black to-transparent opacity-60 border-l border-white/5" />

            <div className="pl-[170px] relative z-10 pt-8">
              <h3 className="text-white font-serif text-[28px] leading-none mb-6">Research & Insights</h3>
              <ul className="space-y-2">
                {['Evidence-based leadership models', 'Continuous innovation', 'Data-driven understanding'].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-white font-ibm-sans text-[14px]">
                    <span className="mt-1.5 w-1 h-1 bg-white rounded-full flex-shrink-0" />
                    <span className="leading-tight">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Column 2 - Middle Aligned */}
          <div className="relative flex flex-col justify-start">
            {/* Background Bar */}
            <div className="absolute top-[200px] left-0 w-[150px] h-[460px] bg-gradient-to-b from-black to-transparent opacity-60 border-l border-white/5" />

            <div className="pl-[170px] relative z-10 pt-[220px]">
              <h3 className="text-white font-serif text-[28px] leading-none mb-6">Training & Development</h3>
              <ul className="space-y-2">
                {['Practical skill-building', 'Certification programs', 'Organizational transformation'].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-white font-ibm-sans text-[14px]">
                    <span className="mt-1.5 w-1 h-1 bg-white rounded-full flex-shrink-0" />
                    <span className="leading-tight">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Column 3 - Bottom Aligned */}
          <div className="relative flex flex-col justify-start">
            {/* Background Bar */}
            <div className="absolute bottom-0 left-0 w-[150px] h-[460px] bg-gradient-to-b from-black to-transparent opacity-60 border-l border-white/5" />

            <div className="pl-[170px] relative z-10 pt-[420px]">
              <h3 className="text-white font-serif text-[28px] leading-none mb-6">Consulting &<br />Implementation</h3>
              <ul className="space-y-2">
                {['Strategic partnership', 'Custom solutions', 'Measurable impact'].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-white font-ibm-sans text-[14px]">
                    <span className="mt-1.5 w-1 h-1 bg-white rounded-full flex-shrink-0" />
                    <span className="leading-tight">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default OurMethodology
