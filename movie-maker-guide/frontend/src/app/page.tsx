'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Camera, Lightbulb, Music, Users, BookOpen, Play, Eye } from 'lucide-react'

const navigationItems = [
  {
    id: 'moodboard',
    name: '技術展示',
    icon: Camera,
    description: '視覺化展示各種電影拍攝技術',
    path: '/moodboard'
  },
  {
    id: 'gallery',
    name: '視覺畫廊',
    icon: Eye,
    description: '豐富的技術示意圖和視覺素材',
    path: '/gallery'
  },
  {
    id: 'workshop',
    name: '互動工作坊',
    icon: Play,
    description: '互動式學習環境和練習',
    path: '/workshop'
  },
  {
    id: 'prompt-builder',
    name: '提示構建器',
    icon: BookOpen,
    description: '創建專業的場景描述提示',
    path: '/prompt-builder'
  },
  {
    id: 'examples',
    name: '經典示例',
    icon: Users,
    description: '大師級導演作品分析',
    path: '/examples'
  },
  {
    id: 'reference',
    name: '參考資料',
    icon: Lightbulb,
    description: '快速參考和術語詞彙',
    path: '/reference'
  }
]

export default function HomePage() {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null)

  return (
    <div className="min-h-screen gradient-bg">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-film-500 rounded-lg flex items-center justify-center">
                <Camera className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">電影拍攝指南</h1>
                <p className="text-sm text-gray-600">Movie Maker Guide</p>
              </div>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#about" className="text-gray-600 hover:text-gray-900 transition-colors">關於</a>
              <a href="#features" className="text-gray-600 hover:text-gray-900 transition-colors">特色</a>
              <a href="#contact" className="text-gray-600 hover:text-gray-900 transition-colors">聯繫</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              掌握電影語言
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-film-600">
                創造視覺敘事
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              學習專業的電影拍攝技術，掌握視覺敘事語言，為AI生成和電影創作提供準確的場景描述
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary text-lg px-8 py-3">
                開始學習
              </button>
              <button className="btn-secondary text-lg px-8 py-3">
                查看示例
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              五個維度框架
            </h2>
            <p className="text-lg text-gray-600">
              每個電影場景都可以分解為五個核心維度，幫助你系統化地理解和創建視覺敘事
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {navigationItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                onHoverStart={() => setHoveredItem(item.id)}
                onHoverEnd={() => setHoveredItem(null)}
                className="technique-card group"
              >
                <div className="flex items-center space-x-4 mb-4">
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center transition-colors duration-200 ${
                    hoveredItem === item.id 
                      ? 'bg-gradient-to-br from-primary-500 to-film-500 text-white' 
                      : 'bg-gray-100 text-gray-600'
                  }`}>
                    <item.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">{item.name}</h3>
                </div>
                <p className="text-gray-600 mb-4">{item.description}</p>
                <button className="text-primary-600 hover:text-primary-700 font-medium transition-colors">
                  探索 →
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                關於電影拍攝指南
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                這是一個專為電影愛好者和創作者設計的綜合性學習平台。無論您是初學者還是有經驗的電影製作者，
                這個指南都將幫助您掌握電影語言，並有效地將您的創意想法轉化為視覺敘事。
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                  <span className="text-gray-700">系統化的學習路徑</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                  <span className="text-gray-700">大師級導演作品分析</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                  <span className="text-gray-700">互動式學習體驗</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                  <span className="text-gray-700">專業的提示模板庫</span>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-primary-50 to-film-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">技術覆蓋</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">攝像機角度</span>
                  <span className="text-primary-600 font-semibold">6種</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">燈光風格</span>
                  <span className="text-primary-600 font-semibold">8種</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">音頻類型</span>
                  <span className="text-primary-600 font-semibold">5種</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">經典場景</span>
                  <span className="text-primary-600 font-semibold">20+</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">電影拍攝指南</h3>
              <p className="text-gray-400">
                掌握電影語言，創造視覺敘事
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">快速連結</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">技術指南</a></li>
                <li><a href="#" className="hover:text-white transition-colors">經典示例</a></li>
                <li><a href="#" className="hover:text-white transition-colors">提示模板</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">聯繫我們</h3>
              <p className="text-gray-400">
                有任何問題或建議，歡迎聯繫我們
              </p>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 電影拍攝指南. 保留所有權利.</p>
          </div>
        </div>
      </footer>
    </div>
  )
} 