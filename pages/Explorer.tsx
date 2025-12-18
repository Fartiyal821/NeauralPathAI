
import React, { useState } from 'react';
import { generateAIInsights } from '../services/geminiService';
import AdUnit from '../components/AdUnit';

const Explorer: React.FC = () => {
  const [customTopic, setCustomTopic] = useState('');
  const [loading, setLoading] = useState(false);
  const [insights, setInsights] = useState<string | null>(null);

  const topics = [
    'Deep Learning Architecture',
    'AI in Healthcare',
    'Autonomous Systems',
    'Natural Language Processing',
    'AI Ethics & Bias',
    'The Future of Work'
  ];

  const handleExplore = async (selectedTopic: string) => {
    if (!selectedTopic.trim()) return;
    setLoading(true);
    const result = await generateAIInsights(selectedTopic);
    setInsights(result);
    setLoading(false);
  };

  const handleCustomSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleExplore(customTopic);
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-16 space-y-12">
      <div className="text-center space-y-4">
        <h1 className="text-5xl font-bold">AI Insight <span className="gradient-text">Engine</span></h1>
        <p className="text-gray-400 max-w-2xl mx-auto">Explore real-world Machine Learning applications and future trends powered by advanced Gemini reasoning.</p>
      </div>

      <div className="max-w-2xl mx-auto">
        <form onSubmit={handleCustomSubmit} className="relative group">
          <input
            type="text"
            value={customTopic}
            onChange={(e) => setCustomTopic(e.target.value)}
            placeholder="Search AI topic (e.g., Computer Vision in Finance)..."
            className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-all glass shadow-lg"
            disabled={loading}
          />
          <button
            type="submit"
            disabled={loading || !customTopic.trim()}
            className="absolute right-2 top-2 bottom-2 px-6 bg-indigo-600 hover:bg-indigo-500 disabled:bg-gray-800 text-white font-bold rounded-xl transition-all flex items-center space-x-2"
          >
            {loading ? <i className="fas fa-spinner fa-spin"></i> : <><i className="fas fa-sparkles"></i><span className="hidden sm:inline">Analyze</span></>}
          </button>
        </form>
      </div>

      <div className="space-y-4">
        <p className="text-xs font-bold text-gray-500 uppercase tracking-widest text-center">Suggested Research Fields</p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {topics.map((t) => (
            <button
              key={t}
              onClick={() => { setCustomTopic(t); handleExplore(t); }}
              disabled={loading}
              className="p-4 glass rounded-2xl text-center hover:border-indigo-500 transition-all active:scale-95 disabled:opacity-50 group border border-white/5"
            >
              <span className="text-xs font-bold text-gray-400 group-hover:text-indigo-400 transition-colors">{t}</span>
            </button>
          ))}
        </div>
      </div>

      <AdUnit slot="explorer-mid-page" />

      <div className="relative glass min-h-[400px] rounded-[40px] p-8 md:p-12 border border-white/5 overflow-hidden shadow-2xl">
        {loading && (
          <div className="absolute inset-0 flex flex-col items-center justify-center space-y-6 bg-gray-900/50 backdrop-blur-sm z-10">
            <div className="w-16 h-16 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin"></div>
            <p className="text-xl font-medium animate-pulse">Deep Reasoning in Progress...</p>
          </div>
        )}

        {!insights && !loading && (
          <div className="flex flex-col items-center justify-center h-full text-center space-y-6 opacity-40 py-12">
            <i className="fas fa-microchip text-8xl mb-4"></i>
            <h3 className="text-2xl font-bold">Awaiting Input</h3>
            <p className="max-w-md">Discover why Machine Learning is critical for modern infrastructure and global innovation.</p>
          </div>
        )}

        {insights && (
          <div className="prose prose-invert max-w-none animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="flex justify-between items-center mb-8 border-b border-white/10 pb-4">
               <h2 className="text-2xl font-bold m-0 text-white">Neural Synthesis</h2>
               <button onClick={() => setInsights(null)} className="text-gray-400 hover:text-white transition-colors">
                 <i className="fas fa-times-circle"></i>
               </button>
            </div>
            <div className="space-y-6 text-gray-300 leading-relaxed whitespace-pre-wrap font-light tracking-wide text-lg">
              {insights}
            </div>
          </div>
        )}
      </div>
      
      {insights && <AdUnit slot="explorer-bottom" />}
    </div>
  );
};

export default Explorer;
