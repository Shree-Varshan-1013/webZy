import React from 'react'
import { motion } from 'framer-motion'
const Payment = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
        >
            <div className='pt-20 pb-20'>
                <div className="max-w-sm mx-auto bg-white rounded-md shadow-md overflow-hidden dark:bg-slate-800 font-anuphan dark:text-white">
                    <div className="px-6 py-4 bg-gray-600 dark:text-white">
                        <h1 className="text-lg font-bold">Credit Card</h1>
                    </div>
                    <div className="px-6 py-4">
                        <div className="mb-4">
                            <label className="block dark:text-white font-bold mb-2">
                                Card Number
                            </label>
                            <input
                                className="appearance-none border border-gray-400 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="card-number" type="text" placeholder="**** **** **** ****" />
                        </div>
                        <div className="mb-4">
                            <label className="block dark:text-white font-bold mb-2">
                                Expiration Date
                            </label>
                            <input
                                className="appearance-none border border-gray-400 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="expiration-date" type="text" placeholder="MM/YY" />
                        </div>
                        <div className="mb-4">
                            <label className="block dark:text-white font-bold mb-2">
                                CVV
                            </label>
                            <input
                                className="appearance-none border border-gray-400 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="cvv" type="text" placeholder="***" />
                        </div>
                        <div className="mb-4">
                            <label className="block dark:text-white font-bold mb-2">
                                Cardholder Name
                            </label>
                            <input
                                className="appearance-none border border-gray-400 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                type="text" placeholder="Full Name" />
                        </div>
                        <div className="flex justify-center items-center">
                            <a className="relative rounded px-5 py-2.5 overflow-hidden group bg-purple2 hover:bg-gradient-to-r hover:from-purple2 hover:to-purple text-white hover:ring-2 hover:ring-offset-2 hover:ring-purple2 transition-all ease-out duration-300">
                                <span className="relative">Apply</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default Payment