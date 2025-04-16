import nextra from 'nextra'

// Nextra 4.x 配置方式 - 保持简单
const withNextra = nextra({
  // 简单配置
  mdxOptions: {
    remarkPlugins: [],
    rehypePlugins: []
  }
})

export default withNextra({
  // Next.js 配置选项
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'mdx', 'md']
})