'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Search, BookOpen, Camera, Lightbulb, Music, Users, Award } from 'lucide-react'
import Breadcrumb from '@/components/Breadcrumb'

export default function ReferencePage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState<string>('all')

  const categories = [
    { id: 'all', name: '全部', icon: BookOpen },
    { id: 'camera', name: '攝像機', icon: Camera },
    { id: 'lighting', name: '燈光', icon: Lightbulb },
    { id: 'audio', name: '音頻', icon: Music },
    { id: 'composition', name: '構圖', icon: Award },
    { id: 'movement', name: '移動', icon: Users }
  ]

  const references = [
    {
      id: 'close-up',
      name: '特寫鏡頭 (Close-up)',
      category: 'camera',
      description: '拍攝主體的局部或細節，突出情感和表情',
      usage: '用於表現人物情感、重要物件或細節',
      examples: ['人物面部表情', '手部動作', '重要道具'],
      tips: '注意構圖平衡，避免過度裁剪'
    },
    {
      id: 'wide-shot',
      name: '廣角鏡頭 (Wide Shot)',
      category: 'camera',
      description: '展示完整的場景和環境，建立空間關係',
      usage: '用於建立場景、展示環境或表現人物與環境的關係',
      examples: ['城市全景', '室內環境', '人物與背景'],
      tips: '注意前景、中景、背景的層次關係'
    },
    {
      id: 'three-point-lighting',
      name: '三點打光 (Three-point Lighting)',
      category: 'lighting',
      description: '經典的燈光設置，包含主光、補光和背光',
      usage: '用於人物照明，創造立體感和深度',
      examples: ['人物訪談', '戲劇場景', '商業攝影'],
      tips: '主光決定主要方向，補光減少陰影，背光分離主體'
    },
    {
      id: 'low-key-lighting',
      name: '低調燈光 (Low-key Lighting)',
      category: 'lighting',
      description: '以暗調為主，營造神秘、戲劇性的氛圍',
      usage: '用於恐怖片、懸疑片或表現陰暗情緒',
      examples: ['恐怖場景', '懸疑氛圍', '悲劇時刻'],
      tips: '控制光比，保持細節在陰影中'
    },
    {
      id: 'ambient-sound',
      name: '環境音 (Ambient Sound)',
      category: 'audio',
      description: '場景中的背景環境聲音',
      usage: '用於建立真實感和氛圍',
      examples: ['城市噪音', '自然聲音', '室內環境音'],
      tips: '音量要適中，不干擾對話'
    },
    {
      id: 'rule-of-thirds',
      name: '三分法則 (Rule of Thirds)',
      category: 'composition',
      description: '將畫面分為九個等份，重要元素放在交叉點上',
      usage: '用於創造平衡和視覺興趣',
      examples: ['風景攝影', '人物構圖', '建築攝影'],
      tips: '可以打破規則，但要有明確的藝術意圖'
    },
    {
      id: 'tracking-shot',
      name: '跟蹤鏡頭 (Tracking Shot)',
      category: 'movement',
      description: '攝像機跟隨主體移動，保持相對位置',
      usage: '用於跟隨人物或物體，創造動態感',
      examples: ['人物行走', '車輛移動', '動作場景'],
      tips: '移動要平滑，避免晃動'
    },
    {
      id: 'dutch-angle',
      name: '傾斜鏡頭 (Dutch Angle)',
      category: 'camera',
      description: '攝像機傾斜拍攝，創造不穩定和緊張感',
      usage: '用於表現心理狀態或創造戲劇效果',
      examples: ['緊張場景', '心理恐怖', '動作場面'],
      tips: '角度要適度，過度傾斜會分散注意力'
    }
  ]

  const filteredReferences = references.filter(ref => {
    const matchesCategory = selectedCategory === 'all' || ref.category === selectedCategory
    const matchesSearch = ref.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         ref.description.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-100">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-900">參考資料</h1>
            <p className="text-gray-600 mt-2">電影拍攝術語詞彙和技術參考</p>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <Breadcrumb />

        {/* Search and Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
            {/* Search */}
            <div className="relative max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="搜索術語..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    selectedCategory === category.id
                      ? 'bg-primary-600 text-white'
                      : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
                  }`}
                >
                  <category.icon className="w-4 h-4" />
                  <span>{category.name}</span>
                </button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-gray-600">
            找到 <span className="font-semibold text-gray-900">{filteredReferences.length}</span> 個術語
          </p>
        </div>

        {/* References Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filteredReferences.map((reference, index) => (
            <motion.div
              key={reference.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{reference.name}</h3>
                    <p className="text-sm text-gray-600 mt-1">
                      {categories.find(c => c.id === reference.category)?.name}
                    </p>
                  </div>
                  <div className="text-2xl">
                    {(() => {
                      const category = categories.find(c => c.id === reference.category)
                      return category ? <category.icon className="w-6 h-6 text-primary-600" /> : null
                    })()}
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">定義</h4>
                    <p className="text-sm text-gray-600">{reference.description}</p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">使用場景</h4>
                    <p className="text-sm text-gray-600">{reference.usage}</p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">示例</h4>
                    <div className="flex flex-wrap gap-2">
                      {reference.examples.map((example, i) => (
                        <span
                          key={i}
                          className="px-2 py-1 bg-primary-100 text-primary-700 text-xs rounded-full"
                        >
                          {example}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">技巧提示</h4>
                    <p className="text-sm text-gray-600">{reference.tips}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Empty State */}
        {filteredReferences.length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-12"
          >
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="w-8 h-8 text-gray-400" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">沒有找到匹配的術語</h3>
            <p className="text-gray-600">嘗試調整搜索條件或選擇不同的分類</p>
          </motion.div>
        )}

        {/* Quick Reference */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-white rounded-xl shadow-lg p-8 mt-8"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-6">快速參考</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h4 className="font-semibold text-gray-800 mb-3">常用縮寫</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">CU</span>
                  <span className="font-medium">特寫鏡頭</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">WS</span>
                  <span className="font-medium">廣角鏡頭</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">MS</span>
                  <span className="font-medium">中景鏡頭</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">LS</span>
                  <span className="font-medium">遠景鏡頭</span>
                </div>
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-3">光比概念</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">1:1</span>
                  <span className="font-medium">平光</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">2:1</span>
                  <span className="font-medium">標準光比</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">4:1</span>
                  <span className="font-medium">高對比</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">8:1</span>
                  <span className="font-medium">戲劇性</span>
                </div>
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-3">色彩溫度</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">3200K</span>
                  <span className="font-medium">鎢絲燈</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">5600K</span>
                  <span className="font-medium">日光</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">6500K</span>
                  <span className="font-medium">陰天</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">7500K</span>
                  <span className="font-medium">陰影</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
} 