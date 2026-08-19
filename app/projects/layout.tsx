import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
  description: "Machine Learning, Computer Vision, and Full-Stack Engineering projects developed by Shravan Jain, including DeepGuard AI and BugInsight.",
  alternates: {
    canonical: "/projects",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
