"use client";

import { ContainerTextFlip } from "@/components/ui/container-text-flip";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";

export function TextFlip() {
  const words = [
    "Higher quality leads",
    "Reduced costs",
    "Increased deal closures",
    "Your market advantage",
    "High performing campaigns",
  ];
  return (
    <motion.h1
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      className={cn(
        "relative mb-6 text-2xl  sm:text-4xl text-center leading-normal font-semibold tracking-tight text-zinc-700 md:text-5xl lg:text-6xl  dark:text-zinc-100"
      )}
      layout
    >
      <div className="text-center ">
        <span className="text-transparent  font-semibold  leading-tight tracking-tight  bg-clip-text bg-gradient-to-r from-15% from-cyan-950 to-orange-600/90">
          Call tracking + AI that transforms calls into{" "}
        </span>
        <ContainerTextFlip
          className="text-center font-semibold"
          words={words}
        />
        {/* <Blips /> */}
      </div>
    </motion.h1>
  );
}
