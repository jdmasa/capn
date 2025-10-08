import { Target, MapPin, BookOpen, GraduationCap, Users, Mail, Phone, Clock, Facebook, Instagram, Twitter } from 'lucide-react';
import { Language } from '../types';
import { t } from '../translations';
import GoogleForm from './GoogleForm';

interface MainContentProps {
  language: Language;
  activeSection: string;
}

export default function MainContent({ language, activeSection }: MainContentProps) {
  const renderSection = () => {
    switch (activeSection) {
      case 'who-we-are':
        return (
          <section className="bg-white rounded-xl shadow-lg p-8">
            <div className="flex items-center mb-6">
              <Users className="text-amber-600 mr-3" size={32} />
              <h2 className="text-3xl font-bold text-slate-800">{t('whoWeAre', language)}</h2>
            </div>
            <div className="prose max-w-none">
              <p className="text-slate-700 text-lg leading-relaxed mb-6">{t('whoWeAreText', language)}</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                <div className="bg-gradient-to-br from-amber-50 to-amber-100 p-6 rounded-lg">
                  <div className="text-4xl font-bold text-amber-600 mb-2">10+</div>
                  <div className="text-slate-700 font-semibold">
                    {language === 'ca' ? 'Anys d\'Experiència' : 'Años de Experiencia'}
                  </div>
                </div>
                <div className="bg-gradient-to-br from-slate-50 to-slate-100 p-6 rounded-lg">
                  <div className="text-4xl font-bold text-slate-700 mb-2">200+</div>
                  <div className="text-slate-700 font-semibold">
                    {language === 'ca' ? 'Membres Actius' : 'Miembros Activos'}
                  </div>
                </div>
                <div className="bg-gradient-to-br from-amber-50 to-amber-100 p-6 rounded-lg">
                  <div className="text-4xl font-bold text-amber-600 mb-2">5</div>
                  <div className="text-slate-700 font-semibold">
                    {language === 'ca' ? 'Instructors Certificats' : 'Instructores Certificados'}
                  </div>
                </div>
              </div>
            </div>
          </section>
        );

      case 'where-we-are':
        return (
          <section className="bg-white rounded-xl shadow-lg p-8">
            <div className="flex items-center mb-6">
              <MapPin className="text-amber-600 mr-3" size={32} />
              <h2 className="text-3xl font-bold text-slate-800">{t('whereWeAre', language)}</h2>
            </div>
            <div className="prose max-w-none">
              <p className="text-slate-700 text-lg leading-relaxed mb-6">{t('whereWeAreText', language)}</p>
              <div className="bg-slate-100 p-6 rounded-lg mb-6">
                <div className="flex items-start space-x-3 mb-4">
                  <MapPin className="text-amber-600 mt-1" size={24} />
                  <div>
                    <h3 className="font-bold text-slate-800 mb-1">{t('address', language)}</h3>
                    <p className="text-slate-600">{t('address', language)}</p>
                  </div>
                </div>
              </div>
              <div className="aspect-video bg-slate-200 rounded-lg flex items-center justify-center">
                <MapPin size={64} className="text-slate-400" />
                <span className="text-slate-500 ml-3">{language === 'ca' ? 'Mapa' : 'Mapa'}</span>
              </div>
            </div>
          </section>
        );

      case 'archery':
        return (
          <section className="bg-white rounded-xl shadow-lg p-8">
            <div className="flex items-center mb-6">
              <Target className="text-amber-600 mr-3" size={32} />
              <h2 className="text-3xl font-bold text-slate-800">{t('whatIsArchery', language)}</h2>
            </div>
            <div className="prose max-w-none">
              <p className="text-slate-700 text-lg leading-relaxed mb-8">{t('whatIsArcheryText', language)}</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-amber-50 to-amber-100 p-6 rounded-lg">
                  <h3 className="font-bold text-xl text-slate-800 mb-3">
                    {language === 'ca' ? 'Beneficis Físics' : 'Beneficios Físicos'}
                  </h3>
                  <ul className="space-y-2 text-slate-700">
                    <li>• {language === 'ca' ? 'Millora la força del tronc superior' : 'Mejora la fuerza del torso superior'}</li>
                    <li>• {language === 'ca' ? 'Desenvolupa la coordinació ma-ull' : 'Desarrolla la coordinación mano-ojo'}</li>
                    <li>• {language === 'ca' ? 'Millora la postura corporal' : 'Mejora la postura corporal'}</li>
                    <li>• {language === 'ca' ? 'Augmenta la resistència' : 'Aumenta la resistencia'}</li>
                  </ul>
                </div>
                <div className="bg-gradient-to-br from-slate-50 to-slate-100 p-6 rounded-lg">
                  <h3 className="font-bold text-xl text-slate-800 mb-3">
                    {language === 'ca' ? 'Beneficis Mentals' : 'Beneficios Mentales'}
                  </h3>
                  <ul className="space-y-2 text-slate-700">
                    <li>• {language === 'ca' ? 'Augmenta la concentració' : 'Aumenta la concentración'}</li>
                    <li>• {language === 'ca' ? 'Redueix l\'estrès' : 'Reduce el estrés'}</li>
                    <li>• {language === 'ca' ? 'Desenvolupa la paciència' : 'Desarrolla la paciencia'}</li>
                    <li>• {language === 'ca' ? 'Millora la confiança en si mateix' : 'Mejora la confianza en sí mismo'}</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        );

      case 'courses':
        return (
          <section className="bg-white rounded-xl shadow-lg p-8">
            <div className="flex items-center mb-6">
              <GraduationCap className="text-amber-600 mr-3" size={32} />
              <h2 className="text-3xl font-bold text-slate-800">{t('courses', language)}</h2>
            </div>
            <div className="prose max-w-none">
              <p className="text-slate-700 text-lg leading-relaxed mb-8">{t('coursesText', language)}</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="border-2 border-slate-200 rounded-lg p-6 hover:border-amber-500 transition-all hover:shadow-lg">
                  <BookOpen className="text-amber-600 mb-4" size={40} />
                  <h3 className="font-bold text-xl text-slate-800 mb-2">{t('beginnerCourse', language)}</h3>
                  <p className="text-slate-600 mb-4">{t('beginnerCourseDesc', language)}</p>
                  <div className="text-sm text-slate-500 space-y-1">
                    <div>• {language === 'ca' ? 'Durada: 8 setmanes' : 'Duración: 8 semanas'}</div>
                    <div>• {language === 'ca' ? '2 classes/setmana' : '2 clases/semana'}</div>
                    <div>• {language === 'ca' ? 'Equip inclòs' : 'Equipo incluido'}</div>
                  </div>
                </div>
                <div className="border-2 border-slate-200 rounded-lg p-6 hover:border-amber-500 transition-all hover:shadow-lg">
                  <Target className="text-amber-600 mb-4" size={40} />
                  <h3 className="font-bold text-xl text-slate-800 mb-2">{t('intermediateCourse', language)}</h3>
                  <p className="text-slate-600 mb-4">{t('intermediateCourseDesc', language)}</p>
                  <div className="text-sm text-slate-500 space-y-1">
                    <div>• {language === 'ca' ? 'Durada: 12 setmanes' : 'Duración: 12 semanas'}</div>
                    <div>• {language === 'ca' ? '3 classes/setmana' : '3 clases/semana'}</div>
                    <div>• {language === 'ca' ? 'Preparació competició' : 'Preparación competición'}</div>
                  </div>
                </div>
                <div className="border-2 border-slate-200 rounded-lg p-6 hover:border-amber-500 transition-all hover:shadow-lg">
                  <GraduationCap className="text-amber-600 mb-4" size={40} />
                  <h3 className="font-bold text-xl text-slate-800 mb-2">{t('advancedCourse', language)}</h3>
                  <p className="text-slate-600 mb-4">{t('advancedCourseDesc', language)}</p>
                  <div className="text-sm text-slate-500 space-y-1">
                    <div>• {language === 'ca' ? 'Entrenament personalitzat' : 'Entrenamiento personalizado'}</div>
                    <div>• {language === 'ca' ? 'Accés il·limitat' : 'Acceso ilimitado'}</div>
                    <div>• {language === 'ca' ? 'Anàlisi tècnica' : 'Análisis técnica'}</div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        );

      case 'social':
        return (
          <section className="bg-white rounded-xl shadow-lg p-8">
            <div className="flex items-center mb-6">
              <Users className="text-amber-600 mr-3" size={32} />
              <h2 className="text-3xl font-bold text-slate-800">{t('socialMedia', language)}</h2>
            </div>
            <div className="prose max-w-none">
              <p className="text-slate-700 text-lg leading-relaxed mb-8">
                {language === 'ca'
                  ? 'Segueix-nos a les nostres xarxes socials per estar al dia de les nostres activitats, competicions i novetats del club.'
                  : 'Síguenos en nuestras redes sociales para estar al día de nuestras actividades, competiciones y novedades del club.'}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-4 bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg hover:shadow-lg transition-all"
                >
                  <Facebook className="text-blue-600" size={48} />
                  <div>
                    <h3 className="font-bold text-slate-800">Facebook</h3>
                    <p className="text-sm text-slate-600">@arquerspoblenou</p>
                  </div>
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-4 bg-gradient-to-br from-pink-50 to-purple-100 p-6 rounded-lg hover:shadow-lg transition-all"
                >
                  <Instagram className="text-slate-600" size={48} />
                  <div>
                    <h3 className="font-bold text-slate-800">Instagram</h3>
                    <p className="text-sm text-slate-600">@arquerspoblenou</p>
                  </div>
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-4 bg-gradient-to-br from-sky-50 to-sky-100 p-6 rounded-lg hover:shadow-lg transition-all"
                >
                  <Twitter className="text-sky-600" size={48} />
                  <div>
                    <h3 className="font-bold text-slate-800">Twitter</h3>
                    <p className="text-sm text-slate-600">@arquerspoblenou</p>
                  </div>
                </a>
              </div>
            </div>
          </section>
        );

      case 'contact':
        return (
          <section className="bg-white rounded-xl shadow-lg p-8">
            <div className="flex items-center mb-6">
              <Mail className="text-amber-600 mr-3" size={32} />
              <h2 className="text-3xl font-bold text-slate-800">{t('contact', language)}</h2>
            </div>
            <div className="prose max-w-none">
              <p className="text-slate-700 text-lg leading-relaxed mb-8">{t('contactText', language)}</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-slate-50 p-6 rounded-lg">
                  <div className="flex items-center mb-3">
                    <Mail className="text-amber-600 mr-2" size={24} />
                    <h3 className="font-bold text-slate-800">{t('email', language)}</h3>
                  </div>
                  <p className="text-slate-700">info@arquerspoblenou.cat</p>
                </div>
                <div className="bg-slate-50 p-6 rounded-lg">
                  <div className="flex items-center mb-3">
                    <Phone className="text-amber-600 mr-2" size={24} />
                    <h3 className="font-bold text-slate-800">{t('phone', language)}</h3>
                  </div>
                  <p className="text-slate-700">+34 931 234 567</p>
                </div>
                <div className="bg-slate-50 p-6 rounded-lg">
                  <div className="flex items-center mb-3">
                    <Clock className="text-amber-600 mr-2" size={24} />
                    <h3 className="font-bold text-slate-800">{t('schedule', language)}</h3>
                  </div>
                  <div className="text-slate-700" dangerouslySetInnerHTML={{ __html: t('scheduleText', language) }} />
                </div>
                <div className="bg-slate-50 p-6 rounded-lg">
                  <div className="flex items-center mb-3">
                    <MapPin className="text-amber-600 mr-2" size={24} />
                    <h3 className="font-bold text-slate-800">{t('address', language)}</h3>
                  </div>
                  <p className="text-slate-700">{t('address', language)}</p>
                </div>
              </div>
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder={language === 'ca' ? 'Nom' : 'Nombre'}
                    className="px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                  <input
                    type="email"
                    placeholder={language === 'ca' ? 'Correu electrònic' : 'Correo electrónico'}
                    className="px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                </div>
                <textarea
                  rows={5}
                  placeholder={language === 'ca' ? 'Missatge' : 'Mensaje'}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                ></textarea>
                <button
                  type="submit"
                  className="bg-amber-500 hover:bg-amber-600 text-white font-bold px-8 py-3 rounded-lg transition-colors"
                >
                  {language === 'ca' ? 'Enviar' : 'Enviar'}
                </button>
              </form>
              <GoogleForm 
        language=${language}
        formId="1QJBKrnKPJxzRGXvay17SBbWwJBMgMZmF3h-ZPgo_umo"
        formUrl="https://docs.google.com/forms/d/e/1FAIpQLSfXm8Pwd7uHwa32N_4YO4ZJol8gOGkKZttnmuUQ8ieVCWtygQ/viewform"
      />
            </div>
          </section>
        );

      case 'privacy':
        return (
          <section className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-slate-800 mb-6">{t('privacyPolicy', language)}</h2>
            <div className="prose max-w-none text-slate-700">
              <p className="mb-4">
                {language === 'ca'
                  ? 'Aquesta és la política de privacitat del Club d\'Arquers Poblenou. Ens prenem molt seriosament la protecció de les teves dades personals.'
                  : 'Esta es la política de privacidad del Club de Arqueros Poblenou. Nos tomamos muy en serio la protección de tus datos personales.'}
              </p>
              <p>
                {language === 'ca'
                  ? 'Les dades recollides s\'utilitzen únicament per a la gestió de les activitats del club i no es comparteixen amb tercers sense el teu consentiment explícit.'
                  : 'Los datos recogidos se utilizan únicamente para la gestión de las actividades del club y no se comparten con terceros sin tu consentimiento explícito.'}
              </p>
            </div>
          </section>
        );

      default:
        return null;
    }
  };

  return <div className="space-y-6">{activeSection !== 'home' && renderSection()}</div>;
}
