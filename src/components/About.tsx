import React from "react";
import { Code, Palette, Users } from "lucide-react";

const About = () => {
	const skills = [
		{
			icon: <Code className="w-6 h-6 text-[#990000]" />,
			title: "Technical",
			description: "Python, C++, React, Node.js",
		},
		{
			icon: <Palette className="w-6 h-6 text-[#990000]" />,
			title: "Creative",
			description: "Procreate, Video Editing, Digital Art",
		},
		{
			icon: <Users className="w-6 h-6 text-[#990000]" />,
			title: "Community",
			description: "Event Organization, Youth Mentorship",
		},
	];

	return (
		<section
			id="about"
			className="py-20 bg-white dark:bg-gray-900 transition-colors"
		>
			<div className="container mx-auto px-4">
				<h2 className="text-3xl font-bold text-center mb-16 dark:text-white">
					About Me
				</h2>

				<div className="grid md:grid-cols-2 gap-12 mb-16">
					<div>
						<h3 className="text-2xl font-semibold mb-4 dark:text-white">
							My Journey
						</h3>
						<p className="text-gray-600 dark:text-gray-300 mb-4">
							As a Computer Engineering and Computer Science dual major at USC,
							I blend technical expertise with creative problem-solving. Born in
							the UK and now based in Portland, my diverse background influences
							my unique approach to technology and community engagement.
						</p>
						<p className="text-gray-600 dark:text-gray-300">
							I'm passionate about using technology to bridge communities and
							create meaningful impact, whether through coding, digital art, or
							community organizing.
						</p>
					</div>

					<div className="grid grid-cols-1 gap-6">
						{skills.map((skill) => (
							<div
								key={skill.title}
								className="p-6 border dark:border-gray-700 rounded-lg hover:shadow-md transition-shadow dark:bg-gray-800"
							>
								<div className="flex items-center mb-4">
									{skill.icon}
									<h4 className="text-xl font-semibold ml-3 dark:text-white">
										{skill.title}
									</h4>
								</div>
								<p className="text-gray-600 dark:text-gray-300">
									{skill.description}
								</p>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;