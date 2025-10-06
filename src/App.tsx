import { useState, useEffect } from 'react';
import { Language } from './types';
import Header from './components/Header';
import Hero from './components/Hero';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import Footer from './components/Footer';

function App() {
  const [language, setLanguage] = useState<Language>('ca');
  const [activeSection, setActiveSection] = useState<string>('home');

  const handleNavigate = (section: string) => {
    setActiveSection(section);
    if (section !== 'home') {
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 100);
    }
  };

  useEffect(() => {
    if (activeSection === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [activeSection]);

  return (
    <div className="min-h-screen bg-slate-50">
      <Header language={language} onLanguageChange={setLanguage} onNavigate={handleNavigate} />

      {activeSection === 'home' && <Hero language={language} onNavigate={handleNavigate} />}

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          <main className="flex-1 order-1 lg:order-1">
            {activeSection === 'home' ? (
              <div className="space-y-8">
                <section className="bg-white rounded-xl shadow-lg p-8">
                  <h2 className="text-3xl font-bold text-slate-800 mb-6">
                    {language === 'ca' ? 'Benvinguts al Club' : 'Bienvenidos al Club'}
                  </h2>
                  <p className="text-slate-700 text-lg leading-relaxed">
                    {language === 'ca'
                      ? 'El Club d\'Arquers Poblenou és un espai dedicat a la pràctica del tir amb arc al cor de Barcelona. Oferim un ambient acollidor on tant principiants com arxers experimentats poden gaudir d\'aquest esport fascinant. Amb instructors qualificats, instal·lacions modernes i una comunitat vibrant, som el lloc ideal per descobrir o perfeccionar les teves habilitats en el tir amb arc.'
                      : 'El Club de Arqueros Poblenou es un espacio dedicado a la práctica del tiro con arco en el corazón de Barcelona. Ofrecemos un ambiente acogedor donde tanto principiantes como arqueros experimentados pueden disfrutar de este deporte fascinante. Con instructores cualificados, instalaciones modernas y una comunidad vibrante, somos el lugar ideal para descubrir o perfeccionar tus habilidades en el tiro con arco.'}
                  </p>
                </section>
              </div>
            ) : (
              <MainContent language={language} activeSection={activeSection} />
            )}
          </main>

          <aside className="lg:w-80 order-2 lg:order-2">
            <Sidebar language={language} onNavigate={handleNavigate} />
          </aside>
        </div>
      </div>

      <Footer language={language} onNavigate={handleNavigate} />
    </div>
  );
}

export default App;
