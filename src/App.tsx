import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Services from './components/Services';
import Blog from './components/Blog';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <About />
        <Portfolio />
        <Services />
        <Blog />
        <Contact />
      </main>
      <footer className="bg-gray-50 py-6">
        <div className="container mx-auto px-4 text-center text-gray-600">
          © {new Date().getFullYear()} Simon Solomon. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

export default App;