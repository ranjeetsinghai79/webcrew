import type { NextConfig } from 'next'

const config: NextConfig = {
  // Static export for CF Pages — only in production (dev server needs SSR mode)
  ...(process.env.NODE_ENV === 'production' ? { output: 'export' } : {}),
  images: { unoptimized: true },
  devIndicators: false,
}

export default config
