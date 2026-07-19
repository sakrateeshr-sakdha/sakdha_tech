"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowUp, MessageSquare } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col space-y-3">
      <AnimatePresence>
        {isVisible && (
          <>
            {/* Quick Contact CTA Bubble */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 20 }}
              transition={{ duration: 0.3 }}
            >
              <Link
                href="/contact"
                className="flex items-center space-x-2 px-4 py-3 rounded-full bg-primary text-white shadow-xl hover:bg-primary-hover hover:scale-105 transition-all cursor-pointer group"
              >
                <MessageSquare className="h-5 w-5 animate-pulse" />
                <span className="text-xs font-bold whitespace-nowrap hidden sm:inline">Let's Talk</span>
              </Link>
            </motion.div>

            {/* Back to Top Button */}
            <motion.button
              onClick={scrollToTop}
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 20 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="p-3 rounded-full border border-border/50 glass hover:bg-muted/80 text-foreground shadow-lg flex items-center justify-center cursor-pointer hover:scale-105 transition-all self-end"
              aria-label="Back to top"
            >
              <ArrowUp className="h-5 w-5" />
            </motion.button>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
