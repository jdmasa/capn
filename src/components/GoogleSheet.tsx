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
  maxRedirects?: number;
}

export default function FetchCSVData({
  csvUrl = 'YOUR_GOOGLE_SHEETS_CSV_URL_HERE',
  onDataFetch,
  onError,
  maxRedirects = 5
}: FetchCSVDataProps) {
  const [csvData, setCsvData] = useState<CSVRow[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchCSVData();
  }, []); // Empty dependency array means this runs once on mount

  const fetchCSVData = async () => {
    try {
      const response = await axios.get(csvUrl, {
        validateStatus: (status) => status >= 200 && status < 400,
        maxRedirects,
      });

      const parsedCsvData = parseCSV(response.data);
      setCsvData(parsedCsvData);
      
      if (onDataFetch) {
        onDataFetch(parsedCsvData);
      }
    } catch (error) {
      console.error('Error fetching CSV data:', error);
      setError(error instanceof Error ? error.message : 'Unknown error occurred');
      
      if (onError && error instanceof Error) {
        onError(error);
      }
    } finally {
      setLoading(false);
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
    <div className="csv-data-container">
      {loading ? (
        <div className="loading-message">Loading CSV data...</div>
      ) : error ? (
        <div className="error-message">{error}</div>
      ) : (
        <table className="csv-table">
          <thead>
            <tr>
              {Object.keys(csvData[0]).map(header => (
                <th key={header}>{header}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {csvData.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {Object.values(row).map((value, cellIndex) => (
                  <td key={cellIndex}>{value}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}