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
  // Important for project pages under /portfolio
  basePath: "/portfolio",
  assetPrefix: "/portfolio/"
}

module.exports = withContentCollections(nextConfig)
