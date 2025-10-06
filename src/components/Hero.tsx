import { ArrowRight } from 'lucide-react';
import { Language } from '../types';
import { t } from '../translations';

interface HeroProps {
  language: Language;
  onNavigate: (section: string) => void;
}

export default function Hero({ language, onNavigate }: HeroProps) {
  return (
    <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-amber-900 text-white py-24 overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjA1KSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-20"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            {language === 'ca' ? 'Descobreix el Tir amb Arc' : 'Descubre el Tiro con Arco'}
          </h2>
          <p className="text-xl md:text-2xl mb-8 text-slate-200 leading-relaxed">
            {language === 'ca'
              ? 'Uneix-te al millor club de Barcelona. Formació professional, comunitat acollidora i instal·lacions de primer nivell.'
              : 'Únete al mejor club de Barcelona. Formación profesional, comunidad acogedora e instalaciones de primer nivel.'
            }
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => onNavigate('courses')}
              className="bg-amber-500 hover:bg-amber-600 text-slate-900 font-bold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center space-x-2"
            >
              <span>{language === 'ca' ? 'Veure Cursos' : 'Ver Cursos'}</span>
              <ArrowRight size={20} />
            </button>
            <button
              onClick={() => onNavigate('contact')}
              className="bg-transparent border-2 border-white hover:bg-white hover:text-slate-900 font-bold px-8 py-4 rounded-lg transition-all duration-300"
            >
              {t('contact', language)}
            </button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-slate-50 to-transparent"></div>
    </section>
  );
}
