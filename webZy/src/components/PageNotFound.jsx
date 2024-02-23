import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const PageNotFound = () => {

    const navigate = useNavigate();

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
        >
            <div className="grid h-screen place-content-center bg-white px-4 dark:bg-slate-900">
                <div className="text-center">
                    <h1 className="text-9xl font-black dark:text-gray-200">404</h1>

                    <p className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-gray-200">Uh-oh!</p>

                    <p className="mt-4 text-gray-500 dark:text-gray-200">We can't find that page.</p>

                    <div className='flex justify-center mt-8'>
                        <a onClick={() => navigate('/')} className="relative rounded px-5 py-2.5 overflow-hidden group bg-purple2 hover:bg-gradient-to-r hover:from-purple2 hover:to-purple text-white hover:ring-2 hover:ring-offset-2 hover:ring-purple2 transition-all ease-out duration-300">
                            <span className="relative">Go to Home</span>
                        </a>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default PageNotFound