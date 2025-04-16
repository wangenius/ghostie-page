'use client'

import { usePathname } from 'next/navigation'
import type { PageMapItem } from 'nextra'
import { Anchor } from 'nextra/components'
import { normalizePages } from 'nextra/normalize-pages'
import type { FC } from 'react'

export const Sidebar: FC<{ pageMap: PageMapItem[] }> = ({ pageMap }) => {
  const pathname = usePathname()
  const { docsDirectories } = normalizePages({
    list: pageMap,
    route: pathname
  })

  return (
    <div className="nextra-sidebar">
      <h3>文档导航</h3>
      <ul className="nextra-sidebar-items">
        {docsDirectories.map(function renderItem(item) {
          const route =
            item.route || ('href' in item ? (item.href as string) : '')
          const { title } = item
          const isActive = pathname === route
          
          return (
            <li key={route} className="nextra-sidebar-item">
              {'children' in item ? (
                <details open>
                  <summary className="nextra-sidebar-heading">{title}</summary>
                  <ul className="nextra-sidebar-children">
                    {item.children.map(child => renderItem(child))}
                  </ul>
                </details>
              ) : (
                <Anchor 
                  href={route} 
                  className={`nextra-sidebar-link ${isActive ? 'active' : ''}`}
                >
                  {title}
                </Anchor>
              )}
            </li>
          )
        })}
      </ul>
    </div>
  )
} 