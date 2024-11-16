import { cn } from "../utils/utils";
import React from "react";
import { Card } from "./ui/card";

export const PortcullisTag = () => {
  return (
    <div className="flex justify-center mt-4">
      <Card className="flex items-center gap-2 p-2 rounded-full shadow-md bg-white dark:bg-gray-800">
        <a
          href="https://runportcullis.com"
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
      </Card>
    </div>
  );
}; 