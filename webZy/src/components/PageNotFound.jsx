import React from 'react'

const PageNotFound = () => {
    return (
        <div className='h-screen dark:bg-slate-900' style={{backgroundImage:"url(/img/top.svg)", backgroundSize:"cover"}}>
            <div className='flex flex-col items-center'>
                <h1 className='inline-block text-[250px] font-anuphan font-extralight uppercase text-center dark:text-caramel'>Oops!</h1>
                <div className='absolute bg-white top-[55%] text-2xl left-[37%]'>
                    <p className='uppercase dark:bg-slate-900 dark:text-caramel'>404 - The Page can't be Found</p>
                </div>
                <button className="flex items-center rounded px-5 py-2.5 overflow-hidden group bg-purple2 hover:bg-gradient-to-r hover:from-purple2 hover:to-purple text-white hover:ring-2 hover:ring-offset-2 hover:ring-purple2 transition-all ease-out duration-300">Take me Home
                </button>
            </div>
        </div>
    )
}

export default PageNotFound