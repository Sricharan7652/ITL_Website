import React, { useState } from 'react';

const Header = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	return (
		<header className="fixed top-0 left-0 right-0 z-50 bg-dark-base/80 backdrop-blur-sm border-b border-white/10">
			<div className="max-w-[1080px] mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex items-center justify-between h-20 md:h-20">
					{/* Logo */}
					<div className="flex items-center gap-3">
						<span className="text-white text-3xl font-serif font-bold italic tracking-tighter">
							I.T.L
						</span>
						<span className="h-8 w-px bg-white/20"></span>
						<span className="text-white text-base font-serif font-light leading-tight max-w-[200px]">
							Institute <i>for</i>
							<br />
							Trusted Leadership
						</span>
					</div>

					{/* Mobile Menu Button */}
					<div className="md:hidden">
						<button
							onClick={() => setIsMenuOpen(!isMenuOpen)}
							className="text-white hover:text-gray-300 focus:outline-none"
						>
							<svg
								className="h-6 w-6"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								{isMenuOpen ? (
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M6 18L18 6M6 6l12 12"
									/>
								) : (
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M4 6h16M4 12h16M4 18h16"
									/>
								)}
							</svg>
						</button>
					</div>

					{/* Desktop Navigation */}
					<nav className="hidden md:flex items-center gap-8">
						{[
							'The Institute',
							'Our Approach',
							'Ecosystem',
							'Insights',
							'Contact Us',
						].map((item) => (
							<a
								key={item}
								href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
								className="text-sm font-medium transition-colors text-gray-300 hover:text-white"
							>
								{item}
							</a>
						))}
					</nav>
				</div>
			</div>

			{/* Mobile Navigation Menu */}
			{isMenuOpen && (
				<div className="md:hidden bg-dark-base border-t border-white/10">
					<div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
						{[
							'The Institute',
							'Our Approach',
							'Ecosystem',
							'Insights',
							'Contact Us',
						].map((item) => (
							<a
								key={item}
								href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
								className="block px-3 py-2 text-base font-medium text-white hover:bg-white/10 rounded-md"
								onClick={() => setIsMenuOpen(false)}
							>
								{item}
							</a>
						))}
					</div>
				</div>
			)}
		</header>
	);
};

export default Header;
