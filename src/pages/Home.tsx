import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative h-screen">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2072"
            alt="Hero Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
        
        <div className="relative h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Igniting Innovation,<br />Fueling Progress
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-2xl">
              15 Flames is your partner in digital transformation, helping businesses evolve and thrive in the modern age.
            </p>
            <Link
              to="/services"
              className="inline-flex items-center px-6 py-3 border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white rounded-lg transition-colors duration-300"
            >
              Explore Services
              <ArrowRight className="ml-2" size={20} />
            </Link>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose 15 Flames?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We combine innovation with expertise to deliver exceptional results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-xl font-semibold mb-4">Innovation First</h3>
              <p className="text-gray-600">
                We stay ahead of technological trends to provide cutting-edge solutions.
              </p>
            </div>
            
            <div className="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-xl font-semibold mb-4">Expert Team</h3>
              <p className="text-gray-600">
                Our team of industry experts brings years of experience to every project.
              </p>
            </div>
            
            <div className="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-xl font-semibold mb-4">Client Success</h3>
              <p className="text-gray-600">
                Your success is our priority. We're committed to delivering results.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-orange-500 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
            Ready to Transform Your Business?
          </h2>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-4 bg-white text-orange-500 rounded-lg hover:bg-gray-100 transition-colors duration-300"
          >
            Get Started Today
            <ArrowRight className="ml-2" size={20} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;