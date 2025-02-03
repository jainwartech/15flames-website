import { useState } from 'react';
import { partners } from '../data';

const Partners = () => {
  const [activePartner, setActivePartner] = useState<number | null>(null);

  return (
    <div className="min-h-screen pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Partners</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Collaborating with industry leaders to deliver exceptional solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="relative group"
              onMouseEnter={() => setActivePartner(index)}
              onMouseLeave={() => setActivePartner(null)}
            >
              <div className="bg-white p-8 rounded-lg shadow-md transition-transform duration-300 transform hover:-translate-y-2">
                <img
                  src={partner.logoUrl}
                  alt={partner.name}
                  className="w-full h-48 object-cover rounded-lg mb-6"
                />
                <h3 className="text-xl font-bold mb-2">{partner.name}</h3>
                
                <div
                  className={`
                    absolute inset-0 bg-orange-500 text-white p-6 rounded-lg
                    transition-opacity duration-300
                    ${activePartner === index ? 'opacity-90' : 'opacity-0 pointer-events-none'}
                  `}
                >
                  <div className="h-full flex items-center justify-center">
                    <p className="text-center">{partner.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Partnership Benefits */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-center mb-12">Partnership Benefits</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4">For Partners</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="h-6 w-6 rounded-full bg-orange-500 text-white flex items-center justify-center mr-3">1</span>
                  <span>Access to cutting-edge technology solutions</span>
                </li>
                <li className="flex items-start">
                  <span className="h-6 w-6 rounded-full bg-orange-500 text-white flex items-center justify-center mr-3">2</span>
                  <span>Joint marketing opportunities</span>
                </li>
                <li className="flex items-start">
                  <span className="h-6 w-6 rounded-full bg-orange-500 text-white flex items-center justify-center mr-3">3</span>
                  <span>Technical support and training</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4">For Clients</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="h-6 w-6 rounded-full bg-orange-500 text-white flex items-center justify-center mr-3">1</span>
                  <span>Comprehensive solution offerings</span>
                </li>
                <li className="flex items-start">
                  <span className="h-6 w-6 rounded-full bg-orange-500 text-white flex items-center justify-center mr-3">2</span>
                  <span>Enhanced service quality</span>
                </li>
                <li className="flex items-start">
                  <span className="h-6 w-6 rounded-full bg-orange-500 text-white flex items-center justify-center mr-3">3</span>
                  <span>Innovative integrated solutions</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partners;