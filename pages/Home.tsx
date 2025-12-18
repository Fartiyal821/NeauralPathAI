
import React from 'react';
import { Link } from 'react-router-dom';
import AdUnit from '../components/AdUnit';

const Home: React.FC = () => {
  const trendingTopics = [
    { title: "Generative Adversarial Networks", category: "Deep Learning" },
    { title: "Reinforcement Learning in Robotics", category: "Automation" },
    { title: "Large Language Model Scaling", category: "NLP" },
    { title: "Edge Computing AI", category: "Infrastructure" }
  ];

  return (
    <div className="space-y-24 pb-20">
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-in fade-in slide-in-from-left-8 duration-700">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-bold uppercase tracking-widest">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
              </span>
              <span>The Era of Intelligence</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-extrabold leading-tight">
              Unlock the Power <br />
              <span className="gradient-text">of Machines.</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-lg leading-relaxed">
              Machine Learning is teaching computers to solve the world's most complex challenges. Discover why AI is the most important invention of our century.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Link to="/explorer" className="px-8 py-4 bg-white text-black font-bold rounded-2xl hover:scale-105 transition-all text-center shadow-xl shadow-white/10">
                Explore AI Insights
              </Link>
              <Link to="/about" className="px-8 py-4 glass text-white font-bold rounded-2xl hover:bg-white/10 transition-all text-center">
                Learn the Core
              </Link>
            </div>
          </div>

          <div className="relative animate-in fade-in zoom-in duration-1000 delay-200">
            <div className="absolute inset-0 bg-indigo-500/20 blur-[100px] rounded-full"></div>
            <img 
              src="https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1000&auto=format&fit=crop" 
              alt="Neural Network Visualization" 
              className="relative z-10 w-full aspect-square object-cover rounded-[40px] border border-white/10 shadow-2xl grayscale hover:grayscale-0 transition-all duration-700"
            />
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6">
        <AdUnit slot="home-top-wide" />
      </div>

      {/* Trending Section (SEO Boost) */}
      <section className="max-w-7xl mx-auto px-6 space-y-8">
        <div className="flex items-center justify-between">
          <h2 className="text-3xl font-bold">Trending Research</h2>
          <span className="text-sm text-indigo-400 font-bold uppercase tracking-widest">Updates Daily</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {trendingTopics.map((topic, i) => (
            <div key={i} className="glass p-6 rounded-2xl hover:bg-white/5 transition-colors cursor-pointer border border-white/5 group">
              <span className="text-[10px] text-indigo-400 font-bold uppercase block mb-2">{topic.category}</span>
              <h4 className="font-bold text-white group-hover:text-indigo-400 transition-colors">{topic.title}</h4>
            </div>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="px-6">
        <div className="max-w-7xl mx-auto glass rounded-[40px] p-12 grid md:grid-cols-3 gap-12 text-center border border-white/5 shadow-inner">
          <div className="space-y-2">
            <h3 className="text-5xl font-bold gradient-text">95%</h3>
            <p className="text-gray-400 font-medium">Efficiency in Automation</p>
          </div>
          <div className="space-y-2 border-y md:border-y-0 md:border-x border-white/10 py-8 md:py-0">
            <h3 className="text-5xl font-bold gradient-text">10x</h3>
            <p className="text-gray-400 font-medium">Processing Acceleration</p>
          </div>
          <div className="space-y-2">
            <h3 className="text-5xl font-bold gradient-text">24/7</h3>
            <p className="text-gray-400 font-medium">Autonomous Learning</p>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 space-y-16">
        <div className="text-center space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">The Core Pillars</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">Understanding the infrastructure behind modern intelligent systems.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            { icon: 'fa-microchip', title: 'Silicon Evolution', desc: 'Hardware specialized for tensor calculations enables the deep neural networks of today.' },
            { icon: 'fa-database', title: 'Data Sovereignty', desc: 'Machine Learning algorithms are only as good as the massive datasets used to train them.' },
            { icon: 'fa-shield-halved', title: 'Ethical Alignment', desc: 'Ensuring AI decisions are transparent, fair, and beneficial for all of humanity.' }
          ].map((feature, idx) => (
            <div key={idx} className="glass p-8 rounded-[32px] hover:border-indigo-500/50 transition-all group">
              <div className="w-14 h-14 bg-indigo-500/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-indigo-500 transition-colors">
                <i className={`fas ${feature.icon} text-indigo-400 group-hover:text-white text-2xl`}></i>
              </div>
              <h4 className="text-xl font-bold mb-4">{feature.title}</h4>
              <p className="text-gray-400 leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6">
        <AdUnit slot="home-bottom-wide" />
      </div>
    </div>
  );
};

export default Home;
