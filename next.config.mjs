/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: '**',
            },
        ],
      },
  optimizeFonts: true,
  experimental: {
    optimizeCss: true,
  },
};

export default nextConfig;
