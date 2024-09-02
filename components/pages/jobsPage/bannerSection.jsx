import * as React from 'react';
import Link from 'next/link';

export default function BannerSection () {
    return (
        <div className='w-full bg-green-100 flex flex-col space-y-4 justiy-center overflow-hidden h-44' id='employerBanner'>
            <div className='w-full flex flex-col justify-center h-44' style={{background: "rgba(0,0,0,.5"}}>
                <div className='flex flex-col space-y-2 items-center justify-center text-white px-4 xl:px-0'>
                    <h1 className='xl:text-3xl text-2xl font-bold capitalize text-center'>browse jobs</h1>
                    <div className='font-medium flex items-center space-x-3 capitalize'>
                        <Link href='/'>
                            <a className='capitalize flex items-center space-x-2 mt-4'>
                            <span className='hover:text-green-600'>home</span>
                            <span><svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 5l7 7-7 7M5 5l7 7-7 7"></path>
                                            </svg></span>
                            <span>employees</span>
                            <span><svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 5l7 7-7 7M5 5l7 7-7 7"></path>
                                            </svg></span>
                            <span>jobs</span>
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}