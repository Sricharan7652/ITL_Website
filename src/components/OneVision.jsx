import React from 'react'

const OneVision = () => {
  return (
    <section className="relative py-24 bg-dark-base overflow-hidden" id="the-institute">
      {/* Background Gradients */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-900/10 blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-[1080px] mx-auto px-6">
        {/* Header Section */}
        <div className="text-center mb-20">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-2.5 h-2.5 bg-white box-border" />
            <span className="text-white font-ibm-sans font-semibold text-[12px] tracking-widest uppercase">
              BUILT ON SOLID GROUND
            </span>
          </div>

          <h2 className="text-white font-serif text-[54px] leading-[58px] mb-8">
            <span className="block">One Vision.</span>
            <span className="block">Four Pathways to Impact.</span>
          </h2>

          <div className="max-w-[800px] mx-auto border border-dashed border-blue-500/30 bg-blue-900/10 rounded-lg p-6">
            <p className="text-white/80 font-ibm-sans text-[20px] leading-relaxed">
              The Institute of Trusted Leadership operates through an integrated ecosystem of specialized divisions, each designed to address different aspects of leadership development and organizational transformation.
            </p>
          </div>
        </div>

        {/* Main Grid Content */}
        <div className="grid grid-cols-1 lg:grid-cols-7 gap-6">

          {/* LUCA Card (Left - Spans 4 cols) */}
          <div className="lg:col-span-4 relative group overflow-hidden rounded-2xl border border-blue-500/30 bg-[#001124] hover:border-blue-500/50 transition-all duration-300">
            {/* Badge */}
            <div className="absolute top-0 left-0 z-20">
              <div className="bg-[#0080FF]/40 backdrop-blur-[20px] text-white text-[12px] font-medium tracking-widest uppercase py-4 px-5 rounded-br-[12px] flex items-center gap-2">
                <span className="w-[6px] h-[6px] bg-white rounded-[1px]" />
                OPEN TO ALL
              </div>
            </div>

            {/* Main Content Area */}
            <div className="p-8 pb-0 pt-24 min-h-[400px] relative bg-gradient-to-b from-white/5 to-transparent">
              {/* Image Placeholder that matches design style */}
              <div className="absolute inset-0 flex items-center justify-center p-8 opacity-90">
                <div className="relative w-full h-full bg-white/5 rounded-xl border border-dashed border-white/10 flex items-center justify-center">
                  <span className="text-white/40 font-ibm-sans">Feature Graphic Area</span>
                  {/* Decorative circle mimicking the visual */}
                  <div className="absolute right-12 bottom-12 w-24 h-24 rounded-full border-4 border-orange-400/80 opacity-60" />
                </div>
              </div>

              {/* Overwatch Text */}
              <div className="relative z-10 text-center mt-8">
                <h3 className="text-3xl md:text-5xl font-bold text-white mb-2">
                  Ride the <span className="text-orange-500">Wave</span> of
                </h3>
                <h3 className="text-3xl md:text-5xl font-bold text-white relative inline-block">
                  Leadership with <span className="text-blue-400 relative">
                    Luca.
                    {/* Ellipse sketch effect */}
                    <svg className="absolute -inset-2 w-[120%] h-[140%] text-blue-400 pointer-events-none" viewBox="0 0 100 60" fill="none">
                      <ellipse cx="50" cy="30" rx="45" ry="25" stroke="currentColor" strokeWidth="2" strokeDasharray="5,5" />
                    </svg>
                  </span>
                </h3>

                <div className="flex justify-center mt-8">
                  <button className="bg-white text-black px-6 py-2 rounded-full font-medium text-sm hover:bg-gray-100 transition-colors flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center text-white">▶</span>
                    Watch the Series
                  </button>
                </div>
              </div>
            </div>

            {/* Footer Section */}
            <div className="bg-[#00264D] p-8 mt-auto border-t border-blue-500/30">
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="text-white font-serif text-[28px] mb-2">LUCA The Leader</h4>
                  <p className="text-white/70 font-ibm-sans text-lg">Where Leadership Awareness Begins</p>

                  <p className="mt-4 text-white/50 text-sm max-w-sm leading-relaxed">
                    Our flagship CSR initiative bringing trusted leadership awareness to communities, organizations, and emerging leaders.
                  </p>
                </div>
                <div className="mt-2 text-white/80">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M7 17L17 7M17 7H7M17 7V17" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Vertical Cards (Right - 3 cards, 1 col each) */}
          {[
            {
              label: "FOR ORGANIZATIONS",
              title: "MARTINICH CONSULTING",
              subtitle: "Strategic Leadership Partnerships",
              color: "border-blue-500/20"
            },
            {
              label: "FOR INDIVIDUALS & TEAMS",
              title: "MARTINICH INSTITUTE",
              subtitle: "Learning That Transforms",
              color: "border-blue-500/20"
            },
            {
              label: "FOR RESEARCH & INNOVATION",
              title: "MARTINICH R&D",
              subtitle: "Innovation Meets Insight",
              color: "border-blue-500/20"
            }
          ].map((card, i) => (
            <div key={i} className={`lg:col-span-1 relative group overflow-hidden rounded-2xl bg-[#001124] border ${card.color} hover:border-blue-400 transition-all duration-300 flex flex-col`}>
              {/* Top Label */}
              <div className="p-4 border-b border-white/5">
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                </div>
                <span className="text-white/60 font-ibm-sans text-[12px] font-medium tracking-widest uppercase leading-normal">
                  {card.label}
                </span>
              </div>

              {/* Vertical Text Area */}
              <div className="flex-1 relative flex items-end p-6 pb-12">
                <div className="w-full h-full flex flex-col-reverse items-start justify-end gap-2 [writing-mode:vertical-rl] rotate-180">
                  <h3 className="text-white font-serif text-[28px] whitespace-nowrap font-medium tracking-tight">
                    {card.title}
                  </h3>
                  <p className="text-white/50 font-serif text-[20px] whitespace-nowrap tracking-wide leading-none">
                    {card.subtitle}
                  </p>
                </div>
              </div>

              {/* Active State Indicator (Hidden by default, shown on hover/active) */}
              <div className="absolute inset-0 bg-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            </div>
          ))}

        </div>
      </div>
    </section>
  )
}

export default OneVision
