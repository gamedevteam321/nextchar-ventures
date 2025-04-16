import React from 'react';
import { getImagePath } from "@/lib/utils";

const SectionDivider: React.FC = () => {
  return (
    <div className="py-[50px] md:py-[150px] px-0">
      <img 
        src={getImagePath("/Section-line.png")}
        alt="Section Divider" 
        className="w-full h-auto" 
      />
    </div>
  );
};

export default SectionDivider; 