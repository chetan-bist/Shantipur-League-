/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    
    ignoreBuildErrors: true,
  },
  devIndicators: {
    buildActivity: false,
  },
  images: {
    unoptimized: true,
  },
  experimental: {
    optimizePackageImports: ['lucide-react', 'date-fns'],
  },
}


export default nextConfig


