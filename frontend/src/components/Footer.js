import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-acencia text-white py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center justify-between mb-4">
              <Link to="/" className="block">
                <svg
                  viewBox="0 0 2000 340"
                  className="h-12 w-auto"
                  role="img"
                  aria-label="ACENCIA – Wir machen bAV einfach"
                >
                  {/* Icon: Three pill-frame rectangles */}
                  <g id="icon">
                    <rect
                      x="63"
                      y="40"
                      width="280"
                      height="67"
                      rx="18"
                      ry="18"
                      fill="none"
                      stroke="#FFFFFF"
                      strokeWidth="24"
                    />
                    <rect
                      x="63"
                      y="139"
                      width="280"
                      height="67"
                      rx="18"
                      ry="18"
                      fill="none"
                      stroke="#FFFFFF"
                      strokeWidth="24"
                    />
                    <rect
                      x="63"
                      y="238"
                      width="280"
                      height="67"
                      rx="18"
                      ry="18"
                      fill="none"
                      stroke="#FFFFFF"
                      strokeWidth="24"
                    />
                  </g>

                  {/* Wordmark: ACENCIA */}
                  <g id="wordmark">
                    <text
                      x="390"
                      y="30"
                      style={{
                        fontFamily: 'Tenor Sans, serif',
                        fontSize: '235px',
                        fontWeight: '400',
                        letterSpacing: '0.12em',
                        fill: '#FFFFFF',
                        dominantBaseline: 'hanging',
                      }}
                    >
                      ACENCIA
                    </text>
                  </g>

                  {/* Tagline: WIR MACHEN BAV EINFACH */}
                  <g id="tagline">
                    <text
                      x="390"
                      y="255"
                      style={{
                        fontFamily: 'Tenor Sans, serif',
                        fontSize: '65px',
                        fontWeight: '400',
                        letterSpacing: '0.25em',
                        fill: '#FFFFFF',
                        dominantBaseline: 'hanging',
                      }}
                    >
                      WIR MACHEN BAV EINFACH
                    </text>
                  </g>
                </svg>
              </Link>
              {/* Social Media Buttons */}
              <div className="flex items-center space-x-3">
                {/* LinkedIn Button */}
                <button
                  onClick={() =>
                    window.open(
                      'https://www.linkedin.com/company/acencia/',
                      '_blank',
                    )
                  }
                  className="group flex justify-center p-2 rounded-md drop-shadow-xl bg-[#0077b5] text-white font-semibold hover:translate-y-3 hover:rounded-[50%] transition-all duration-500 hover:bg-gradient-to-br hover:from-[#331029] hover:to-[#310413] cursor-pointer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1.1em"
                    viewBox="0 0 512 512"
                    strokeWidth="0"
                    fill="currentColor"
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path d="M444.17 32H70.28C49.85 32 32 46.7 32 66.89v374.72C32 461.91 49.85 480 70.28 480h373.78c20.54 0 35.94-18.21 35.94-38.39V66.89C480.12 46.7 464.6 32 444.17 32zm-273.3 373.43h-64.18V205.88h64.18zM141 175.54h-.46c-20.54 0-33.84-15.29-33.84-34.43 0-19.49 13.65-34.42 34.65-34.42s33.85 14.82 34.31 34.42c-.01 19.14-13.31 34.43-34.66 34.43zm264.43 229.89h-64.18V296.32c0-26.14-9.34-44-32.56-44-17.74 0-28.24 12-32.91 23.69-1.75 4.2-2.22 9.92-2.22 15.76v113.66h-64.18V205.88h64.18v27.77c9.34-13.3 23.93-32.44 57.88-32.44 42.13 0 74 27.77 74 87.64z"></path>
                  </svg>
                  <span className="absolute opacity-0 group-hover:opacity-100 group-hover:text-gray-700 group-hover:text-sm group-hover:-translate-y-10 duration-700">
                    LinkedIn
                  </span>
                </button>

                {/* YouTube Button */}
                <button
                  onClick={() =>
                    window.open('https://www.youtube.com/@ACENCIAde', '_blank')
                  }
                  className="group flex justify-center p-2 rounded-md drop-shadow-xl bg-[#CD201F] text-white font-semibold hover:translate-y-3 hover:rounded-[50%] transition-all duration-500 hover:bg-gradient-to-br hover:from-[#331029] hover:to-[#310413] cursor-pointer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    viewBox="0 0 576 512"
                    strokeWidth="0"
                    fill="currentColor"
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"></path>
                  </svg>
                  <span className="absolute opacity-0 group-hover:opacity-100 group-hover:text-gray-700 group-hover:text-sm group-hover:-translate-y-10 duration-700">
                    YouTube
                  </span>
                </button>
              </div>
            </div>
            <p className="text-slate-300 mb-4 max-w-md">
              Über 30 Jahren Erfahrung in der betrieblichen Altersvorsorge.
              <br />
              einfach und digital.
            </p>
            <div className="text-sm text-slate-400">
              <p>ACENCIA GmbH</p>
              <p>Hackenheim, Deutschland</p>
              <p>Geschäftsführer: Uwe Weimert</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/ueber-uns"
                  className="text-slate-300 hover:text-orange-400 transition-colors duration-200"
                >
                  Über uns
                </Link>
              </li>
              <li>
                <Link
                  to="/kontakt"
                  className="text-slate-300 hover:text-orange-400 transition-colors duration-200"
                >
                  Kontakt
                </Link>
              </li>
              <li>
                <a
                  href="https://outlook.office365.com/owa/calendar/ACENCIAde@acencia.de/bookings/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-300 hover:text-orange-400 transition-colors duration-200"
                >
                  Termin vereinbaren
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-slate-300 text-sm">
              <li>Rechtliche Prüfung & Einrichtung</li>
              <li>Digitale bAV-Verwaltung</li>
              <li>Mitarbeiterkommunikation</li>
              <li>Persönliche Beratung</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm text-slate-400 mb-4 md:mb-0">
            © 2025 ACENCIA GmbH. Alle Rechte vorbehalten.
          </div>

          <div className="flex space-x-6 text-sm">
            <Link
              to="/datenschutz"
              className="text-slate-400 hover:text-orange-400 transition-colors duration-200"
            >
              Datenschutzerklärung
            </Link>
            <Link
              to="/impressum"
              className="text-slate-400 hover:text-orange-400 transition-colors duration-200"
            >
              Impressum
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
