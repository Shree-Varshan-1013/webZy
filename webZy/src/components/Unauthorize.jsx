import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
const Unauthorize = () => {

    const navigate = useNavigate();

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
        >
            <Header />
            <div className='dark:bg-slate-900 h-screen bg-white'>
                <div className="flex flex-col justify-center text-center items-center pt-[155px]">
                    <h1 className="mb-4 text-6xl text-red-500 font-alfa">Access Denied</h1>
                    <p className="mb-4 text-xl text-gray-600 font-anuphan dark:text-white">Sorry, this area is off-limits to you!</p>
                    <div className="animate-bounce">
                        <svg className="mx-auto h-16 w-16 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path>
                        </svg>
                    </div>
                    <div className='flex justify-center'>
                        <button onClick={() => navigate("/")} className="flex items-center mt-10 sm:mb-10 rounded px-5 py-2.5 overflow-hidden group bg-purple2 hover:bg-gradient-to-r hover:from-purple2 hover:to-purple text-white hover:ring-2 hover:ring-offset-2 hover:ring-purple2 transition-all ease-out duration-300">Go to Home
                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-auto" viewBox="0 0 24 24">
                                <path d="M5 12h14M12 5l7 7-7 7"></path>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            <Footer />
        </motion.div>
    )
}

export default Unauthorize