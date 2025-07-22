'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Copy, Download, Eye, Settings, Camera, Lightbulb, Music, Users, BookOpen } from 'lucide-react'
import Breadcrumb from '@/components/Breadcrumb'

export default function PromptBuilderPage() {
  const [selectedTechniques, setSelectedTechniques] = useState<string[]>([])
  const [sceneDescription, setSceneDescription] = useState('')
  const [generatedPrompt, setGeneratedPrompt] = useState('')

  const techniqueCategories = [
    {
      id: 'camera',
      name: '攝像機技術',
      icon: Camera,
      techniques: [
        { id: 'close-up', name: '特寫鏡頭', description: '突出人物情感和細節' },
        { id: 'wide-shot', name: '廣角鏡頭', description: '展示環境和空間關係' },
        { id: 'low-angle', name: '仰角鏡頭', description: '營造權威感和力量感' },
        { id: 'high-angle', name: '俯角鏡頭', description: '表現渺小和無助感' },
        { id: 'dutch-angle', name: '傾斜鏡頭', description: '創造緊張和不穩定感' },
        { id: 'tracking-shot', name: '跟蹤鏡頭', description: '跟隨主體移動' }
      ]
    },
    {
      id: 'lighting',
      name: '燈光設計',
      icon: Lightbulb,
      techniques: [
        { id: 'three-point', name: '三點打光', description: '經典的主光、補光、背光系統' },
        { id: 'low-key', name: '低調燈光', description: '營造神秘和戲劇性氛圍' },
        { id: 'high-key', name: '高調燈光', description: '明亮、開朗的氛圍' },
        { id: 'backlight', name: '逆光', description: '創造剪影和輪廓效果' },
        { id: 'natural-light', name: '自然光', description: '模擬自然光線效果' },
        { id: 'colored-light', name: '彩色燈光', description: '使用彩色光線營造氛圍' }
      ]
    },
    {
      id: 'audio',
      name: '音頻處理',
      icon: Music,
      techniques: [
        { id: 'ambient-sound', name: '環境音', description: '背景環境聲音' },
        { id: 'diegetic-sound', name: '劇情音', description: '場景內的聲音' },
        { id: 'non-diegetic', name: '非劇情音', description: '背景音樂和音效' },
        { id: 'sound-design', name: '音效設計', description: '精心設計的音效' },
        { id: 'silence', name: '靜音', description: '無聲的戲劇效果' }
      ]
    }
  ]

  const handleTechniqueToggle = (techniqueId: string) => {
    setSelectedTechniques(prev => 
      prev.includes(techniqueId) 
        ? prev.filter(id => id !== techniqueId)
        : [...prev, techniqueId]
    )
  }

  const generatePrompt = () => {
    if (!sceneDescription.trim()) {
      alert('請先描述您的場景')
      return
    }

    const selectedTechniqueDetails = techniqueCategories
      .flatMap(category => category.techniques)
      .filter(technique => selectedTechniques.includes(technique.id))

    let prompt = `場景描述：${sceneDescription}\n\n`
    prompt += `使用的電影技術：\n`
    selectedTechniqueDetails.forEach(technique => {
      prompt += `• ${technique.name}：${technique.description}\n`
    })
    prompt += `\n請根據以上描述和技術要求，創建一個專業的電影場景。`

    setGeneratedPrompt(prompt)
  }

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generatedPrompt)
    alert('已複製到剪貼板')
  }

  const downloadPrompt = () => {
    const blob = new Blob([generatedPrompt], { type: 'text/plain' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = '電影場景提示詞.txt'
    a.click()
    URL.revokeObjectURL(url)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">提示構建器</h1>
              <p className="text-gray-600 mt-2">創建專業的電影場景描述提示詞</p>
            </div>
            <div className="flex items-center space-x-4">
              <button
                onClick={generatePrompt}
                className="flex items-center space-x-2 bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition-colors"
              >
                <Eye className="w-5 h-5" />
                <span>生成提示詞</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <Breadcrumb />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Panel - Scene Description */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            {/* Scene Description */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4">場景描述</h2>
              <textarea
                value={sceneDescription}
                onChange={(e) => setSceneDescription(e.target.value)}
                placeholder="請描述您想要創建的電影場景，包括人物、環境、情節等..."
                className="w-full h-32 p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-none"
              />
            </div>

            {/* Technique Selection */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4">選擇技術</h2>
              <div className="space-y-6">
                {techniqueCategories.map((category) => (
                  <div key={category.id}>
                    <div className="flex items-center space-x-2 mb-3">
                      <category.icon className="w-5 h-5 text-primary-600" />
                      <h3 className="font-semibold text-gray-800">{category.name}</h3>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {category.techniques.map((technique) => (
                        <label
                          key={technique.id}
                          className="flex items-center space-x-2 p-2 rounded-lg hover:bg-gray-50 cursor-pointer"
                        >
                          <input
                            type="checkbox"
                            checked={selectedTechniques.includes(technique.id)}
                            onChange={() => handleTechniqueToggle(technique.id)}
                            className="text-primary-600 focus:ring-primary-500"
                          />
                          <div>
                            <p className="text-sm font-medium text-gray-900">{technique.name}</p>
                            <p className="text-xs text-gray-600">{technique.description}</p>
                          </div>
                        </label>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Panel - Generated Prompt */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold text-gray-900">生成的提示詞</h2>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={copyToClipboard}
                    className="flex items-center space-x-1 text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    <Copy className="w-4 h-4" />
                    <span className="text-sm">複製</span>
                  </button>
                  <button
                    onClick={downloadPrompt}
                    className="flex items-center space-x-1 text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    <Download className="w-4 h-4" />
                    <span className="text-sm">下載</span>
                  </button>
                </div>
              </div>
              <div className="bg-gray-50 rounded-lg p-4 min-h-[400px]">
                {generatedPrompt ? (
                  <pre className="text-sm text-gray-800 whitespace-pre-wrap font-sans">
                    {generatedPrompt}
                  </pre>
                ) : (
                  <div className="text-center text-gray-500 py-20">
                    <Eye className="w-12 h-12 mx-auto mb-4 text-gray-300" />
                    <p>點擊"生成提示詞"按鈕來創建您的場景描述</p>
                  </div>
                )}
              </div>
            </div>

            {/* Tips */}
            <div className="bg-blue-50 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-blue-900 mb-3">使用技巧</h3>
              <ul className="space-y-2 text-sm text-blue-800">
                <li>• 詳細描述場景的視覺元素和氛圍</li>
                <li>• 選擇合適的技術來強化情感表達</li>
                <li>• 考慮音頻元素對場景的影響</li>
                <li>• 生成的提示詞可直接用於AI圖像生成</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
} 