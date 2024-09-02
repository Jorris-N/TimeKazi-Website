import * as React from 'react';
import Link from 'next/link';
import Tabs from '../homePage/tabs';
import jobData from '../../../pages/data/jobs-data.json'
import Image from 'next/image';

export default function JobsSection () {
    return (
        <div className='w-full'>
            <div className='xl:w-10/12 mx-auto xl:py-32 py-10 px-4'>
                <Tabs/>
                <div className='py-10 xl:grid xl:grid-cols-4 xl:gap-6 grid-rows-1 flex flex-col space-y-4'>
                {jobData.map((card)=>(
                        <div className='bg-white shadow border border-gray-200 rounded px-4 py-2 cursor-pointer' key={card.vacancy}>

                            {/*head*/}
                            <div>

                                {/*badge*/}
                                <div className='flex w-full items-center justify-between'>
                                    <span className='uppercase font-medium bg-green-light text-green-700 text-xs p-1 rounded border border-green-300'>full time</span>
                                </div>

                                {/* company logo*/}
                                <div className='w-full flex items-center justify-center pt-10 '>
                                    <div className='border border-gray-200 h-20 w-20 scale-100 hover:scale-100 transition duration-500 rounded-full flex items-center justify-center bg-white'>
                                        <div className='h-16 w-16 scale-90 rounded-full relative bg-neutral-100 flex items-center justify-center'>
                                            {/* <card.logo  aria-hidden='true' /> */}
                                            <Image src={card.img} layout='fill' alt='icon'/>
                                        </div>
                                    </div>
                                </div>

                            </div>

                            {/*  body*/}
                            <div className='w-full flex flex-col items-center justify-center pb-6 pt-2'>
                                <Link href={card.href} key={card.vacancy}>
                                   <a className='text-lg font-semibold hover:text-green-700'>{card.vacancy}</a>
                                </Link>
                                <div className='text-xs text-neutral-400 flex space-x-2 items-center pt-1 pb-6'>
                                    <span key={card.company} className='font-semibold text-green-700'>{card.company}</span>
                                    <span className='h-1 w-1 rounded-full bg-green-600 mt-1'></span>
                                    <div>
                                        <span key={card.city}>{card.city}, </span>
                                        <span key={card.country}>{card.country}</span>
                                    </div>
                                </div>
                                <div className='flex flex-col space-y-3 uppercase justify-center items-center pt-10'>
                                    <Link href='#'>
                                        <a className=' py-2 px-8 bg-green-700 text-white rounded text-center shadow-md'>
                                            apply now
                                        </a>
                                    </Link>
                                    <Link href='#'>
                                        <a className='py-2 px-10  bg-neutral-200 hover:bg-gray-500 hover:text-white text-neutral-700 rounded text-center'>
                                            view job
                                        </a>
                                    </Link>
                                </div>
                            </div>

                        </div>
                    )) } 
                </div>
            </div>
        </div>
    )
}
