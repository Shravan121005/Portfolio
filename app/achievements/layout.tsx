import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Achievements & Certifications",
  description: "Professional certifications, achievements, and technical credentials earned by Shravan Jain in Machine Learning and Software Engineering.",
  alternates: {
    canonical: "/achievements",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
