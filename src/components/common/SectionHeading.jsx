import React from "react";
import { cn } from "@/lib/utils";

const SectionHeading = ({ children, className }) => {
  return (
    <h2
      className={cn(
        "text-2xl md:text-3xl  lg:text-5xl font-semibold text-center text-primary mb-12",
        className
      )}
    >
      {children}
    </h2>
  );
};

export default SectionHeading;
