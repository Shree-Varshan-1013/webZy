import React from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
const PaymentSucces = () => {

    const navigate = useNavigate();

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
        >
            <div className='flex justify-center shadow-2xl'>
                <div className=" h-screen pt-[150px] w-1/2 dark:text-white font-anuphan select-none" >
                    <div className="bg-white dark:bg-slate-900 p-6 md:mx-auto">
                        <svg viewBox="0 0 24 24" className="text-green-600 w-16 h-16 mx-auto my-6">
                            <path fill="currentColor"
                                d="M12,0A12,12,0,1,0,24,12,12.014,12.014,0,0,0,12,0Zm6.927,8.2-6.845,9.289a1.011,1.011,0,0,1-1.43.188L5.764,13.769a1,1,0,1,1,1.25-1.562l4.076,3.261,6.227-8.451A1,1,0,1,1,18.927,8.2Z">
                            </path>
                        </svg>
                        <div className="text-center">
                            <h3 className="md:text-2xl text-base text-gray-900 dark:text-white font-semibold text-center">Payment Done!</h3>
                            <p className="text-gray-600 my-2">Thank you for completing your secure online payment.</p>
                            <p> Have a great day!  </p>
                            <div className="flex justify-center items-center mt-5">
                                <a onClick={() => navigate("/")} className="relative rounded px-5 py-2.5 overflow-hidden group bg-purple2 hover:bg-gradient-to-r hover:from-purple2 hover:to-purple text-white hover:ring-2 hover:ring-offset-2 hover:ring-purple2 transition-all ease-out duration-300">
                                    <span className="relative">Return Home</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default PaymentSucces