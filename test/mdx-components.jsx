import { useMDXComponents as getNextraComponents } from 'nextra/mdx-components'
import { TOC } from './src/app/_components/toc'

const defaultComponents = getNextraComponents({
  wrapper({ children, toc }) {
    return (
      <div className="nextra-page-wrapper">
        <div className="nextra-page-content">{children}</div>
        <TOC toc={toc} />
      </div>
    )
  }
})

export const useMDXComponents = components => ({
  ...defaultComponents,
  ...components
}) 