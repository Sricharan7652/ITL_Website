import React from 'react';
import ScrollIcon from '../assets/Vector.svg';

const Hero = () => {
	return (
		<section className="relative w-full min-h-screen flex flex-col justify-center overflow-hidden bg-[#0A0A0A] pt-24 pb-12">
			{/* Blurred green overlay effect matching Figma */}
			<div
				className="absolute inset-0 pointer-events-none opacity-60"
				style={{
					background:
						'radial-gradient(circle at 50% 100%, #008000 0%, transparent 60%)',
					filter: 'blur(450px)',
					transform: 'translateZ(0)', // Force hardware acceleration
				}}
			></div>

			<div className="relative z-10 w-full max-w-[1080px] mx-auto px-4 sm:px-0 flex flex-col justify-center h-full pt-12">
				{/* Tagline */}
				<div className="mb-6 flex items-center">
					<span className="inline-block w-2.5 h-2.5 bg-white mr-3"></span>
					<span className="text-white text-xs font-semibold uppercase tracking-widest">
						BUILT ON SOLID GROUND
					</span>
				</div>

				{/* Main Heading */}
				<div className="mb-2 w-full">
					<h1 className="text-white font-serif font-normal text-5xl md:text-7xl lg:text-[80px] leading-[1.1] tracking-tight">
						Building Leaders – <br className="hidden md:block" />
						<span className="italic text-gray-500 font-light">the</span>{' '}
						<span className="font-normal">World Can Trust.</span>
					</h1>
				</div>

				{/* Description Paragraph - Aligned Right */}
				<div className="w-full flex justify-end mt-18 md:mt-24 pb-48">
					<div className="max-w-[480px]">
						<p className="text-white text-xl font-normal leading-relaxed text-right">
							Where purpose meets people. Where organizations transform through
							trusted leadership, continuous learning, & human responsibility.
						</p>
					</div>
				</div>

				{/* Scroll Indicator - Specific Spacing Matches User Spec */}
				<div className="md:absolute md:bottom-0 md:left-0 md:right-0 w-full max-w-[1080px] mx-auto border-t-[0.5px] border-white/25 pt-[42px] pb-[42px] flex items-center justify-between">
					<span className="text-white text-sm font-serif tracking-tight">
						Scroll to Discover
					</span>
					{/* Arrow Icon 16x16 */}
					<div className="w-4 h-4 flex items-center justify-center">
						<img src={ScrollIcon} alt="Scroll to Discover" className="h-full w-auto" />
					</div>
				</div>
			</div>
		</section>
	);
};

export default Hero;
