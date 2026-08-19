import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Coding Profiles",
  description: "Algorithmic problem-solving profiles and competitive programming statistics for Shravan Jain across Codeforces, LeetCode, and GeeksforGeeks.",
  alternates: {
    canonical: "/coding",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
