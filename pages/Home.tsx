
import React from 'react';
import { Link } from 'react-router-dom';
import AdUnit from '../components/AdUnit.tsx';

const Home: React.FC = () => {
  const trendingTopics = [
    { title: "Generative Adversarial Networks", category: "Deep Learning" },
    { title: "Reinforcement Learning in Robotics", category: "Automation" },
    { title: "Large Language Model Scaling", category: "NLP" },
    { title: "Edge Computing AI", category: "Infrastructure" }
  ];

  return (
    <div className="space-y-24 pb-20 page-transition">
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-10 relative z-10 animate-in fade-in slide-in-from-left-8 duration-1000">
            <div className="inline-flex items-center space-x-3 px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-[10px] font-black uppercase tracking-[0.2em]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
              </span>
              <span>2024 Intelligence Report</span>
            </div>
            
            <h1 className="text-7xl md:text-8xl xl:text-9xl font-extrabold leading-[0.9] tracking-tighter">
              The <span className="gradient-text">Future</span> <br />
              Is Already <br />
              <span className="text-white/20">Learning.</span>
            </h1>
            
            <p className="text-xl text-gray-400 max-w-lg leading-relaxed font-light">
              We bridge the gap between human curiosity and algorithmic complexity. Discover why Machine Learning is the most significant pivot in human history.
            </p>
            
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 pt-4">
              <Link to="/explorer" className="px-10 py-5 bg-white text-black font-bold rounded-2xl hover:bg-indigo-50 hover:scale-[1.02] active:scale-95 transition-all text-center shadow-2xl shadow-white/10 group">
                Begin Exploration <i className="fas fa-arrow-right ml-2 group-hover:translate-x-1 transition-transform"></i>
              </Link>
              <Link to="/about" className="px-10 py-5 glass text-white font-bold rounded-2xl hover:bg-white/10 active:scale-95 transition-all text-center border border-white/10">
                Core Principles
              </Link>
            </div>
          </div>

          <div className="relative animate-in fade-in zoom-in duration-1000 delay-300">
            <div className="animate-float">
              <img 
                src="https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1000&auto=format&fit=crop" 
                alt="Neural Network Visualization" 
                className="relative z-10 w-full aspect-[4/5] object-cover rounded-[60px] border border-white/10 shadow-[0_0_80px_rgba(99,102,241,0.2)] grayscale-[0.2] hover:grayscale-0 transition-all duration-1000"
              />
              <div className="absolute -top-10 -left-10 w-32 h-32 bg-indigo-500 rounded-full blur-[60px] opacity-40"></div>
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-purple-500 rounded-full blur-[80px] opacity-40"></div>
            </div>
            
            <div className="absolute -bottom-8 -left-8 glass p-8 rounded-[32px] z-20 hidden md:block border border-white/20 backdrop-blur-2xl animate-float" style={{animationDelay: '-2s'}}>
              <div className="flex items-center space-x-5">
                <div className="p-4 bg-gradient-to-tr from-indigo-500 to-purple-600 rounded-2xl shadow-lg">
                  <i className="fas fa-brain text-white text-2xl"></i>
                </div>
                <div>
                  <p className="text-[10px] text-gray-400 font-black uppercase tracking-[0.2em]">Neural Growth</p>
                  <p className="text-2xl font-bold text-white">+1,240% <span className="text-xs text-green-400 font-medium">YoY</span></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6">
        <AdUnit slot="home-hero-bottom" />
      </div>

      {/* Trending Section (SEO Boost) */}
      <section className="max-w-7xl mx-auto px-6 space-y-12">
        <div className="flex items-end justify-between border-b border-white/5 pb-8">
          <div className="space-y-2">
            <p className="text-indigo-400 font-black uppercase tracking-[0.3em] text-[10px]">Market Intelligence</p>
            <h2 className="text-4xl font-bold">Trending Breakthroughs</h2>
          </div>
          <span className="text-xs text-gray-500 font-medium">Updated 4m ago</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {trendingTopics.map((topic, i) => (
            <div key={i} className="glass p-8 rounded-[32px] hover:bg-white/5 transition-all cursor-pointer border border-white/5 group relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-0 bg-indigo-500 group-hover:h-full transition-all duration-500"></div>
              <span className="text-[10px] text-indigo-400 font-black uppercase block mb-4 tracking-widest">{topic.category}</span>
              <h4 className="text-lg font-bold text-white group-hover:text-indigo-400 transition-colors leading-snug">{topic.title}</h4>
              <div className="mt-6 flex items-center text-[10px] text-gray-500 font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                Read Report <i className="fas fa-chevron-right ml-2"></i>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Stats Section with extra "Advanced" styling */}
      <section className="px-6">
        <div className="max-w-7xl mx-auto glass rounded-[50px] p-16 grid md:grid-cols-3 gap-16 text-center border border-white/10 shadow-[0_0_100px_rgba(0,0,0,0.5)] relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
          <div className="space-y-4 relative z-10">
            <h3 className="text-6xl font-extrabold gradient-text">95%</h3>
            <p className="text-gray-400 font-black uppercase tracking-widest text-xs">Edge Accuracy</p>
          </div>
          <div className="space-y-4 border-y md:border-y-0 md:border-x border-white/10 py-12 md:py-0 relative z-10">
            <h3 className="text-6xl font-extrabold gradient-text">10x</h3>
            <p className="text-gray-400 font-black uppercase tracking-widest text-xs">Logic Velocity</p>
          </div>
          <div className="space-y-4 relative z-10">
            <h3 className="text-6xl font-extrabold gradient-text">24/7</h3>
            <p className="text-gray-400 font-black uppercase tracking-widest text-xs">Active Synthesis</p>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 space-y-20">
        <div className="text-center space-y-6">
          <p className="text-indigo-400 font-black uppercase tracking-[0.4em] text-[10px]">Infrastructure</p>
          <h2 className="text-5xl md:text-6xl font-bold">The Core Ecosystem</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {[
            { icon: 'fa-microchip', title: 'Silicon Evolution', desc: 'Hardware specialized for tensor calculations enables the massive deep neural networks of the 2020s.' },
            { icon: 'fa-database', title: 'Data Sovereignty', desc: 'Modern Machine Learning algorithms are only as profound as the clean, high-dimensional datasets that train them.' },
            { icon: 'fa-shield-halved', title: 'Ethical Alignment', desc: 'Ensuring AI decisions are transparent, fair, and mathematically aligned with human welfare.' }
          ].map((feature, idx) => (
            <div key={idx} className="glass p-10 rounded-[40px] hover:border-indigo-500/50 transition-all group relative">
              <div className="w-16 h-16 bg-indigo-500/10 rounded-[24px] flex items-center justify-center mb-8 group-hover:bg-indigo-600 group-hover:shadow-[0_0_30px_rgba(79,70,229,0.5)] transition-all duration-500">
                <i className={`fas ${feature.icon} text-indigo-400 group-hover:text-white text-3xl`}></i>
              </div>
              <h4 className="text-2xl font-bold mb-5">{feature.title}</h4>
              <p className="text-gray-400 leading-relaxed font-light">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6">
        <AdUnit slot="home-bottom-wide" format="in-article" />
      </div>
    </div>
  );
};

export default Home;
