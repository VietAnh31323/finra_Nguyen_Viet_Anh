import type { Metadata } from "next";
import HomePage from "@/app/page";

// Same content as the home page, so point search engines at "/" to avoid duplicate content
export const metadata: Metadata = {
  alternates: {
    canonical: "/",
  },
};

export default function VeChungToiPage() {
  return <HomePage />;
}
