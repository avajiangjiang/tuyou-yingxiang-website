/** @type {import('next').NextConfig} */
const isGithubPages = process.env.GITHUB_PAGES === "true";

const nextConfig = {
  ...(isGithubPages && {
    output: "export",
    basePath: "/tuyou-yingxiang-website",
    trailingSlash: true,
  }),
  images: {
    unoptimized: isGithubPages,
    remotePatterns: [],
  },
};

export default nextConfig;
