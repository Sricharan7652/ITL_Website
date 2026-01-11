import React from 'react'

const OurNorthStar = () => {
  return (
    <section className="relative overflow-hidden py-16 md:py-32 bg-gradient-to-r from-dark-base to-dark-blue">
      {/* Blurred green overlay effect */}
      <div
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          background: 'radial-gradient(ellipse at left center, rgba(0, 128, 0, 0.4) 0%, transparent 70%)',
          filter: 'blur(100px)',
          transform: 'translateX(-20%)'
        }}
      ></div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-24">
          {/* Left Section - Visual/Iconographic */}
          <div className="relative w-[340px] h-[340px] md:w-[420px] md:h-[420px] flex-shrink-0 flex items-center justify-center">

            {/* Dashed Circle Track */}
            <div className="absolute inset-0 rounded-full border border-dashed border-white/20"></div>

            {/* Central 3-Point Star Icon */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
              <svg className="w-24 h-24 md:w-32 md:h-32 drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Refined 3-point shape approximating the image */}
                <path d="M50 15 L58 45 L88 50 L58 55 L50 85 L42 55 L12 50 L42 45 Z" fill="white" />
              </svg>
            </div>

            {/* Top Icon - Eye (Active) */}
            <div className="absolute -top-[20px] left-1/2 transform -translate-x-1/2 z-30">
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-[#007AFF] flex items-center justify-center shadow-[0_0_20px_rgba(0,122,255,0.4)] border-4 border-dark-base">
                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
            </div>

            {/* Bottom Left Icon - Target (Inactive) */}
            <div className="absolute bottom-[40px] left-[15px] z-20">
              <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border-2 border-transparent hover:border-white/30 transition-colors">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z" fill="white" />
                  <path d="M12 17C9.24 17 7 14.76 7 12C7 9.24 9.24 7 12 7C14.76 7 17 9.24 17 12C17 14.76 14.76 17 12 17ZM12 15C13.66 15 15 13.66 15 12C15 10.34 13.66 9 12 9C10.34 9 9 10.34 9 12C9 13.66 10.34 15 12 15Z" fill="white" />
                </svg>
              </div>
            </div>

            {/* Bottom Right Icon - Trophy (Inactive) */}
            <div className="absolute bottom-[40px] right-[15px] z-20">
              <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border-2 border-transparent hover:border-white/30 transition-colors">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path d="M19 5H17V4C17 2.9 16.1 2 15 2H9C7.9 2 7 2.9 7 4V5H5C3.9 5 3 5.9 3 7V8C3 10.55 4.92 12.63 7.39 12.94C7.8 15.22 9.77 17 12 17C14.23 17 16.2 15.22 16.61 12.94C19.08 12.63 21 10.55 21 8V7C21 5.9 20.1 5 19 5ZM5 8V7H7V8C7 9.1 6.1 10 5 10C4.45 10 4 9.55 4 9C4 8.73 4.11 8.49 4.28 8.32C4.66 7.93 5 7.55 5 8ZM15 4V5H9V4H15ZM19 8C19 8.55 18.55 9 18 9C17.45 9 17 8.55 17 8V7H19V8Z" fill="white" />
                </svg>
              </div>
            </div>
          </div>

          {/* Right Section - Text Content */}
          <div className="flex-1 max-w-xl">
            <div className="mb-6 flex items-center gap-3">
              <div className="w-2 h-2 bg-white"></div>
              <span className="text-white text-xs font-semibold uppercase tracking-widest opacity-80">
                WHAT DRIVES US
              </span>
            </div>

            <h2 className="text-white text-5xl md:text-6xl font-serif font-normal mb-8">
              Our North Star
            </h2>

            <div className="space-y-6">
              <h3 className="text-white text-2xl md:text-3xl font-serif italic">
                Vision
              </h3>

              <p className="text-gray-300 text-lg leading-relaxed font-light">
                A world in which organizations are led by trust and committed to the continuous development of people and purpose.
              </p>

              {/* Progress Indicator */}
              <div className="flex items-center gap-4 pt-4">
                <span className="text-white text-sm font-medium">1/3</span>
                <div className="w-32 h-1 bg-white/10 rounded-full overflow-hidden">
                  <div className="w-1/3 h-full bg-[#007AFF] shadow-[0_0_10px_rgba(0,122,255,0.5)]"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default OurNorthStar
