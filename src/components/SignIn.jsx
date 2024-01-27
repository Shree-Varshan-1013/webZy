import React from 'react'

const SignIn = () => {
    return (
        <>
            <div className='flex max-w-lg mx-auto overflow-hidden bg-white rounded-lg lg:space-x-8 lg:max-w-5xl'>
                <div className="items-center hidden lg:flex lg:w-1/2">
                    <img src="https://tailwindcomponents.com/svg/secure-login-animate.svg" />
                </div>
                <div className='w-full px-6 py-8 md:px-8 lg:w-1/2'>
                    <h2 className='text-2xl text-center text-gray-700 font-semibold'>Welcome back</h2>
                    <p className='mt-2 text-xl text-center text-gray-600'>We are <span className='text-red-500'>Happy </span>to see you back</p>
                    <div className=''>
                        <div className="mt-5">
                            <label className="block text-md mb-2 text-gray-700">
                                Email
                            </label>
                            <input id="email" className='w-full py-2 rounded-lg border border-grey-200 text-grey-darker focus:border-primary focus:outline-none focus:ring focus:ring-purple2 focus:ring-opacity-20 pl-4' placeholder='Enter email' />
                        </div>
                        <div className='block mt-5'>
                            <label className="block text-md mb-2 text-gray-700">
                                Password
                            </label>
                            <div className='mb-5'>
                                <input id="password" className='rounded-lg border border-gray-200 text-grey-darker w-full py-2 focus:border-primary focus:outline-none focus:ring focus:ring-purple2 focus:ring-opacity-20 pl-4' placeholder='Enter password' />
                            </div>
                        </div>
                        <div className='mb-5 text-gray-500'>
                            <p>Forget password ?</p>
                        </div>
                        <div>
                            <button type="submit" className='w-full bg-purple2 py-2 px-4 rounded-lg hover:bg-purple text-white'>Sign in</button>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default SignIn;