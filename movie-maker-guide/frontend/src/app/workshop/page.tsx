'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Play, Pause, RotateCcw, Settings, Camera, Lightbulb, Music } from 'lucide-react'
import Breadcrumb from '@/components/Breadcrumb'

export default function WorkshopPage() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentScene, setCurrentScene] = useState(0)

  const scenes = [
    {
      id: 1,
      title: '特寫鏡頭練習',
      description: '練習拍攝人物特寫，掌握情感表達',
      technique: '特寫鏡頭',
      duration: '2分鐘',
      icon: Camera
    },
    {
      id: 2,
      title: '三點打光設置',
      description: '學習經典的三點打光系統',
      technique: '燈光設計',
      duration: '3分鐘',
      icon: Lightbulb
    },
    {
      id: 3,
      title: '環境音設計',
      description: '為場景添加合適的環境音效',
      technique: '音頻處理',
      duration: '2分鐘',
      icon: Music
    }
  ]

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying)
  }

  const handleReset = () => {
    setIsPlaying(false)
    setCurrentScene(0)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">互動工作坊</h1>
              <p className="text-gray-600 mt-2">通過實踐練習掌握電影拍攝技術</p>
            </div>
            <div className="flex items-center space-x-4">
              <button
                onClick={handlePlayPause}
                className="flex items-center space-x-2 bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition-colors"
              >
                {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
                <span>{isPlaying ? '暫停' : '開始'}</span>
              </button>
              <button
                onClick={handleReset}
                className="flex items-center space-x-2 bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors"
              >
                <RotateCcw className="w-5 h-5" />
                <span>重置</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <Breadcrumb />

        {/* Current Scene */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-xl shadow-lg p-8 mb-8"
        >
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              當前練習：{scenes[currentScene]?.title}
            </h2>
            <p className="text-gray-600 mb-6">{scenes[currentScene]?.description}</p>
            
            <div className="flex items-center justify-center space-x-8 mb-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-2">
                  {scenes[currentScene]?.icon && <scenes[currentScene].icon className="w-8 h-8 text-primary-600" />}
                </div>
                <p className="text-sm text-gray-600">技術類型</p>
                <p className="font-medium text-gray-900">{scenes[currentScene]?.technique}</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2">
                  <span className="text-2xl font-bold text-green-600">⏱</span>
                </div>
                <p className="text-sm text-gray-600">預計時長</p>
                <p className="font-medium text-gray-900">{scenes[currentScene]?.duration}</p>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
              <div 
                className="bg-primary-600 h-2 rounded-full transition-all duration-300"
                style={{ width: `${((currentScene + 1) / scenes.length) * 100}%` }}
              ></div>
            </div>
            <p className="text-sm text-gray-600">
              進度：{currentScene + 1} / {scenes.length}
            </p>
          </div>
        </motion.div>

        {/* Scene List */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {scenes.map((scene, index) => (
            <motion.div
              key={scene.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`bg-white rounded-xl shadow-lg p-6 cursor-pointer transition-all duration-200 ${
                currentScene === index ? 'ring-2 ring-primary-500 shadow-xl' : 'hover:shadow-xl'
              }`}
              onClick={() => setCurrentScene(index)}
            >
              <div className="flex items-center space-x-4 mb-4">
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                  currentScene === index ? 'bg-primary-500 text-white' : 'bg-gray-100 text-gray-600'
                }`}>
                  <scene.icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{scene.title}</h3>
                  <p className="text-sm text-gray-600">{scene.technique}</p>
                </div>
              </div>
              <p className="text-gray-600 mb-4">{scene.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">{scene.duration}</span>
                {currentScene === index && (
                  <span className="text-sm text-primary-600 font-medium">進行中</span>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Instructions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-white rounded-xl shadow-lg p-8 mt-8"
        >
          <h3 className="text-xl font-bold text-gray-900 mb-4">練習說明</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">如何開始</h4>
              <ul className="space-y-2 text-gray-600">
                <li>• 選擇一個練習場景</li>
                <li>• 點擊"開始"按鈕</li>
                <li>• 按照提示進行練習</li>
                <li>• 完成後進入下一個場景</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">學習目標</h4>
              <ul className="space-y-2 text-gray-600">
                <li>• 掌握基本拍攝技術</li>
                <li>• 理解視覺敘事原理</li>
                <li>• 提升場景描述能力</li>
                <li>• 培養電影語言思維</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
} 