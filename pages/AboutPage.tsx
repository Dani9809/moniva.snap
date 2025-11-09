
import React from 'react';
import ToolsetSection from '../components/ToolsetSection';
import WhySnapIsBestSection from '../components/WhySnapIsBestSection';
import { CodeBracketIcon, ServerStackIcon, PaintBrushIcon } from '../components/IconComponents';

const aboutTools = [
    {
        icon: <CodeBracketIcon className="w-8 h-8 text-blue-600" />,
        title: "Front-End",
        description: "We bring designs to life with pixel-perfect, interactive front-end development using the latest technologies."
    },
    {
        icon: <ServerStackIcon className="w-8 h-8 text-blue-600" />,
        title: "Back-End",
        description: "Our back-end solutions are the powerful engines behind your applications, ensuring reliability and speed."
    },
    {
        icon: <PaintBrushIcon className="w-8 h-8 text-blue-600" />,
        title: "UI/UX Design",
        description: "We focus on user-centric design to create intuitive and engaging experiences that delight your audience."
    }
];

const teamMembers = [
    {
        name: "Danilo Merdegia Jr.",
        title: "Lead Developer",
        imgSrc: "https://picsum.photos/seed/danilo/400/400"
    },
    {
        name: "Miguel Perocho",
        title: "Full-Stack Developer",
        imgSrc: "https://picsum.photos/seed/miguel/400/400"
    },
    {
        name: "Kurl Steve Estrellanes",
        title: "UI/UX Designer",
        imgSrc: "https://picsum.photos/seed/kurl/400/400"
    }
];

const AboutPage: React.FC = () => {
    return (
        <>
            {/* Hero Section */}
            <section className="bg-white py-24">
                <div className="container mx-auto px-6 text-center">
                    <h1 className="text-5xl md:text-6xl font-extrabold text-brand-dark mb-6">What We Do</h1>
                    <p className="max-w-3xl mx-auto text-lg text-gray-600">
                        Moniva Snap is a passionate team of web developers based in Dumaguete City. Our mission is to empower small businesses and startups by creating high-quality, affordable, and scalable web solutions. We believe a great website is a powerful tool for growth, and we're dedicated to helping our clients succeed in the digital landscape.
                    </p>
                </div>
            </section>

            <ToolsetSection tools={aboutTools} />
            <WhySnapIsBestSection />

            {/* Meet Our Team Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-4xl font-bold mb-4">Meet Our Team</h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-12">The creative minds behind Moniva Snap, dedicated to crafting your digital success.</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                        {teamMembers.map((member, index) => (
                            <div key={index} className="flex flex-col items-center">
                                <img src={member.imgSrc} alt={member.name} className="w-48 h-48 rounded-full object-cover mb-4 shadow-lg border-4 border-white" />
                                <h3 className="text-2xl font-semibold">{member.name}</h3>
                                <p className="text-gray-500">{member.title}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default AboutPage;
