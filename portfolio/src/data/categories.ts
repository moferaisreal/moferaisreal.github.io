export interface Category {
  id: string;
  label: string;
  icon: string;
}

export const categories: Category[] = [
  { id: 'frontend', label: 'Frontend', icon: 'CodeBracket' },
  { id: 'backend', label: 'Backend', icon: 'Server' },
  { id: 'database', label: 'Banco de Dados', icon: 'CircleStack' },
  { id: 'mobile', label: 'Mobile', icon: 'DevicePhoneMobile' },
  { id: 'about', label: 'Sobre', icon: 'User' },
];
