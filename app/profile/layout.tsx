import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Profile",
  description: "Technical profile, engineering toolkit, leadership experience, and problem-solving statistics for Shravan Jain.",
  alternates: {
    canonical: "/profile",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
