import { Target, Menu, X } from 'lucide-react';
import { Language } from '../types';
import { t } from '../translations';
import { useState } from 'react';
import logo from './capn.svg';

interface HeaderProps {
  language: Language;
  onLanguageChange: (lang: Language) => void;
  onNavigate: (section: string) => void;
}

export default function Header({ language, onLanguageChange, onNavigate }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const menuItems = [
    { id: 'club', label: t('theClub', language), submenu: [
      { id: 'who-we-are', label: t('whoWeAre', language) },
      { id: 'where-we-are', label: t('whereWeAre', language) }
    ]},
    { id: 'archery', label: t('whatIsArchery', language) },
    { id: 'courses', label: t('courses', language) },
    { id: 'social', label: t('socialMedia', language) },
    { id: 'contact', label: t('contact', language) }
  ];

  return (
    <header className="bg-gradient-to-r from-pink-800 to-pink-900 text-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-3 cursor-pointer" onClick={() => onNavigate('home')}>

            <img src={logo} alt="CAPN Logo" />;
            <div>
              <h1 className="text-2xl font-bold">{t('clubName', language)}</h1>
              <p className="text-xs text-slate-300">Barcelona</p>
            </div>
          </div>

          <nav className="hidden md:flex items-center space-x-6">
            {menuItems.map((item) => (
              <div key={item.id} className="relative group">
                <button
                  onClick={() => !item.submenu && onNavigate(item.id)}
                  className="hover:text-amber-400 transition-colors font-medium"
                >
                  {item.label}
                </button>
                {item.submenu && (
                  <div className="absolute left-0 mt-2 w-48 bg-pink-800 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                    {item.submenu.map((subitem) => (
                      <button
                        key={subitem.id}
                        onClick={() => onNavigate(subitem.id)}
                        className="block w-full text-left px-4 py-2 hover:bg-pink-700 hover:text-amber-400 transition-colors first:rounded-t-lg last:rounded-b-lg"
                      >
                        {subitem.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="flex space-x-2 ml-4 border-l border-pink-600 pl-4">
              <button
                onClick={() => onLanguageChange('ca')}
                className={`px-3 py-1 rounded transition-colors ${
                  language === 'ca' ? 'bg-amber-500 text-slate-900' : 'bg-pink-700 hover:bg-pink-600'
                }`}
              >
                CAT
              </button>
              <button
                onClick={() => onLanguageChange('es')}
                className={`px-3 py-1 rounded transition-colors ${
                  language === 'es' ? 'bg-amber-500 text-slate-900' : 'bg-pink-700 hover:bg-pink-600'
                }`}
              >
                ESP
              </button>
            </div>
          </nav>

          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {mobileMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 space-y-2">
            {menuItems.map((item) => (
              <div key={item.id}>
                <button
                  onClick={() => {
                    if (!item.submenu) {
                      onNavigate(item.id);
                      setMobileMenuOpen(false);
                    }
                  }}
                  className="block w-full text-left py-2 hover:text-amber-400 transition-colors font-medium"
                >
                  {item.label}
                </button>
                {item.submenu && (
                  <div className="pl-4 space-y-1">
                    {item.submenu.map((subitem) => (
                      <button
                        key={subitem.id}
                        onClick={() => {
                          onNavigate(subitem.id);
                          setMobileMenuOpen(false);
                        }}
                        className="block w-full text-left py-1 text-slate-300 hover:text-amber-400 transition-colors"
                      >
                        {subitem.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="flex space-x-2 pt-2 border-t border-pink-700">
              <button
                onClick={() => onLanguageChange('ca')}
                className={`px-3 py-1 rounded transition-colors ${
                  language === 'ca' ? 'bg-amber-500 text-slate-900' : 'bg-pink-700'
                }`}
              >
                CAT
              </button>
              <button
                onClick={() => onLanguageChange('es')}
                className={`px-3 py-1 rounded transition-colors ${
                  language === 'es' ? 'bg-amber-500 text-slate-900' : 'bg-pink-700'
                }`}
              >
                ESP
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
