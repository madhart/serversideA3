/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  output: 'export',
  reactCompiler: true,
  images:{
    domains: ["rickandmortyapi.com"],
    unoptimized: true
  }
};

export default nextConfig;
