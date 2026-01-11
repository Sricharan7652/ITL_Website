import React from 'react'
import Image from '../assets/Rectangle 72.svg'
import ArrowIcon from '../assets/Vector (4).svg'
const OneVision = () => {
  return (
    <section className="relative py-24 bg-gradient-to-b from-[#00264D] to-[#0A0A0A] overflow-hidden" id="the-institute">
      {/* Background Gradients */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[#00264D] blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-[1200px] mx-auto px-6">
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

          <div className="max-w-[800px] mx-auto">
            <p className="text-white/80 font-ibm-sans text-[20px] leading-relaxed">
              The Institute of Trusted Leadership operates through an integrated ecosystem of specialized divisions, each designed to address different aspects of leadership development and organizational transformation.
            </p>
          </div>
        </div>

        {/* Main Grid Content */}
        <div className="grid grid-cols-1 lg:grid-cols-7 gap-6 relative">

          {/* LUCA Green Blur Effect */}
          <div className="absolute top-0 left-0 w-2/3 h-full bg-[#008000] opacity-30 blur-[450px] pointer-events-none -z-10" />

          {/* LUCA Card (Left - Spans 4 cols) */}
          <div className="lg:col-span-4 relative group overflow-hidden rounded-2xl border border-[#0080FF]/32 bg-[#0A0A0A]/64 hover:border-blue-500/50 transition-all duration-300">
            {/* Badge */}
            <div className="absolute top-0 left-0 z-20">
              <div className="bg-[#0080FF]/42 backdrop-blur-[20px] text-white text-[12px] font-medium tracking-widest uppercase py-4 px-5 rounded-br-[12px] flex items-center gap-2">
                <span className="w-[6px] h-[6px] bg-white rounded-[1px]" />
                OPEN TO ALL
              </div>
            </div>

            {/* Main Content Area */}
            <div className="p-8 pb-0 pt-24 min-h-[450px] relative bg-gradient-to-b from-white/5 to-transparent">
              {/* Image Placeholder that matches design style */}
              <div className="absolute inset-0 flex items-center justify-center p-8 opacity-90">
                <div className="relative w-full h-full flex items-center justify-center">
                  <img src={Image} alt="" className="absolute inset-0 w-full h-full object-fill" />
                </div>
              </div>


            </div>

            {/* Footer Section */}
            <div className="pr-8 pl-8 mt-auto">
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="text-white font-serif text-[28px] mb-2">LUCA The Leader</h4>
                  <p className="text-white/70 font-ibm-sans text-lg">Where Leadership Awareness Begins</p>

                  <p className="mt-4 text-white/50 text-sm max-w-sm leading-relaxed">
                    Our flagship CSR initiative bringing trusted leadership awareness to communities, organizations, and emerging leaders.
                  </p>
                </div>
                <div className="mt-2 text-white/80">
                  <img src={ArrowIcon} alt="Arrow" className="w-6 h-6" />
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
            <div key={i} className="lg:col-span-1 relative group overflow-hidden rounded-2xl bg-[#0A0A0A]/64 border border-[#0080FF]/32 hover:border-blue-400 transition-all duration-300 flex flex-col">
              {/* Top Label */}
              <div className="py-4 px-4 border-b border-[#0080FF]/32 bg-[#0080FF]/32 flex flex-col justify-center min-h-[64px]">
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-[6px] h-[6px] bg-white rounded-[1px]" />
                </div>
                <span className="text-white/60 font-ibm-sans text-[12px] font-medium uppercase leading-normal tracking-normal">
                  {card.label}
                </span>
              </div>

              <div className="flex-1 relative flex items-end p-4">
                <div className="w-full h-full flex flex-col-reverse items-start justify-end gap-3 [writing-mode:vertical-rl] rotate-180">
                  <h3 className="text-white font-serif text-[28px] whitespace-nowrap font-medium tracking-tight">
                    {card.title}
                  </h3>
                  <p className="text-white/90 font-serif text-[20px] whitespace-nowrap tracking-wide leading-none">
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
