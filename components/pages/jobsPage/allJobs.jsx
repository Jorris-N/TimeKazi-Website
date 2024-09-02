import * as React from 'react';
import FilterSection from './filterSection';
import JobSort from './filter/sort';
import JobSection from './jobsSection'
import JobListing from './jobListing';




export default function AllJobs () {
    return(
        <div className='w-full pt-12'>
            <div className='xl:w-10/12 mx-auto py-14'>
                <div className='flex xl:flex-row flex-col'>
                    <FilterSection/>
                    <div className='xl:hidden'>
                        <JobSection/>
                    </div>
                    <div className='w-full xl:ml-6 hidden xl:block'>
                        <JobSort/>
                        <JobListing/>
                    </div>
                </div>
            </div>
        </div>
    )
}