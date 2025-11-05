import React from 'react';
import ImageWithFallback from '@/components/ImageWithFallback';

export default function CSRPage() {
  const statistics = [
    { number: '1,000+', text: 'Free vaccinations provided' },
    { number: '100+', text: 'Families benefited from blood donation camp' },
    { number: '2,700+', text: 'Villagers benefited from access to water' },
    { number: '4,500+', text: 'Villagers benefited from sanitation drive' },
    { number: '400+', text: 'Tribal villagers benefited from clothing drive' },
    { number: '200+', text: 'Students benefited from school infrastructure and science labs' },
    { number: '500+', text: 'Trees planted by Aquapharm Foundation' },
    { number: '100+', text: 'Girl students benefited from sanitary facilities installed' },
    { number: '7,000+', text: 'Senior Citizen benefitted from the mental wellness programme' },
  ];
  
  const focusAreas = [
    { title: 'Health & Wellness', desc: 'Render quality healthcare facilities through hospitals, healthcare centres, immunization programs, and preventive healthcare through awareness programs' },
    { title: 'Education', desc: 'Providing scholarships to deserving students from economically challenged backgrounds who aspire to pursue higher education, improving facilities for underprivileged children, and other school supplies.' },
    { title: 'Infrastructure Development', desc: 'Providing basic facilities for safe drinking water, sanitation and hygiene and housing for the needy in the rural areas.' },
    { title: 'Senior Citizen Care', desc: 'Empowering senior citizens and ensuring their physical, emotional, and social well-being by establishing a "senior citizen\'s community centre."' },
    { title: 'Environment', desc: 'Contributing to the emergencies and disasters encountered by the Country. Undertake remedial steps to elevate emergencies and disasters.' },
    { title: 'Rural Development', desc: 'Creating sustainable livelihood solutions, addressing poverty. hunger & malnutrition, and strengthening rural areas.' },
  ];
  
  const committeeMembers = [
    'Mr. Kaushik Roy',
    'Mr. Kusum Dadoo',
    'Mr. Suresh Kalra',
  ];
  return (
    <div className="min-h-screen">
      {/* Hero Banner with Image */}
      <section className="relative h-[500px] overflow-hidden">
        <ImageWithFallback 
          src="/images/csr hero.jpg" 
          alt="Corporate Social Responsibility" 
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="hero-overlay" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 h-full flex items-center">
          <div className="text-white">
            <h1 className="text-5xl font-bold mb-4">Corporate Social Responsibility</h1>
            <p className="text-2xl">Upliftment through Development</p>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {statistics.map((stat, index) => (
              <div key={index} className="text-center bg-gradient-to-br from-purple-50 to-orange-50 p-8 rounded-lg shadow-md">
                <div className="text-5xl font-bold text-purple-700 mb-3">{stat.number}</div>
                <p className="text-gray-700 font-semibold">{stat.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision, Mission, Goals */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <h3 className="text-2xl font-bold text-purple-700 mb-4">Our Vision</h3>
              <p className="text-xl text-gray-700 font-semibold">"Upliftment through Development"</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <h3 className="text-2xl font-bold text-purple-700 mb-4">Our Mission</h3>
              <p className="text-gray-700">"To initiate various socially responsible and sustainable activities around the manufacturing plants and corporate offices, in order to uplift overall standards of the stakeholders and local community."</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-purple-700 mb-4 text-center">Our Goals</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Senior Citizen's Care</li>
                <li>• Education</li>
                <li>• Infrastructure Development</li>
                <li>• Healthcare</li>
                <li>• Rural Development</li>
                <li>• Emergency Response</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-purple-700 mb-8 text-center">The path to GLOBAL CHANGE begins with a SINGLE STEP</h2>
          
          <div className="space-y-6 mb-12">
            <p className="text-gray-700 text-lg">
              Aquapharm Chemical Limited as a company has always been a pioneer when it comes to being environmentally and sustainably conscious- whether it is by supplying world-class products to our esteemed clientele or being "Responsible Care ®" about our product life cycle.
            </p>
            <p className="text-gray-700 text-lg">
              Taking its cue from them, Aquapharm Foundation strives to live by this ethos by adopting the CSR guidelines laid down by the Government of India (under Schedule VII of the Companies Act, 2013) by the United Nations Sustainable Development Goals (UNSDGs).
            </p>
          </div>
          
          <div className="bg-gradient-to-r from-purple-100 to-orange-100 p-8 rounded-lg mb-12">
            <h3 className="text-3xl font-bold text-purple-700 mb-4 text-center">CSR is not about Charity, It's about EQUITY BUILDING</h3>
          </div>
          
          <div className="space-y-6 mb-12">
            <p className="text-gray-700 text-lg">
              Aquapharm Foundation's key focus areas lie across various sectors, including Senior Citizen Upliftment by prioritising their well-being and quality of life through our community centre built specially for them or by establishing partnerships with local schools and colleges by way of providing Quality Education.
            </p>
            <p className="text-gray-700 text-lg">
              Furthermore, the Foundation plays a pivotal role in Rural Development by investing in critical projects that enhance water supply and sanitation systems, thereby improving the communities' overall quality of life. Its commitment to Healthcare is evident through medical outreach programs, clinics, and health education campaigns, ensuring access to essential healthcare services for vulnerable populations.
            </p>
            <p className="text-gray-700 text-lg">
              Besides Sustainability Initiatives, the Foundation has undertaken projects to preserve the Environment through various means that include tree plantation drives, water conservation projects, etc.
            </p>
            <p className="text-gray-700 text-lg">
              We have always striven to be a dependable ally to the society around us in times of disaster and natural calamities by being first on the ground to offer humanitarian aid, and relief supplies as part of our Disaster Management initiative. The Foundation's vision and responsibility towards its stakeholders, partners and communities is reflected through its commitment to "Upliftment through Development".
            </p>
          </div>
        </div>
      </section>

      {/* How We Make A Difference */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-purple-700 mb-12 text-center">How We Make A Difference</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {focusAreas.map((area, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-orange-500 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">
                  {index + 1}
                </div>
                <h3 className="text-xl font-bold text-purple-700 mb-3 text-center">{area.title}</h3>
                <p className="text-gray-700 mb-4">{area.desc}</p>
                <p className="text-orange-500 font-semibold text-center cursor-pointer hover:text-orange-600">Know more</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Committee Members */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-purple-700 mb-6">Committee Members</h2>
              <ul className="space-y-3">
                {committeeMembers.map((member, index) => (
                  <li key={index} className="text-gray-700 text-lg font-semibold">{member}</li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-purple-700 mb-6">Address</h2>
              <div className="space-y-4 text-gray-700">
                <p className="font-semibold">AQUAPHARM FOUNDATION.</p>
                <p>901, 'A' Wing, 9th Floor, Amar Synergy, 12B Sadhu Vaswani Road, Camp, Pune 411001, Maharashtra, India</p>
                <h3 className="font-semibold text-purple-700 mt-6">Contact With Us</h3>
                <p>+91 20 6609 0000</p>
                <p>csr@aquapharm.net</p>
                <p>www.aquapharm-india.com</p>
                <div className="mt-6">
                  <a href="#" className="inline-block bg-purple-700 text-white px-6 py-3 rounded hover:bg-purple-800 transition-colors mr-4 mb-4">CSR Policy</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
