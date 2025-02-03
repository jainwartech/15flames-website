import { services } from '../data';
import { Flame, Zap, Shield, Target } from 'lucide-react';

const getIcon = (iconName: string) => {
  switch (iconName) {
    case 'Flame':
      return <Flame size={24} />;
    case 'Zap':
      return <Zap size={24} />;
    case 'Shield':
      return <Shield size={24} />;
    case 'Target':
      return <Target size={24} />;
    default:
      return null;
  }
};

const Services = () => {
  return (
    <div className="min-h-screen pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive solutions tailored to your business needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center text-orange-500 mr-4">
                  {getIcon(service.icon)}
                </div>
                <h3 className="text-xl font-bold">{service.title}</h3>
              </div>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>

        {/* Process Section */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-center mb-12">Our Process</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-bold mb-2">Discovery</h3>
              <p className="text-gray-600">Understanding your needs and objectives</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-bold mb-2">Strategy</h3>
              <p className="text-gray-600">Developing a tailored solution</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-bold mb-2">Implementation</h3>
              <p className="text-gray-600">Executing the planned solution</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                4
              </div>
              <h3 className="text-xl font-bold mb-2">Support</h3>
              <p className="text-gray-600">Ongoing maintenance and optimization</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;