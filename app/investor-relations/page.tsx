import React from 'react';

export default function InvestorRelationsPage() {
  const regulation62Disclosures = [
    { sl: 1, particular: '(a) Details of its business' },
    { sl: 2, particular: '(b) Composition of the Board' },
    { sl: 3, particular: '(c) Financial information including (i) notice of meeting of the board of directors where financial results shall be discussed; (ii) financial results, on the conclusion of the meeting of the board of directors where the financial results were approved; (iii) Annual Reports' },
    { sl: 4, particular: '(d) contact information of the designated officials of the listed entity who are responsible for assisting and handling investor grievances;' },
    { sl: 5, particular: '(e) email address for grievance redressal and other relevant details;' },
    { sl: 6, particular: '(f) name of the debenture trustees with full contact details;' },
    { sl: 7, particular: '(g) the information, report, notices, call letters, circulars, proceedings, etc concerning non-convertible redeemable preference shares or non-convertible debt securities;' },
    { sl: 8, particular: '(h) all information and reports including compliance reports filed by the listed entity;' },
    { sl: 9, particular: '(i) Information with respect to the following: (i) default by issuer to pay interest or redemption amount; (ii) failure to create a charge on the assets' },
    { sl: 10, particular: '(j) all credit ratings obtained by the entity for all its listed non-convertible securities, updated immediately upon any revision in the ratings' },
    { sl: 11, particular: '(k) statements of deviation(s) or variation(s) as specified in sub-regulation (7) and sub-regulation (7A) of regulation 52 of these regulations;' },
    { sl: 12, particular: '(l) Annual Returns' },
  ];
  
  const regulation62_1A_Disclosures = [
    { sl: 1, particular: '(a) composition of the various committees of the board of directors;' },
    { sl: 2, particular: '(b) terms and conditions of appointment of independent directors;' },
    { sl: 3, particular: '(c) code of conduct of the board of directors and senior management personnel;' },
    { sl: 4, particular: '(d) details of establishment of vigil mechanism/ whistle blower policy;' },
    { sl: 5, particular: '(e) criteria of making payments to non-executive directors, if the same has not been disclosed in the annual report;' },
    { sl: 6, particular: '(f) secretarial compliance report as per sub-regulation (2) of regulation 24A of these regulations;' },
    { sl: 7, particular: '(g) policy on dealing with related party transactions; debt securities;' },
    { sl: 8, particular: '(h) policy for determining \'material\' subsidiaries;' },
    { sl: 9, particular: '(i) Details of familiarization programmes imparted to independent directors including the following details: (i) number of programmes attended by the independent directors (during the year and on a cumulative basis till date), (ii) number of hours spent by the independent directors in such programmes (during the year and on cumulative basis till date), and (iii) other relevant details.' },
  ];
  return (
    <div className="min-h-screen">
      {/* Hero Banner with Image */}
      <section className="relative h-[500px] overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1920&h=500&fit=crop" 
          alt="Investor Relations" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 h-full flex items-center">
          <div className="text-white">
            <h1 className="text-5xl font-bold mb-4">Investor Relations</h1>
            <p className="text-2xl">Building Value Together</p>
          </div>
        </div>
      </section>

      {/* Main Navigation */}
      <section className="py-8 bg-gray-100 scroll-fade-in">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="#regulation62" className="bg-white px-6 py-3 rounded shadow hover:shadow-lg transition-shadow text-purple-700 font-semibold">Disclosures under Regulation 62</a>
            <a href="#scheme" className="bg-white px-6 py-3 rounded shadow hover:shadow-lg transition-shadow text-purple-700 font-semibold">Scheme of Arrangement</a>
            <a href="#policies" className="bg-white px-6 py-3 rounded shadow hover:shadow-lg transition-shadow text-purple-700 font-semibold">General Policies</a>
            <a href="#other-info" className="bg-white px-6 py-3 rounded shadow hover:shadow-lg transition-shadow text-purple-700 font-semibold">Other Informations</a>
            <a href="#meetings" className="bg-white px-6 py-3 rounded shadow hover:shadow-lg transition-shadow text-purple-700 font-semibold">General Meetings</a>
          </div>
        </div>
      </section>

      {/* Regulation 62 Table */}
      <section id="regulation62" className="py-16 bg-white scroll-fade-in">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-purple-700 mb-8">Disclosures under Regulation 62 of the SEBI Listing Regulations</h2>
          <div className="overflow-x-auto">
            <table className="w-full bg-white border border-gray-300 rounded-lg shadow-lg">
              <thead className="bg-gradient-to-r from-purple-600 to-orange-500 text-white">
                <tr>
                  <th className="px-6 py-4 text-left font-bold">Sl. No.</th>
                  <th className="px-6 py-4 text-left font-bold">Particulars as per LODR</th>
                </tr>
              </thead>
              <tbody>
                {regulation62Disclosures.map((row, index) => (
                  <tr key={index} className={`${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'} scroll-fade-in-up scroll-delay-${Math.min(index * 50, 300)}`}>
                    <td className="px-6 py-4 border-t border-gray-200 font-semibold text-purple-700">{row.sl}</td>
                    <td className="px-6 py-4 border-t border-gray-200 text-gray-700">{row.particular}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Regulation 62(1A) Table */}
      <section className="py-16 bg-gray-50 scroll-fade-in">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-purple-700 mb-8">Disclosures under Regulation 62(1A), of the SEBI Listing Regulations</h2>
          <div className="overflow-x-auto">
            <table className="w-full bg-white border border-gray-300 rounded-lg shadow-lg">
              <thead className="bg-gradient-to-r from-purple-600 to-orange-500 text-white">
                <tr>
                  <th className="px-6 py-4 text-left font-bold">Sl. No.</th>
                  <th className="px-6 py-4 text-left font-bold">Particulars as per LODR</th>
                </tr>
              </thead>
              <tbody>
                {regulation62_1A_Disclosures.map((row, index) => (
                  <tr key={index} className={`${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'} scroll-fade-in-up scroll-delay-${Math.min(index * 50, 300)}`}>
                    <td className="px-6 py-4 border-t border-gray-200 font-semibold text-purple-700">{row.sl}</td>
                    <td className="px-6 py-4 border-t border-gray-200 text-gray-700">{row.particular}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
}
