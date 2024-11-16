import { ArrowRightIcon } from "@radix-ui/react-icons";

import { cn } from "../utils/utils";
import AnimatedShinyText from "../components/ui/animated-shiny-text";
import React from "react";

export const PortcullisTag: React.FC = () => {
  return (
    <div className="z-10 flex min-h-64 items-center justify-start mx-4 my-2">
      <div
        className={cn(
          "group rounded-full bg-gray-200 text-sm text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:bg-neutral-900 dark:hover:bg-neutral-800",
        )}
      >
          <img src='/portcullis.svg' alt="Portcullis Logo" className="mr-2 h-6 w-6" />
          <span className="text-black">Powered by Portcullis</span>
          <ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
      </div>
    </div>
  );
}

