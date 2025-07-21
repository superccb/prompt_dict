// 電影拍攝技術類型定義

export interface CameraAngle {
  id: string;
  name: string;
  englishName: string;
  description: string;
  emotionalEffect: string;
  useCases: string[];
  examples: SceneExample[];
}

export interface CameraMovement {
  id: string;
  name: string;
  englishName: string;
  description: string;
  emotionalEffect: string;
  useCases: string[];
  examples: SceneExample[];
}

export interface LightingStyle {
  id: string;
  name: string;
  englishName: string;
  description: string;
  mood: string;
  useCases: string[];
  examples: SceneExample[];
}

export interface AudioType {
  id: string;
  name: string;
  englishName: string;
  description: string;
  emotionalEffect: string;
  useCases: string[];
  examples: SceneExample[];
}

export interface SceneExample {
  id: string;
  title: string;
  movie?: string;
  director?: string;
  year?: number;
  description: string;
  technicalDetails: {
    cameraAngle?: string;
    cameraMovement?: string;
    lighting?: string;
    audio?: string;
  };
  emotionalImpact: string;
  promptTemplate: string;
}

export interface PromptTemplate {
  id: string;
  name: string;
  category: 'basic' | 'dialogue' | 'action' | 'emotional' | 'style';
  complexity: 'beginner' | 'intermediate' | 'advanced';
  template: string;
  variables: PromptVariable[];
  examples: string[];
}

export interface PromptVariable {
  name: string;
  type: 'camera' | 'lighting' | 'audio' | 'character' | 'setting' | 'action';
  options: string[];
  required: boolean;
  description: string;
}

export interface SceneBuilder {
  cameraAngle: string;
  cameraMovement: string;
  lighting: string;
  audio: string;
  character: string;
  setting: string;
  action: string;
  mood: string;
}

export interface MovieTechnique {
  id: string;
  category: 'camera' | 'lighting' | 'audio' | 'composition' | 'movement';
  name: string;
  description: string;
  visualExample?: string;
  imageId?: string;
  classicReferences: SceneExample[];
  demoScenes: SceneExample[];
}

// 前端組件類型
export interface TechniqueCardProps {
  technique: MovieTechnique;
  onClick?: () => void;
  selected?: boolean;
}

export interface PromptBuilderProps {
  onGenerate: (prompt: string) => void;
  template?: PromptTemplate;
}

export interface SceneViewerProps {
  scene: SceneExample;
  onClose: () => void;
}

export interface MoodboardProps {
  techniques: MovieTechnique[];
  onTechniqueSelect: (technique: MovieTechnique) => void;
}

// 狀態管理類型
export interface AppState {
  selectedTechniques: string[];
  currentTemplate: PromptTemplate | null;
  generatedPrompt: string;
  sceneHistory: SceneExample[];
}

export interface AppActions {
  selectTechnique: (techniqueId: string) => void;
  deselectTechnique: (techniqueId: string) => void;
  setTemplate: (template: PromptTemplate) => void;
  generatePrompt: (builder: SceneBuilder) => void;
  addToHistory: (scene: SceneExample) => void;
  clearHistory: () => void;
}

// 導航類型
export type PageType = 'home' | 'moodboard' | 'workshop' | 'prompt-builder' | 'examples' | 'reference';

export interface NavigationItem {
  id: PageType;
  name: string;
  path: string;
  icon: string;
  description: string;
} 