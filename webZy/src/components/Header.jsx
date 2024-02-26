import { useNavigate } from 'react-router-dom';
import ProfileDropdown from './ProfileDropdown';
import { Link } from 'react-scroll';
import { useSelector } from "react-redux";
import Toggle from './Toggle.jsx';
const Header = () => {

    const navigate = useNavigate();

    const { isLoggedIn, role } = useSelector((state) => state.global);

    return (
        <header className="select-none text-gray-600 body-font sticky top-0 z-[1100] w-full font-anuphan dark:bg-slate-500 ">
            <div className="container mx-auto flex flex-wrap p-4 flex-col md:flex-row items-center absolute backdrop-blur bg-opacity-90 dark:bg-opacity-20">
                <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                    <img src="/assets/phone2-light.png" alt="logo" width={40}/>
                    <span onClick={() => navigate('/')} className="cursor-pointer ml-3 text-xl color-caramel dark:text-white">WebZy</span>
                </a>
                <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400 flex flex-wrap items-center text-base justify-center">
                    <Link to="services" smooth duration={1500} className="mr-5 cursor-pointer text-gray-900 font-semibold dark:font-medium dark:text-white">Features</Link>
                    <Link to="about" smooth duration={1500} className="mr-5 cursor-pointer text-gray-900 font-semibold dark:font-medium dark:text-white">About</Link>
                    <Link to="contact" smooth duration={1500} className="mr-5 cursor-pointer text-gray-900 font-semibold dark:font-medium dark:text-white">Contact</Link>
                    <a  onClick={() => navigate('/who')} className="mr-5 cursor-pointer text-gray-900 font-semibold dark:font-medium dark:text-white">Recharge</a>
                    {
                        isLoggedIn && role === "ADMIN" && (<a onClick={() => navigate('/admin-dash')} className="mr-5 cursor-pointer text-gray-900 font-semibold dark:font-medium dark:text-white">Dashboard</a>)
                    }
                    <div className='flex justify-center'>
                        <Toggle />
                    </div>
                </nav>
                {
                    isLoggedIn ? (<ProfileDropdown />) : (<a onClick={() => navigate("/webzy/sign-in")} className="relative inline-flex items-center justify-center p-4 px-3 py-2 overflow-hidden font-medium text-purple2 transition duration-300 ease-out border-2 border-purple rounded-full shadow-md group">
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