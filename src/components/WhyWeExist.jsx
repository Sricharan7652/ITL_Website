import React from 'react'

const WhyWeExist = () => {
  return (
    <section className="relative py-24 bg-dark-base overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-gradient-to-b from-[#00264D]/20 to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-[1080px] mx-auto px-6">
        {/* Header Section */}
        <div className="flex flex-col items-center text-center mb-20">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-2.5 h-2.5 bg-white box-border" />
            <span className="text-white font-ibm-sans font-normal text-[14px] leading-tight tracking-wider uppercase">
              THE SOLUTION
            </span>
          </div>

          <h2 className="text-white mb-8">
            <span className="block font-serif italic font-normal text-[54px] leading-[58px]">This is</span>
            <span className="block font-serif font-normal text-[54px] leading-[58px] -mt-2">Why We Exist</span>
          </h2>

          <p className="text-white/42 font-ibm-sans font-normal text-[20px] leading-tight max-w-[720px] text-center">
            Trust transforms everything engagement, innovation, performance, & culture. The Institute of Trusted Leadership scales this impact through research-backed methods, turning trusted leadership into the global standard.
          </p>
        </div>

        {/* Timeline Section */}
        <div className="relative">
          {/* Horizontal Dotted Line at Bottom */}
          {/* Horizontal Dashed Line at Bottom */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1280px] h-[4px]"
            style={{
              backgroundImage: 'linear-gradient(to right, rgba(255,255,255,0.5) 50%, transparent 50%)',
              backgroundSize: '8px 100%',
              backgroundRepeat: 'repeat-x',
              maskImage: 'linear-gradient(to right, transparent, black 20%, black 80%, transparent)',
              WebkitMaskImage: 'linear-gradient(to right, transparent, black 20%, black 80%, transparent)'
            }}
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative min-h-[460px]">
            {/* Item 1 - Bottom Aligned */}
            <div className="relative group flex flex-col justify-end pb-24">
              <div className="flex items-center gap-4">
                <span className="font-serif text-[128px] leading-[0.8] text-transparent bg-clip-text bg-gradient-to-b from-white to-white/0 select-none">1</span>
                <div>
                  <h3 className="text-white font-serif font-normal text-[28px] leading-none mb-4 tracking-wide uppercase">ITL APPROACH</h3>
                  <p className="text-white/32 font-ibm-sans font-normal text-[16px] leading-none max-w-[220px]">
                    Evidence-based methodology combining research, training, and consulting to build trusted leaders.
                  </p>
                </div>
              </div>
              {/* Vertical Connection Line */}
              {/* Vertical Connection Line */}
              <div className="absolute left-[170px] bottom-0 top-[60%] w-[1px] bg-gradient-to-b from-transparent via-white/50 to-white/80"></div>
            </div>

            {/* Item 2 - Top Aligned */}
            <div className="relative group pt-4">
              <div className="flex items-center gap-4 pl-4">
                <span className="font-serif text-[128px] leading-[0.8] text-transparent bg-clip-text bg-gradient-to-b from-white to-white/0 select-none">2</span>
                <div>
                  <h3 className="text-white font-serif font-normal text-[28px] leading-none mb-4 tracking-wide uppercase">OUR ECOSYSTEM</h3>
                  <p className="text-white/32 font-ibm-sans font-normal text-[16px] leading-none max-w-[220px]">
                    Four integrated divisions delivering comprehensive leadership solutions from awareness to transformation.
                  </p>
                </div>
              </div>
              {/* Vertical Connection Line */}
              {/* Vertical Connection Line */}
              <div className="absolute left-[200px] bottom-0 top-[180px] w-[1px] bg-gradient-to-b from-transparent via-white/50 to-white/80"></div>
            </div>

            {/* Item 3 - Bottom Aligned */}
            <div className="relative group flex flex-col justify-end pb-24">
              <div className="flex items-center gap-4 pl-2">
                <span className="font-serif text-[128px] leading-[0.8] text-transparent bg-clip-text bg-gradient-to-b from-white to-white/0 select-none">3</span>
                <div>
                  <h3 className="text-white font-serif font-normal text-[28px] leading-none mb-4 tracking-wide uppercase">GLOBAL IMPACT</h3>
                  <p className="text-white/32 font-ibm-sans font-normal text-[16px] leading-none max-w-[220px]">
                    UN SDG-aligned programs ensuring every initiative creates measurable social value.
                  </p>
                </div>
              </div>
              {/* Vertical Connection Line */}
              {/* Vertical Connection Line */}
              <div className="absolute left-[190px] bottom-0 top-[60%] w-[1px] bg-gradient-to-b from-transparent via-white/50 to-white/80"></div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyWeExist
