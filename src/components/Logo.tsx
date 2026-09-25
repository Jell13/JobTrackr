import React from "react";

const Logo = () => {
  return (
    <div className="flex gap-2 items-center">
      <div className="w-7 h-7 rounded-md bg-avatar-1-text flex justify-center items-center">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
          <rect x="3" y="10" width="4" height="11" rx="1" fill="white" />
          <rect x="10" y="5" width="4" height="16" rx="1" fill="white" />
          <rect x="17" y="13" width="4" height="8" rx="1" fill="white" />
        </svg>
      </div>
      JobTrackr
    </div>
  );
};

export default Logo;
