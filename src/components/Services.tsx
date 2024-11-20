import React from 'react';
import { Code2, Paintbrush, Users, Video, Terminal, Heart } from 'lucide-react';

const services = [
  {
    icon: <Code2 className="w-6 h-6" />,
    title: 'Software Development',
    description: 'Full-stack development with modern technologies',
  },
  {
    icon: <Terminal className="w-6 h-6" />,
    title: 'Technical Consulting',
    description: 'Expert guidance in Python, C++, and VS Code',
  },
  {
    icon: <Paintbrush className="w-6 h-6" />,
    title: 'Digital Art',
    description: 'Creative artwork using Procreate and digital tools',
  },
  {
    icon: <Video className="w-6 h-6" />,
    title: 'Video Production',
    description: 'Professional video editing and post-production',
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: 'Event Organization',
    description: 'Community event planning and execution',
  },
  {
    icon: <Heart className="w-6 h-6" />,
    title: 'Mentorship',
    description: 'Technical and personal development guidance',
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-16">Services</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="p-6 border rounded-xl hover:shadow-lg transition-shadow group"
            >
              <div className="w-12 h-12 bg-[#990000]/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-[#990000] transition-colors">
                <div className="text-[#990000] group-hover:text-white transition-colors">
                  {service.icon}
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;