
import React, {useState} from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    let handleToggle = ()=>{
        setIsOpen(!isOpen);
    }

    return (
        <header className={`${isOpen?"rounded-[38px]":"rounded-[38px]"} bg-white/30 backdrop-blur-md absolute top-[20px] z-50 w-[95vw] xl:w-[75vw] shadow-sm transition-all duration-300 ease-in-out`}>
            <div className=":w-full px-[20px] py-3 flex justify-between items-center">
                <div className={`${isOpen?"flex-row justify-center h-[40vh]":"h-[50px]"} `}>
                    <Link to="/" className="flex items-center space-x-2">
                        <img src="assets/moniva.png" alt="Moniva-logo" className="w-[50px]" />
                    </Link>
                </div> 
                <nav className={`${isOpen?'flex flex-col h-[40vh] [&>a]:m-0 space-x-0 space-y-5 justify-end pb-[20px]':'hidden'} text-decoration-none md:flex md:flex-row md:h-auto items-center md:space-x-8 [&>a]:text-[20px] transition-all duration-1000 ease-in-out`} id="nav-links">
                    <a href="#" className={`${isOpen? "m-0" : ""} text-black hover:text-black transition-colors`}>Services</a>
                    <a href="#" className={`${isOpen? "m-[0px]" : ""} text-black hover:text-black transition-colors`}>Cases</a>
                    <Link to="/about" className="text-black hover:text-black transition-colors">About Us</Link>
                    <a href="#" className="md:inline-block bg-[rgba(0,0,0,0)] text-black px-6 py-2 border-[1px] border-black rounded-full hover:bg-black hover:text-white transition-colors">
                        Get in Touch
                    </a>
                </nav>
                <div className={`${isOpen?"flex-row justify-center h-[40vh] pt-[5px]":"h-[40px]"} `}>
                    <button className="md:hidden" onClick={handleToggle}>
                        <img src="assets/burger.png" alt="burer" className="w-[40px]" />
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;
