import { HeroHighlightDemo } from "@/components/HeroHighlightDemo";
import Logo from "@/components/Logo";
import { ModeToggle } from "@/components/ModeToggle";
import SocialLinks from "@/components/SocialLinks";
import { motion } from "motion/react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroHighlightDemo />
      <div className=" flex items-center justify-between p-8">
        <Logo />
        <div className="z-10">
          <ModeToggle />
        </div>
      </div>
      {/* Main Content */}
      <main className="relative  flex-grow text-gray-700 dark:text-white  max-w-6xl mx-auto text-center px-4 sm:px-6 py-20 sm:py-24 lg:py-20">
        <h2 className="border dark:text-gray-100 hover:scale-110 transition-all duration-300 ease-in-out cursor-pointer text-gray-700 border-gray-700   dark:border-white rounded-full px-2 py-1 inline-block">
          Coming Soon
        </h2>
        <div className="space-y-12">
          {/* Hero Section */}
          <div className="space-y-6 ">
            <h2 className="text-gray-700 dark:text-white text-4xl sm:text-5xl md:text-7xl font-extrabold  leading-tight tracking-tight">
              <span className="text-transparent  bg-clip-text bg-gradient-to-r from-blue-400 to-pink-400">
                CallGauge
              </span>{" "}
              Redefines Call Tracking
            </h2>
            <p
              className={` text-lg sm:text-xl text-gray-600 dark:text-gray-100 max-w-3xl mx-auto leading-relaxed`}
            >
              Unlock powerful call analytics, seamless integrations, and
              AI-driven insights to elevate your customer interactions. The
              future of call tracking is almost here.
            </p>
          </div>
        </div>
      </main>
      {/* Footer */}
      <footer className="z-10  py-8 mx-auto">
        <SocialLinks />
        <p
          className={` mt-6 text-sm text-center text-black/50 dark:text-white/50`}
        >
          © {new Date().getFullYear()} CallGauge. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
