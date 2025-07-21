import { MovieTechnique, SceneExample } from '../types';

// 經典場景示例
const classicScenes: SceneExample[] = [
  {
    id: 'psycho-shower',
    title: '諾曼·貝茨的母親視角',
    movie: '驚魂記',
    director: '阿爾弗雷德·希區柯克',
    year: 1960,
    description: '高角度俯視諾曼·貝茨，創造壓迫感和威脅感',
    technicalDetails: {
      cameraAngle: '高角度',
      lighting: '低調光',
      audio: '尖銳弦樂'
    },
    emotionalImpact: '恐懼、無助、威脅',
    promptTemplate: 'A high-angle shot from the mother\'s perspective looks down at Norman Bates as he approaches the house. The camera creates a sense of surveillance and threat. Low-key lighting casts deep shadows across Norman\'s face, obscuring his true nature.'
  },
  {
    id: 'godfather-office',
    title: '維托·科里昂的權威',
    movie: '教父',
    director: '弗朗西斯·福特·科波拉',
    year: 1972,
    description: '低角度展示維托·科里昂的威嚴和權力',
    technicalDetails: {
      cameraAngle: '低角度',
      lighting: '側光',
      audio: '莊嚴配樂'
    },
    emotionalImpact: '權威、威嚴、敬畏',
    promptTemplate: 'A low-angle shot captures Don Vito Corleone in his office, making him appear larger than life and imposing. Side lighting creates dramatic shadows across his face, emphasizing his authority and power.'
  },
  {
    id: 'jaws-confrontation',
    title: '布羅迪與市長的對抗',
    movie: '大白鯊',
    director: '史蒂文·斯皮爾伯格',
    year: 1975,
    description: '過肩鏡頭展示權力動態和緊張對抗',
    technicalDetails: {
      cameraAngle: '過肩鏡頭',
      lighting: '自然光',
      audio: '緊張對話'
    },
    emotionalImpact: '緊張、對抗、權力鬥爭',
    promptTemplate: 'An over-the-shoulder shot frames Brody as he confronts the mayor about closing the beaches. The camera position creates a sense of confrontation and power struggle.'
  }
];

// 原創演示場景
const demoScenes: SceneExample[] = [
  {
    id: 'desert-walker',
    title: '沙漠中的孤獨行者',
    description: '極寬鏡頭展示人類在自然中的渺小',
    technicalDetails: {
      cameraAngle: '極寬鏡頭',
      lighting: '自然光',
      audio: '風聲'
    },
    emotionalImpact: '孤獨、渺小、堅韌',
    promptTemplate: 'A vast desert landscape stretches endlessly under a scorching sun. The camera holds steady from a high vantage point, revealing a single figure as a tiny dot in the center of the frame.'
  },
  {
    id: 'jazz-musician',
    title: '爵士樂手的專注時刻',
    description: '特寫鏡頭捕捉音樂家的情感投入',
    technicalDetails: {
      cameraAngle: '特寫',
      lighting: '溫暖側光',
      audio: '爵士樂'
    },
    emotionalImpact: '專注、熱情、藝術',
    promptTemplate: 'A close-up shot focuses on a saxophonist\'s face as he plays, capturing every nuance of his emotional connection to the music. Warm side lighting highlights his concentration and passion.'
  },
  {
    id: 'rainy-window',
    title: '雨夜窗前的沉思',
    description: '中景鏡頭展示內省時刻',
    technicalDetails: {
      cameraAngle: '中景',
      lighting: '柔和室內光',
      audio: '雨聲'
    },
    emotionalImpact: '沉思、寧靜、內省',
    promptTemplate: 'A medium shot captures a person sitting by a window, watching the rain fall outside. Soft interior lighting creates a contemplative, peaceful atmosphere.'
  }
];

