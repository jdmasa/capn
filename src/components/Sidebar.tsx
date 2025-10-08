import { Activity, ExternalLink } from 'lucide-react';
import { Language } from '../types';
import { t } from '../translations';
import FetchCSVData from './GoogleSheet';


interface SidebarProps {
  language: Language;
  onNavigate: (section: string) => void;
}

export default function Sidebar({ language, onNavigate }: SidebarProps) {
  const activities = [
    {
      date: '2025-10-12',
      title: { ca: 'Competició Local', es: 'Competición Local' },
      description: { ca: 'Torneig mensual intern', es: 'Torneo mensual interno' }
    },
    {
      date: '2025-10-18',
      title: { ca: 'Classe Oberta', es: 'Clase Abierta' },
      description: { ca: 'Prova gratuïta per a nous membres', es: 'Prueba gratuita para nuevos miembros' }
    },
    {
      date: '2025-10-25',
      title: { ca: 'Taller de Manteniment', es: 'Taller de Mantenimiento' },
      description: { ca: 'Cura del teu equip', es: 'Cuidado de tu equipo' }
    }
  ];

  const quickLinks = [
    { label: { ca: 'Inscripció en línia', es: 'Inscripción en línea' }, url: '#' },
    { label: { ca: 'Normes del club', es: 'Normas del club' }, url: '#' },
    { label: { ca: 'Galeria de fotos', es: 'Galería de fotos' }, url: '#' },
    { label: { ca: 'Botiga', es: 'Tienda' }, url: '#' }
  ];

  const handleDataFetch = (data: CSVRow[]) => {
    console.log('Received CSV data:', data);
  };

  const handleError = (error: Error) => {
    console.error('Error fetching CSV:', error);
  };

  return (
    <aside className="space-y-6">
      

      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="bg-gradient-to-r from-pink-700 to-pink-800 p-4">
          <h3 className="text-white font-bold text-lg flex items-center">
            <Activity className="mr-2" size={20} />
            {t('upcomingActivities', language)}
          </h3>
        </div>
        <div className="p-4 space-y-4 max-h-80 overflow-y-auto">
          {activities.map((activity, index) => (
            <div key={index} className="border-l-4 border-amber-500 pl-3 py-2 hover:bg-pink-50 transition-colors">
              <div className="text-xs text-slate-500 font-semibold">
                {new Date(activity.date).toLocaleDateString(language === 'ca' ? 'ca-ES' : 'es-ES', {
                  day: 'numeric',
                  month: 'long'
                })}
              </div>
              <div className="font-bold text-slate-800">{activity.title[language]}</div>
              <div className="text-sm text-slate-600">{activity.description[language]}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-gradient-to-br from-pink-800 to-pink-900 rounded-xl shadow-lg overflow-hidden text-white p-6">
        <h3 className="font-bold text-lg mb-4 flex items-center">
          <ExternalLink className="mr-2" size={20} />
          {t('quickLinks', language)}
        </h3>
        <ul className="space-y-2">
          {quickLinks.map((link, index) => (
            <li key={index}>
              <a
                href={link.url}
                className="flex items-center justify-between hover:text-amber-400 transition-colors py-2 border-b border-pink-700"
              >
                <span>{link.label[language]}</span>
                <ExternalLink size={16} />
              </a>
            </li>
          ))}
        </ul>
      </div>
       <FetchCSVData 
      csvUrl="https://docs.google.com/spreadsheets/d/e/2PACX-1vRe-ieEPbOt3N_kkLsZOjJJdr_uCJwe5Y74pZgQjwG39TJThxzU4lDMdx5vornMBaRK0VAEGGRwHekj/pub?gid=0&single=true&output=csv"
      onDataFetch={handleDataFetch}
      onError={handleError}
    />
  );
    </aside>
  );
}
