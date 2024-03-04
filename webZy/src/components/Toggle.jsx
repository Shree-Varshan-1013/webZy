import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleDarkMode } from '../config/GlobalSlice';

const Toggle = () => {
    const dispatch = useDispatch();
    const [localDarkMode, setLocalDarkMode] = useState(true);
    const globalDarkMode = useSelector(state => state.global.darkMode);

    useEffect(() => {
        const storedTheme = localStorage.getItem('isDarkmode');
        setLocalDarkMode(storedTheme === 'true');
    }, []);

    useEffect(() => {
        document.documentElement.classList.toggle("dark", localDarkMode);
    }, [localDarkMode]);

    const toggleTheme = () => {
        const newMode = !localDarkMode;
        setLocalDarkMode(newMode);
        localStorage.setItem('isDarkmode', newMode.toString());
        dispatch(toggleDarkMode(newMode));
    };

    const isDarkmode = globalDarkMode || localDarkMode;

    const darkIcon = (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
        </svg>
    );

    const lightIcon = (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
    );

    return (
        <button
            className="w-[70px] h-8 rounded-full bg-white flex items-center transition duration-300 focus:outline-none shadow select-none"
            onClick={toggleTheme}
        >
            <div
                className={`w-9 h-9 relative rounded-full transition duration-500 transform p-1 text-white ${isDarkmode ? 'bg-gray-700 translate-x-full' : 'bg-yellow-500 -translate-x-2'
                    }`}
            >
                {isDarkmode ? darkIcon : lightIcon}
            </div>
        </button>
    );
};

export default Toggle;
