import { ComingSoon } from "@/components/ComingSoon";
import { TextFlip } from "@/components/ContainerTextFlip";
import { HeroHighlightDemo } from "@/components/HeroHighlightDemo";
import Logo from "@/components/Logo";
import SocialLinks from "@/components/SocialLinks";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroHighlightDemo />
      <div className=" flex items-center justify-between p-2 sm:p-8">
        <Logo />
        <div className="z-10">{/* <ModeToggle /> */}</div>
      </div>
      {/* Main Content */}
      <main className="relative  flex-grow text-gray-700 dark:text-white  max-w-7xl mx-auto text-center px-4 sm:px-6 py-8 sm:py-24 lg:py-20">
        {/* <h2 className=" dark:text-gray-100 hover:scale-110 transition-all duration-300 ease-in-out cursor-pointer  text-4xl  border  text-gray-700 rounded-full px-2 py-1 inline-block">
          Coming Soon
        </h2> */}
        <div className="mb-6">
          <ComingSoon />
        </div>
        <div className="space-y-12">
          {/* Hero Section */}
          <div className="space-y-6 ">
            <TextFlip />

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
