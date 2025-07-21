'use client'

import { motion } from 'framer-motion'
import { Camera, Lightbulb, Music, Eye, Play } from 'lucide-react'
import { MovieTechnique } from '@/types'
import { TechniqueImage } from './AssetImage'

interface TechniqueCardProps {
  technique: MovieTechnique
  onClick?: () => void
  selected?: boolean
}

const categoryIcons = {
  camera: Camera,
  lighting: Lightbulb,
  audio: Music,
  composition: Eye,
  movement: Play
}

export default function TechniqueCard({ technique, onClick, selected }: TechniqueCardProps) {
  const IconComponent = categoryIcons[technique.category] || Camera

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={`technique-card relative overflow-hidden transition-all duration-200 ${
        selected ? 'ring-2 ring-primary-500 bg-primary-50' : ''
      }`}
    >
      {/* Category Badge */}
      <div className="absolute top-4 right-4">
        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
          technique.category === 'camera' ? 'bg-blue-100 text-blue-800' :
          technique.category === 'lighting' ? 'bg-yellow-100 text-yellow-800' :
          technique.category === 'audio' ? 'bg-green-100 text-green-800' :
          technique.category === 'composition' ? 'bg-purple-100 text-purple-800' :
          'bg-gray-100 text-gray-800'
        }`}>
          {technique.category}
        </span>
      </div>

      {/* Icon and Title */}
      <div className="flex items-center space-x-3 mb-4">
        <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
          selected ? 'bg-primary-500 text-white' : 'bg-gray-100 text-gray-600'
        }`}>
          <IconComponent className="w-6 h-6" />
        </div>
        <div>
          <h3 className="text-xl font-semibold text-gray-900">{technique.name}</h3>
          <p className="text-sm text-gray-500">電影技術</p>
        </div>
      </div>

      {/* Technique Image */}
      {technique.imageId && (
        <div className="mb-4">
          <TechniqueImage
            techniqueId={technique.imageId}
            width={300}
            height={200}
            className="w-full rounded-lg"
            interactive={true}
          />
        </div>
      )}

      {/* Description */}
      <p className="text-gray-600 mb-4 line-clamp-3">{technique.description}</p>

      {/* Examples Count */}
      <div className="flex items-center justify-between text-sm text-gray-500">
        <span>經典參考: {technique.classicReferences.length}</span>
        <span>演示場景: {technique.demoScenes.length}</span>
      </div>

      {/* Hover Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary-500/10 to-film-500/10 opacity-0 hover:opacity-100 transition-opacity duration-200 pointer-events-none" />
    </motion.div>
  )
} 