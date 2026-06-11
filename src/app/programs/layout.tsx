import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Programs | IronForge Gym",
  description: "Explore our elite training programs: Strength, Cardio, HIIT, Combat, CrossFit, and Recovery.",
};

export default function ProgramsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
