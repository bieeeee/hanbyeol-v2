/** @type {import('next').NextConfig} */
// const nextConfig = {
// }
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: "true",
  openAnalyzer: "true",
});

module.exports = withBundleAnalyzer({});
