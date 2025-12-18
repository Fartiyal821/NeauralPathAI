
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const [email, setEmail] = useState('');

  return (
    <footer className="glass border-t border-white/5 pt-20 pb-12 px-6">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Newsletter Section */}
        <div className="glass p-8 md:p-12 rounded-[40px] border border-white/10 flex flex-col md:flex-row items-center justify-between gap-8 bg-gradient-to-r from-indigo-900/10 to-transparent">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-3xl font-bold">Join the Neural Insider</h3>
            <p className="text-gray-400">Get weekly updates on breakthrough AI research and ML trends.</p>
          </div>
          <form className="flex w-full md:w-auto gap-4" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="Enter your email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="px-6 py-4 bg-white/5 border border-white/10 rounded-2xl text-white focus:outline-none focus:ring-2 focus:ring-indigo-500/50 w-full md:w-80"
            />
            <button className="px-8 py-4 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-2xl transition-all shadow-lg shadow-indigo-500/20 active:scale-95 whitespace-nowrap">
              Subscribe
            </button>
          </form>
        </div>

        <div className="grid md:grid-cols-4 gap-12">
          <div className="space-y-6 col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
                <i className="fas fa-brain text-white text-sm"></i>
              </div>
              <span className="text-xl font-bold font-display text-white tracking-tight">NeuralPath<span className="text-indigo-400">AI</span></span>
            </Link>
            <p className="text-gray-400 max-w-sm leading-relaxed">
              The ultimate resource for understanding the mechanics and revolutionary future of Machine Learning.
            </p>
            <div className="flex space-x-4">
              {['twitter', 'github', 'linkedin', 'discord'].map((social) => (
                <a key={social} href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-indigo-500 hover:text-white transition-all text-gray-400">
                  <i className={`fab fa-${social}`}></i>
                </a>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-white font-bold uppercase tracking-widest text-xs">Knowledge Base</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link to="/explorer" className="hover:text-white transition-colors">AI Explorer</Link></li>
              <li><Link to="/vision" className="hover:text-white transition-colors">Vision Lab</Link></li>
              <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Research Blog</a></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-white font-bold uppercase tracking-widest text-xs">Legal</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link to="/about" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Use</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Sitemap</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/5 text-center text-xs text-gray-600">
          <p>© 2024 NeuralPath AI. Optimized for Global Discovery and Search Engine Performance.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
