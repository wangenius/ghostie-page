import type { Heading } from 'nextra'
import type { FC } from 'react'

export const TOC: FC<{ toc: Heading[] }> = ({ toc }) => {
  return (
    <div className="nextra-toc" style={{ padding: 20 }}>
      <h3>目录</h3>
      <ul>
        {toc.map(heading => (
          <li key={heading.id}>
            <a href={`#${heading.id}`}>{heading.value}</a>
          </li>
        ))}
      </ul>
    </div>
  )
} 