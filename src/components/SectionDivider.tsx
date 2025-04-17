import React from 'react';
import { getImagePath } from "@/lib/utils";

const SectionDivider: React.FC = () => {
  return (
    <div className="py-[5px] md:py-[50px] px-0">
      <img 
        src={getImagePath("/Section-line.png")}
        alt="Section Divider" 
        className="w-full h-auto" 
      />
    </div>
  );
};

export default SectionDivider; 