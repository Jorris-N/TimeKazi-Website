import * as React from 'react';
import Link from 'next/link';
import Tabs from './tabs';
import jobData from '../../../pages/data/jobs-data.json';
import Image from 'next/image';

const ConditionalWrapper = ({ children, condition }) => {
    return condition < 0 ? (
        <div className=''>{children}</div>
    ) : (
        <div className='w-full mx-auto'>
            <div className=' bg-white rounded px-4 py-2'>
                <h1 className='text-center text-gray-100 font-bold uppercase items-center'>data not available!</h1>
            </div>
        </div>
    )
}


export default function JobsSection () {
    return (
        <div className='w-full'>
            <div className='xl:w-10/12 mx-auto xl:py-32 py-10 px-4'>
                <Tabs/>           
                        <div className='py-10 xl:grid xl:grid-cols-4 xl:gap-6 grid-rows-1 flex flex-col space-y-4 xl:space-y-0'>
                           
                        {jobData.map((card) =>{
                            return (

                                <ConditionalWrapper condition={card.id} key={card.vacancy}>
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
                                            <div className='h-16 w-16  scale-90 rounded-full relative bg-neutral-100 flex items-center justify-center'>
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
                                    <div className=''>
                                        <button type='button' className='px-3 py-2 border-2 border-green-700 rounded uppercase font-medium text-green-700 text-sm hover:bg-green-700 hover:text-white'>apply now</button>
                                    </div>
                                </div>
    
                            </div>
                            </ConditionalWrapper>
                            )
                        }
                            ) } 
                        </div>
                   
                <div className='flex items-center justify-center xl:w-1/2 mx-auto py-10'>
                        <Link href='/jobs'>
                            <a className=' bg-green-700 text-white py-3 px-10 rounded uppercase font-medium shadow-md'>
                                browse all jobs
                            </a>
                        </Link>
                    </div>

            </div>
        </div>
    )
}
