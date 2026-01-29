export interface Project {
  id: string;
  title: string;
  description: string;
  completionDate: string;
  url: string;
  icon: string; // Nome do ícone do Heroicons
  category: 'frontend' | 'backend' | 'database' | 'mobile';
}

export const projects: Project[] = [
  {
    id: 'calculadora-imc',
    title: 'Calculadora IMC',
    description: 'Calculadora de Índice de Massa Corporal',
    completionDate: '2024-01-15',
    url: 'https://calculadoraimc-neon.vercel.app/',
    icon: 'Calculator',
    category: 'frontend',
  },
  // ... adicionar todos os projetos do HTML original
];
