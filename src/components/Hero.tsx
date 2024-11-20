import React from "react";
import { motion } from "framer-motion";

const images = [
	"IMG_7025.JPG",
	"IMG_9098.jpeg",
	"IMG_9398.jpeg",
	"8CEBE01D-A5B0-4DD4-B2E6-41876A4BD0B3.JPG",
];

const Hero = () => {
	return (
		<section className="min-h-screen pt-20 flex items-center bg-gray-50">
			<div className="container mx-auto px-4 py-20">
				<div className="grid md:grid-cols-2 gap-12 items-center">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6 }}
					>
						<h1 className="text-5xl font-bold text-gray-900 mb-4">
							Hi, I'm Simon Solomon
						</h1>
						<h2 className="text-xl text-gray-600 mb-6">
							Computer Engineering & CS @ USC | UK Born | Portland Based
						</h2>
						<p className="text-gray-600 mb-8">
							Bridging technology and community through innovative solutions and
							creative expression.
						</p>
						<div className="flex gap-4">
							<a
								href="#contact"
								className="bg-[#990000] text-white px-6 py-3 rounded-lg hover:bg-[#800000] transition-colors"
							>
								Let's Connect
							</a>
							<a
								href="#portfolio"
								className="border border-gray-300 px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors"
							>
								View Portfolio
							</a>
						</div>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, scale: 0.9 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ duration: 0.6 }}
						className="relative h-[400px] rounded-2xl overflow-hidden"
					>
						<div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent z-10"></div>
						{images.map((src, index) => (
							<img
								key={src}
								src={src}
								alt="Simon Solomon"
								className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000"
								style={{
									opacity: index === 0 ? 1 : 0,
									animation: `carousel 15s infinite ${index * 5}s`,
								}}
							/>
						))}
					</motion.div>
				</div>
			</div>
		</section>
	);
};

export default Hero;
