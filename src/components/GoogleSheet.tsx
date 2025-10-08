// FetchCSVData.tsx
import { useEffect, useState } from 'react';
import axios from 'axios';

interface CSVRow {
  [key: string]: string;
}

export interface FetchCSVDataProps {
  csvUrl?: string;
  onDataFetch?: (data: CSVRow[]) => void;
  onError?: (error: Error) => void;
}

export default function FetchCSVData({
  csvUrl = 'YOUR_GOOGLE_SHEETS_CSV_URL_HERE',
  onDataFetch,
  onError
}: FetchCSVDataProps) {
  const [csvData, setCsvData] = useState<CSVRow[]>([]);

  useEffect(() => {
    fetchCSVData();
  }, []); // Empty dependency array means this runs once on mount

  const fetchCSVData = async () => {
    try {
      const response = await axios.get(csvUrl, {
        maxRedirects: 5,
        validateStatus: (status) => status >= 200 && status < 400
      });
      console.log(response);
      const parsedCsvData = parseCSV(response.data);
      setCsvData(parsedCsvData);

      if (onDataFetch) {
        onDataFetch(parsedCsvData);
      }
    } catch (error) {
      console.error('Error fetching CSV data:', error);

      if (onError && error instanceof Error) {
        onError(error);
      }
    }
  };

  function parseCSV(csvText: string): CSVRow[] {
    const rows = csvText.split(/\r?\n/);
    const headers = rows[0].split(',');
    
    return rows.slice(1).map((row) => {
      const rowData = row.split(',');
      return headers.reduce((obj, header, index) => ({
        ...obj,
        [header]: rowData[index]
      }), {} as CSVRow);
    });
  }

  return (
    

   
      {csvData.length > 0 ? (
       
          
          <div>
            {csvData.map((row, rowIndex) => (
            <div key={rowIndex} className="border-l-4 border-amber-500 pl-3 py-2 hover:bg-pink-50 transition-colors">
              <div className="text-xs text-slate-500 font-semibold">
                {new Date(row.date).toLocaleDateString(language === 'ca' ? 'ca-ES' : 'es-ES', {
                  day: 'numeric',
                  month: 'long'
                })}
              </div>
              <div className="font-bold text-slate-800">{language === 'ca' ? row.title_ca : row.title_es}</div>
              <div className="text-sm text-slate-600">{language === 'ca' ? row.description_ca : row.description_ca}</div>
            </div>
            
            ))}
          </div>
        
      ) : (
        <div className="loading-message">Loading data...</div>
      )}}
   
  );
}