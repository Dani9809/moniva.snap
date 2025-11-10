
import React, { useState } from 'react';
import ToolsetSection from '../components/ToolsetSection';
import WhySnapIsBestSection from '../components/WhySnapIsBestSection';
import { ChevronDownIcon, CodeBracketIcon, ServerStackIcon, CircleStackIcon } from '../components/IconComponents';
import { Link } from 'react-router-dom';

const homeTools = [
    {
        icon: <CodeBracketIcon className="w-8 h-8 text-blue-600" />,
        title: "Front-End",
        description: "Crafting beautiful and responsive user interfaces with modern frameworks like React and Vue."
    },
    {
        icon: <ServerStackIcon className="w-8 h-8 text-blue-600" />,
        title: "Back-End",
        description: "Building robust and scalable server-side applications with Node.js, Python, and databases."
    },
    {
        icon: <CircleStackIcon className="w-8 h-8 text-blue-600" />,
        title: "Version Control",
        description: "Managing codebases efficiently with Git and GitHub for seamless collaboration and tracking."
    }
];

const AccordionItem: React.FC<{
    num: string;
    title: string;
    content: string;
    isOpen: boolean;
    onClick: () => void;
}> = ({ num, title, content, isOpen, onClick }) => {
    return (
        <div className="border-b border-gray-200 py-6">
            <div className="flex justify-between items-center cursor-pointer" onClick={onClick}>
                <div className="flex items-center space-x-4">
                    <span className="text-blue-600 font-bold text-xl">{num}</span>
                    <h3 className="text-xl font-semibold">{title}</h3>
                </div>
                <ChevronDownIcon className={`w-6 h-6 text-gray-500 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
            </div>
            <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-96 mt-4' : 'max-h-0'}`}>
                <p className="text-gray-600 pl-10">{content}</p>
            </div>
        </div>
    );
};

const HomePage: React.FC = () => {
    const [openAccordion, setOpenAccordion] = useState<number | null>(0);

    const handleAccordionClick = (index: number) => {
        setOpenAccordion(openAccordion === index ? null : index);
    };

    const offers = [
        { title: "Custom Landing Page", content: "A stunning, high-converting landing page designed specifically for your campaign or product launch." },
        { title: "Backend Automation", content: "Automate your business processes with custom backend solutions, saving you time and reducing manual errors." },
        { title: "E-commerce and Booking", content: "Full-featured e-commerce platforms and booking systems to help you sell products or services online." },
        { title: "System Integration", content: "Seamlessly connect your various software systems and APIs to create a unified, efficient workflow." },
    ];

    const projects = [
        {
            title: "Automated Intern Program Scheduling System",
            description: "A comprehensive system developed for a local university to streamline the scheduling and management of their internship programs. Features include automated matching, progress tracking, and reporting.",
            imgSrc: "https://picsum.photos/seed/project1/800/600"
        },
        {
            title: "E-commerce Platform for Local Artisans",
            description: "An online marketplace that empowers local artisans in Dumaguete to sell their crafts. The platform includes product management, secure payments, and order tracking.",
            imgSrc: "https://picsum.photos/seed/project2/800/600"
        },
        {
            title: "Booking System for a Boutique Hotel",
            description: "A custom booking engine for a boutique hotel, featuring real-time availability, room management, and integration with online travel agencies.",
            imgSrc: "https://picsum.photos/seed/project3/800/600"
        }
    ];

    return (
        <>
            {/* Hero Section */}
            <section className="relative h-screen flex items-center justify-center text-white">
                <div className="absolute inset-0 bg-fill bg-center" style={{ backgroundImage: "url('assets/bg.png')" }}></div>
                <div className="relative z-10 text-center px-6 sm:pt-[40vh] md:pt-[60vh] lg:pt-[70vh]">
                    <h1 className="text-5xl text-black md:text-7xl font-extrabold mb-4">Moniva <span className="text-[#F3A448]">Snap</span></h1>
                    <p className="text-lg md:text-2xl max-w-3xl mx-auto mb-8 text-[rgb(70,70,70)]">\Tailored Solution + (Marketing × Ultimate Speed <br />& Security) = <span className="text-[#171717;]">Constant Business Growth 🚀</span></p>
                    <Link to="/contact" className="flex justify-center">
                        <p className="text-black underline text-left text-[18px] pr-[20px]">
                            Tell us about your project &<br />get a custom quote
                        </p>
                        <div className="bg-black p-[20px] w-[66px] h-[66px] rounded-full">
                            <img src="assets/white-arrow.png" alt="arrow" className="rotate-[135deg]"/>
                        </div>
                    </Link>
                    <div className="pt-[20px]">
                        <img src="assets/codeSample.png" alt="vscode-sample" className="rounded-[30px] md:w-[85vw] lg:w-[75vw]" />
                    </div>
                </div>
            </section>

            <ToolsetSection tools={homeTools} />

            {/* What We Offer Section */}
            <section className="py-20">
                <div className="container mx-auto px-6">
                    <h2 className="text-4xl font-bold text-center mb-12">What We offer?</h2>
                    <div className="max-w-4xl mx-auto">
                        {offers.map((offer, index) => (
                            <AccordionItem
                                key={index}
                                num={`0${index + 1}`}
                                title={offer.title}
                                content={offer.content}
                                isOpen={openAccordion === index}
                                onClick={() => handleAccordionClick(index)}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* Featured Projects Section */}
            <section className="py-20 bg-brand-dark-2 text-white">
                <div className="container mx-auto px-6">
                    <h2 className="text-4xl font-bold text-center mb-12">Featured Projects</h2>
                    <div className="space-y-16">
                        {projects.map((project, index) => (
                            <div key={index} className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-12`}>
                                <div className="md:w-1/2">
                                    <h3 className="text-3xl font-bold mb-4">{project.title}</h3>
                                    <p className="text-gray-300">{project.description}</p>
                                </div>
                                <div className="md:w-1/2">
                                    <img src={project.imgSrc} alt={project.title} className="rounded-lg shadow-2xl w-full" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <WhySnapIsBestSection />

            {/* Services/Testimonial Section */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="text-center lg:text-left">
                            <h2 className="text-5xl font-extrabold leading-tight">Our services will help your business succeed.</h2>
                        </div>
                        <div className="space-y-8">
                            <div className="bg-gray-100 p-8 rounded-lg shadow-sm">
                                <p className="text-lg text-gray-700">"We deliver not just websites, but comprehensive digital solutions that drive growth and create lasting value for our clients."</p>
                            </div>
                            <div className="bg-gray-100 p-8 rounded-lg shadow-sm">
                                <p className="text-lg text-gray-700">"From concept to launch, our agile process ensures transparency, collaboration, and a final product that exceeds expectations."</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default HomePage;
