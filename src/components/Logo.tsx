import Image from "next/image";
import logoMask from "../../public/logo/logo-mask.png";

import React from "react";
import { leagueSpartan } from "./ui/fonts";

export default function Logo() {
  return (
    <div className="inline-flex z-10 -space-x-2   items-center ">
      <Image src={logoMask} alt="CallGauge" className="w-24 " priority />
      <h2
        className={`${leagueSpartan.className} text-2xl  text-orange-600/90  `}
      >
        <span className="text-cyan-950">Call</span>
        Gauge
      </h2>
    </div>
  );
}
