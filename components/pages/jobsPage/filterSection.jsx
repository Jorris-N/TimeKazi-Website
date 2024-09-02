import * as React from 'react';
import Search from './filter/search';
import Salary from './filter/salary';
import JobType from './filter/type';


export default function FilterSection () {
    return(
        <div className='xl:w-1/4 xl:flex xl:flex-col space-y-4 hidden'>
            <div className='px-4 py-6 bg-white rounded border border-neutral-200 shadow'>
                <Search/>
            </div>
            <div className='px-4 py-6 bg-white rounded border border-neutral-200 shadow'>
                <Salary/>
            </div>
            <div className='px-4 py-6 bg-white rounded border border-neutral-200 shadow'>
                <JobType/>
            </div>
        </div>
    )
}