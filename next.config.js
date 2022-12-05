/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["localhost", "storage.googleapis.com"],
  },
  experimental: { appDir: true },
  async redirects() {
    return [
      {
        source: "/about",
        destination: "/#about__section",
        permanent: true,
      },
      {
        source: "/contact",
        destination: "/#contact__section",
        permanent: true,
      },
      {
        source: "/projects",
        destination: "/#projects__section",
        permanent: true,
      },
      {
        source: "/skills",
        destination: "/#skills__section",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
