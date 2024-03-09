import Toggle from '../Toggle'

import { useNavigate } from 'react-router-dom';
const AdminSideBar = ({ setActiveLink, eventLogout }) => {

    const navigate = useNavigate();

    const handleLinkClick = (link) => {
        setActiveLink(link);
    };

    return (
        <div className="flex flex-col items-center w-40 h-screen overflow-hidden text-gray-400 bg-white dark:bg-slate-900 font-anuphan" style={{ backgroundImage: "url(/img/adminSideNavbar.svg)", backgroundRepeat: "no-repeat", backgroundSize: "cover" }}>
            <a className="flex items-center w-full px-3 mt-3 cursor-pointer" onClick={() => navigate("/")}>
                <img src="/assets/phone2-light.png" width={30} />
                <span className="ml-2 text-xl font-semibold font-anuphan text-black dark:text-caramel">Webzy</span>
            </a>
            <div className="w-full px-2">
                <div className="flex flex-col items-center w-full mt-3 border-t border-gray-700">
                    <a className="flex items-center w-full h-12 px-3 mt-2" href="#">
                        <div className='flex justify-center items-center'>
                            <Toggle />
                        </div>
                    </a>
                    <a onClick={() => handleLinkClick("link1")} className="flex items-center w-full h-12 px-3 mt-2 rounded dark:hover:bg-gray-700 hover:bg-fuchsia-300 hover:text-gray-300" href="#">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 36 36"><path fill="#B65FCF" d="M33 19a1 1 0 0 1-.71-.29L18 4.41L3.71 18.71A1 1 0 0 1 2.3 17.3l15-15a1 1 0 0 1 1.41 0l15 15A1 1 0 0 1 33 19" className="clr-i-solid clr-i-solid-path-1" /><path fill="#B65FCF" d="M18 7.79L6 19.83V32a2 2 0 0 0 2 2h7V24h6v10h7a2 2 0 0 0 2-2V19.76Z" className="clr-i-solid clr-i-solid-path-2" /><path fill="none" d="M0 0h36v36H0z" /></svg>
                        <span className="ml-2 text-sm font-medium text-black dark:text-caramel">Dashboard</span>
                    </a>
                    <a onClick={() => handleLinkClick("link2")} className="flex items-center w-full h-12 px-3 mt-2 rounded dark:hover:bg-gray-700 hover:bg-fuchsia-300  hover:text-gray-300" href="#">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#B65FCF" d="m21.41 11.58l-9-9C12.04 2.21 11.53 2 11 2H4a2 2 0 0 0-2 2v7c0 .53.21 1.04.59 1.41l.41.4c.9-.54 1.94-.81 3-.81a6 6 0 0 1 6 6c0 1.06-.28 2.09-.82 3l.4.4c.37.38.89.6 1.42.6c.53 0 1.04-.21 1.41-.59l7-7c.38-.37.59-.88.59-1.41c0-.53-.21-1.04-.59-1.42M5.5 7A1.5 1.5 0 0 1 4 5.5A1.5 1.5 0 0 1 5.5 4A1.5 1.5 0 0 1 7 5.5A1.5 1.5 0 0 1 5.5 7M10 19H7v3H5v-3H2v-2h3v-3h2v3h3z" /></svg>
                        <span className="ml-2 text-sm font-medium text-black dark:text-caramel">Details</span>
                    </a>
                    <a onClick={() => handleLinkClick("link4")} className="flex items-center w-full h-12 px-3 mt-2 rounded dark:hover:bg-gray-700 hover:bg-fuchsia-300 hover:text-gray-300" href="#">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none"><circle cx="12" cy="12" r="9" fill="#B65FCF" opacity="0.16" /><path stroke="#B65FCF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5.636 18.364A9 9 0 1 0 3 12.004V14" /><path stroke="#B65FCF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 12l2 2l2-2m6-4v5h5" /></g></svg>
                        <span className="ml-2 text-sm font-medium text-black dark:text-caramel">Recharge</span>
                    </a>
                </div>
                <div className="flex flex-col items-center w-full mt-2 border-t border-gray-700">
                    <a onClick={() => handleLinkClick("link5")} className="flex items-center w-full h-12 px-3 mt-2 rounded dark:hover:bg-gray-700 hover:bg-fuchsia-300 hover:text-gray-300" href="#">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                            <g fill="#B65FCF">
                                <path fillRule="evenodd" d="M8.25 6.75a3.75 3.75 0 1 1 7.5 0a3.75 3.75 0 0 1-7.5 0m7.5 3a3 3 0 1 1 6 0a3 3 0 0 1-6 0m-13.5 0a3 3 0 1 1 6 0a3 3 0 0 1-6 0m4.06 5.368A6.745 6.745 0 0 1 12 12a6.745 6.745 0 0 1 6.709 7.498a.75.75 0 0 1-.372.568A12.696 12.696 0 0 1 12 21.75a12.69 12.69 0 0 1-6.337-1.684a.75.75 0 0 1-.372-.568a6.787 6.787 0 0 1 1.019-4.38" clipRule="evenodd" />
                                <path d="M5.082 14.254a8.287 8.287 0 0 0-1.308 5.135a9.687 9.687 0 0 1-1.764-.44l-.115-.04a.563.563 0 0 1-.373-.487l-.01-.121a3.75 3.75 0 0 1 3.57-4.047m15.144 5.135a8.287 8.287 0 0 0-1.308-5.135a3.75 3.75 0 0 1 3.57 4.047l-.01.121a.563.563 0 0 1-.373.486l-.115.04c-.567.2-1.156.349-1.764.441" />
                            </g>
                        </svg>

                        <span className="ml-2 text-sm font-medium text-black dark:text-caramel">Users</span>
                    </a>
                    {/* <a className="flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-gray-700 hover:text-gray-300" href="#">
                        <svg className="w-6 h-6 stroke-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                        </svg>
                        <span className="ml-2 text-sm font-medium text-black dark:text-caramel">Settings</span>
                    </a>
                    <a className="relative flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-gray-700 hover:text-gray-300" href="#">
                        <svg className="w-6 h-6 stroke-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                        </svg>
                        <span className="ml-2 text-sm font-medium text-black dark:text-caramel">Messages</span>
                        <span className="absolute top-0 left-0 w-2 h-2 mt-2 ml-2 bg-fuchsia-500 rounded-full"></span>
                    </a> */}
                </div>
            </div>
            <a onClick={eventLogout} className="flex items-center justify-center w-full h-16 mt-auto bg-gray-800 hover:bg-gray-700 hover:text-gray-300" href="#">
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v1" /></svg>
                <span className="ml-2 text-sm font-medium">Logout</span>
            </a>
        </div>
    )
}

export default AdminSideBar;