import { Target, Mail, Phone, MapPin } from 'lucide-react';
import { Language } from '../types';
import { t } from '../translations';
import capnLogo from '/capn.svg';

interface FooterProps {
  language: Language;
  onNavigate: (section: string) => void;
}

export default function Footer({ language, onNavigate }: FooterProps) {
  return (
    <footer className="bg-gradient-to-r from-slate-900 to-slate-800 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <img src={capnLogo} alt="CAPN Logo" className="w-[50px]" />
              <h3 className="text-xl font-bold">{t('clubName', language)}</h3>
            </div>
            <p className="text-slate-300 text-sm leading-relaxed">
              {language === 'ca'
                ? 'El teu club de tir amb arc a Barcelona. Uneix-te a nosaltres i descobreix la passió per aquest esport olímpic.'
                : 'Tu club de tiro con arco en Barcelona. Únete a nosotros y descubre la pasión por este deporte olímpico.'}
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-lg">{t('contact', language)}</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-2">
                <MapPin size={16} className="text-amber-500" />
                <span className="text-slate-300">{t('address', language)}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone size={16} className="text-amber-500" />
                <span className="text-slate-300">+34 931 234 567</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail size={16} className="text-amber-500" />
                <span className="text-slate-300">info@arquerspoblenou.cat</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-lg">{t('quickLinks', language)}</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  onClick={() => onNavigate('courses')}
                  className="text-slate-300 hover:text-amber-400 transition-colors"
                >
                  {t('courses', language)}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('who-we-are')}
                  className="text-slate-300 hover:text-amber-400 transition-colors"
                >
                  {t('whoWeAre', language)}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('contact')}
                  className="text-slate-300 hover:text-amber-400 transition-colors"
                >
                  {t('contact', language)}
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-700 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-slate-400">
          <p>{t('copyright', language)}</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <button
              onClick={() => onNavigate('privacy')}
              className="hover:text-amber-400 transition-colors"
            >
              {t('privacyPolicy', language)}
            </button>
            <span>|</span>
            <button
              onClick={() => onNavigate('contact')}
              className="hover:text-amber-400 transition-colors"
            >
              {language === 'ca' ? 'Avís Legal' : 'Aviso Legal'}
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
