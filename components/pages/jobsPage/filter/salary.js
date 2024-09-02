import * as React from 'react';


export default function Salary () {
    return(
        <div>
            <div className='border-b border-neutral-200 pb-3'>
                <h1 className='font-semibold capitalize'>salary range</h1>
            </div>
            <div>
                <div className='relative flex items-start py-4 border-b border-neutral-300 border-dashed'>
                    <div className='flex items-center h-5'>
                        <input
                            id='comments'
                            aria-describedby='comments-description'
                            name='comments'
                            type={'checkbox'}
                            className='focus:ring-green-500 h-4 w-4 text-green-700 border-neutral-300 rounded-full'/>
                    </div>
                    <div className='ml-3 text-sm flex justify-between w-full font-medium text-neutral-500'>
                        <label htmlFor='comments'>
                            Under 10,000
                        </label>
                        <label htmlFor='comments'>120</label>
                    </div>
                </div>
            </div>
        </div>
    )
}