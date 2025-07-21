'use client';

import React from 'react';

interface AssetConfig {
  id: string;
  name: string;
  path: string;
  type: 'image' | 'video' | 'svg';
  category: 'technique' | 'scene' | 'background' | 'icon';
  description: string;
  tags: string[];
}

interface AssetImageProps {
  asset: AssetConfig;
  className?: string;
  width?: number;
  height?: number;
  alt?: string;
  onClick?: () => void;
  interactive?: boolean;
}

export const AssetImage: React.FC<AssetImageProps> = ({
  asset,
  className = '',
  width,
  height,
  alt,
  onClick,
  interactive = false
}) => {
  const handleClick = () => {
    if (onClick && interactive) {
      onClick();
    }
  };

  const baseClasses = 'transition-all duration-300';
  const interactiveClasses = interactive 
    ? 'cursor-pointer hover:scale-105 hover:shadow-lg' 
    : '';
  
  const combinedClasses = `${baseClasses} ${interactiveClasses} ${className}`;

  if (asset.type === 'svg') {
    return (
      <div 
        className={combinedClasses}
        onClick={handleClick}
        style={{ width, height }}
      >
        <img
          src={asset.path}
          alt={alt || asset.description}
          className="w-full h-full object-contain"
          width={width}
          height={height}
        />
      </div>
    );
  }

  return (
    <div 
      className={combinedClasses}
      onClick={handleClick}
      style={{ width, height }}
    >
      <img
        src={asset.path}
        alt={alt || asset.description}
        className="w-full h-full object-cover rounded-lg"
        width={width}
        height={height}
      />
    </div>
  );
};

// 預定義的圖片組件
export const TechniqueImage: React.FC<{
  techniqueId: string;
  className?: string;
  width?: number;
  height?: number;
  interactive?: boolean;
}> = ({ techniqueId, ...props }) => {
  const asset = getAsset(techniqueId);
  
  if (!asset) {
    return (
      <div className="w-full h-full bg-gray-200 rounded-lg flex items-center justify-center">
        <span className="text-gray-500">圖片未找到</span>
      </div>
    );
  }

  return <AssetImage asset={asset} {...props} />;
};

// 背景圖片組件
export const BackgroundImage: React.FC<{
  backgroundId: string;
  className?: string;
  width?: number;
  height?: number;
}> = ({ backgroundId, ...props }) => {
  const asset = getAsset(backgroundId);
  
  if (!asset) {
    return null;
  }

  return <AssetImage asset={asset} {...props} />;
};

// 圖標組件
export const IconImage: React.FC<{
  iconId: string;
  className?: string;
  width?: number;
  height?: number;
}> = ({ iconId, ...props }) => {
  const asset = getAsset(iconId);
  
  if (!asset) {
    return null;
  }

  return <AssetImage asset={asset} {...props} />;
};

// 輔助函數
const getAsset = (id: string): AssetConfig | undefined => {
  // 這裡需要導入assets配置
  const assets = [
    {
      id: 'camera-angles',
      name: '攝像機角度示意圖',
      path: '/assets/images/techniques/camera-angles.svg',
      type: 'svg' as const,
      category: 'technique' as const,
      description: '展示不同攝像機角度的視覺效果和情感表達',
      tags: ['攝像機角度', '低角度', '平視角度', '高角度', '視覺效果']
    },
    {
      id: 'lighting-setup',
      name: '三點打光設置',
      path: '/assets/images/techniques/lighting-setup.svg',
      type: 'svg' as const,
      category: 'technique' as const,
      description: '經典的三點打光系統，包含主光、補光和背光',
      tags: ['燈光', '三點打光', '主光', '補光', '背光', '照明']
    },
    {
      id: 'camera-movements',
      name: '攝像機移動示意圖',
      path: '/assets/images/techniques/camera-movements.svg',
      type: 'svg' as const,
      category: 'technique' as const,
      description: '各種攝像機移動方式的視覺化展示',
      tags: ['攝像機移動', 'Pan', 'Tilt', 'Dolly', 'Crane', '運動']
    },
    {
      id: 'film-strip',
      name: '電影膠片背景',
      path: '/assets/images/backgrounds/film-strip.svg',
      type: 'svg' as const,
      category: 'background' as const,
      description: '電影膠片圖案背景，營造電影氛圍',
      tags: ['背景', '電影膠片', '復古', '氛圍']
    },
    {
      id: 'camera-icon',
      name: '攝像機圖標',
      path: '/assets/images/icons/camera-icon.svg',
      type: 'svg' as const,
      category: 'icon' as const,
      description: '專業攝像機圖標，用於界面設計',
      tags: ['圖標', '攝像機', '設備', '專業']
    }
  ];
  
  return assets.find(asset => asset.id === id);
}; 