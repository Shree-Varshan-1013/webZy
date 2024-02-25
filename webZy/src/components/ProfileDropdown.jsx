import { useState, useRef, useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { toast } from 'sonner';
import { useNavigate } from 'react-router-dom';
import { addToken, addUserDetails, deleteRole, deleteToken, deleteUserDetails, toggleLogin } from '../config/GlobalSlice';
import { useSelector } from 'react-redux';

const ProfileDropdown = () => {

    const [isOpen, setIsOpen] = useState(false);

    const dispatch = useDispatch();

    const navigate = useNavigate();

    const dropdownRef = useRef(null);

    const { userDetails } = useSelector((state) => state.global);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('click', handleClickOutside);

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    const getToast = () => {
        toast.loading("Logging you out !");
        setTimeout(() => {
            toast.success("Successfully logged out see you next time !");
            dispatch(toggleLogin());
            dispatch(deleteRole());
            dispatch(addUserDetails(null));
            dispatch(addToken(null));
            setTimeout(() => {
                navigate('/');
            }, 2000);
        }, 2000);
    }

    const eventLogout = () => {
        getToast();
        setTimeout(() => {
            navigate('/');
        }, 5000);
    }

    return (
        <>
            <div className="lg:w-fit-content flex justify-end" ref={dropdownRef}>
                <div className="relative inline-block">
                    <button className="flex h-12 w-12 items-center justify-center rounded-lg bg-slate-900 text-slate-100 ring-slate-100 transition hover:shadow-md hover:ring-2 overflow-hidden" onClick={() => setIsOpen(!isOpen)} >
                        <span className="text-white text-4xl font-bold bg-purple3 w-full text-center h-full">{userDetails ? userDetails.userName.charAt(0).toUpperCase() : 'Z'}</span>
                    </button>
                    {
                        isOpen && (<div className="absolute right-0 mt-3 flex w-60 flex-col gap-3 rounded-xl bg-slate-900 dark:bg-slate-800 p-4 text-slate-100 shadow-lg">
                            <div className="flex gap-3 items-center">
                                <div className="flex items-center justify-center rounded-lg h-12 w-12 overflow-hidden border-2 border-slate-600">
                                    <span className="text-white text-4xl font-bold bg-purple3 w-full text-center h-full">{userDetails ? userDetails.userName.charAt(0).toUpperCase() : 'Z'}</span>
                                </div>
                                <div>
                                    <div className="flex gap-1 text-sm font-semibold">
                                        <span>{userDetails ? userDetails.userName : ""}</span>
                                        <span className="text-sky-400">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-5 w-5">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"></path>
                                            </svg>
                                        </span>
                                    </div>
                                    <div className="text-xs text-slate-400">{userDetails ? userDetails.role[0].roleName : ""}</div>
                                </div>
                            </div>
                            <div className="border-t border-slate-500/30"></div>
                            <div className="flex flex-col">
                                <a onClick={() => navigate('/profile')} className="flex items-center gap-3 rounded-md py-2 px-3 hover:bg-slate-800 dark:hover:bg-slate-900 cursor-pointer">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                                        <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z" clipRule="evenodd"></path>
                                    </svg>
                                    <span>Profile</span>
                                </a>
                                {/* <a href="#" className="flex items-center gap-3 rounded-md py-2 px-3 hover:bg-slate-800 dark:hover:bg-slate-900">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-5 w-5">
                                        <path fill="currentColor" d="M22 20V7l-2-4H4L2 7.004V20a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1M5.236 5h13.528l1 2H4.237zM9 11h6v2H9z" />
                                    </svg>
                                    <span>Your Orders</span>
                                </a> */}
                                <a onClick={() => navigate('/payment-history')} className="flex items-center gap-3 rounded-md py-2 px-3 hover:bg-slate-800 dark:hover:bg-slate-900">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14" className="h-5 w-5">
                                        <path fill="currentColor" fillRule="evenodd" d="M1.5 0A1.5 1.5 0 0 0 0 1.5v6A1.5 1.5 0 0 0 1.5 9h11A1.5 1.5 0 0 0 14 7.5v-6A1.5 1.5 0 0 0 12.5 0zm6.125 1.454a.625.625 0 1 0-1.25 0v.4a1.532 1.532 0 0 0-.15 3.018l1.197.261a.39.39 0 0 1-.084.773h-.676a.39.39 0 0 1-.369-.26a.625.625 0 0 0-1.178.416c.194.55.673.965 1.26 1.069v.415a.625.625 0 1 0 1.25 0V7.13a1.641 1.641 0 0 0 .064-3.219L6.492 3.65a.281.281 0 0 1 .06-.556h.786a.388.388 0 0 1 .369.26a.625.625 0 1 0 1.178-.416a1.64 1.64 0 0 0-1.26-1.069zM2.75 3.75a.75.75 0 1 1 0 1.5a.75.75 0 0 1 0-1.5m8.5 0a.75.75 0 1 1 0 1.5a.75.75 0 0 1 0-1.5M4.5 9.875c.345 0 .625.28.625.625v2a.625.625 0 1 1-1.25 0v-2c0-.345.28-.625.625-.625m5.625.625a.625.625 0 1 0-1.25 0v2a.625.625 0 1 0 1.25 0zm-2.5.75a.625.625 0 1 0-1.25 0v2a.625.625 0 1 0 1.25 0z" clipRule="evenodd" />
                                    </svg>
                                    <span>Payment History</span>
                                </a>
                                {/* <a href="#" className="flex items-center gap-3 rounded-md py-2 px-3 hover:bg-slate-800 dark:hover:bg-slate-900">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                                        <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm11.378-3.917c-.89-.777-2.366-.777-3.255 0a.75.75 0 01-.988-1.129c1.454-1.272 3.776-1.272 5.23 0 1.513 1.324 1.513 3.518 0 4.842a3.75 3.75 0 01-.837.552c-.676.328-1.028.774-1.028 1.152v.75a.75.75 0 01-1.5 0v-.75c0-1.279 1.06-2.107 1.875-2.502.182-.088.351-.199.503-.331.83-.727.83-1.857 0-2.584zM12 18a.75.75 0 100-1.5.75.75 0 000 1.5z" clipRule="evenodd"></path>
                                    </svg>
                                    <span>Help Center</span>
                                </a> */}
                            </div>
                            <div className="border-t border-slate-500/30"></div>
                            <button className="flex justify-center gap-3 rounded-md bg-red-600 py-2 px-3 font-semibold hover:bg-red-500 focus:ring-2 focus:ring-red-400">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
                                    <path fillRule="evenodd" d="M7.5 3.75A1.5 1.5 0 006 5.25v13.5a1.5 1.5 0 001.5 1.5h6a1.5 1.5 0 001.5-1.5V15a.75.75 0 011.5 0v3.75a3 3 0 01-3 3h-6a3 3 0 01-3-3V5.25a3 3 0 013-3h6a3 3 0 013 3V9A.75.75 0 0115 9V5.25a1.5 1.5 0 00-1.5-1.5h-6zm10.72 4.72a.75.75 0 011.06 0l3 3a.75.75 0 010 1.06l-3 3a.75.75 0 11-1.06-1.06l1.72-1.72H9a.75.75 0 010-1.5h10.94l-1.72-1.72a.75.75 0 010-1.06z" clipRule="evenodd"></path>
                                </svg>
                                <span onClick={eventLogout}>Logout</span>
                            </button>
                        </div>
                        )
                    }
                </div>
            </div>
        </>
    )
}

export default ProfileDropdown