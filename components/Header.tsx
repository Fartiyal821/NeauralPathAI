
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header: React.FC = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'AI Explorer', path: '/explorer' },
    { label: 'Vision Lab', path: '/vision' },
    { label: 'About', path: '/about' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 glass border-b border-white/10 px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2 group">
          <div className="w-10 h-10 bg-gradient-to-tr from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center transform group-hover:rotate-12 transition-transform">
            <i className="fas fa-brain text-white text-xl"></i>
          </div>
          <span className="text-2xl font-bold font-display tracking-tight text-white">NeuralPath<span className="text-indigo-400">AI</span></span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`text-sm font-medium transition-colors hover:text-indigo-400 ${
                isActive(item.path) ? 'text-indigo-400' : 'text-gray-400'
              }`}
            >
              {item.label}
            </Link>
          ))}
          <Link
            to="/explorer"
            className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-semibold rounded-full transition-all shadow-lg shadow-indigo-500/20 active:scale-95"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-white text-2xl"
        >
          <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-gray-950 border-b border-white/10 p-6 flex flex-col space-y-4 animate-in fade-in slide-in-from-top-4">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setIsMenuOpen(false)}
              className={`text-lg font-medium ${
                isActive(item.path) ? 'text-indigo-400' : 'text-gray-300'
              }`}
            >
              {item.label}
            </Link>
          ))}
          <Link
            to="/explorer"
            onClick={() => setIsMenuOpen(false)}
            className="w-full py-3 bg-indigo-600 text-white text-center rounded-xl font-bold"
          >
            Get Started
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Header;
