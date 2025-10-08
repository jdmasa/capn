// src/components/GoogleForm.tsx
import React, { useState } from 'react';
import axios from 'axios';

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface GoogleFormProps {
  formId: string;
  formUrl: string;
}

const GoogleForm: React.FC<GoogleFormProps> = ({ formId, formUrl }) => {
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

      await axios.post(`https://docs.google.com/forms/d/1QJBKrnKPJxzRGXvay17SBbWwJBMgMZmF3h-ZPgo_umo/formResponse`, 
        formDataObject,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          }
        }
      );

      setFormData({ name: '', email: '', message: '' });
    } catch (err) {
      setError('There was an error submitting the form. Please try again.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="google-form">
      {error && (
        <div className="error-message">{error}</div>
      )}
      
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            id="name"
            type="text"
            value={formData.name}
            onChange={(e) => setFormData({...formData, name: e.target.value})}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({...formData, email: e.target.value})}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            value={formData.message}
            onChange={(e) => setFormData({...formData, message: e.target.value})}
            required
          />
        </div>

        <button type="submit" disabled={loading}>
          {loading ? 'Submitting...' : 'Submit'}
        </button>
      </form>

      <style jsx>{`
        .google-form {
          max-width: 600px;
          padding: 20px;
          font-family: system-ui, -apple-system, sans-serif;
        }

        .form-group {
          margin-bottom: 20px;
        }

        label {
          display: block;
          margin-bottom: 8px;
          font-weight: 500;
        }

        input, textarea {
          width: 100%;
          padding: 12px;
          border: 1px solid #ddd;
          border-radius: 4px;
          font-size: 16px;
        }

        textarea {
          height: 120px;
          resize: vertical;
        }

        button {
          background-color: #0066cc;
          color: white;
          padding: 12px 24px;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          font-size: 16px;
        }

        button:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }

        .error-message {
          color: red;
          margin-bottom: 16px;
          padding: 12px;
          background-color: #ffebee;
          border-radius: 4px;
        }
      `}</style>
    </div>
  );
};

export default GoogleForm;