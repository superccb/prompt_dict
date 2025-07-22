'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Play, Star, Users, Calendar, Award, Film } from 'lucide-react'
import Breadcrumb from '@/components/Breadcrumb'

export default function ExamplesPage() {
  const [selectedDirector, setSelectedDirector] = useState<string | null>(null)

  const directors = [
    {
      id: 'nolan',
      name: '克里斯托弗·諾蘭',
      avatar: '🎬',
      films: [
        {
          id: 'inception',
          title: '盜夢空間',
          year: 2010,
          technique: '視覺特效與實景結合',
          description: '通過實景拍攝和微縮模型創造夢境世界，避免過度依賴CGI',
          rating: 8.8,
          scene: '城市摺疊場景'
        },
        {
          id: 'interstellar',
          title: '星際穿越',
          year: 2014,
          technique: '實景太空拍攝',
          description: '使用IMAX攝影機在真實環境中拍攝，創造震撼的太空視覺效果',
          rating: 8.6,
          scene: '蟲洞穿越場景'
        }
      ]
    },
    {
      id: 'tarantino',
      name: '昆汀·塔倫蒂諾',
      avatar: '🎭',
      films: [
        {
          id: 'pulp-fiction',
          title: '低俗小說',
          year: 1994,
          technique: '非線性敘事',
          description: '打破傳統時間線，通過多個故事線交織創造獨特的敘事結構',
          rating: 8.9,
          scene: '餐廳搶劫場景'
        },
        {
          id: 'kill-bill',
          title: '殺死比爾',
          year: 2003,
          technique: '風格化動作場面',
          description: '融合武俠、西部片和動漫元素，創造獨特的視覺風格',
          rating: 8.1,
          scene: '青葉屋大戰'
        }
      ]
    },
    {
      id: 'kubrick',
      name: '斯坦利·庫布里克',
      avatar: '🎪',
      films: [
        {
          id: '2001',
          title: '2001太空漫遊',
          year: 1968,
          technique: '視覺詩意與哲學思考',
          description: '通過精確的構圖和緩慢的節奏傳達深層的哲學主題',
          rating: 8.3,
          scene: '星門穿越'
        },
        {
          id: 'shining',
          title: '閃靈',
          year: 1980,
          technique: '心理恐怖氛圍營造',
          description: '通過對稱構圖、長鏡頭和音效設計創造壓抑的恐怖氛圍',
          rating: 8.4,
          scene: '走廊追逐'
        }
      ]
    },
    {
      id: 'spielberg',
      name: '史蒂文·斯皮爾伯格',
      avatar: '🌟',
      films: [
        {
          id: 'jaws',
          title: '大白鯊',
          year: 1975,
          technique: '懸疑氛圍營造',
          description: '通過音效和視覺暗示而非直接展示來創造恐怖效果',
          rating: 8.0,
          scene: '海灘襲擊'
        },
        {
          id: 'et',
          title: 'E.T.外星人',
          year: 1982,
          technique: '情感共鳴與視覺特效',
          description: '平衡科幻元素與人性情感，創造溫暖的科幻故事',
          rating: 7.8,
          scene: '自行車飛行'
        }
      ]
    }
  ]

  const selectedDirectorData = directors.find(d => d.id === selectedDirector)

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-100">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-900">經典示例</h1>
            <p className="text-gray-600 mt-2">大師級導演作品分析與技術解析</p>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <Breadcrumb />

        {/* Director Selection */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-6">選擇導演</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {directors.map((director) => (
              <motion.div
                key={director.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`bg-white rounded-xl shadow-lg p-6 cursor-pointer transition-all duration-200 ${
                  selectedDirector === director.id ? 'ring-2 ring-primary-500 shadow-xl' : 'hover:shadow-xl'
                }`}
                onClick={() => setSelectedDirector(director.id)}
              >
                <div className="text-center">
                  <div className="text-4xl mb-3">{director.avatar}</div>
                  <h3 className="font-semibold text-gray-900">{director.name}</h3>
                  <p className="text-sm text-gray-600 mt-1">{director.films.length} 部作品</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Director Details */}
        {selectedDirectorData && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-8"
          >
            {/* Director Info */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="flex items-center space-x-4 mb-6">
                <div className="text-6xl">{selectedDirectorData.avatar}</div>
                <div>
                  <h2 className="text-3xl font-bold text-gray-900">{selectedDirectorData.name}</h2>
                  <p className="text-gray-600">大師級導演，以其獨特的視覺風格和敘事技巧聞名</p>
                </div>
              </div>
            </div>

            {/* Films Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {selectedDirectorData.films.map((film, index) => (
                <motion.div
                  key={film.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg overflow-hidden"
                >
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">{film.title}</h3>
                        <div className="flex items-center space-x-4 mt-1">
                          <span className="text-sm text-gray-600">{film.year}</span>
                          <div className="flex items-center space-x-1">
                            <Star className="w-4 h-4 text-yellow-500 fill-current" />
                            <span className="text-sm font-medium">{film.rating}</span>
                          </div>
                        </div>
                      </div>
                      <div className="text-2xl">🎬</div>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-2">核心技術</h4>
                        <p className="text-sm text-gray-600">{film.technique}</p>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-2">技術解析</h4>
                        <p className="text-sm text-gray-600">{film.description}</p>
                      </div>

                      <div>
                        <h4 className="font-semibold text-gray-800 mb-2">經典場景</h4>
                        <p className="text-sm text-primary-600 font-medium">{film.scene}</p>
                      </div>
                    </div>

                    <div className="mt-6 pt-4 border-t border-gray-200">
                      <button className="flex items-center space-x-2 text-primary-600 hover:text-primary-700 transition-colors">
                        <Play className="w-4 h-4" />
                        <span className="text-sm font-medium">觀看分析</span>
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Learning Insights */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-gradient-to-r from-primary-50 to-purple-50 rounded-xl p-8"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-4">學習洞察</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-3">視覺風格特點</h4>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• 獨特的構圖和色彩運用</li>
                    <li>• 創新的攝影技術應用</li>
                    <li>• 強烈的視覺衝擊力</li>
                    <li>• 細節的精心設計</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-3">敘事技巧</h4>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• 非傳統的敘事結構</li>
                    <li>• 深層的主題表達</li>
                    <li>• 情感共鳴的營造</li>
                    <li>• 觀眾參與感的設計</li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}

        {/* Call to Action */}
        {!selectedDirector && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-12"
          >
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Film className="w-8 h-8 text-gray-400" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">選擇一位導演開始探索</h3>
            <p className="text-gray-600">深入了解大師級導演的作品和技術應用</p>
          </motion.div>
        )}
      </div>
    </div>
  )
} 