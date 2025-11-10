
import React from 'react';

interface Tool {
    icon: string;
    title: string;
    description: string;
}

interface ToolsetSectionProps {
    title?: string;
    tools: Tool[];
}

const ToolsetSection: React.FC<ToolsetSectionProps> = ({ title = "Our Toolset", tools }) => {
    return (
        <section className="py-20">
            <div className="absolute inset-0 bg-fill bg-center" style={{ backgroundImage: "url('assets/bg.png')" }}></div>
            <div className="container mx-auto px-6 sm:pt-[40vh] md:pt-[60vh] lg:pt-[70vh]">
                <h2 className="text-4xl font-bold text-center mb-12">{title}</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {tools.map((tool, index) => (
                        <div key={index} className="bg-white/50 p-8 rounded-lg text-center shadow-lg transition-transform hover:-translate-y-2">
                            <div className="inline-block bg-white p-4 rounded-full mb-6 text-blue-600">
                                {tool.icon}
                            </div>
                            <h3 className="text-2xl font-semibold mb-3">{tool.title}</h3>
                            <p className="text-gray-700">{tool.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ToolsetSection;
