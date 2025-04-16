import type { FC } from 'react'

export const Footer: FC = () => {
  return (
    <footer className="nextra-footer">
      © {new Date().getFullYear()} Ghostie - 版权所有
    </footer>
  )
} 