// 電影技術數據
export const movieTechniques: MovieTechnique[] = [
  {
    id: 'extreme-wide-shot',
    category: 'camera',
    name: '極寬鏡頭',
    description: '建立整個環境，主體幾乎不可見，用於展示規模和孤立感',
    imageId: 'camera-angles',
    classicReferences: [classicScenes[0]],
    demoScenes: [demoScenes[0]]
  },
  {
    id: 'wide-shot',
    category: 'camera',
    name: '寬鏡頭',
    description: '全身可見，展示主體在環境中的位置和關係',
    imageId: 'camera-angles',
    classicReferences: [classicScenes[1]],
    demoScenes: [demoScenes[2]]
  },
  {
    id: 'medium-shot',
    category: 'camera',
    name: '中景鏡頭',
    description: '腰部以上，自然的對話距離，用於角色互動',
    imageId: 'camera-angles',
    classicReferences: [classicScenes[2]],
    demoScenes: [demoScenes[2]]
  },
  {
    id: 'close-up',
    category: 'camera',
    name: '特寫鏡頭',
    description: '頭部和肩膀，親密的情感連接，強調情感表達',
    imageId: 'camera-angles',
    classicReferences: [classicScenes[1]],
    demoScenes: [demoScenes[1]]
  },
  {
    id: 'low-angle',
    category: 'camera',
    name: '低角度',
    description: '攝像機低於主體，創造力量感和支配感',
    imageId: 'camera-angles',
    classicReferences: [classicScenes[1]],
    demoScenes: [demoScenes[0]]
  },
  {
    id: 'high-angle',
    category: 'camera',
    name: '高角度',
    description: '攝像機高於主體，創造脆弱感和無助感',
    imageId: 'camera-angles',
    classicReferences: [classicScenes[0]],
    demoScenes: [demoScenes[0]]
  },
  {
    id: 'three-point-lighting',
    category: 'lighting',
    name: '三點打光',
    description: '主光、補光、背光的標準照明設置',
    imageId: 'lighting-setup',
    classicReferences: [classicScenes[1]],
    demoScenes: [demoScenes[1]]
  },
  {
    id: 'low-key-lighting',
    category: 'lighting',
    name: '低調光',
    description: '黑暗、戲劇性、重陰影，創造神秘感',
    imageId: 'lighting-setup',
    classicReferences: [classicScenes[0]],
    demoScenes: [demoScenes[2]]
  },
  {
    id: 'natural-lighting',
    category: 'lighting',
    name: '自然光',
    description: '可用光，真實感，適合紀錄片風格',
    imageId: 'lighting-setup',
    classicReferences: [classicScenes[2]],
    demoScenes: [demoScenes[0]]
  },
  {
    id: 'dialogue-audio',
    category: 'audio',
    name: '對話音',
    description: '角色說話、對話，清晰的人聲表達',
    classicReferences: [classicScenes[2]],
    demoScenes: [demoScenes[2]]
  },
  {
    id: 'ambient-sound',
    category: 'audio',
    name: '環境音',
    description: '背景環境聲音，增強真實感和氛圍',
    classicReferences: [classicScenes[0]],
    demoScenes: [demoScenes[0]]
  },
  {
    id: 'music-score',
    category: 'audio',
    name: '配樂',
    description: '電影配樂，增強情感表達和氛圍',
    classicReferences: [classicScenes[0]],
    demoScenes: [demoScenes[1]]
  }
];

// 按類別分組的技術
export const techniquesByCategory = {
  camera: movieTechniques.filter(t => t.category === 'camera'),
  lighting: movieTechniques.filter(t => t.category === 'lighting'),
  audio: movieTechniques.filter(t => t.category === 'audio'),
  composition: movieTechniques.filter(t => t.category === 'composition'),
  movement: movieTechniques.filter(t => t.category === 'movement')
};

// 獲取技術詳情
export const getTechniqueById = (id: string): MovieTechnique | undefined => {
  return movieTechniques.find(technique => technique.id === id);
};

// 獲取相關技術
export const getRelatedTechniques = (techniqueId: string): MovieTechnique[] => {
  const technique = getTechniqueById(techniqueId);
  if (!technique) return [];
  
  return movieTechniques.filter(t => 
    t.id !== techniqueId && 
    (t.category === technique.category || 
     t.classicReferences.some(ref => 
       technique.classicReferences.some(techRef => techRef.id === ref.id)
     ))
  );
}; 