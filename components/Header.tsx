
import React, {useState} from 'react';
import { Link } from 'react-router-dom';



// const NavbarList = ({isOpen})=>{
    
//         return (
            
//         )
// }

const Header: React.FC = () => {
    // let [isOpen, setIsOpen] = useState(false);

    // const handleToggleMenu = ()=>{
    //     setIsOpen(!isOpen);
    // }
    return (
        <header className="bg-white/30 backdrop-blur-md absolute top-[20px] z-50 w-[95vw] xl:w-[75vw] rounded-full shadow-sm">
            <div className=":w-full px-3 py-3 flex justify-between items-center"> 
                <Link to="/" className="flex items-center space-x-2">
                    {/* <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16 0L32 16L16 32L0 16L16 0Z" fill="#8A2BE2"/>
                        <path d="M16 4L28 16L16 28L4 16L16 4Z" fill="#EADDFF"/>
                    </svg> */}
                    {/* <span className="font-bold text-xl text-brand-dark">Moniva Snap</span> */}
                    <img src="assets/moniva.png" alt="Moniva-logo" className="w-[50px]" />
                </Link>
                {/* <NavbarList isOpen={isOpen}/> */}
                <nav className="hidden md:flex items-center space-x-8" id="nav-links">
                <a href="#" className="text-black hover:text-black transition-colors">Services</a>
                <a href="#" className="text-black hover:text-black transition-colors">Cases</a>
                <Link to="/about" className="text-black hover:text-black transition-colors">About Us</Link>
                <a href="#" className="hidden md:inline-block bg-[rgba(0,0,0,0)] text-black px-6 py-2 border-[1px] border-black rounded-full hover:bg-black hover:text-white transition-colors">
                    Get in Touch
                </a>
                </nav>
                <button className="md:hidden">
                    <img src="assets/burger.png" alt="burer" className="w-[40px] mr-[10px]" />
                </button>
            </div>
        </header>
    );
};

export default Header;
