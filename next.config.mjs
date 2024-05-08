const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  // Enables static exports
  output: "export",
  reactStrictMode: true,
  images: {
    unoptimized: true // Disable Image Optimization
  }

  // Conditionally set basePath and assetPrefix for GitHub Pages in production
  // basePath: isProd ? '/advance-camp-' : '',
  // assetPrefix: isProd ? '/your-repo-name/' : '',
};

export default nextConfig;
