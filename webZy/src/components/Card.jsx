import React from 'react'

const Card = () => {
    return (
        <div className='mx-auto max-w-xs rounded-lg p-6 shadow-lg'>
            <img src='/img/cards/enjoy.svg' className='w-full h-32 object- rounded' />
            <h3 className='text-2xl font-poppins mb-4'>Card title</h3>
            <p className='font-anuphan'>lorem is a sample text bla bla bla</p>
            <div className='mt-4 flex items-center justify-between'>
                <button className='px-4 py-2 bg-red-500 rounded focus:outline-none hover:bg-red-600'>Cancel</button>
                <button className='px-4 py-2 rounded bg-green-500 focus:outline-none hover:bg-green-600'>Accept</button>
            </div>
           
        </div> 
    )
}

export default Card;