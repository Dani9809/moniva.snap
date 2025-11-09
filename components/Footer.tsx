
import React from 'react';

const FacebookIcon: React.FC = () => (
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" /></svg>
);
const LinkedinIcon: React.FC = () => (
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14Zm-11 6H5v9h3V9Zm-1.5-2.25a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm8.5 2.25h-2.75v1.32c0 .41-.01.93-.34 1.25-.34.32-.78.5-1.16.5-.88 0-1.58-.59-1.85-1.39H6.75v6.5h2.75V14c0-.55.12-1.09.82-1.82.7-.73 1.64-.89 2.18-.89.87 0 1.5.55 1.5 1.72v4.5h2.75v-5.5c0-2.5-1.25-3.75-3-3.75Z" clipRule="evenodd" /></svg>
);
const XIcon: React.FC = () => (
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231L18.244 2.25ZM17.5 19.5l-1.42-2.022L7.86 4.25H5.03l10.542 13.722L17.5 19.5Z" /></svg>
);
const PinterestIcon: React.FC = () => (
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.237 2.636 7.855 6.356 9.312-.088-.791-.167-2.005.035-2.868.182-.78 1.172-4.97 1.172-4.97s-.299-.6-.299-1.486c0-1.39.806-2.428 1.81-2.428.852 0 1.264.64 1.264 1.408 0 .858-.545 2.14-.828 3.33-.236.995.5 1.807 1.48 1.807 1.778 0 3.144-1.874 3.144-4.623 0-2.433-1.75-4.12-4.188-4.12-2.845 0-4.515 2.135-4.515 4.34 0 .859.331 1.781.745 2.281a.3.3 0 0 1 .069.288l-.278 1.133c-.044.183-.145.223-.335.134-1.249-.581-2.03-2.407-2.03-3.874 0-3.154 2.292-6.052 6.608-6.052 3.469 0 6.165 2.473 6.165 5.776 0 3.447-2.173 6.22-5.19 6.22-1.013 0-1.965-.525-2.291-1.148l-.623 2.378c-.226.869-.835 1.958-1.244 2.621.937.29 1.931.446 2.96.446 5.523 0 10-4.477 10-10S17.523 2 12 2Z" clipRule="evenodd" /></svg>
);

const Footer: React.FC = () => {
    return (
        <footer className="bg-brand-dark-2 text-white">
            <div className="container mx-auto px-6 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    <div>
                        <h3 className="text-xl font-bold mb-4">Moniva Snap</h3>
                        <ul className="space-y-2 text-gray-400">
                            <li><a href="#" className="hover:text-white">Services</a></li>
                            <li><a href="#" className="hover:text-white">Cases</a></li>
                            <li><a href="#" className="hover:text-white">About Us</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-xl font-bold mb-4">Contact us</h3>
                        <ul className="space-y-2 text-gray-400">
                            <li><a href="#" className="hover:text-white">monivasnap.com</a></li>
                            <li><a href="#" className="hover:text-white">monivasnap@gmail.com</a></li>
                            <li><a href="#" className="hover:text-white">+639123456789</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-xl font-bold mb-4">Office</h3>
                        <p className="text-gray-400">Dumaguete City, Negros Oriental, Philippines 6200</p>
                    </div>
                    <div>
                        <h3 className="text-xl font-bold mb-4">Sign up for updates and exclusive offers.</h3>
                        <form className="flex">
                            <input type="email" placeholder="Your email" className="bg-gray-800 text-white px-4 py-2 rounded-l-md focus:outline-none w-full" />
                            <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded-r-md hover:bg-blue-700">Go</button>
                        </form>
                    </div>
                </div>

                <div className="mt-16 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-gray-500 text-sm mb-4 md:mb-0">© 2024 Moniva Snap. All Rights Reserved. Snap into the digital age!</p>
                    <div className="flex space-x-4">
                        <a href="#" className="text-gray-400 hover:text-white"><FacebookIcon /></a>
                        <a href="#" className="text-gray-400 hover:text-white"><LinkedinIcon /></a>
                        <a href="#" className="text-gray-400 hover:text-white"><XIcon /></a>
                        <a href="#" className="text-gray-400 hover:text-white"><PinterestIcon /></a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
