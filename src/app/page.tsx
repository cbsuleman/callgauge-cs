import { Card } from "@/components/Card";
import { ComingSoon } from "@/components/ComingSoon";
import { TextFlip } from "@/components/ContainerTextFlip";
import { HeroHighlightDemo } from "@/components/HeroHighlightDemo";
import Logo from "@/components/Logo";
import SocialLinks from "@/components/SocialLinks";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroHighlightDemo />
      <div className=" flex items-center justify-between p-2 ">
        <Logo />
        <div className="z-10">{/* <ModeToggle /> */}</div>
      </div>
      {/* Main Content */}
      <main className="relative  flex-grow text-gray-700   max-w-7xl mx-auto text-center px-4 sm:px-6 py-8 sm:py-2 ">
        <div className="mb-6">
          <ComingSoon />
        </div>
        <div className="space-y-12">
          {/* Hero Section */}
          <div className="space-y-6 ">
            <TextFlip />

            <p
              className={` text-lg sm:text-xl text-gray-600  max-w-3xl mx-auto leading-relaxed`}
            >
              Drive growth with smart call recording, dynamic tracking, and
              real-time insights.
            </p>
          </div>
          <div>
            <h1 className="text-4xl text-gray-700 my-6 font-semibold">
              Features We Provide
            </h1>
            <Card />
          </div>
        </div>
      </main>
      {/* Footer */}
      <footer className="z-10  py-8 mx-auto">
        <SocialLinks />
        <p className={` mt-6 text-sm text-center text-black/50 `}>
          © {new Date().getFullYear()} CallGauge. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
