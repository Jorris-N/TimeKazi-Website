import * as React from 'react';
import Link from 'next/link';

export default function JobListing () {
    return(
       <div className='w-full flex flex-col'>
            <div>
                <div className='bg-white rounded shadow border-neutral-200 px-6'>
                    <div className='py-4 flex flex-row items-center justify-between border-b border-neutral-200'>
                        <Link href='#'>
                            <a className='flex flex-1 flex-row space-x-2 items-center'>
                                <div className='border border-gray-200 h-20 w-20 scale-90  rounded-full flex items-center justify-center bg-white'>
                                <div className='h-16 w-16  rounded-full  bg-neutral-100 flex items-center justify-center'>
                                <svg width="44" height="28" viewBox="0 0 50 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M16.4688 17.2695C16.4688 20.0898 15.6641 22.25 14.0547 23.75C12.4531 25.25 10.1367 26 7.10547 26H2.25391V8.86719H7.63281C10.4297 8.86719 12.6016 9.60547 14.1484 11.082C15.6953 12.5586 16.4688 14.6211 16.4688 17.2695ZM12.6953 17.3633C12.6953 13.6836 11.0703 11.8438 7.82031 11.8438H5.88672V23H7.44531C10.9453 23 12.6953 21.1211 12.6953 17.3633Z" fill="black"/>
                                    <path d="M33.9648 8.86719V19.9531C33.9648 21.2188 33.6797 22.3281 33.1094 23.2812C32.5469 24.2344 31.7305 24.9648 30.6602 25.4727C29.5898 25.9805 28.3242 26.2344 26.8633 26.2344C24.6602 26.2344 22.9492 25.6719 21.7305 24.5469C20.5117 23.4141 19.9023 21.8672 19.9023 19.9062V8.86719H23.5234V19.3555C23.5234 20.6758 23.7891 21.6445 24.3203 22.2617C24.8516 22.8789 25.7305 23.1875 26.957 23.1875C28.1445 23.1875 29.0039 22.8789 29.5352 22.2617C30.0742 21.6367 30.3438 20.6602 30.3438 19.332V8.86719H33.9648Z" fill="#B71919"/>
                                    <path d="M44.7695 26H41.1367V11.8906H36.4844V8.86719H49.4219V11.8906H44.7695V26Z" fill="#027C56"/>
                                </svg>
                                </div>
                                </div>
                                <div>
                                    <h1 className='text-lg font-semibold'>DUT LTD</h1>
                                    <h2 className='text-sm text-neutral-500 capitalize'>marketing director</h2>
                                </div>
                            </a>
                        </Link>
                        <div className='flex items-center space-x-1'>
                            <span>No.</span>
                            <span className='text-sm font-medium flex items-center justify-center text-white bg-green-700 h-8 w-8 rounded-full'>1</span>
                        </div>
                    </div>
                    <div className='py-8 flex items-center justify-between text-neutral-500 text-sm font-medium'>
                        <div className='flex flex-col space-y-5'>
                            <div className='grid grid-cols-2 gap-x-4'>
                                <h1>Job ID</h1>
                                <p>TK001</p>
                            </div>
                            <div className='grid grid-cols-2 gap-x-4'>
                                <h1>Job Type</h1>
                                <p>Full Time</p>
                            </div>
                            <div className='grid grid-cols-2 gap-x-4'>
                                <h1>Skills</h1>
                                <div className='flex space-x-3'>
                                <span className='inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-green-100 text-green-700'>
                                        <svg className='mr-1.5 h-2 w-2 text-green-400' fill="currentColor" viewBox="0 0 8 8"><circle cx={4} cy={4} r={3}/></svg>
                                        Design
                                    </span>
                                    <span className='inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-green-100 text-green-700'>
                                        <svg className='mr-1.5 h-2 w-2 text-green-400' fill="currentColor" viewBox="0 0 8 8"><circle cx={4} cy={4} r={3}/></svg>
                                        Marketing
                                    </span>
                                </div>
                            </div>
                            <div className='grid grid-cols-2 gap-x-4'>
                                <h1>Experience</h1>
                                <p>3+ Years</p>
                            </div>
                            <div className='grid grid-cols-2 gap-x-4'>
                                <h1>Location</h1>
                                <p>Taita Taveta, Voi, Kenya</p>
                            </div>
                        </div>
                        <div className='flex flex-col mr-8 space-y-3 uppercase'>
                            <Link href='#'>
                                <a className='py-3 px-8 bg-green-700 text-white rounded text-center shadow-md'>apply now</a>
                            </Link>
                            <Link href='#'>
                                <a className='py-3 px-8 bg-neutral-200 hover:bg-gray-500 hover:text-white text-neutral-700 rounded text-center'>view job</a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
       </div> 
    )
}