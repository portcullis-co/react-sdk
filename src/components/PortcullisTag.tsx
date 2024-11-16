import { ArrowRightIcon } from "@radix-ui/react-icons";

import { cn } from "../utils/utils";
import AnimatedShinyText from "../components/ui/animated-shiny-text";
import React from "react";

export const PortcullisTag: React.FC = () => {
  return (
    <div className="flex items-center justify-start mx-4 my-2">
      <img src="/portcullis.svg" alt="Portcullis Logo" className="h-6 w-6" />
      <span className="text-sm text-black px-2 py-1">
        Powered by Portcullis
      </span>
    </div>
  );
}

