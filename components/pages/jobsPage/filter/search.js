import * as React from 'react';


export default function Search () {
    return(
        <div className='flex flex-col space-y-3 items-center justify-center'>
            <form method='' action='POST'>
                <input className='rounded py-3 px-4 focus:outline-none border-2 bg-neutral-50 hover:border-green-700 focus:ring-offset-1 placeholder:text-sm focus:ring-green-700 border-neutral-200 placeholder:text-neutral-400' type={'text'} placeholder='Search Keywords'/>
            </form>
            <form method='' action='POST'>
                <input className='rounded py-3 px-4 focus:outline-none border-2 bg-neutral-50 hover:border-green-700 focus:ring-offset-1 placeholder:text-sm focus:ring-green-700 border-neutral-200 placeholder:text-neutral-400' type={'text'} placeholder='All Locations'/>
            </form>
        </div>
    )
}