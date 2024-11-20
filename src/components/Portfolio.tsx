import React from "react";

const projects = [
	{
		title: "Afrobeats Art Collection",
		category: "Digital Art",
		image: "IMG_3650.JPG",
		link: "https://simonssoftwareengineer.pixieset.com/simonsartdesignportfolio-1/",
	},
	{
		title: "Community Bridge Initiative",
		category: "Community",
		image: "IMG_4261.JPG",
		link: "https://www.linkedin.com/company/word-is-bond-pdx/posts/?feedView=all",
	},
	{
		title: "Personal Research Project",
		category: "Technical",
		image: "IMG_4265.JPG",
		link: "https://github.com/susakesimon",
	},
	{
		title: "USC Research Project",
		category: "Academic",
		image: "IMG_3981.JPG",
		link: "https://github.com/usc-csci104-fall2024",
	},
];

const Portfolio = () => {
	return (
		<section id="portfolio" className="py-20 bg-gray-50">
			<div className="container mx-auto px-4">
				<h2 className="text-3xl font-bold text-center mb-16">Portfolio</h2>

				<div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
					{projects.map((project) => (
						<div
							key={project.title}
							className="group relative overflow-hidden rounded-xl aspect-video hover:shadow-xl transition-shadow cursor-pointer"
							onClick={() =>
								project.link && window.open(project.link, "_blank")
							}
						>
							<img
								src={project.image}
								alt={project.title}
								className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
							/>
							<div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
								<span className="text-[#990000] bg-white px-3 py-1 rounded-full text-sm inline-block mb-2 w-fit">
									{project.category}
								</span>
								<h3 className="text-white text-xl font-semibold">
									{project.title}
								</h3>
								{project.link && (
									<span className="text-white/80 text-sm mt-2">
										Click to view portfolio →
									</span>
								)}
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Portfolio;
