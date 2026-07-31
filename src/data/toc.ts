export type TocItem = {
  id: string;
  num: string;
  label: string;
};

export const TOC: TocItem[] = [
  { id: 'welcome', num: '—', label: 'Welcome' },
  { id: 'quickstart', num: '★', label: 'Get started in 60s' },
  { id: 'launch', num: '1', label: 'Launch screen' },
  { id: 'signin', num: '2', label: 'Signing in & registering' },
  { id: 'language', num: '3', label: 'Choosing your language' },
  { id: 'menu', num: '4', label: 'Main menu & exiting' },
  { id: 'perfil', num: '5', label: 'Perfil — profile' },
  { id: 'editar', num: '6', label: 'Editar Perfil' },
  { id: 'categorias', num: '7', label: 'Categorias — themes' },
  { id: 'themed-games', num: '8', label: 'Themed games' },
  { id: 'scores', num: '9', label: 'Classificações — scores' },
  { id: 'sobre', num: '10', label: 'Sobre a APP & privacy' },
  { id: 'support', num: '11', label: 'Support & contact' },
  { id: 'glossary', num: 'A', label: 'Glossary' },
];

export const SECTION_IDS = TOC.map((item) => item.id);
