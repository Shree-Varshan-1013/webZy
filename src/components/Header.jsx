import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Toggle from './Toggle.jsx';
import ProfileDropdown from './ProfileDropdown';
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

const Header = () => {

    // const dispatch = useDispatch();
    
    const navigate = useNavigate();

    const [isLogin, setLogin] = useState(true);

    return (
        <header className="text-gray-600 body-font sticky top-0 z-[1100] w-full backdrop-blur bg-opacity-90 font-anuphan dark:bg-slate-500 dark:bg-opacity-20">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10 text-white p-2 bg-purple2 rounded-full" viewBox="0 0 24 24">
                        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                    </svg>
                    <span className="ml-3 text-xl color-caramel">WebZy</span>
                </a>
                <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400 flex flex-wrap items-center text-base justify-center">
                    <a className="mr-5 text-gray-900 font-semibold">Services</a>
                    <a className="mr-5 text-gray-900 font-semibold">Pricing</a>
                    <a className="mr-5 text-gray-900 font-semibold">About</a>
                    <a className="mr-5 text-gray-900 font-semibold">Contact</a>
                    <div className='flex justify-center'>
                        <Toggle/>
                    </div>
                </nav>
                {
                    isLogin ? (<ProfileDropdown />) : (<a onClick={() => navigate("/sign-in")} className="relative inline-flex items-center justify-center p-4 px-3 py-2 overflow-hidden font-medium text-purple2 transition duration-300 ease-out border-2 border-purple rounded-full shadow-md group">
                        <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-purple2 group-hover:translate-x-0 ease">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                        </span >
                        <span className="absolute flex items-center justify-center w-full h-full text-purple-500 transition-all duration-300 transform group-hover:translate-x-full ease">Login</span>
                        <span className="relative invisible">Button Text</span>
                    </a >)
                }
            </div >
        </header >
    )
}

export default Header