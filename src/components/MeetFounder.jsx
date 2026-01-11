import React from 'react'
import founderImage from '../assets/Rectangle 70.svg';
import ArrowIcon from '../assets/Vector (4).svg';
const MeetFounder = () => {
  return (
    <section className="relative">
      <div className="max-w-[1280px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2">

          {/* Top-Left Quadrant - Name & Label */}
          <div className="p-12 lg:p-20 flex flex-col justify-center border-b border-r border-white/5 relative min-h-[400px]">
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
          <div className="relative min-h-[400px] border-b border-white/5">
            {/* Black gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/20 z-10"></div>
            <img src={founderImage} alt="Leslie Martinich" className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-90" />
            <img src={founderImage} alt="Leslie Martinich" className="absolute inset-0 w-full h-full object-cover" />
          </div>

          {/* Bottom-Left Quadrant - Bio Text */}
          <div className="bg-gradient-to-br from-[#0A2A1B] to-[#05150E] p-12 lg:p-20 border-r border-white/5 relative min-h-[350px] flex flex-col justify-center">
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
          <div className="bg-gradient-to-br from-[#0A2A1B] to-[#05150E] p-12 lg:p-20 relative min-h-[350px] flex flex-col justify-start">
            <a href="#meet-leslie" className="group inline-flex items-center gap-4 cursor-pointer">
              <span className="text-white font-serif text-[42px] leading-tight">
                Meet Leslie
              </span>
              <img src={ArrowIcon} alt="Arrow" className="w-7 h-7 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
          </div>

        </div>

        {/* Bottom Pagination Bar */}
        <div className="w-full bg-[#0A2A1B] border-t border-white/10 py-8 px-12 lg:px-0">
          <div className="flex items-center justify-center gap-8 max-w-[1080px] mx-auto text-white">
            <div className="flex items-center gap-4">
              <span className="font-ibm-sans font-medium text-[24px] leading-none text-white">01</span>
              {/* Double Dotted Line */}
              <div className="h-[6px] w-48 md:w-64 border-t-2 border-b-2 border-dotted border-white/30"></div>
            </div>
            <div className="flex items-center gap-4">
              <span className="font-ibm-sans font-medium text-[24px] leading-none text-white/50">02</span>
              {/* Double Dotted Line - Lower Opacity */}
              <div className="h-[6px] w-48 md:w-64 border-t-2 border-b-2 border-dotted border-white/10"></div>
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
