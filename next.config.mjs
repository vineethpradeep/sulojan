const isProd = process.env.NODE_ENV === "production";

const basePath = isProd ? "/sulojan.org" : "";

// const nextConfig = {
//   basePath,
//   assetPrefix: basePath,
//   images: {
//     unoptimized: true,
//   },
//   trailingSlash: true,
//   eslint: {
//     ignoreDuringBuilds: true,
//   },
//   env: {
//     NEXT_PUBLIC_BASE_PATH: basePath,
//   },
// };
const nextConfig = {
  output: "standalone",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  reactStrictMode: true,
};

export default nextConfig;
