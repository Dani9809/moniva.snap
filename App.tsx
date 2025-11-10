
import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import LetsTalkCTA from './components/LetsTalkCTA';

const App: React.FC = () => {
  return (
    <HashRouter>
      <div className="bg-white text-brand-dark font-sans">
        <div className="flex justify-center w-full">
            <Header />
        </div>
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
          </Routes>
        </main>
        <LetsTalkCTA />
        <Footer />
      </div>
    </HashRouter>
  );
};

export default App;
