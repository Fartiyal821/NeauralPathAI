
import React from 'react';

const About: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-20 space-y-16">
      <div className="space-y-6 text-center">
        <h1 className="text-5xl md:text-7xl font-bold">Intelligence <span className="gradient-text">Simplified</span></h1>
        <p className="text-xl text-gray-400 leading-relaxed">Understanding the fundamental pillars of the technological revolution.</p>
      </div>

      <div className="space-y-12">
        <section className="space-y-6">
          <h2 className="text-3xl font-bold flex items-center space-x-4">
            <span className="w-10 h-10 rounded-full bg-indigo-500/20 flex items-center justify-center text-indigo-400 text-lg">1</span>
            <span>What is Artificial Intelligence?</span>
          </h2>
          <p className="text-gray-300 leading-relaxed text-lg">
            Artificial Intelligence (AI) is a broad field of computer science dedicated to creating systems capable of performing tasks that typically require human intelligence. This includes everything from problem-solving and reasoning to perception and language understanding.
          </p>
          <div className="glass p-8 rounded-3xl border-l-4 border-l-indigo-500">
             <p className="italic text-gray-400">"The goal is not to replicate humans, but to augment our capabilities and solve problems that were previously thought impossible."</p>
          </div>
        </section>

        <section className="space-y-6">
          <h2 className="text-3xl font-bold flex items-center space-x-4">
            <span className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400 text-lg">2</span>
            <span>The Power of Machine Learning</span>
          </h2>
          <p className="text-gray-300 leading-relaxed text-lg">
            Machine Learning (ML) is a subset of AI that focuses on building systems that learn from data. Instead of being explicitly programmed with rules, ML models identify patterns and make decisions based on statistical correlations.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white/5 p-6 rounded-2xl">
              <h4 className="font-bold mb-2 text-indigo-400">Supervised Learning</h4>
              <p className="text-sm text-gray-400">Learning from labeled examples with clear inputs and outputs.</p>
            </div>
            <div className="bg-white/5 p-6 rounded-2xl">
              <h4 className="font-bold mb-2 text-purple-400">Unsupervised Learning</h4>
              <p className="text-sm text-gray-400">Finding hidden structures and clusters in raw, unlabeled data.</p>
            </div>
          </div>
        </section>

        <section className="space-y-6">
          <h2 className="text-3xl font-bold flex items-center space-x-4">
            <span className="w-10 h-10 rounded-full bg-pink-500/20 flex items-center justify-center text-pink-400 text-lg">3</span>
            <span>Why it Matters for Society</span>
          </h2>
          <ul className="space-y-4">
            {[
              { title: 'Healthcare', body: 'Predicting disease outbreaks and personalizing treatment plans for individual genetics.' },
              { title: 'Environment', body: 'Optimizing energy grids and monitoring deforestation through satellite imagery analysis.' },
              { title: 'Education', body: 'Tailoring learning paths to each student speed and cognitive style.' },
              { title: 'Safety', body: 'Enhancing autonomous vehicle safety to reduce human errors in transit.' }
            ].map((item, i) => (
              <li key={i} className="flex space-x-4 items-start">
                <i className="fas fa-check-circle text-green-500 mt-1"></i>
                <div>
                  <h4 className="font-bold text-white">{item.title}</h4>
                  <p className="text-gray-400">{item.body}</p>
                </div>
              </li>
            ))}
          </ul>
        </section>
      </div>

      <div className="pt-10 text-center">
        <p className="text-gray-500 text-sm">© 2024 NeuralPath AI Platform. Designed for the future of technological education.</p>
      </div>
    </div>
  );
};

export default About;
