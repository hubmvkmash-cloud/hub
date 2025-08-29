type BusinessRole = {
  role: 'Інвестор' | 'Партнер' | 'Локації';
  icon: string;
};

export const businessForModal: BusinessRole[] = [
  {
    role: 'Інвестор',
    icon: 'money',
  },
  {
    role: 'Партнер',
    icon: 'partner',
  },
  {
    role: 'Локації',
    icon: 'location',
  },
];
