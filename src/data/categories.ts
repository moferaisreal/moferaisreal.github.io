export interface Category {
  id: string;
  label: string;
  icon: string;
}

export const categories: Category[] = [
  { id: 'frontend', label: 'Frontend', icon: 'HiHomeModern' },
  // { id: 'backend', label: 'Backend', icon: 'Server' },
  // { id: 'database', label: 'Banco de Dados', icon: 'CircleStack' },
  // { id: 'mobile', label: 'Mobile', icon: 'DevicePhoneMobile' },
  // { id: 'resume', label: 'Curriculum', icon: 'HiMiniAcademicCap' },
  { id: 'about', label: 'Sobre', icon: 'HiIdentification' },
];
