const isGithubPages = process.env.BUILD_TARGET === "github-pages";
const repoName = "haven-visa";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Static export for GitHub Pages previews only. The real deploy target
  // (Vercel) builds normally, with full Next.js SSR/server actions
  // available once Supabase is wired up.
  ...(isGithubPages && {
    output: "export",
    basePath: `/${repoName}`,
    assetPrefix: `/${repoName}/`,
    images: { unoptimized: true },
    env: { NEXT_PUBLIC_BASE_PATH: `/${repoName}` },
  }),
};

export default nextConfig;
