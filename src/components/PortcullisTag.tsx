import { cn } from "../utils/utils";
import React from "react";
import { ShinyButton } from "./ui/shiny-button";

export const PortcullisTag = () => {
  return (
    <div className="flex justify-center mt-4">
      <ShinyButton className="border-2 border-transparent bg-gradient-to-r from-[#faff69] to-[#171717]">
        <a
          href="https://www.runportcullis.co"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-end group"
        >
          <div className="flex items-center gap-2">
            <img
              src="/portcullis.svg"
              alt="Portcullis"
              className="w-4 h-4 group-hover:scale-110 transition-transform duration-200"
            />
            <span
              className={cn(
                "text-sm font-semibold bg-gradient-to-r from-[#faff69] to-[#171717]",
                "bg-clip-text text-transparent",
                "animate-gradient bg-[length:200%_auto]",
                "group-hover:bg-[length:300%_auto] transition-all duration-200"
              )}
            >
              Powered by Portcullis
            </span>
          </div>
        </a>
      </ShinyButton>
    </div>
  );
}; 