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
      "Automatically records calls for quality assurance, training, and compliance, providing insights into customer interactions.",
  },
  {
    title: "Affordable Numbers",
    description:
      "Low-cost tracking numbers enable budget-friendly call attribution for marketing campaigns.",
    // link: "https://netflix.com",
  },
  {
    title: "Dynamic Number Insertion",
    description:
      "Displays unique phone numbers based on traffic source to track marketing campaign performance.",
    // link: "https://google.com",
  },
  {
    title: "Real-Time Analytics",
    description:
      "Instantly delivers call data on volume, source, and duration for quick, data-driven decisions.",
    // link: "https://meta.com",
  },
  {
    title: "Advanced Call Flows",
    description:
      "Customizable routing like IVR and geo-routing ensures callers reach the right team efficiently.",
    // link: "https://amazon.com",
  },
  {
    title: "Call Tracking",
    description:
      "Monitors and attributes inbound calls to specific marketing channels, optimizing campaign performance and ROI.",
    // link: "https://microsoft.com",
  },
];
