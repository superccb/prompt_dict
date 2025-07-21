import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: '電影拍攝指南 - Movie Maker Guide',
  description: '學習電影拍攝技術，掌握視覺敘事語言，創建專業的場景描述',
  keywords: '電影拍攝, 攝像機技術, 燈光設計, 音頻處理, 視覺敘事, AI提示',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-TW">
      <body className={inter.className}>
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
          {children}
        </div>
      </body>
    </html>
  )
} 