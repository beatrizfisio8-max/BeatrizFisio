export interface Service {
  id: string;
  title: string;
  paragraphs: string[];
  cta: string;
  message: string;
}

export interface Plan {
  name: string;
  duration: string;
  subtitle: string;
  description: string;
  items: string[];
  cta: string;
  message: string;
}
