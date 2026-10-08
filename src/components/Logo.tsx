import React from "react";

type LogoProps = {
  size?: "sm" | "md" | "lg";
};

const sizes = {
  sm: { box: "w-7 h-7", icon: 15, text: "text-xl" },
  md: { box: "w-10 h-10", icon: 21, text: "text-2xl" },
  lg: { box: "w-13 h-13", icon: 27, text: "text-3xl" },
};

const Logo = ({ size = "sm" }: LogoProps) => {
  const { box, icon, text } = sizes[size];
  return (
    <div className="flex gap-2.5 items-center">
      <div className={`${box} rounded-md bg-avatar-1-text flex justify-center items-center`}>
        <svg width={icon} height={icon} viewBox="0 0 24 24" fill="none">
          <rect x="3" y="10" width="4" height="11" rx="1" fill="white" />
          <rect x="10" y="5" width="4" height="16" rx="1" fill="white" />
          <rect x="17" y="13" width="4" height="8" rx="1" fill="white" />
        </svg>
      </div>
      <p className={`font-bold ${text}`}>JobTrackr</p>
    </div>
  );
};

export default Logo;