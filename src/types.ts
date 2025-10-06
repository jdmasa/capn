export type Language = 'ca' | 'es';

export interface Activity {
  id: string;
  date: string;
  title: { ca: string; es: string };
  description: { ca: string; es: string };
}

export interface Translation {
  ca: string;
  es: string;
}
