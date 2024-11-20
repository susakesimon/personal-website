import React, { useState } from "react";
import { Menu, X, Code2 } from "lucide-react";

const Header = () => {
	const [isOpen, setIsOpen] = useState(false);

	const navigation = [
		{ name: "Portfolio", href: "#portfolio" },
		{ name: "About", href: "#about" },
		{ name: "Services", href: "#services" },
		{ name: "Blog", href: "#blog" },
		{ name: "Contact", href: "#contact" },
	];

	return (
		<header className="fixed top-0 w-full bg-white/90 backdrop-blur-sm z-50 border-b border-gray-100">
			<nav className="container mx-auto px-4 py-4">
				<div className="flex items-center justify-between">
					<a href="#" className="flex items-center space-x-3">
						<div className="w-10 h-10 bg-[#990000] rounded-lg flex items-center justify-center">
							<Code2 className="w-6 h-6 text-white" />
						</div>
						<span className="text-xl font-bold text-gray-900">
							Simon Solomon
						</span>
					</a>

					{/* Desktop Navigation */}
					<div className="hidden md:flex items-center space-x-8">
						{navigation.map((item) => (
							<a
								key={item.name}
								href={item.href}
								className="text-gray-600 hover:text-[#990000] transition-colors"
							>
								{item.name}
							</a>
						))}
					</div>

					{/* Mobile menu button */}
					<button
						onClick={() => setIsOpen(!isOpen)}
						className="md:hidden text-gray-600"
					>
						{isOpen ? <X size={24} /> : <Menu size={24} />}
					</button>
				</div>

				{/* Mobile Navigation */}
				{isOpen && (
					<div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-gray-100">
						<div className="px-4 py-2 space-y-2">
							{navigation.map((item) => (
								<a
									key={item.name}
									href={item.href}
									className="block py-2 text-gray-600 hover:text-[#990000]"
									onClick={() => setIsOpen(false)}
								>
									{item.name}
								</a>
							))}
						</div>
					</div>
				)}
			</nav>
		</header>
	);
};

export default Header;
