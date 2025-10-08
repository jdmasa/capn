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
  csvUrl = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vRe-ieEPbOt3N_kkLsZOjJJdr_uCJwe5Y74pZgQjwG39TJThxzU4lDMdx5vornMBaRK0VAEGGRwHekj/pub?gid=0&single=true&output=csv',
  onDataFetch,
  onError
}: FetchCSVDataProps) {
  const [csvData, setCsvData] = useState<CSVRow[]>([]);

  useEffect(() => {
    fetchCSVData();
  }, []); // Empty dependency array means this runs once on mount

  const fetchCSVData = async () => {
    try {
      const response = await axios.get(csvUrl);
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
    <div className="csv-data-container">
      {csvData.length > 0 ? (
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
      ) : (
        <div className="loading-message">Loading CSV data...</div>
      )}
    </div>
  );
}