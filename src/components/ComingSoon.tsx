"use client";
import React from "react";
import { Button } from "./ui/moving-border";

export function ComingSoon() {
  return (
    <div>
      {/* <Button
        borderRadius="1.75rem"
        className=" dark:text-gray-100 hover:scale-110 transition-all duration-300 ease-in-out cursor-pointer  text-4xl  border  text-gray-700 rounded-full px-2 py-1 inline-block"
      >
        Coming Soon
      </Button> */}
      <Button
        borderRadius="1.75rem"
        className="bg-white text-2xl sm:text-4xl text-gray-700 dark:bg-slate-900 dark:text-gray-100 px-2 py-1 border-neutral-200 dark:border-slate-800"
      >
        Coming Soon
      </Button>
    </div>
  );
}
