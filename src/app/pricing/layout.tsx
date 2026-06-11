import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Membership Pricing | IronForge Gym",
  description: "View our simple, straightforward pricing plans. Choose Basic, Pro, or Elite and start training.",
};

export default function PricingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
