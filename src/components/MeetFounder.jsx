import React from 'react'

const MeetFounder = () => {
  return (
    <section className="bg-dark-base relative">
      <div className="max-w-[1280px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2">

          {/* Top-Left Quadrant - Name & Label */}
          <div className="bg-[#050505] p-12 lg:p-20 flex flex-col justify-center border-b border-r border-white/5 relative min-h-[400px]">
            <div className="mb-6 flex items-center">
              <span className="inline-block w-2 h-2 bg-white mr-3"></span>
              <span className="text-white text-xs font-semibold uppercase tracking-widest">
                MEET OUR FOUNDER
              </span>
            </div>
            <h2 className="text-white font-serif text-5xl md:text-[54px] leading-[1.1] font-normal">
              Leslie Martinich
            </h2>
          </div>

          {/* Top-Right Quadrant - Image */}
          <div className="relative min-h-[400px] border-b border-white/5 bg-gray-800">
            {/* Dummy Image Placeholder */}
            <div className="absolute inset-0 bg-gray-700 flex items-center justify-center">
              <div className="text-center">
                <svg className="w-16 h-16 text-gray-500 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span className="text-gray-400 font-sans text-sm">Founder Image Placeholder</span>
              </div>
            </div>
            {/* Real image would go here: <img src="..." className="absolute inset-0 w-full h-full object-cover" /> */}
          </div>

          {/* Bottom-Left Quadrant - Bio Text */}
          <div className="bg-[#0A2A1B] bg-gradient-to-br from-[#0A2A1B] to-[#041F12] p-12 lg:p-20 border-r border-white/5 relative min-h-[350px] flex flex-col justify-center">
            <div className="max-w-[441px]">
              <p className="text-white/90 text-[20px] font-sans font-normal leading-normal mb-8">
                Leslie Martinich is a leadership expert with 20+ years of experience who founded the Institute of Trusted Leadership to address the global crisis of trust in organizations.
              </p>
              <p className="text-white/90 text-[20px] font-sans font-normal leading-normal">
                Through evidence-based, practical approaches, her work develops leaders, transforms cultures, and scales trusted leadership worldwide.
              </p>
            </div>
          </div>

          {/* Bottom-Right Quadrant - CTA */}
          <div className="bg-[#0A2A1B] bg-gradient-to-br from-[#0A2A1B] to-[#041F12] p-12 lg:p-20 relative min-h-[350px] flex flex-col justify-center">
            <a href="#meet-leslie" className="group inline-flex items-center gap-4 cursor-pointer">
              <span className="text-white font-serif text-[42px] leading-tight group-hover:underline">
                Meet Leslie
              </span>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">
                <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>

        </div>

        {/* Bottom Pagination Bar */}
        <div className="w-full bg-[#0A2A1B] bg-gradient-to-r from-[#0A2A1B] to-[#00264D] border-t border-white/10 py-8 px-12 lg:px-0">
          <div className="flex items-center justify-between gap-3 max-w-[1080px] mx-auto text-white">
            <div className="flex items-center gap-3 flex-1">
              <span className="font-ibm-sans font-medium text-[24px] leading-none text-white">01</span>
              {/* Custom Dashed Line: 4px dash, 4px gap, 4px height */}
              <div className="h-[4px] w-full" style={{
                backgroundImage: 'linear-gradient(to right, rgba(255,255,255,0.32) 50%, transparent 50%)',
                backgroundSize: '8px 100%',
                backgroundRepeat: 'repeat-x'
              }}></div>
            </div>
            <div className="flex items-center gap-3 flex-1">
              <span className="font-ibm-sans font-medium text-[24px] leading-none text-white/50">02</span>
              {/* Custom Dashed Line - Lower Opacity */}
              <div className="h-[4px] w-full opacity-30" style={{
                backgroundImage: 'linear-gradient(to right, rgba(255,255,255,0.32) 50%, transparent 50%)',
                backgroundSize: '8px 100%',
                backgroundRepeat: 'repeat-x'
              }}></div>
            </div>
            <div className="flex items-center gap-3 shrink-0">
              <span className="font-ibm-sans font-medium text-[24px] leading-none text-white/60">03</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MeetFounder
