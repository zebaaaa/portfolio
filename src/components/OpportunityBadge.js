// src/components/OpportunityBadge.js

import React from "react";

function OpportunityBadge() {
  return (
    // Outer container for the rounded capsule
    <div className="
      inline-flex items-center 
      py-2 px-4 mt-6 
      rounded-full shadow-md 
      bg-white
    ">
      
      {/* The green dot (status indicator) */}
      <div className="
        w-3 h-3 mr-2 
        bg-green-500 
        rounded-full 
        shadow-inner 
        relative
      ">
        {/* Optional: The lighter glow/pulse effect */}
        {/* The 'animate-ping' class creates the pulsating effect */}
        <span className="
          absolute inset-0 
          bg-green-500 
          opacity-30 
          rounded-full 
          animate-ping
        "></span>
      </div>
      
      {/* The text label */}
      <span className="
        text-base font-medium 
        text-[#474747]
      ">
        Open to Opportunities
      </span>
    </div>
  );
}

export default OpportunityBadge;