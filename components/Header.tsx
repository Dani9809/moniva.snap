import React, {useState} from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    let handleToggle = ()=>{
        setIsOpen(!isOpen);
    }

    return (
        <header 
            className={`
                bg-white/30 backdrop-blur-md absolute top-[20px] z-50 
                w-[95vw] xl:w-[75vw] shadow-sm overflow-hidden 
                transition-all duration-[0.8s] ease-in-out
                ${isOpen ? 'max-h-screen rounded-[38px]' : 'max-h-[70px] rounded-[38px]'}
            `}
        >
            
            <div className="w-full px-[20px] py-3 flex justify-between items-center relative z-10">
                <Link to="/" className="flex items-center">
                    <img src="assets/moniva.png" alt="Moniva-logo" className="w-[50px]" />
                </Link>

                <nav className="hidden md:flex items-center space-x-8" id="desktop-nav-links">
                    <a href="#" className="text-black hover:text-black transition-colors">Services</a>
                    <a href="#" className="text-black hover:text-black transition-colors">Cases</a>
                    <Link to="/about" className="text-black hover:text-black transition-colors">About Us</Link>
                    <a href="#" className="bg-[rgba(0,0,0,0)] text-black px-6 py-2 border-[1px] border-black rounded-full hover:bg-black hover:text-white transition-colors">
                        Get in Touch
                    </a>
                </nav>

                <button className="md:hidden" onClick={handleToggle}>
                    <img src="assets/burger.png"className="w-[40px]" />
                </button>
            </div>
            
            <nav 
                id="mobile-nav-links"
                className="
                    md:hidden 
                    flex flex-col items-center space-y-5 pb-[30px] px-4 
                    text-center 
                "
            >
                <a href="#" className="text-black hover:text-black transition-colors text-[20px] pt-4" onClick={handleToggle}>Services</a>
                <a href="#" className="text-black hover:text-black transition-colors text-[20px]" onClick={handleToggle}>Cases</a>
                <Link to="/about" className="text-black hover:text-black transition-colors text-[20px]" onClick={handleToggle}>About Us</Link>
                <a href="#" className="bg-[rgba(0,0,0,0)] text-black px-6 py-2 border-[1px] border-black rounded-full hover:bg-black hover:text-white transition-colors text-[20px] mt-4" onClick={handleToggle}>
                    Get in Touch
                </a>
            </nav>
        </header>
    );
};

export default Header;