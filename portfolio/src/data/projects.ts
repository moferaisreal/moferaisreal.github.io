export interface Project {
  id: string;
  title: string;
  description: string;
  completionDate: string;
  url: string;
  icon: string; // Nome do ícone react icons - lembrar de importar
  category: 'frontend' | 'backend' | 'database' | 'mobile';
}

export const projects: Project[] = [
  {
    id: 'calculadora-imc',
    title: 'Calculadora IMC',
    description:
      'Calculadora de Índice de Massa Corporal, usando TypeScript e React',
    completionDate: '20-01-26',
    url: 'https://calculadoraimc-neon.vercel.app/',
    icon: 'HiCalculator',
    category: 'frontend',
  },
  {
    id: 'git-profile',
    title: 'Buscador de Perfil Github',
    description: 'Calculadora de Índice de Massa Corporal',
    completionDate: '20-01-26',
    url: 'https://perfilgithub-iota.vercel.app/',
    icon: 'HiMagnifyingGlass',
    category: 'frontend',
  },
  {
    id: 'calculadora-react',
    title: 'Calculadora Reativa',
    description: 'Calculadora reativa usando VueJs, TypeScript e Bootstrap',
    completionDate: '16-01-26',
    url: 'https://calculadoraautomatica.vercel.app/',
    icon: 'HiCalculator',
    category: 'frontend',
  },
  {
    id: 'todo-list',
    title: 'to-do List',
    description: 'Lista de tarefas com VueJS, TypeScript e Bootstrap',
    completionDate: '15-01-26',
    url: 'https://todolistvue-rho.vercel.app/',
    icon: 'HiMiniListBullet',
    category: 'frontend',
  },
  {
    id: 'lp-estatica',
    title: 'LP estática',
    description: 'Contador regressivo em JS',
    completionDate: '15-12-25',
    url: 'https://mofera-auto-show.vercel.app/',
    icon: 'HiHome',
    category: 'frontend',
  },
  {
    id: 'lp-lotr',
    title: 'LP',
    description: 'Uma landing page temática Senhor dos Anéis',
    completionDate: '28-11-25',
    url: 'https://modulo-21-ebac.vercel.app/',
    icon: 'HiHome',
    category: 'frontend',
  },
  {
    id: 'volei-scoreboard',
    title: 'Jogo de Vôlei',
    description:
      'Criação de um placar de vôlei avançado, utilizando JavaScript.',
    completionDate: '26-07-25',
    url: 'https://placarvolei-two.vercel.app/',
    icon: 'HiMiniTrophy',
    category: 'frontend',
  },
  {
    id: 'sorteador',
    title: 'Sorteador',
    description: 'Sorteador com JS, usando Gulp e SASS',
    completionDate: '11-08-25',
    url: 'https://desenvolvedor-full-stack-pythonv2-m.vercel.app/',
    icon: 'HiOutlineFunnel',
    category: 'frontend',
  },
  {
    id: 'miniaturagrap',
    title: 'LP Avançada',
    description: 'Menu responsivo, carousel, formulário com validação e máscara',
    completionDate: '04-07-25',
    url: 'https://desenvolvedor-full-stack-pythonv2-m.vercel.app/',
    icon: 'HiHome',
    category: 'frontend',
  },
  // ... adicionar todos os projetos do HTML original
];
