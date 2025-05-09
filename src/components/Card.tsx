"use client";

import { HoverEffect } from "./ui/card-hover-effect";

export function Card() {
  return (
    <div className="max-w-7xl mx-auto ">
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
  {
    title: "Call Recording",
    description:
      "Seamlessly records all calls for quality control, training, and compliance, offering valuable insights into customer interactions.",
  },
  {
    title: "Affordable Numbers",
    description:
      "Cost-effective tracking numbers for accurate call attribution, perfect for budget-conscious marketing campaigns.",
  },
  {
    title: "Dynamic Number Insertion",
    description:
      "Shows unique phone numbers based on visitor source, enabling precise tracking of marketing campaign effectiveness.",
  },
  {
    title: "Real-Time Analytics",
    description:
      "Provides instant call metrics on volume, source, and duration, empowering rapid, data-driven decisions.",
  },
  {
    title: "Advanced Call Flows",
    description:
      "Tailored call routing with features like IVR and geo-routing to connect callers to the right team efficiently.",
  },
  {
    title: "Call Tracking",
    description:
      "Tracks and attributes inbound calls to specific marketing channels, boosting campaign performance and ROI.",
  },
];
