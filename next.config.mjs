const isGithubPages = process.env.BUILD_TARGET === "github-pages";
const repoName = "haven-visa";

// SEO metadata (canonical URL, OG/Twitter tags, sitemap) needs an absolute
// site URL. The GH Pages preview has a fixed, known URL; the real
// production site's domain isn't decided yet, so that one is env-driven —
// set NEXT_PUBLIC_SITE_URL in Vercel once it is. Until then it falls back
// to the GH Pages URL too, which is wrong for production but at least
// valid, so metadata never silently breaks.
const ghPagesUrl = `https://publifix.github.io/${repoName}`;
const siteUrl = isGithubPages ? ghPagesUrl : process.env.NEXT_PUBLIC_SITE_URL || ghPagesUrl;

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    NEXT_PUBLIC_SITE_URL: siteUrl,
    // The GH Pages preview is a staging environment, not the canonical
    // production URL — indexing it too would create duplicate-content
    // competition with the real domain once one exists.
    NEXT_PUBLIC_IS_PREVIEW: isGithubPages ? "true" : "false",
  },
  // Static export for GitHub Pages previews only. The real deploy target
  // (Vercel) builds normally, with full Next.js SSR/server actions
  // available once Supabase is wired up.
  ...(isGithubPages && {
    output: "export",
    basePath: `/${repoName}`,
    assetPrefix: `/${repoName}/`,
    images: { unoptimized: true },
    env: {
      NEXT_PUBLIC_BASE_PATH: `/${repoName}`,
      NEXT_PUBLIC_SITE_URL: siteUrl,
      NEXT_PUBLIC_IS_PREVIEW: "true",
    },
  }),
};

export default nextConfig;
