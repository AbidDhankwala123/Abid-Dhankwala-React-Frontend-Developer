import React, { useContext, useState } from 'react';
import ThemeContext from '../context/ThemeContext';
import { Link } from 'react-router-dom';

const HeaderSidebar = () => {
    const { theme, setTheme, getFontClass } = useContext(ThemeContext);
    const [active1, setActive1] = useState(true);
    const [active2, setActive2] = useState(false);
    const [active3, setActive3] = useState(false);

    const handleHome = () => {
        setActive1(true);
        setActive2(false);
        setActive3(false);
    };
    const handleAbout = () => {
        setActive1(false);
        setActive2(true);
        setActive3(false);
    };
    const handleContact = () => {
        setActive1(false);
        setActive2(false);
        setActive3(true);
    };

    const isSidebar = theme === 'theme2';
    const handleThemeChange = e => setTheme(e.target.value);

    return (
        <div
            className={`transition-all duration-500 ease-in-out fixed top-0 z-10 w-full
        ${isSidebar
                    ? 'h-screen left-0 md:w-64 flex flex-col bg-gray-900 text-white px-4 pt-8'
                    : 'left-0 flex flex-col md:flex-row bg-black text-amber-50 shadow-md p-4 justify-between items-start md:items-center'
                }`}
        >
            <div className={`flex w-full ${isSidebar
                ? 'flex-col gap-6'
                : 'flex-col md:flex-row items-start md:items-center gap-4 md:gap-6'
                }`}
            >
                <h1 className={`text-xl sm:text-2xl font-bold ${getFontClass()} transition-all duration-500 ease-in-out`}>
                    Multi Theme App
                </h1>

                <nav className={`flex flex-col ${isSidebar
                    ? 'gap-4 text-lg'
                    : 'md:flex-row gap-2 md:gap-4 text-base'
                    }`}
                >
                    <Link to="/" onClick={handleHome} className={`${active1 && 'text-blue-500 underline font-semibold'} ${getFontClass()} hover:underline hover:text-blue-400 transition-colors duration-300`}>
                        Home
                    </Link>
                    <Link to="/about" onClick={handleAbout} className={`${active2 && 'text-blue-500 underline font-semibold'} ${getFontClass()} hover:underline hover:text-blue-400 transition-colors duration-300`}>
                        About
                    </Link>
                    <Link to="/contact" onClick={handleContact} className={`${active3 && 'text-blue-500 underline font-semibold'} ${getFontClass()} hover:underline hover:text-blue-400 transition-colors duration-300`}>
                        Contact
                    </Link>
                </nav>
            </div>

            <div className={`${isSidebar ? 'mt-8 w-full' : 'mt-4 md:mt-0'}`}>
                <label className={`${isSidebar ? 'block mb-1 text-sm' : 'sr-only'} ${getFontClass()}`}>
                    Switch Theme:
                </label>
                <select
                    value={theme}
                    onChange={handleThemeChange}
                    className={`p-2 rounded transition-colors duration-300 w-full md:w-auto
            ${isSidebar ? 'bg-white text-black' : 'border bg-black'} ${getFontClass()}`}
                >
                    <option value="theme1">Theme 1 - Minimalist</option>
                    <option value="theme2">Theme 2 - Dark Sidebar</option>
                    <option value="theme3">Theme 3 - Colorful</option>
                </select>
            </div>
        </div>
    );
};

export default HeaderSidebar;
