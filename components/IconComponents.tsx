
import React from 'react';

interface IconProps {
    className?: string;
}

export const ArrowRightIcon: React.FC<IconProps> = ({ className = "w-6 h-6" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
    </svg>
);

export const ChevronDownIcon: React.FC<IconProps> = ({ className = "w-6 h-6" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
    </svg>
);

export const CodeBracketIcon: React.FC<IconProps> = ({ className = "w-8 h-8" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
    </svg>
);

export const ServerStackIcon: React.FC<IconProps> = ({ className = "w-8 h-8" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 7.5h10.5v1.5H6.75V7.5Zm0 3.75h10.5v1.5H6.75V11.25Zm0 3.75h10.5v1.5H6.75V15.0Zm4.5 2.25h1.5v1.5h-1.5v-1.5Zm-3.75 0h1.5v1.5h-1.5v-1.5Zm7.5 0h1.5v1.5h-1.5v-1.5Zm-1.5-13.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm-1.5 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
    </svg>
);

export const CircleStackIcon: React.FC<IconProps> = ({ className = "w-8 h-8" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375" />
    </svg>
);

export const PaintBrushIcon: React.FC<IconProps> = ({ className = "w-8 h-8" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 0 0-5.78 1.128 2.25 2.25 0 0 1-2.47 2.118L2.25 12l.07-1.047a4.5 4.5 0 0 1 .298-.959a4.5 4.5 0 0 1 2.25-2.541l3.528-2.015A2.25 2.25 0 0 1 11.47 5.5v1.172c0 .521-.212 1.008-.568 1.35l-1.328 1.258V18a2.25 2.25 0 0 1-2.25 2.25h-5.126c.47-1.32.996-2.628 1.564-3.878a3 3 0 0 0-5.78-1.128Z" />
    </svg>
);

export const RocketLaunchIcon: React.FC<IconProps> = ({ className = "w-10 h-10" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.82m5.84-2.56a12.022 12.022 0 0 0-5.84 0m5.84 0a12.023 12.023 0 0 1 0 5.84m-5.84 0a12.023 12.023 0 0 1 0-5.84m5.84 0a6 6 0 0 1-5.84-7.38v4.82m5.84 2.56a12.023 12.023 0 0 0 0-5.84m0 5.84a12.022 12.022 0 0 0 5.84 0m0 0a6 6 0 0 0-7.38-5.84m-4.82 5.84a12.022 12.022 0 0 0 0 5.84m0 0a12.023 12.023 0 0 1-5.84 0m5.84 0a6 6 0 0 1 7.38 5.84m-10.36.002.001-.002.002.002h-.003Zm-4.82-5.84a12.023 12.023 0 0 0 0-5.84m0 0a12.023 12.023 0 0 1 5.84 0m0 0a6 6 0 0 0 7.38-5.84m0 5.84a6 6 0 0 0-7.38 5.84" />
    </svg>
);


export const CalendarDaysIcon: React.FC<IconProps> = ({ className = "w-10 h-10" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0h18M-4.5 12.75h1.5v1.5h-1.5z" />
    </svg>
);

export const WrenchScrewdriverIcon: React.FC<IconProps> = ({ className = "w-10 h-10" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
    </svg>
);

export const ChatBubbleLeftRightIcon: React.FC<IconProps> = ({ className = "w-10 h-10" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193l-3.72-2.002a23.13 23.13 0 0 0-4.286 0l-3.72 2.002c-1.133-.093-1.98-1.057-1.98-2.193V10.608c0-.97.616-1.813 1.5-2.097m14.25 0a26.47 26.47 0 0 0-4.286 0M3.75 8.511a26.47 26.47 0 0 1 4.286 0M12 15.75h.008v.008H12v-.008Zm0-2.25h.008v.008H12v-.008Zm0-2.25h.008v.008H12V11.25Zm-2.25-1.5h.008v.008h-.008V9.75Zm-2.25 0h.008v.008h-.008V9.75Z" />
    </svg>
);
