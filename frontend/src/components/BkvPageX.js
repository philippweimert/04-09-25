import React, { useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import { Heart, Shield } from 'lucide-react';

const BkvPageX = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
                <Heart className="w-5 h-5 mr-2" />
                bKV Option X
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold text-white mb-8">
                bKV Option <span className="text-acencia-orange">X</span>
              </h1>
              <p className="text-lg text-slate-200 leading-relaxed max-w-4xl mx-auto">
                Platzhalter für bKV Option X - Inhalte folgen
              </p>
            </div>

            {/* Content Placeholder */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 mb-16 text-center">
              <div className="flex items-center justify-center mb-6">
                <Shield className="w-12 h-12 text-acencia-orange mr-4" />
                <h2 className="text-2xl font-semibold text-white">
                  Inhalte für bKV Option X folgen
                </h2>
              </div>
              <p className="text-slate-200 leading-relaxed">
                Diese Seite wird mit spezifischen Informationen zu bKV Option X
                gefüllt.
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default BkvPageX;
