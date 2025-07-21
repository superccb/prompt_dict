'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { TechniqueImage, BackgroundImage, IconImage } from '@/components/AssetImage';

export default function GalleryPage() {
  const techniques = [
    { id: 'camera-angles', name: '攝像機角度示意圖', description: '展示不同攝像機角度的視覺效果和情感表達' },
    { id: 'lighting-setup', name: '三點打光設置', description: '經典的三點打光系統，包含主光、補光和背光' },
    { id: 'camera-movements', name: '攝像機移動示意圖', description: '各種攝像機移動方式的視覺化展示' }
  ];

  const backgrounds = [
    { id: 'film-strip', name: '電影膠片背景', description: '電影膠片圖案背景，營造電影氛圍' }
  ];

  const icons = [
    { id: 'camera-icon', name: '攝像機圖標', description: '專業攝像機圖標，用於界面設計' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">視覺素材畫廊</h1>
          <p className="text-xl text-gray-600">探索電影拍攝技術的視覺化展示</p>
        </motion.div>

        {/* 技術示意圖 */}
        <section className="mb-16">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-3xl font-bold text-gray-800 mb-8"
          >
            技術示意圖
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {techniques.map((technique, index) => (
              <motion.div
                key={technique.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{technique.name}</h3>
                  <p className="text-gray-600 mb-4">{technique.description}</p>
                  <div className="aspect-video bg-gray-100 rounded-lg overflow-hidden">
                    <TechniqueImage
                      techniqueId={technique.id}
                      width={400}
                      height={300}
                      className="w-full h-full"
                      interactive={true}
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* 背景圖片 */}
        <section className="mb-16">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-3xl font-bold text-gray-800 mb-8"
          >
            背景圖片
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {backgrounds.map((background, index) => (
              <motion.div
                key={background.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{background.name}</h3>
                  <p className="text-gray-600 mb-4">{background.description}</p>
                  <div className="h-32 bg-gray-100 rounded-lg overflow-hidden">
                    <BackgroundImage
                      backgroundId={background.id}
                      width={800}
                      height={200}
                      className="w-full h-full"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* 圖標 */}
        <section className="mb-16">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-3xl font-bold text-gray-800 mb-8"
          >
            圖標
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {icons.map((icon, index) => (
              <motion.div
                key={icon.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{icon.name}</h3>
                  <p className="text-gray-600 mb-4">{icon.description}</p>
                  <div className="flex justify-center">
                    <IconImage
                      iconId={icon.id}
                      width={64}
                      height={64}
                      className="w-16 h-16"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* 使用說明 */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-xl shadow-lg p-8"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-4">如何使用這些素材</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">在前端組件中</h3>
              <pre className="bg-gray-100 p-4 rounded-lg text-sm overflow-x-auto">
{`import { TechniqueImage } from '@/components/AssetImage';

<TechniqueImage 
  techniqueId="camera-angles" 
  width={300} 
  height={200} 
  interactive={true}
/>`}
              </pre>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">技術特點</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• SVG 格式，支持無限縮放</li>
                <li>• 響應式設計，適配各種屏幕</li>
                <li>• 互動效果，支持點擊和懸停</li>
                <li>• 語義化顏色，符合設計規範</li>
              </ul>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
} 