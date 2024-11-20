import React from "react";
import { Mail, Github, Linkedin, Instagram } from "lucide-react";

const Contact = () => {
	return (
		<section
			id="contact"
			className="py-20 bg-white dark:bg-gray-900 transition-colors"
		>
			<div className="container mx-auto px-4">
				<h2 className="text-3xl font-bold text-center mb-16 dark:text-white">
					Let's Collaborate
				</h2>

				<div className="max-w-3xl mx-auto">
					<div className="text-center mb-12">
						<p className="text-gray-600 dark:text-gray-300 mb-8">
							I'm always open to discussing new projects, creative ideas, or
							opportunities to be part of your visions.
						</p>

						<a
							href="mailto:smsolomo@usc.edu"
							className="inline-flex items-center justify-center bg-[#990000] text-white px-8 py-4 rounded-lg hover:bg-[#800000] transition-colors mb-8"
						>
							<Mail className="w-5 h-5 mr-2" />
							smsolomo@usc.edu
						</a>

						<div className="flex justify-center space-x-6">
							<a
								href="https://github.com/susakesimon"
								target="_blank"
								rel="noopener noreferrer"
								className="p-3 text-gray-600 dark:text-gray-300 hover:text-[#990000] dark:hover:text-[#990000] transition-colors"
								aria-label="GitHub"
							>
								<Github className="w-6 h-6" />
							</a>
							<a
								href="https://www.linkedin.com/in/simon-solomon-/"
								target="_blank"
								rel="noopener noreferrer"
								className="p-3 text-gray-600 dark:text-gray-300 hover:text-[#990000] dark:hover:text-[#990000] transition-colors"
								aria-label="LinkedIn"
							>
								<Linkedin className="w-6 h-6" />
							</a>
							<a
								href="https://www.instagram.com/s1monsol"
								target="_blank"
								rel="noopener noreferrer"
								className="p-3 text-gray-600 dark:text-gray-300 hover:text-[#990000] dark:hover:text-[#990000] transition-colors"
								aria-label="Instagram"
							>
								<Instagram className="w-6 h-6" />
							</a>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Contact;
