const nextConfig = {
  experimental: {
    serverActions: { bodySizeLimit: '1000mb' },
  },
  images: {
    remotePatterns: [
      {
        hostname: 'avatars.githubusercontent.com',
      },
    ],
  },
};

export default nextConfig;
