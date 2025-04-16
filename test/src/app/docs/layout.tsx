import { Head } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import "@/style/custom.css"
import { NextraTheme } from '../_components/nextra-theme'

export const metadata = {
  title: 'Ghostie 文档',
  description: 'Ghostie 是一款高性能的多平台桌面软件',
}

export default async function DocsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pageMap = await getPageMap()

  return (
    <html
      lang="zh-CN"
      dir="ltr"
      suppressHydrationWarning
    >

      <body>
        <NextraTheme pageMap={pageMap}>
          {children}
        </NextraTheme>
      </body>
    </html>
  )
} 