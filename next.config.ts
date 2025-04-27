import type { NextConfig } from 'next';
import path from 'path';

const nextConfig: NextConfig = {
  pageExtensions: ['tsx', 'jsx'],
  devIndicators: false,
  webpack: config => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': path.resolve(__dirname, './src'),
      '@_app': path.resolve(__dirname, './src/_app'),
      '@_pages': path.resolve(__dirname, './src/_pages'),
      '@widgets': path.resolve(__dirname, './src/widgets'),
      '@features': path.resolve(__dirname, './src/features'),
      '@entities': path.resolve(__dirname, './src/entities'),
      '@shared': path.resolve(__dirname, './src/shared'),
    };
    return config;
  },
};

export default nextConfig;
