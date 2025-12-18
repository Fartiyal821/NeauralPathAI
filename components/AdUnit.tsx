
import React from 'react';

interface AdUnitProps {
  slot?: string;
  format?: 'auto' | 'fluid' | 'rectangle' | 'in-article';
  className?: string;
}

const AdUnit: React.FC<AdUnitProps> = ({ slot = "XXXXXXXXXX", format = "auto", className = "" }) => {
  return (
    <div className={`ad-wrapper my-12 mx-auto max-w-5xl ${className}`}>
      <div className="glass p-1 rounded-2xl border border-white/5 relative group transition-all hover:border-indigo-500/20">
        <div className="absolute top-[-10px] left-6 px-2 bg-gray-950 text-[9px] text-gray-500 uppercase font-black tracking-[0.2em] border border-white/5 rounded">
          Sponsorship Channel
        </div>
        
        {/* Placeholder for real AdSense script */}
        <div className="bg-white/[0.01] rounded-xl overflow-hidden min-h-[120px] flex items-center justify-center relative">
          <div className="text-center space-y-1">
            <p className="text-gray-600 text-[10px] font-bold uppercase tracking-widest">Optimized Ad Slot {slot}</p>
            <p className="text-gray-400 text-xs italic font-medium">Premium AI & Technology Inventory</p>
          </div>
          
          {/* Real script integration commented out for deployment readiness */}
          {/* 
          <ins className="adsbygoogle"
               style={{ display: 'block' }}
               data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"
               data-ad-slot={slot}
               data-ad-format={format}
               data-full-width-responsive="true"></ins>
          <script>
               (adsbygoogle = window.adsbygoogle || []).push({});
          </script>
          */}
        </div>
      </div>
    </div>
  );
};

export default AdUnit;
