import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  compiler: {
    styledComponents: true,
  },
  experimental: {
    authInterrupts: true,
  },
}

export default nextConfig
