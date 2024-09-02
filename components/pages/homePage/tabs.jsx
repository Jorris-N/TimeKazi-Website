import * as React from 'react';


export default function Tabs () {
    return(
        <div className='w-full'>
            <div className='flex xl:w-4/12 items-center  space-x-1 justify-center rounded mx-auto bg-green-700 p-2'>
                <button type='button' className='xl:w-1/2 py-2 px-6 rounded-l bg-white capitalize font-medium text-green-700'>latest jobs</button>
                <button type='button' className='xl:w-1/2 py-2 px-6 rounded-r hover:bg-white hover:text-green-700 capitalize font-medium text-white'>recent jobs</button>
            </div>
        </div>
    )
}