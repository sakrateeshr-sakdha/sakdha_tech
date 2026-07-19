"use client";

import React from "react";
import { motion } from "framer-motion";

export function Marquee() {
  const logos = [
    "SaaSify",
    "CloudNode",
    "FinFlow",
    "DataPulse",
    "VerteX",
    "QuantLabs",
    "ApexCorp",
    "DeltaStack",
    "InvenHQ",
    "Optima"
  ];

  return (
    <div className="w-full overflow-hidden relative py-6 select-none">
      {/* Gradient masks for smooth edges */}
      <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

      <motion.div
        className="flex gap-16 whitespace-nowrap"
        animate={{ x: [0, -1200] }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 30,
        }}
      >
        {/* Loop thrice to ensure coverage and seamless animation */}
        {[...logos, ...logos, ...logos].map((logo, idx) => (
          <div
            key={idx}
            className="flex items-center space-x-2 text-muted-foreground/50 dark:text-muted-foreground/35 font-heading font-extrabold tracking-widest text-lg sm:text-xl uppercase hover:text-primary transition-colors duration-300"
          >
            <span className="text-primary/50 text-base">✦</span>
            <span>{logo}</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
