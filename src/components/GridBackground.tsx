import React from "react";

export function GridBackground() {
  return (
    <div className="absolute inset-0 -z-20 overflow-hidden pointer-events-none select-none">
      {/* Animated grid lines container */}
      <div className="absolute inset-0 grid-lines" />
      
      {/* Radial ambient glow lights */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-primary/10 blur-[120px] dark:bg-primary/5" />
      <div className="absolute bottom-[20%] right-[-10%] w-[60%] h-[60%] rounded-full bg-secondary/10 blur-[150px] dark:bg-secondary/5" />
      <div className="absolute top-[30%] left-[50%] -translate-x-1/2 w-[40%] h-[40%] rounded-full bg-accent/10 blur-[130px] dark:bg-accent/5 animate-pulse-slow" />
    </div>
  );
}
