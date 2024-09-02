import * as React from 'react';


export default function CtaSection () {
    return (
        <div className='w-full bg-green-700 py-20 xl:px-0 px-4'>
            <div className='xl:w-9/12 mx-auto'>

                {/* Heading */}
                <div className='xl:w-9/12 mx-auto flex flex-col xl:items-center space-y-2 justify-center text-white'>
                    <h1 className='xl:text-3xl font-bold capitalize'>want job news and updates?</h1>
                    <p className='xl:text-center font-medium text-sm tracking-wide capitalize'>sign up for our newsletter to stay up to date.</p>
                </div>
                <div className='py-10'>
                    <form action='' method='POST' className='xl:w-9/12 mx-auto flex items-center bg-white rounded p-1 border-4 border-green-200'>
                       <span className='ml-2 bg-green-light p-1 rounded'><svg className='text-green-700 w-5 h-5' fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg></span>
                        <input className='w-full text-gray-500 placeholder:text-gray-400 px-4 placeholder:text-sm focus:outline-none' type={'email'} placeholder={'Enter your Email...'}/>
                        <button type='submit' value={'Subscribe'} className='py-2 px-4 rounded uppercase bg-green-700 text-white text-sm'>subscribe</button> 
                    </form>
                </div>
            </div>
        </div>
    )
}