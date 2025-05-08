"use client";
import React from "react";
import { Button } from "./ui/moving-border";

export function ComingSoon() {
  return (
    <div>
      <Button
        borderRadius="1.75rem"
        className="bg-white text-2xl sm:text-4xl text-gray-700  px-2 py-1 border-neutral-200 "
      >
        Coming Soon
      </Button>
    </div>
  );
}
