import React, { useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import { Users, Crown, User, Mail, Phone, Linkedin } from 'lucide-react';

const ServiceTeamPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const geschäftsführer = {
    id: 1,
    name: 'Geschäftsführer',
    position: 'Geschäftsführung',
    isGeschäftsführer: true,
    placeholder: true,
  };

  const angestellte = Array.from({ length: 14 }, (_, index) => ({
    id: index + 2,
    name: `Mitarbeiter ${index + 1}`,
    position: 'Position wird bekannt gegeben',
    isGeschäftsführer: false,
    placeholder: true,
  }));

  const allMembers = [geschäftsführer, ...angestellte];

  return (
    <div className="min-h-screen bg-gradient-to-b from-acencia via-acencia to-acencia-light">
      <Header />

      {/* Doubled spacing from header */}
      <main className="pt-56">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            {/* Hero Section */}
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-6 py-3 bg-acencia-orange rounded-full text-white text-sm font-medium mb-8">
                <Users className="w-5 h-5 mr-2" />
                Unser Team
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold text-white mb-8">
                Service-<span className="text-acencia-orange">Team</span>
              </h1>
              <p className="text-lg text-slate-200 leading-relaxed max-w-4xl mx-auto">
                Lernen Sie unser kompetentes Team kennen, das Sie bei allen
                Fragen zur betrieblichen Altersvorsorge unterstützt
              </p>
            </div>

            {/* Geschäftsführer Sektion */}
            <div className="mb-16">
              <h2 className="text-2xl font-bold text-white text-center mb-8 flex items-center justify-center">
                <Crown className="w-6 h-6 text-acencia-orange mr-2" />
                Geschäftsführung
              </h2>

              <div className="flex justify-center">
                <div className="group">
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105 hover:shadow-xl w-80">
                    {/* Geschäftsführer Avatar */}
                    <div className="relative mb-6">
                      <div className="w-32 h-32 mx-auto bg-gradient-to-br from-acencia-orange to-orange-600 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <Crown className="w-16 h-16 text-white" />
                      </div>
                      <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center">
                        <Crown className="w-4 h-4 text-white" />
                      </div>
                    </div>

                    <div className="text-center">
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-acencia-orange transition-colors duration-300">
                        {geschäftsführer.name}
                      </h3>
                      <p className="text-acencia-orange font-semibold mb-4">
                        {geschäftsführer.position}
                      </p>

                      {/* Platzhalter Kontakt-Info */}
                      <div className="space-y-2 text-slate-300 text-sm">
                        <div className="flex items-center justify-center space-x-2">
                          <Mail className="w-4 h-4" />
                          <span>email@acencia.de</span>
                        </div>
                        <div className="flex items-center justify-center space-x-2">
                          <Phone className="w-4 h-4" />
                          <span>+49 (0) XXX XXXXXXX</span>
                        </div>
                        <div className="flex items-center justify-center space-x-2">
                          <Linkedin className="w-4 h-4" />
                          <span>LinkedIn Profil</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Angestellte Team Sektion */}
            <div className="mb-16">
              <h2 className="text-2xl font-bold text-white text-center mb-12 flex items-center justify-center">
                <Users className="w-6 h-6 text-acencia-orange mr-2" />
                Unser Service-Team
              </h2>

              {/* Team Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {angestellte.map((member, index) => (
                  <div key={member.id} className="group">
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105 hover:shadow-xl h-full">
                      {/* Mitarbeiter Avatar */}
                      <div className="relative mb-4">
                        <div className="w-20 h-20 mx-auto bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                          <User className="w-10 h-10 text-white" />
                        </div>
                        <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center">
                          <span className="text-white text-xs font-bold">
                            {index + 1}
                          </span>
                        </div>
                      </div>

                      <div className="text-center">
                        <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-acencia-orange transition-colors duration-300">
                          {member.name}
                        </h3>
                        <p className="text-slate-300 text-sm mb-3">
                          {member.position}
                        </p>

                        {/* Platzhalter Kontakt-Info */}
                        <div className="space-y-1 text-slate-400 text-xs">
                          <div className="flex items-center justify-center space-x-1">
                            <Mail className="w-3 h-3" />
                            <span>email@acencia.de</span>
                          </div>
                          <div className="flex items-center justify-center space-x-1">
                            <Phone className="w-3 h-3" />
                            <span>+49 XXX XXXXXXX</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Call to Action */}
            <div className="bg-gradient-to-r from-acencia-orange to-orange-600 rounded-2xl p-8 text-center">
              <h2 className="text-2xl font-bold text-white mb-4">
                Haben Sie Fragen? Wir sind für Sie da!
              </h2>
              <p className="text-white/90 mb-6 leading-relaxed">
                Unser Service-Team steht Ihnen bei allen Fragen zur
                betrieblichen Altersvorsorge zur Verfügung. Kontaktieren Sie uns
                für eine persönliche Beratung.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-acencia-orange px-8 py-3 rounded-xl font-semibold hover:bg-slate-100 transition-all duration-300 hover:scale-105 shadow-lg">
                  Team kontaktieren
                </button>
                <button className="border-2 border-white text-white px-8 py-3 rounded-xl font-semibold hover:bg-white/10 transition-all duration-300">
                  Beratungstermin buchen
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ServiceTeamPage;
