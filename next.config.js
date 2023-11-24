/** @type {import('next').NextConfig} */

module.exports = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });
    return config;
  },
  headers() {
    return [
      {
        source: "/public/Build-lol-logo.webp",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=604800, immutable",
          },
        ],
      },
    ];
  },
  redirects() {
    return [
      {
        source: "/",
        destination: "/ChampSelect",
        permanent: true,
      },
    ];
  },

  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "Build-lol.com",
        port: "",
        pathname: "/public/**",
      },
    ],
  },
};
