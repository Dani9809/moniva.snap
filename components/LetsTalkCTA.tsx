
import React from 'react';
import { ArrowRightIcon } from './IconComponents';

const LetsTalkCTA: React.FC = () => {
    return (
        <section className="bg-brand-dark text-white">
            <div className="container mx-auto px-6 py-20 text-center">
                <h2 className="text-4xl md:text-6xl font-extrabold mb-4">Let's Talk!</h2>
                <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">Ready to kick off your perfect app? We're here to turn your vision into a stunning reality.</p>
                <a href="#" className="inline-flex items-center bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-700 transition-transform hover:scale-105">
                    Get in Touch
                    <ArrowRightIcon className="w-5 h-5 ml-2" />
                </a>
            </div>
        </section>
    );
};

export default LetsTalkCTA;
