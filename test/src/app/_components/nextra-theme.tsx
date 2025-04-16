import type { PageMapItem } from 'nextra'
import Banner from './banner'
import type { FC, ReactNode } from 'react'
import { Footer } from './footer'
import { Navbar } from './navbar'
import { Sidebar } from './sidebar'

export const NextraTheme: FC<{
  children: ReactNode
  pageMap: PageMapItem[]
}> = ({ children, pageMap }) => {
  return (
    <>
      <Banner />
      <Navbar pageMap={pageMap} />
      <div className="nextra-container">
        <Sidebar pageMap={pageMap} />
        <main className="nextra-content">
          {children}
        </main>
      </div>
      <Footer />
    </>
  )
} 