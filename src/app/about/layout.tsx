import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | IronForge Gym",
  description: "Learn about IronForge Gym's history, mission, and our 10,000 sq ft facility in Mumbai.",
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
