
import React from 'react';
import { CalendarDaysIcon, WrenchScrewdriverIcon, ChatBubbleLeftRightIcon, RocketLaunchIcon } from './IconComponents';

const features = [
    {
        icon: <CalendarDaysIcon className="w-10 h-10 text-purple-600" />,
        title: "7-Day Delivery",
        description: "We guarantee a swift 7-day delivery for your projects, ensuring you get to market faster."
    },
    {
        icon: <WrenchScrewdriverIcon className="w-10 h-10 text-purple-600" />,
        title: "Custom-Built Designs",
        description: "Every website is tailor-made to fit your brand's unique identity and business goals."
    },
    {
        icon: <ChatBubbleLeftRightIcon className="w-10 h-10 text-purple-600" />,
        title: "Dedicated Support",
        description: "Our team provides continuous support to ensure your website runs smoothly and efficiently."
    },
    {
        icon: <RocketLaunchIcon className="w-10 h-10 text-purple-600" />,
        title: "Startup-Ready Solutions",
        description: "We offer scalable solutions that grow with your business, perfect for startups and beyond."
    }
];

const WhySnapIsBestSection: React.FC = () => {
    return (
        <section className="py-20 bg-gradient-to-r from-pink-100 via-purple-100 to-indigo-100">
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-4xl font-bold mb-12">Learn why Snap is the best</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
                    {features.map((feature, index) => (
                        <div key={index} className="flex flex-col items-center">
                            <div className="bg-white/70 p-4 rounded-full mb-5 shadow-md">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                            <p className="text-gray-600 max-w-xs">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhySnapIsBestSection;
