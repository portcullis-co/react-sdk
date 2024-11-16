import React from "react";
import { motion } from "framer-motion";
import { cn } from "../utils/utils";

export const PortcullisTag = () => {
  return (
    <div className="flex justify-center mt-4">
      <motion.a
        href="https://www.runportcullis.co"
        target="_blank"
        rel="noopener noreferrer"
        className="group relative inline-flex items-center gap-2 rounded-full bg-black px-4 py-2 transition-all hover:scale-105"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        whileHover={{ boxShadow: "0 0 20px rgba(250, 255, 105, 0.2)" }}
        style={{
          background: "linear-gradient(90deg, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.9) 100%)",
          border: "1px solid rgba(255, 255, 255, 0.1)",
          backdropFilter: "blur(10px)",
        }}
      >
        <img
          src="/portcullis.svg"
          alt="Portcullis"
          className="h-5 w-5 transition-transform duration-300 group-hover:scale-110"
        />
        <span className="text-sm font-medium">
          <span 
            className="bg-gradient-to-r from-[#faff69] to-[#faff69]/50 bg-clip-text text-transparent"
            style={{
              backgroundSize: "200% auto",
              animation: "shine 2s linear infinite",
            }}
          >
            Powered by
          </span>
          {" "}
          <span className="ml-1 text-white/90">Portcullis</span>
        </span>
        <motion.div
          className="absolute inset-0 rounded-full opacity-30"
          style={{
            background: `linear-gradient(90deg, transparent, #faff69, transparent)`,
            backgroundSize: "200% 100%",
          }}
          animate={{
            backgroundPosition: ["200% 0", "-200% 0"],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </motion.a>
      <style>{`
        @keyframes shine {
          to {
            backgroundPosition: 200% center;
          }
        }
      `}</style>
    </div>
  );
};

export default PortcullisTag;