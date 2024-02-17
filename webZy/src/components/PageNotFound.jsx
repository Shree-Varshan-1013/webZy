import React from 'react'
import { useNavigate } from 'react-router-dom';

const PageNotFound = () => {

    const navigate = useNavigate();

    return (
        <div className="w-full h-screen flex flex-col items-center justify-center dark:bg-slate-900 ">
            <div className='flex flex-col sm:flex-col lg:flex-row justify-center items-center'>
                <div className='lg:w-1/2 p-10'>
                    <img src='/img/404-light.svg' className='object-fit bg-cover' />
                </div>
                <div className="flex flex-col items-center justify-center w-1/2">
                    <p className="text-3xl md:text-4xl lg:text-5xl text-gray-800 dark:text-white mt-12 font-anuphan">Page Not Found</p>
                    <p className="md:text-lg lg:text-xl text-gray-600 mt-8 font-anuphan dark:text-white">Sorry, the page you are looking for could not be found.</p>
                    <button className="flex items-center mt-10 sm:mb-10 rounded px-5 py-2.5 overflow-hidden group bg-purple2 hover:bg-gradient-to-r hover:from-purple2 hover:to-purple text-white hover:ring-2 hover:ring-offset-2 hover:ring-purple2 transition-all ease-out duration-300">Button
                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-auto" viewBox="0 0 24 24">
                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default PageNotFound