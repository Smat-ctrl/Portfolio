const { withContentCollections } = require("@content-collections/next")

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "utfs.io"
      }
    ]
  },
  // Important for project pages — set to repository name (case-sensitive)
  // GitHub Pages URLs are case-sensitive; this must match the repository name
  basePath: "/Portfolio",
  assetPrefix: "/Portfolio/"
}

module.exports = withContentCollections(nextConfig)
