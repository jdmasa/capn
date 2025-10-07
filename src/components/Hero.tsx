import { ArrowRight } from 'lucide-react';
import { Language } from '../types';
import { t } from '../translations';
import { useEffect, useRef } from 'react';

interface HeroProps {
  language: Language;
  onNavigate: (section: string) => void;
}

export default function Hero({ language, onNavigate }: HeroProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const images = [
    'https://images.pexels.com/photos/6256068/pexels-photo-6256068.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/6256065/pexels-photo-6256065.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/6256281/pexels-photo-6256281.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/6256297/pexels-photo-6256297.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/6256291/pexels-photo-6256291.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/6256073/pexels-photo-6256073.jpeg?auto=compress&cs=tinysrgb&w=800'
  ];

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let scrollPosition = 0;
    const scrollSpeed = 0.5;

    const scroll = () => {
      scrollPosition += scrollSpeed;
      if (scrollPosition >= scrollContainer.scrollWidth / 2) {
        scrollPosition = 0;
      }
      scrollContainer.scrollLeft = scrollPosition;
      requestAnimationFrame(scroll);
    };

    const animationId = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(animationId);
  }, []);

  return (
    <section className="relative bg-gradient-to-br from-slate-900 via-pink-800 to-amber-900 text-white py-24 overflow-hidden">
      <div className="absolute inset-0 opacity-30">
        <div ref={scrollRef} className="flex h-full overflow-hidden">
          {[...images, ...images].map((img, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-64 h-full -ml-8 first:ml-0"
              style={{
                clipPath: 'polygon(25% 0%, 100% 0, 75% 100%, 0% 100%)',
              }}
            >
              <img
                src={img}
                alt={`Archery ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight drop-shadow-lg">
            {language === 'ca' ? 'Descobreix el Tir amb Arc' : 'Descubre el Tiro con Arco'}
          </h2>
          <p className="text-xl md:text-2xl mb-8 text-slate-100 leading-relaxed drop-shadow-md">
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
              className="bg-transparent border-2 border-white hover:bg-white hover:text-pink-900 font-bold px-8 py-4 rounded-lg transition-all duration-300"
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
