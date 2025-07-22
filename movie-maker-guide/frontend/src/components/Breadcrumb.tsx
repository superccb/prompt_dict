'use client'

import { ChevronRight, Home } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface BreadcrumbItem {
  label: string
  href?: string
}

interface BreadcrumbProps {
  items?: BreadcrumbItem[]
  showHome?: boolean
}

export default function Breadcrumb({ items = [], showHome = true }: BreadcrumbProps) {
  const pathname = usePathname()
  
  // 如果沒有提供 items，根據路徑自動生成
  const breadcrumbItems: BreadcrumbItem[] = items.length > 0 ? items : generateBreadcrumbs(pathname, showHome)

  return (
    <nav className="flex items-center space-x-2 text-sm text-gray-600 mb-6">
      {breadcrumbItems.map((item, index) => (
        <div key={index} className="flex items-center">
          {index > 0 && <ChevronRight className="w-4 h-4 mx-2 text-gray-400" />}
          {item.href ? (
            <Link
              href={item.href}
              className="hover:text-primary-600 transition-colors flex items-center space-x-1"
            >
              {index === 0 && showHome && <Home className="w-4 h-4" />}
              <span>{item.label}</span>
            </Link>
          ) : (
            <span className="text-gray-900 font-medium flex items-center space-x-1">
              {index === 0 && showHome && <Home className="w-4 h-4" />}
              <span>{item.label}</span>
            </span>
          )}
        </div>
      ))}
    </nav>
  )
}

function generateBreadcrumbs(pathname: string, showHome: boolean): BreadcrumbItem[] {
  const segments = pathname.split('/').filter(Boolean)
  const breadcrumbs: BreadcrumbItem[] = []

  // 添加首頁
  if (showHome) {
    breadcrumbs.push({
      label: '首頁',
      href: '/'
    })
  }

  // 根據路徑生成麵包屑
  let currentPath = ''
  segments.forEach((segment, index) => {
    currentPath += `/${segment}`
    
    // 將路徑轉換為中文標籤
    const label = getPathLabel(segment)
    
    // 最後一個項目不添加鏈接
    const isLast = index === segments.length - 1
    breadcrumbs.push({
      label,
      href: isLast ? undefined : currentPath
    })
  })

  return breadcrumbs
}

function getPathLabel(segment: string): string {
  const pathLabels: Record<string, string> = {
    'moodboard': '技術展示',
    'gallery': '視覺畫廊',
    'workshop': '互動工作坊',
    'prompt-builder': '提示構建器',
    'examples': '經典示例',
    'reference': '參考資料'
  }
  
  return pathLabels[segment] || segment
} 