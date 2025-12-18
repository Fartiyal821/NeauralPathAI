
import React, { useState, useRef } from 'react';
import { analyzeImageWithAI } from '../services/geminiService';

const Vision: React.FC = () => {
  const [image, setImage] = useState<string | null>(null);
  const [analysis, setAnalysis] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result as string);
        setAnalysis(null);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAnalyze = async () => {
    if (!image) return;
    setLoading(true);
    const result = await analyzeImageWithAI(image);
    setAnalysis(result);
    setLoading(false);
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-16 space-y-16">
      <div className="text-center space-y-4">
        <h1 className="text-5xl font-bold">Vision <span className="gradient-text">Lab</span></h1>
        <p className="text-gray-400 max-w-2xl mx-auto">Upload an image to see how Computer Vision algorithms "see" and interpret the world through pixels and gradients.</p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12">
        <div className="space-y-6">
          <div 
            onClick={() => fileInputRef.current?.click()}
            className="relative aspect-video glass rounded-[40px] border-2 border-dashed border-white/10 hover:border-indigo-500/50 transition-all cursor-pointer overflow-hidden group"
          >
            {image ? (
              <img src={image} alt="Upload" className="w-full h-full object-cover" />
            ) : (
              <div className="absolute inset-0 flex flex-col items-center justify-center space-y-4">
                <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center group-hover:bg-indigo-500/20 transition-colors">
                  <i className="fas fa-cloud-upload-alt text-2xl"></i>
                </div>
                <p className="font-medium text-gray-400">Click to upload image</p>
                <p className="text-xs text-gray-600 uppercase tracking-widest">Supports JPG, PNG, WEBP</p>
              </div>
            )}
          </div>
          <input 
            type="file" 
            ref={fileInputRef} 
            onChange={handleFileChange} 
            className="hidden" 
            accept="image/*"
          />
          
          <div className="flex space-x-4">
            <button
              onClick={handleAnalyze}
              disabled={!image || loading}
              className="flex-1 py-4 bg-indigo-600 disabled:bg-gray-800 text-white font-bold rounded-2xl hover:bg-indigo-500 transition-all flex items-center justify-center space-x-2 shadow-xl shadow-indigo-500/20"
            >
              {loading ? (
                <i className="fas fa-spinner fa-spin"></i>
              ) : (
                <>
                  <i className="fas fa-search"></i>
                  <span>Analyze Pixels</span>
                </>
              )}
            </button>
            <button
              onClick={() => { setImage(null); setAnalysis(null); }}
              className="px-6 py-4 glass rounded-2xl hover:bg-white/10"
            >
              <i className="fas fa-trash-alt"></i>
            </button>
          </div>
        </div>

        <div className="glass rounded-[40px] p-8 md:p-10 border border-white/5 relative overflow-hidden">
          {loading && (
            <div className="absolute inset-0 bg-gray-950/40 backdrop-blur-sm flex flex-col items-center justify-center space-y-4 z-20">
               <div className="w-12 h-12 border-t-4 border-indigo-400 rounded-full animate-spin"></div>
               <p className="text-indigo-400 font-bold tracking-widest uppercase text-xs">Scanning Layers...</p>
            </div>
          )}

          {!analysis && !loading && (
            <div className="h-full flex flex-col items-center justify-center text-center space-y-4 opacity-30 py-20">
              <i className="fas fa-microscope text-6xl"></i>
              <p className="text-lg">Run analysis to see technical breakdown</p>
            </div>
          )}

          {analysis && (
            <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-500">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-xs font-bold uppercase tracking-widest">
                <i className="fas fa-check-circle"></i>
                <span>Analysis Successful</span>
              </div>
              <h3 className="text-2xl font-bold">Neural Interpretation</h3>
              <div className="text-gray-300 leading-relaxed space-y-4 text-sm md:text-base">
                {analysis.split('\n').map((line, i) => (
                  <p key={i}>{line}</p>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Tech Breakdown Grid */}
      <div className="grid md:grid-cols-3 gap-8 pt-10">
          {[
            { title: 'Feature Extraction', icon: 'fa-vector-square', desc: 'Isolating distinct patterns like edges, corners, and textures.' },
            { title: 'Classification', icon: 'fa-tags', desc: 'Predicting the probability of the object belonging to a known category.' },
            { title: 'Segmentation', icon: 'fa-shapes', desc: 'Dividing an image into multiple segments (sets of pixels).' }
          ].map((item, idx) => (
            <div key={idx} className="glass p-8 rounded-3xl border border-white/5">
              <i className={`fas ${item.icon} text-indigo-400 text-3xl mb-6`}></i>
              <h4 className="text-xl font-bold mb-2">{item.title}</h4>
              <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Vision;
