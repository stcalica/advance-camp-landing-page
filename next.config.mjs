const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  // Enables static exports
  //output: "export",
  reactStrictMode: true,
  images: {
    unoptimized: true, // Disable Image Optimization
    domains: ["files.stripe.com"],

  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "Access-Control-Allow-Credentials", value: "true" },
          { key: "Access-Control-Allow-Origin", value: "*" },
          { key: "Access-Control-Allow-Methods", value: "GET,DELETE,PATCH,POST,PUT" },
          { key: "Access-Control-Allow-Headers", value: "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version" },
          { key: "Access-Control-Max-Age", value: "1800" }
        ]
      }
    ]
  }

  // Conditionally set basePath and assetPrefix for GitHub Pages in production
  // basePath: isProd ? '/advance-camp-' : '',
  // assetPrefix: isProd ? '/your-repo-name/' : '',
};

export default nextConfig;
