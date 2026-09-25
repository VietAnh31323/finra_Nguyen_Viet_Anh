import type { NextConfig } from "next";

const isGithubActions = process.env.GITHUB_ACTIONS === "true";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: isGithubActions ? "/finra_Nguyen_Viet_Anh" : "",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
