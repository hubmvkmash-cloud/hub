type products = {
  type: string;
  size: string;
  composition: string;
  png?: string;
};

export const products: products[] = [
  {
    type: 'MultiVita Hub',
    size: 'Базовий',
    composition:
      'БК (блок керування), Флоромат, модуль Хімчистка, комірки з підігрівом',
    png: '/images/products/multivita-4x.png',
  },
  {
    type: 'ComfyMix Hub',
    size: 'Середній',
    composition:
      'БК (блок керування), Флоромат, комірки з підігрівом, торговий апарат, модуль з кавомашиною та мікрохвильовою піччю',
    png: '/images/products/comfymix-4x.png',
  },
  {
    type: 'MegaStore Hub',
    size: 'Великий',
    composition:
      'БК (блок керування), Флоромат, комірки з підігрівом, модуль Хімчистка, камери зберігання',
    png: '/images/products/megastore-4x.png',
  },
];
