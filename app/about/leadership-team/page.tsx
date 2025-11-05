import React from 'react';
import ImageWithFallback from '@/components/ImageWithFallback';

export default function LeadershipTeamPage() {
  const leaders = [
    {
      name: 'DR SANJIV GOENKA',
      position: 'Chairman',
      title: 'The Chairman',
      description: 'Dr. Sanjiv Goenka, is the Chairman of the 7 billion dollar RP Sanjiv Goenka Group since its inception in 2011. The Group has 50,000 employees worldwide and over five hundred thousand shareholders.',
      image: 'https://www.imi.edu/delhi/nimi/img/Sanjiv-Goenka.jpg',
    },
    {
      name: 'SHASHWAT GOENKA',
      position: 'Vice Chairman',
      title: 'The Vice Chairman',
      description: 'Mr. Shashwat Goenka is the Vice Chairman of the RP-Sanjiv Goenka Group. He is the Chairman of Spencer\'s Retail and Director & Vice Chairman of CESC Limited and Firstsource Solutions Ltd.',
      image: '/images/goenka.webp',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[300px] overflow-hidden">
        <ImageWithFallback 
          src="https://images.unsplash.com/photo-1551836022-4c4c79ecde51?w=1920&auto=format&fit=crop&q=70" 
          alt="Leadership Team" 
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="hero-overlay" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 h-full flex items-center text-white">
          <div>
            <h1 className="text-5xl font-bold mb-4">Leadership Team</h1>
            <p className="text-2xl">Meet the people driving our success</p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="space-y-16">
            {leaders.map((leader, index) => (
              <div 
                key={leader.name} 
                className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center scroll-fade-in-up scroll-delay-${Math.min(index * 100, 500)}`}
              >
                <div className="lg:w-2/5 flex justify-center">
                  <div className="relative w-80 h-96 rounded-lg overflow-hidden shadow-2xl">
                    <ImageWithFallback 
                      src={leader.image} 
                      alt={leader.name}
                      className="w-full h-full object-cover bg-gray-200"
                      loading="lazy"
                      fallbackSrc="https://images.unsplash.com/photo-1544723795-3fb6469f5b39?w=800&auto=format&fit=crop&q=70"
                    />
                  </div>
                </div>
                <div className="lg:w-3/5">
                  <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
                    <p className="text-sm text-orange-600 font-semibold mb-2">{leader.title}</p>
                    <h3 className="text-3xl font-bold text-gray-800 mb-2">{leader.name}</h3>
                    <p className="text-xl text-gray-600 font-semibold mb-6">{leader.position}</p>
                    <p className="text-gray-700 text-lg leading-relaxed">{leader.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
