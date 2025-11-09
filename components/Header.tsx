
import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
    return (
        <header className="bg-white/80 backdrop-blur-md sticky top-0 z-50">
            <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                <Link to="/" className="flex items-center space-x-2">
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16 0L32 16L16 32L0 16L16 0Z" fill="#8A2BE2"/>
                        <path d="M16 4L28 16L16 28L4 16L16 4Z" fill="#EADDFF"/>
                    </svg>
                    <span className="font-bold text-xl text-brand-dark">Moniva Snap</span>
                </Link>
                <nav className="hidden md:flex items-center space-x-8">
                    <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Services</a>
                    <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Cases</a>
                    <Link to="/about" className="text-gray-600 hover:text-blue-600 transition-colors">About Us</Link>
                </nav>
                <a href="#" className="hidden md:inline-block bg-brand-dark text-white px-6 py-2 rounded-full hover:bg-gray-800 transition-colors">
                    Get in Touch
                </a>
                <button className="md:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                    </svg>
                </button>
            </div>
        </header>
    );
};

export default Header;
