import React from 'react';
import { Star, Quote } from 'lucide-react';

const GoogleReviews = () => {
  const reviews = [
    {
      id: 1,
      name: 'Michael Weber',
      rating: 5,
      text: 'ACENCIA hat unsere bAV-Verwaltung komplett digitalisiert. Der Service ist hervorragend und das Team sehr kompetent. Absolute Empfehlung!',
      initials: 'MW',
      date: 'vor 2 Monaten',
    },
    {
      id: 2,
      name: 'Dr. Petra Schneider',
      rating: 5,
      text: 'Endlich eine bAV-Lösung, die wirklich funktioniert! ACENCIA hat unser HR-Team entlastet und unsere Mitarbeiter sind begeistert.',
      initials: 'PS',
      date: 'vor 6 Wochen',
    },
    {
      id: 3,
      name: 'Thomas Müller',
      rating: 5,
      text: 'Exzellente Betreuung bei der Einrichtung unserer betrieblichen Altersvorsorge. Sehr zu empfehlen für alle Unternehmen!',
      initials: 'TM',
      date: 'vor 3 Wochen',
    },
    {
      id: 4,
      name: 'Sandra Hoffmann',
      rating: 4,
      text: 'Professionelle Beratung und reibungslose Abwicklung. Die digitale Plattform macht alles so viel einfacher. Kleinere Startschwierigkeiten, aber insgesamt top!',
      initials: 'SH',
      date: 'vor 1 Monat',
    },
    {
      id: 5,
      name: 'Jürgen Maier',
      rating: 5,
      text: 'Als Geschäftsführer kann ich ACENCIA nur empfehlen. Die rechtssichere Umsetzung und der digitale Ansatz überzeugen vollständig.',
      initials: 'JM',
      date: 'vor 5 Tagen',
    },
    {
      id: 6,
      name: 'Lisa Wagner',
      rating: 5,
      text: 'ACENCIA überzeugt durch Kompetenz und Innovation. Die bAV-Lösung ist genau das, was wir gesucht haben. Perfekt!',
      initials: 'LW',
      date: 'vor 2 Wochen',
    },
    {
      id: 7,
      name: 'Robert Klein',
      rating: 5,
      text: 'Fantastische Zusammenarbeit! Das Team von ACENCIA hat uns bei jedem Schritt perfekt begleitet. Sehr empfehlenswert!',
      initials: 'RK',
      date: 'vor 1 Woche',
    },
    {
      id: 8,
      name: 'Christine Bauer',
      rating: 4,
      text: 'Sehr gute digitale Lösung für unsere bAV. Der Implementierungsprozess war durchdacht und das Support-Team hilfsbereit.',
      initials: 'CB',
      date: 'vor 8 Tagen',
    },
    {
      id: 9,
      name: 'Anna Schmidt',
      rating: 5,
      text: 'Die digitale bAV-Verwaltung von ACENCIA ist ein Gamechanger. Effizient, modern und sehr benutzerfreundlich!',
      initials: 'AS',
      date: 'vor 4 Tagen',
    },
    {
      id: 10,
      name: 'Markus Richter',
      rating: 5,
      text: '30 Jahre Erfahrung spürt man in jedem Beratungsgespräch. ACENCIA macht bAV wirklich einfach und verständlich.',
      initials: 'MR',
      date: 'vor 3 Tagen',
    },
  ];

  // Verdopple die Reviews für nahtlose Animation
  const duplicatedReviews = [...reviews, ...reviews];

  return (
    <section className="bg-gradient-to-b from-acencia-light to-acencia py-12 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.05]">
        <svg
          className="absolute top-10 right-10 w-64 h-64 animate-pulse"
          viewBox="0 0 400 400"
        >
          <polygon
            points="200,50 320,140 320,220 200,290 80,220 80,140"
            fill="none"
            stroke="white"
            strokeWidth="2"
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-white/20">
            <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
            <span className="text-white font-semibold text-sm tracking-wide uppercase">
              Google Bewertungen
            </span>
          </div>

          <h2 className="text-2xl lg:text-3xl font-bold mb-4 leading-tight text-white">
            Das sagen unsere <span className="text-acencia-orange">Kunden</span>
          </h2>

          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="flex items-center space-x-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  className="w-7 h-7 text-yellow-400 fill-yellow-400 animate-wave-star-header"
                  style={{ animationDelay: `${star * 0.3}s` }}
                />
              ))}
            </div>
            <span className="text-white font-semibold text-lg ml-2">4.9</span>
            <span className="text-slate-300 text-sm">• Google Bewertungen</span>
          </div>

          <p className="text-slate-200 max-w-2xl mx-auto leading-relaxed">
            Vertrauen Sie auf die Erfahrungen von über 100+ zufriedenen Kunden
          </p>
        </div>

        {/* Scrolling Reviews Container - Dauerhaft in Bewegung */}
        <div className="relative overflow-hidden">
          <div className="flex space-x-6 animate-scroll-continuous">
            {duplicatedReviews.map((review, index) => (
              <div
                key={`${review.id}-${index}`}
                className="flex-shrink-0 w-80 bg-white rounded-2xl p-6 shadow-lg border border-slate-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                {/* Review Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-acencia to-acencia-light rounded-full flex items-center justify-center text-white font-semibold text-sm">
                      {review.initials}
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 text-sm">
                        {review.name}
                      </h4>
                      <p className="text-slate-500 text-xs">{review.date}</p>
                    </div>
                  </div>
                  <img
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%234285f4'%3E%3Cpath d='M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z'/%3E%3Cpath d='M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z'/%3E%3Cpath d='M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z'/%3E%3Cpath d='M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z'/%3E%3C/svg%3E"
                    alt="Google"
                    className="w-5 h-5"
                  />
                </div>

                {/* Star Rating mit individueller Bewertung */}
                <div className="flex items-center space-x-1 mb-3">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className={`w-4 h-4 ${star <= review.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'} animate-wave-star`}
                      style={{ animationDelay: `${star * 0.1}s` }}
                    />
                  ))}
                </div>

                {/* Review Text */}
                <div className="relative">
                  <Quote className="absolute -top-1 -left-1 w-4 h-4 text-slate-300" />
                  <p className="text-slate-700 text-sm leading-relaxed pl-4">
                    {review.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Google Link */}
        <div className="text-center mt-8">
          <a
            href="https://share.google/Jond28GXjbVpDUfkj"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-white text-slate-800 px-6 py-3 rounded-xl font-semibold hover:bg-slate-100 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
          >
            <img
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%234285f4'%3E%3Cpath d='M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z'/%3E%3Cpath d='M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z'/%3E%3Cpath d='M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z'/%3E%3Cpath d='M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z'/%3E%3C/svg%3E"
              alt="Google"
              className="w-5 h-5"
            />
            <span>Alle Bewertungen auf Google ansehen</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default GoogleReviews;
