'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Filter, Search, Grid, List } from 'lucide-react'
import TechniqueCard from '@/components/TechniqueCard'
import { movieTechniques, techniquesByCategory } from '@/data/techniques'
import { MovieTechnique } from '@/types'
import Breadcrumb from '@/components/Breadcrumb'

export default function MoodboardPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [searchQuery, setSearchQuery] = useState('')
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
  const [selectedTechnique, setSelectedTechnique] = useState<MovieTechnique | null>(null)

  // Filter techniques based on category and search
  const filteredTechniques = movieTechniques.filter(technique => {
    const matchesCategory = selectedCategory === 'all' || technique.category === selectedCategory
    const matchesSearch = technique.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         technique.description.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const categories = [
    { id: 'all', name: '全部', count: movieTechniques.length },
    { id: 'camera', name: '攝像機', count: techniquesByCategory.camera.length },
    { id: 'lighting', name: '燈光', count: techniquesByCategory.lighting.length },
    { id: 'audio', name: '音頻', count: techniquesByCategory.audio.length },
    { id: 'composition', name: '構圖', count: techniquesByCategory.composition.length },
    { id: 'movement', name: '移動', count: techniquesByCategory.movement.length }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">技術展示</h1>
              <p className="text-gray-600 mt-2">探索各種電影拍攝技術和視覺效果</p>
            </div>
            <div className="mt-4 sm:mt-0 flex items-center space-x-4">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-lg transition-colors ${
                  viewMode === 'grid' ? 'bg-primary-100 text-primary-600' : 'bg-gray-100 text-gray-600'
                }`}
              >
                <Grid className="w-5 h-5" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-lg transition-colors ${
                  viewMode === 'list' ? 'bg-primary-100 text-primary-600' : 'bg-gray-100 text-gray-600'
                }`}
              >
                <List className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <Breadcrumb />

        {/* Filters */}
        <div className="mb-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
            {/* Search */}
            <div className="relative max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="搜索技術..."
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
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    selectedCategory === category.id
                      ? 'bg-primary-600 text-white'
                      : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
                  }`}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-gray-600">
            找到 <span className="font-semibold text-gray-900">{filteredTechniques.length}</span> 個技術
          </p>
        </div>

        {/* Techniques Grid */}
        <motion.div
          layout
          className={`${
            viewMode === 'grid'
              ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'
              : 'space-y-4'
          }`}
        >
          {filteredTechniques.map((technique, index) => (
            <motion.div
              key={technique.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
            >
              <TechniqueCard
                technique={technique}
                onClick={() => setSelectedTechnique(technique)}
                selected={selectedTechnique?.id === technique.id}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Empty State */}
        {filteredTechniques.length === 0 && (
          <div className="text-center py-12">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="w-8 h-8 text-gray-400" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">沒有找到匹配的技術</h3>
            <p className="text-gray-600">嘗試調整搜索條件或選擇不同的分類</p>
          </div>
        )}
      </div>

      {/* Technique Detail Modal */}
      {selectedTechnique && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
          >
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-bold text-gray-900">{selectedTechnique.name}</h2>
                <button
                  onClick={() => setSelectedTechnique(null)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  ✕
                </button>
              </div>
              
              <p className="text-gray-600 mb-6">{selectedTechnique.description}</p>

              {/* Classic References */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">經典參考</h3>
                <div className="space-y-3">
                  {selectedTechnique.classicReferences.map((reference) => (
                    <div key={reference.id} className="bg-gray-50 rounded-lg p-4">
                      <h4 className="font-medium text-gray-900">{reference.title}</h4>
                      {reference.movie && (
                        <p className="text-sm text-gray-600">{reference.movie} ({reference.year})</p>
                      )}
                      <p className="text-sm text-gray-700 mt-2">{reference.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Demo Scenes */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">演示場景</h3>
                <div className="space-y-3">
                  {selectedTechnique.demoScenes.map((scene) => (
                    <div key={scene.id} className="bg-primary-50 rounded-lg p-4">
                      <h4 className="font-medium text-gray-900">{scene.title}</h4>
                      <p className="text-sm text-gray-700 mt-2">{scene.description}</p>
                      <p className="text-sm text-primary-600 mt-2 font-medium">
                        情感效果: {scene.emotionalImpact}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  )
} 