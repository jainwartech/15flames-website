
const About = () => {
  return (
    <div className="min-h-screen pt-16">
      {/* Vision & Mission */}
      <div className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">About 15 Flames</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Empowering businesses through innovative technology solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold text-orange-500 mb-4">Our Vision</h2>
              <p className="text-gray-700">
                To be the catalyst for digital transformation, helping organizations embrace 
                innovation and achieve sustainable growth in an ever-evolving technological landscape.
              </p>
            </div>
            
            <div>
              <h2 className="text-2xl font-bold text-orange-500 mb-4">Our Mission</h2>
              <p className="text-gray-700">
                To deliver cutting-edge technology solutions that empower businesses to thrive, 
                while maintaining the highest standards of quality, security, and innovation.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Timeline */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-16">Our Journey</h2>
          
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-orange-200"></div>
            
            <div className="space-y-12">
              <div className="relative">
                <div className="ml-auto w-1/2 pl-8">
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-bold text-orange-500">2020</h3>
                    <p className="text-gray-700">Founded with a vision to transform digital landscape</p>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <div className="mr-auto w-1/2 pr-8">
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-bold text-orange-500">2021</h3>
                    <p className="text-gray-700">Launched our first enterprise solution</p>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <div className="ml-auto w-1/2 pl-8">
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-bold text-orange-500">2022</h3>
                    <p className="text-gray-700">Expanded globally with offices in 3 continents</p>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <div className="mr-auto w-1/2 pr-8">
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-bold text-orange-500">2023</h3>
                    <p className="text-gray-700">Achieved industry recognition for innovation</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <TeamSection />
    </div>
  );
};

// Move TeamSection component definition outside of About component
const teamMembers = [
  {
    name: "John Doe",
    role: "CEO & Founder",
    bio: "Passionate about innovation and leadership in the tech industry.",
    imageUrl: "https://via.placeholder.com/300",
  },
  {
    name: "Jane Smith", 
    role: "Lead Developer",
    bio: "Loves coding and building scalable applications.",
    imageUrl: "https://via.placeholder.com/300",
  },
  {
    name: "Emily Johnson",
    role: "UI/UX Designer", 
    bio: "Creating intuitive and beautiful user experiences.",
    imageUrl: "https://via.placeholder.com/300",
  },
];

const TeamSection = () => {
  return (
    <div className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-16">Our Team</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md">
              <img
                src={member.imageUrl}
                alt={member.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                <p className="text-orange-500 mb-4">{member.role}</p>
                <p className="text-gray-600">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;