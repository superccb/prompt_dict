export interface AssetConfig {
  id: string;
  name: string;
  path: string;
  type: 'image' | 'video' | 'svg';
  category: 'technique' | 'scene' | 'background' | 'icon';
  description: string;
  tags: string[];
}

export const assets: AssetConfig[] = [
  // 技術示意圖
  {
    id: 'camera-angles',
    name: '攝像機角度示意圖',
    path: '/assets/images/techniques/camera-angles.svg',
    type: 'svg',
    category: 'technique',
    description: '展示不同攝像機角度的視覺效果和情感表達',
    tags: ['攝像機角度', '低角度', '平視角度', '高角度', '視覺效果']
  },
  {
    id: 'lighting-setup',
    name: '三點打光設置',
    path: '/assets/images/techniques/lighting-setup.svg',
    type: 'svg',
    category: 'technique',
    description: '經典的三點打光系統，包含主光、補光和背光',
    tags: ['燈光', '三點打光', '主光', '補光', '背光', '照明']
  },
  {
    id: 'camera-movements',
    name: '攝像機移動示意圖',
    path: '/assets/images/techniques/camera-movements.svg',
    type: 'svg',
    category: 'technique',
    description: '各種攝像機移動方式的視覺化展示',
    tags: ['攝像機移動', 'Pan', 'Tilt', 'Dolly', 'Crane', '運動']
  },
  
  // 背景圖片
  {
    id: 'film-strip',
    name: '電影膠片背景',
    path: '/assets/images/backgrounds/film-strip.svg',
    type: 'svg',
    category: 'background',
    description: '電影膠片圖案背景，營造電影氛圍',
    tags: ['背景', '電影膠片', '復古', '氛圍']
  },
  
  // 圖標
  {
    id: 'camera-icon',
    name: '攝像機圖標',
    path: '/assets/images/icons/camera-icon.svg',
    type: 'svg',
    category: 'icon',
    description: '專業攝像機圖標，用於界面設計',
    tags: ['圖標', '攝像機', '設備', '專業']
  }
];

// 按類別分組的資源
export const assetsByCategory = {
  technique: assets.filter(asset => asset.category === 'technique'),
  scene: assets.filter(asset => asset.category === 'scene'),
  background: assets.filter(asset => asset.category === 'background'),
  icon: assets.filter(asset => asset.category === 'icon')
};

// 按標籤搜索資源
export const getAssetsByTag = (tag: string): AssetConfig[] => {
  return assets.filter(asset => asset.tags.includes(tag));
};

// 獲取特定資源
export const getAsset = (id: string): AssetConfig | undefined => {
  return assets.find(asset => asset.id === id);
};

// 技術資源映射
export const techniqueAssets = {
  cameraAngles: getAsset('camera-angles'),
  lightingSetup: getAsset('lighting-setup'),
  cameraMovements: getAsset('camera-movements')
};

// 背景資源映射
export const backgroundAssets = {
  filmStrip: getAsset('film-strip')
};

// 圖標資源映射
export const iconAssets = {
  camera: getAsset('camera-icon')
}; 