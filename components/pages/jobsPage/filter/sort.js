import * as React from 'react';


export default function JobSort () {
    return(
        <div className='w-full flex flex-row items-center justify-between pb-6'>
            <div className='flex items-center font-semibold text-xl space-x-2'>
                {/* <span className='text-green-700'>10</span> */}
                <span>Jobs & Vaccancies</span>
            </div>
            <div className='flex space-x-2 items-center'>
                <label id='listbox-label' htmlFor='comments' className='block text-sm font-semibold capitalize'>sort by:</label>
                <div className='mt-1 relative'>
                    <button type='button' className='relative w-full bg-white border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-green-700 focus:border-green-700 sm:text-sm' aria-haspopup='listbox' aria-expanded='true' aria-labelledby='listbox-label'>
                        <span className='block truncate capitalize'>most recent</span>
                        <span className='absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none'>
                            <svg className='h-5 w-5 text-gray-400' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path fillRule="evenodd" d="M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                        </span>
                    </button>
                </div>
            </div>
        </div>
    )
}