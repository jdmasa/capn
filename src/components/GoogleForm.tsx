// src/components/GoogleForm.tsx
import React, { useState } from 'react';
import axios from 'axios';
import { Language } from '../types';

interface FormData {
  name: string;
  email: string;
  message: string;
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
    message: ''
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
      setFormData({ name: '', email: '', message: '' });
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
        

        <button 
          type="submit" 
          className="bg-amber-500 hover:bg-amber-600 text-white font-bold px-8 py-3 rounded-lg transition-colors"
          >
          {language === 'ca' ? 'Enviar' : 'Enviar'}
        </button>
      </form>

      
    </div>
  );
};

export default GoogleForm;