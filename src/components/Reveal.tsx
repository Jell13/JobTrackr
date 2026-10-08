import React from "react";
import { useReveal } from "../lib/hooks/useReveal";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
};

const Reveal = ({ children, className = "", delay = 0 }: RevealProps) => {
  const { ref, visible } = useReveal<HTMLDivElement>();
  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ease-out ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      } ${className}`}
    >
      {children}
    </div>
  );
};

export default Reveal;