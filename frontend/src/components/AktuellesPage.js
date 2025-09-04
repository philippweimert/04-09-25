import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import {
  Calendar,
  Clock,
  User,
  BookOpen,
  Scale,
  Gavel,
  TrendingUp,
  Filter,
  Search,
  ArrowRight,
} from 'lucide-react';

const AktuellesPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('alle');
  const [searchTerm, setSearchTerm] = useState('');

  // Mock-Artikel über betriebliche Altersvorsorge
  const articles = [
    {
      id: 1,
      title:
        'Haftung des Arbeitgebers in der betrieblichen Altersversorgung und Minimierungsstrategien',
      excerpt:
        'Ein umfassender Überblick über die Haftungsrisiken von Arbeitgebern in der bAV und bewährte Strategien zur Risikominimierung. Rechtliche Grundlagen und praktische Lösungsansätze für Unternehmen.',
      date: '2024-12-20',
      category: 'Expertenmeinung',
      author: 'Bettina Glaab',
      readTime: '12 Min.',
      image:
        'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=400&h=240&fit=crop',
      tags: ['Haftung', 'Arbeitgeber', 'Risikominimierung'],
      url: 'https://www.anwalt.de/rechtstipps/haftung-des-arbeitgebers-in-der-betrieblichen-altersversorgung-und-minimierungsstrategien_185184.html',
    },
    {
      id: 2,
      title: 'BAG-Urteil: Neue Pflichten bei der Entgeltumwandlung',
      excerpt:
        'Das Bundesarbeitsgericht hat in einem wegweisenden Urteil die Arbeitgeberpflichten bei der Entgeltumwandlung präzisiert. Unternehmen müssen künftig über steuerliche Auswirkungen informieren.',
      date: '2024-12-15',
      category: 'Rechtsprechung',
      author: 'Dr. Maria Schmidt',
      readTime: '5 Min.',
      image:
        'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=400&h=240&fit=crop',
      tags: ['BAG', 'Entgeltumwandlung', 'Arbeitgeberpflichten'],
      url: '#',
    },
    {
      id: 3,
      title: 'Betriebsrentenstärkungsgesetz: Änderungen ab 2025',
      excerpt:
        'Mit dem neuen Jahr treten wichtige Änderungen des Betriebsrentenstärkungsgesetzes in Kraft. Wir erläutern die wichtigsten Neuerungen für Arbeitgeber und Arbeitnehmer.',
      date: '2024-12-10',
      category: 'Gesetzgebung',
      author: 'Prof. Dr. Thomas Weber',
      readTime: '8 Min.',
      image:
        'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=240&fit=crop',
      tags: ['BRSG', 'Gesetzesänderung', '2025'],
      url: '#',
    },
    {
      id: 4,
      title: 'Digitalisierung der bAV: Chancen und Herausforderungen',
      excerpt:
        'Expertenmeinung zur fortschreitenden Digitalisierung in der betrieblichen Altersvorsorge. Welche Potentiale bieten moderne HR-Technologien?',
      date: '2024-12-05',
      category: 'Expertenmeinung',
      author: 'Sarah Mueller',
      readTime: '6 Min.',
      image:
        'https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=240&fit=crop',
      tags: ['Digitalisierung', 'HR-Tech', 'Innovation'],
      url: '#',
    },
    {
      id: 5,
      title: 'BFH stärkt Arbeitnehmerrechte bei Direktversicherung',
      excerpt:
        'Der Bundesfinanzhof hat in einem aktuellen Urteil die Rechte von Arbeitnehmern bei der Direktversicherung gestärkt. Die Auswirkungen für die Praxis.',
      date: '2024-11-28',
      category: 'Rechtsprechung',
      author: 'Dr. Klaus Weber',
      readTime: '4 Min.',
      image:
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=240&fit=crop',
      tags: ['BFH', 'Direktversicherung', 'Urteil'],
      url: '#',
    },
    {
      id: 6,
      title: 'Nachhaltige bAV: ESG-Kriterien im Fokus',
      excerpt:
        'Immer mehr Unternehmen setzen bei der betrieblichen Altersvorsorge auf nachhaltige Anlagestrategien. Wie ESG-Kriterien die bAV verändern.',
      date: '2024-11-20',
      category: 'Expertenmeinung',
      author: 'Lisa Hoffmann',
      readTime: '7 Min.',
      image:
        'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=240&fit=crop',
      tags: ['ESG', 'Nachhaltigkeit', 'Investments'],
      url: '#',
    },
  ];

  const categories = [
    'alle',
    'Rechtsprechung',
    'Gesetzgebung',
    'Expertenmeinung',
  ];

  // Filter articles
  const filteredArticles = articles.filter((article) => {
    const matchesCategory =
      selectedCategory === 'alle' || article.category === selectedCategory;
    const matchesSearch =
      article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.tags.some((tag) =>
        tag.toLowerCase().includes(searchTerm.toLowerCase()),
      );
    return matchesCategory && matchesSearch;
  });

  const getCategoryIcon = (category) => {
    switch (category) {
      case 'Rechtsprechung':
        return <Gavel className="w-4 h-4" />;
      case 'Gesetzgebung':
        return <Scale className="w-4 h-4" />;
      case 'Expertenmeinung':
        return <User className="w-4 h-4" />;
      default:
        return <BookOpen className="w-4 h-4" />;
    }
  };

  const getCategoryColor = (category) => {
    switch (category) {
      case 'Rechtsprechung':
        return 'bg-red-900/30 text-red-300 border-red-700';
      case 'Gesetzgebung':
        return 'bg-blue-900/30 text-blue-300 border-blue-700';
      case 'Expertenmeinung':
        return 'bg-green-900/30 text-green-300 border-green-700';
      default:
        return 'bg-slate-700 text-slate-300 border-slate-600';
    }
  };

  return (
    <div className="min-h-screen bg-acencia">
      <Header />

      <div className="pt-32 bg-acencia">
        {/* Hero Section mit Hero-Design */}
        <section className="bg-gradient-to-b from-acencia via-acencia to-acencia py-20 relative overflow-hidden">
          {/* Background design similar to hero section */}
          <div className="absolute inset-0 opacity-[0.05]">
            <svg
              className="absolute top-20 right-0 w-96 h-96"
              viewBox="0 0 400 400"
            >
              <polygon
                points="200,50 350,150 350,250 200,350 50,250 50,150"
                fill="none"
                stroke="white"
                strokeWidth="2"
              />
            </svg>
            <svg
              className="absolute bottom-20 left-0 w-80 h-80"
              viewBox="0 0 400 400"
            >
              <polygon
                points="200,30 320,120 320,200 200,290 80,200 80,120"
                fill="none"
                stroke="#f97316"
                strokeWidth="1"
              />
            </svg>
            <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-orange-400 rounded-full animate-ping"></div>
            <div className="absolute top-3/4 right-1/3 w-1 h-1 bg-white rounded-full animate-pulse"></div>
            <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-orange-400 rounded-full animate-pulse"></div>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-6">
              <h1 className="text-3xl lg:text-4xl font-bold text-white mb-6 leading-tight">
                <span className="text-white">Aktuelles zur </span>
                <span className="bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 bg-clip-text text-transparent">
                  betrieblichen Altersvorsorge
                </span>
              </h1>
              <p className="text-lg text-slate-200 max-w-4xl mx-auto leading-relaxed">
                Bleiben Sie informiert über die neuesten Entwicklungen, Gesetze
                und Trends in der bAV
              </p>
            </div>
          </div>
        </section>

        {/* Filter und Content Section - erst hier Farbwechsel, reduziertes Padding */}
        <section className="bg-gradient-to-b from-acencia via-acencia-light to-acencia-blue py-8 relative overflow-hidden">
          {/* Subtle background elements */}
          <div className="absolute inset-0 opacity-[0.03]">
            <svg
              className="absolute top-10 left-0 w-80 h-80"
              viewBox="0 0 400 400"
            >
              <polygon
                points="200,30 330,130 330,230 200,330 70,230 70,130"
                fill="none"
                stroke="#f97316"
                strokeWidth="1"
              />
            </svg>
            <svg
              className="absolute bottom-10 right-0 w-64 h-64"
              viewBox="0 0 400 400"
            >
              <polygon
                points="200,50 300,100 300,200 200,250 100,200 100,100"
                fill="none"
                stroke="#3b82f6"
                strokeWidth="1"
              />
            </svg>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            {/* Filter Section - reduzierter Abstand */}
            <div className="bg-gradient-to-br from-slate-700 to-slate-600 rounded-2xl p-8 mb-6 shadow-xl">
              <div className="flex flex-col md:flex-row gap-6 items-center">
                {/* Search */}
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Artikel durchsuchen..."
                    className="w-full pl-10 pr-4 py-3 bg-slate-800 border border-slate-600 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-orange-500 transition-colors"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>

                {/* Category Filter */}
                <div className="flex flex-wrap gap-2">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                        selectedCategory === category
                          ? 'bg-orange-500 text-white shadow-lg'
                          : 'bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white'
                      }`}
                    >
                      {category === 'alle' ? 'Alle Kategorien' : category}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Articles Grid - 3x3 Format mit kleineren Boxen */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredArticles.map((article, index) => (
                <a
                  key={article.id}
                  href={article.url}
                  target={article.url !== '#' ? '_blank' : '_self'}
                  rel={article.url !== '#' ? 'noopener noreferrer' : ''}
                  className="block"
                >
                  <article className="bg-gradient-to-br from-slate-700 to-slate-600 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer h-full">
                    <div className="aspect-w-16 aspect-h-9">
                      <img
                        src={article.image}
                        alt={article.title}
                        className="w-full h-32 object-cover"
                      />
                    </div>

                    <div className="p-4">
                      {/* Category Badge */}
                      <div className="flex items-center gap-2 mb-3">
                        <span
                          className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium border ${getCategoryColor(article.category)}`}
                        >
                          {getCategoryIcon(article.category)}
                          {article.category}
                        </span>
                        {article.url !== '#' && (
                          <span className="inline-flex items-center gap-1 px-2 py-1 bg-blue-900/30 text-blue-300 text-xs rounded-full border border-blue-700">
                            <ArrowRight className="w-3 h-3" />
                            Extern
                          </span>
                        )}
                      </div>

                      {/* Title - kleiner */}
                      <h3 className="text-lg font-bold text-white mb-2 leading-tight hover:text-orange-400 transition-colors line-clamp-2">
                        {article.title}
                      </h3>

                      {/* Excerpt - kleiner */}
                      <p className="text-slate-300 text-xs leading-relaxed mb-3 line-clamp-3">
                        {article.excerpt}
                      </p>

                      {/* Meta Info - kompakter */}
                      <div className="flex items-center justify-between text-xs text-slate-400 pt-2 border-t border-slate-600">
                        <div className="flex items-center gap-2">
                          <div className="flex items-center gap-1">
                            <User className="w-3 h-3" />
                            <span className="truncate max-w-20">
                              {article.author}
                            </span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            <span>{article.readTime}</span>
                          </div>
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          <span>
                            {new Date(article.date).toLocaleDateString('de-DE')}
                          </span>
                        </div>
                      </div>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mt-4">
                        {article.tags.map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="px-2 py-1 bg-slate-800 text-slate-300 text-xs rounded-md"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </article>
                </a>
              ))}
            </div>

            {/* No Results */}
            {filteredArticles.length === 0 && (
              <div className="text-center py-12">
                <BookOpen className="w-16 h-16 text-slate-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-slate-400 mb-2">
                  Keine Artikel gefunden
                </h3>
                <p className="text-slate-500">
                  Versuchen Sie andere Suchbegriffe oder wählen Sie eine andere
                  Kategorie.
                </p>
              </div>
            )}
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default AktuellesPage;
