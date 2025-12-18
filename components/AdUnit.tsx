
import React from 'react';

interface AdUnitProps {
  slot?: string;
  format?: 'auto' | 'fluid' | 'rectangle';
  style?: React.CSSProperties;
}

const AdUnit: React.FC<AdUnitProps> = ({ slot = "XXXXXXXXXX", format = "auto", style }) => {
  return (
    <div className="ad-container my-8 mx-auto max-w-full overflow-hidden text-center">
      <div className="glass p-4 rounded-xl border border-white/10 relative">
        <span className="absolute top-1 left-3 text-[10px] text-gray-600 uppercase font-bold tracking-widest">Sponsored Content</span>
        {/* Real AdSense code would be uncommented here */}
        {/* 
        <ins className="adsbygoogle"
             style={{ display: 'block', ...style }}
             data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"
             data-ad-slot={slot}
             data-ad-format={format}
             data-full-width-responsive="true"></ins>
        <script>
             (adsbygoogle = window.adsbygoogle || []).push({});
        </script> 
        */}
        <div className="h-24 md:h-32 flex items-center justify-center bg-white/5 rounded-lg border border-dashed border-white/5">
          <p className="text-gray-500 text-sm font-medium italic">Ad Space Opportunity - AI & Technology Targeted</p>
        </div>
      </div>
    </div>
  );
};

export default AdUnit;
