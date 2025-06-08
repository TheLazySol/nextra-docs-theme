import nextra from 'nextra'
 
const withNextra = nextra({
  contentDirBasePath: '/src/app/content'
})
 
export default withNextra({
  turbopack: {
    resolveAlias: {
      'next-mdx-import-source-file': './src/mdx-components.js'
    }
  }
})