import React from "react";

const posts = [
	{
		title: "The Future of AI in Community Building",
		excerpt:
			"Exploring how artificial intelligence can strengthen local communities...",
		date: "Coming Soon",
		image:
			"https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800",
		category: "Technology",
		status: "Draft",
	},
	{
		title: "Art & Technology: A Perfect Blend",
		excerpt: "How digital tools are revolutionizing traditional art forms...",
		date: "Coming Soon",
		image:
			"https://images.unsplash.com/photo-1547826039-bfc35e0f1ea8?auto=format&fit=crop&w=800",
		category: "Creative",
		status: "Draft",
	},
	{
		title: "Building Bridges Through Code",
		excerpt: "Using technology to connect diverse communities...",
		date: "Coming Soon",
		image:
			"https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800",
		category: "Community",
		status: "Draft",
	},
];

const Blog = () => {
	return (
		<section id="blog" className="py-20 bg-gray-50">
			<div className="container mx-auto px-4">
				<h2 className="text-3xl font-bold text-center mb-4">Latest Posts</h2>
				<p className="text-gray-600 text-center mb-16">
					Articles are still in the works. Check back soon!
				</p>

				<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
					{posts.map((post) => (
						<article
							key={post.title}
							className="bg-white rounded-xl overflow-hidden hover:shadow-lg transition-shadow relative"
						>
							<div className="absolute top-4 right-4 z-10">
								<span className="bg-gray-900/80 text-white px-3 py-1 rounded-full text-sm">
									{post.status}
								</span>
							</div>
							<div className="aspect-video overflow-hidden">
								<img
									src={post.image}
									alt={post.title}
									className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
								/>
							</div>
							<div className="p-6">
								<div className="flex items-center justify-between mb-4">
									<span className="text-[#990000] text-sm font-medium">
										{post.category}
									</span>
									<span className="text-gray-500 text-sm italic">
										{post.date}
									</span>
								</div>
								<h3 className="text-xl font-semibold mb-2">{post.title}</h3>
								<p className="text-gray-600 mb-4">{post.excerpt}</p>
								<span className="text-[#990000] font-medium cursor-not-allowed opacity-70">
									Coming Soon →
								</span>
							</div>
						</article>
					))}
				</div>
			</div>
		</section>
	);
};

export default Blog;
