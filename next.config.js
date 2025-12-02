const { withContentCollections } = require("@content-collections/next")

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",          // <- static HTML export for GitHub Pages
  images: {
    unoptimized: true,       // <- required for static export + next/image
    remotePatterns: [
      {
        protocol: "https",
        hostname: "utfs.io"
      }
    ]
  }
}

// withContentCollections must be the outermost plugin
module.exports = withContentCollections(nextConfig)
