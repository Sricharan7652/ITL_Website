import React from 'react'
import EyeIcon from '../assets/Vector (1).svg';
import TargetIcon from '../assets/Vector (2).svg';
import TrophyIcon from '../assets/Vector (3).svg';
import StarIcon from '../assets/Star 1.svg';

const OurNorthStar = () => {
  return (
    <section className="relative overflow-hidden py-16 md:py-32 bg-[#0A0A0A]">
      {/* Blurred green overlay effect - Continued from Hero */}
      <div
        className="absolute inset-0 pointer-events-none opacity-60"
        style={{
          background: 'radial-gradient(circle at 10% 50%, #008000 0%, transparent 60%)',
          filter: 'blur(400px)',
          transform: 'translateZ(0)'
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
              <img
                src={StarIcon}
                alt="North Star"
                className="w-48 h-48 md:w-64 md:h-64 drop-shadow-[0_0_150px_rgba(255,255,255,0.64)_0_0_42px_rgba(255,255,255,0.16)]"
              />
            </div>

            <div className="absolute -top-[20px] left-1/2 transform -translate-x-1/2 z-30">
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-[#007AFF] flex items-center justify-center">
                <img src={EyeIcon} alt="Vision" className="w-10 h-10 md:w-12 md:h-12" />
              </div>
            </div>

            {/* Bottom Left Icon - Target (Inactive) */}
            <div className="absolute bottom-[40px] left-[15px] z-20">
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border-2 border-transparent hover:border-white/30 transition-colors">
                <img src={TargetIcon} alt="Target" className="w-8 h-8 md:w-10 md:h-10" />
              </div>
            </div>

            {/* Bottom Right Icon - Trophy (Inactive) */}
            <div className="absolute bottom-[40px] right-[15px] z-20">
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border-2 border-transparent hover:border-white/30 transition-colors">
                <img src={TrophyIcon} alt="Trophy" className="w-8 h-8 md:w-10 md:h-10" />
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
