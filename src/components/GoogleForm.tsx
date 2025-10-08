// src/components/GoogleForm.tsx
import React, { useState } from 'react';
import axios from 'axios';
import { Language } from '../types';

interface FormData {
  name: string;
  email: string;
  message: string;
  gdprConsent: boolean;
}

interface GoogleFormProps {
  formId: string;
  formUrl: string;
  language: Language;
}

const GoogleForm: React.FC<GoogleFormProps> = ({ formId, formUrl, language }) => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
    gdprConsent: false
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      // Replace these entry IDs with yours from the Google Form
      const formDataObject = new FormData();
      formDataObject.append('entry.1741709835', formData.name); // Name field
      formDataObject.append('entry.1126945140', formData.email); // Email field
      formDataObject.append('entry.1738991419', formData.message); // Message field

      const response = await axios.post(`https://docs.google.com/forms/d/${formId}/formResponse`, 
        formDataObject,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          }
        }
      );
    // Log the status code
    console.log('HTTP Status:', response.status);
    console.log('HTTP Status Text:', response.statusText);
      setFormData({ name: '', email: '', message: '', gdprConsent: false });
    } catch (err) {
      console.error('Form submission failed:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="google-form">
      {error && (
        <div className="error-message">{error}</div>
      )}
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          
          <input
            id="name"
            type="text"
            className="px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
            placeholder={language === 'ca' ? 'Nom' : 'Nombre'}
            value={formData.name}
            onChange={(e) => setFormData({...formData, name: e.target.value})}
            required
          />
        

        
          
          <input
            id="email"
            type="email"
            className="px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
            placeholder={language === 'ca' ? 'Correu electrònic' : 'Correo electrónico'}
            value={formData.email}
            onChange={(e) => setFormData({...formData, email: e.target.value})}
            required
          />
        </div>

        
          
          <textarea
            rows={5}
            id="message"
            placeholder={language === 'ca' ? 'Missatge' : 'Mensaje'}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
            value={formData.message}
            onChange={(e) => setFormData({...formData, message: e.target.value})}
            required
          />


        <div className="flex items-start gap-3">
          <input
            id="gdprConsent"
            type="checkbox"
            className="mt-1 w-4 h-4 text-amber-500 border-slate-300 rounded focus:ring-amber-500"
            checked={formData.gdprConsent}
            onChange={(e) => setFormData({...formData, gdprConsent: e.target.checked})}
            required
          />
          <label htmlFor="gdprConsent" className="text-sm text-slate-600">
            {language === 'ca'
              ? "Accepto que les meves dades de contacte s'utilitzin per rebre informació sobre el club. Puc sol·licitar l'eliminació de les meves dades enviant un correu electrònic a info@capn.cat"
              : "Acepto que mis datos de contacto se utilicen para recibir información sobre el club. Puedo solicitar la eliminación de mis datos enviando un correo electrónico a info@capn.cat"}
          </label>
        </div>

        <button
          type="submit"
          className="bg-amber-500 hover:bg-amber-600 text-white font-bold px-8 py-3 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={!formData.gdprConsent}
          >
          {language === 'ca' ? 'Enviar' : 'Enviar'}
        </button>
      </form>

      
    </div>
  );
};

export default GoogleForm;