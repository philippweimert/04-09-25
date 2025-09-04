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
    <div className="min-h-screen bg-bg">
      <Header />

      {/* Content */}
      <main className="section">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            {/* Hero Section */}
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-6 py-3 bg-neutral-100 rounded-full text-slate-700 text-sm font-medium mb-8">
                <Users className="w-5 h-5 mr-2" />
                Unser Team
              </div>
              <h1 className="mb-8">Service-Team</h1>
              <p className="text-base text-muted-foreground leading-relaxed max-w-4xl mx-auto measure">
                Lernen Sie unser kompetentes Team kennen, das Sie bei allen
                Fragen zur betrieblichen Altersvorsorge unterstützt
              </p>
            </div>

            {/* Geschäftsführer Sektion */}
            <div className="mb-16">
              <h2 className="text-center mb-8 flex items-center justify-center">
                <Crown className="w-6 h-6 text-slate-600 mr-2" />
                Geschäftsführung
              </h2>

              <div className="flex justify-center">
                <div className="group">
                  <div className="rounded-lg p-8 border border-neutral-200 bg-white w-80">
                    {/* Geschäftsführer Avatar */}
                    <div className="relative mb-6">
                      <div className="w-32 h-32 mx-auto bg-neutral-100 rounded-full flex items-center justify-center">
                        <Crown className="w-16 h-16 text-slate-600" />
                      </div>
                      <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-neutral-200 rounded-full flex items-center justify-center">
                        <Crown className="w-4 h-4 text-slate-600" />
                      </div>
                    </div>

                    <div className="text-center">
                      <h3 className="text-xl font-semibold mb-2">
                        {geschäftsführer.name}
                      </h3>
                      <p className="text-muted-foreground font-medium mb-4">
                        {geschäftsführer.position}
                      </p>

                      {/* Platzhalter Kontakt-Info */}
                      <div className="space-y-2 text-muted-foreground text-sm">
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
              <h2 className="text-center mb-12 flex items-center justify-center">
                <Users className="w-6 h-6 text-slate-600 mr-2" />
                Unser Service-Team
              </h2>

              {/* Team Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {angestellte.map((member, index) => (
                  <div key={member.id} className="group">
                    <div className="rounded-lg p-6 border border-neutral-200 bg-white h-full">
                      {/* Mitarbeiter Avatar */}
                      <div className="relative mb-4">
                        <div className="w-20 h-20 mx-auto bg-neutral-100 rounded-full flex items-center justify-center">
                          <User className="w-10 h-10 text-slate-600" />
                        </div>
                        <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-neutral-200 rounded-full flex items-center justify-center">
                          <span className="text-slate-700 text-xs font-bold">
                            {index + 1}
                          </span>
                        </div>
                      </div>

                      <div className="text-center">
                        <h3 className="text-lg font-semibold mb-2">
                          {member.name}
                        </h3>
                        <p className="text-muted-foreground text-sm mb-3">
                          {member.position}
                        </p>

                        {/* Platzhalter Kontakt-Info */}
                        <div className="space-y-1 text-muted-foreground text-xs">
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
            <div className="rounded-lg p-8 text-center border border-neutral-200 bg-white">
              <h2 className="mb-4">
                Haben Sie Fragen? Wir sind für Sie da!
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed measure mx-auto">
                Unser Service-Team steht Ihnen bei allen Fragen zur
                betrieblichen Altersvorsorge zur Verfügung. Kontaktieren Sie uns
                für eine persönliche Beratung.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="btn--primary">
                  Team kontaktieren
                </button>
                <button className="btn--secondary">
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
