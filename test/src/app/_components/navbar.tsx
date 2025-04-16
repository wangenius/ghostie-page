'use client'

import { usePathname } from 'next/navigation'
import type { PageMapItem } from 'nextra'
import { Anchor } from 'nextra/components'
import { normalizePages } from 'nextra/normalize-pages'
import type { FC } from 'react'

export const Navbar: FC<{ pageMap: PageMapItem[] }> = ({ pageMap }) => {
  const pathname = usePathname()
  const { topLevelNavbarItems } = normalizePages({
    list: pageMap,
    route: pathname
  })

  return (
    <nav >
      <div className='flex justify-between items-center'>
        <a href="/" className="nextra-navbar-logo">
          <img src="/img/icon.svg" width="24" alt="Ghostie Logo" />
          <span style={{ marginLeft: '.4em', fontWeight: 800 }}>Ghostie</span>
        </a>
        <ul className="nextra-navbar-items">
          {topLevelNavbarItems.map(item => {
            const route = item.route || ('href' in item ? item.href! : '')
            return (
              <li key={route} className="nextra-navbar-item">
                <Anchor href={route} className="nextra-navbar-link">
                  {item.title}
                </Anchor>
              </li>
            )
          })}
        </ul>
        <div className="nextra-navbar-right">
          <a href="https://github.com/wanggenius/ghostie" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        </div>
      </div>
    </nav>
  )
} 