# 電影拍攝指南 - 視覺素材資源

本目錄包含電影拍攝指南項目的所有視覺素材，包括技術示意圖、背景圖片、圖標等。

## 目錄結構

```
assets/
├── images/
│   ├── techniques/          # 技術示意圖
│   │   ├── camera-angles.svg
│   │   ├── lighting-setup.svg
│   │   └── camera-movements.svg
│   ├── scenes/             # 場景參考圖片
│   ├── backgrounds/        # 背景圖片
│   │   └── film-strip.svg
│   └── icons/             # 圖標
│       └── camera-icon.svg
├── videos/
│   ├── demos/             # 技術演示視頻
│   └── examples/          # 示例視頻
└── assets-config.ts       # 資源配置文件
```

## 素材類型

### 1. 技術示意圖 (SVG)
- **camera-angles.svg**: 攝像機角度示意圖，展示低角度、平視角度、高角度的視覺效果
- **lighting-setup.svg**: 三點打光設置圖，展示主光、補光、背光的佈局
- **camera-movements.svg**: 攝像機移動示意圖，展示Pan、Tilt、Dolly、Crane等移動方式

### 2. 背景圖片
- **film-strip.svg**: 電影膠片背景圖案，營造電影氛圍

### 3. 圖標
- **camera-icon.svg**: 專業攝像機圖標，用於界面設計

## 使用方式

### 在前端組件中使用

```tsx
import { TechniqueImage, BackgroundImage, IconImage } from '@/components/AssetImage';

// 顯示技術示意圖
<TechniqueImage 
  techniqueId="camera-angles" 
  width={300} 
  height={200} 
  interactive={true}
/>

// 顯示背景圖片
<BackgroundImage 
  backgroundId="film-strip" 
  width={800} 
  height={200}
/>

// 顯示圖標
<IconImage 
  iconId="camera-icon" 
  width={64} 
  height={64}
/>
```

### 通過配置文件訪問

```tsx
import { getAsset, assetsByCategory } from '@/assets/assets-config';

// 獲取特定資源
const cameraAnglesAsset = getAsset('camera-angles');

// 按類別獲取資源
const techniqueAssets = assetsByCategory.technique;
```

## 素材規範

### SVG 素材
- 使用標準的 SVG 格式
- 包含適當的 viewBox 屬性
- 使用語義化的顏色和樣式
- 支持響應式縮放

### 圖片素材
- 優先使用 SVG 格式以保證清晰度
- 支持多種尺寸顯示
- 包含適當的 alt 文本描述

## 版權說明

所有素材均為原創製作，可自由使用於本項目。SVG 素材採用 MIT 許可證。

## 擴展指南

### 添加新的技術示意圖

1. 創建 SVG 文件並放置在 `images/techniques/` 目錄
2. 在 `assets-config.ts` 中添加配置
3. 更新相關的技術數據以引用新的圖片ID

### 添加新的背景圖片

1. 創建圖片文件並放置在 `images/backgrounds/` 目錄
2. 在 `assets-config.ts` 中添加配置
3. 在前端組件中使用 `BackgroundImage` 組件

### 添加新的圖標

1. 創建 SVG 圖標並放置在 `images/icons/` 目錄
2. 在 `assets-config.ts` 中添加配置
3. 在前端組件中使用 `IconImage` 組件

## 性能優化

- SVG 素材已優化，文件大小較小
- 使用適當的緩存策略
- 支持懶加載以提高性能
- 響應式設計，適配不同屏幕尺寸 