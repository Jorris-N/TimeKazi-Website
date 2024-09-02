import * as React from 'react';
import Link from 'next/link';

export default function WebNav () {
    return (
        <div className='w-full hidden xl:flex lg:flex bg-white  shadow sticky top-0'>
            <div className='w-full flex flex-row items-center justify-around px-10 py-3'>
                 {/*Logo*/}
                 <div>
                    <Link href='/'>
                        <a className='text-2xl font-bold'>
                            Timekazi
                        </a>
                    </Link>
                 </div>

                 {/* Navigation links */}
                 <nav className='font-medium'>
                    <ul className='flex items-center space-x-10 text-neutral-500 text-sm'>
                        <li>
                            <Link href='/'>
                                <a className='hover:text-green-600 capitalize'>home</a>
                            </Link>
                        </li>

                        <li className='link-item'>
                            <button type='button' className='flex items-center capitalize space-x-1 hover:text-green-600'>
                                <span>employers</span>
                                <span><svg className="w-3 h-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M19 9l-7 7-7-7"></path></svg></span>
                            </button>
                             {/* Dropdown items */}
                        <div className='absolute w-52'>
                            <nav className='bg-neutral-100 rounded p-1 shadow -ml-4' id='link-toggle'>
                                <svg className='absolute -mt-5 text-white' fill='currentColor' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{transform:"rotate(32deg)"}}> <path d="M8 6.82v10.36c0 .79.87 1.27 1.54.84l8.14-5.18c.62-.39.62-1.29 0-1.69L9.54 5.98C8.87 5.55 8 6.03 8 6.82z"/></svg>
                                <div className='w-full bg-white flex flex-col w-full'>
                                    <Link href='/employers'>
                                        <a className='w-full border-b border-neutral-200 capitalize'>
                                            <div className='scale-y-90 py-2 px-4 hover:scale-y-100 scale-x-95 hover:scale-x-100 transition duration-300 hover:bg-green-100 hover:text-green-600 w-full'>our employers</div>
                                        </a>
                                    </Link>
                                    <Link href=''>
                                        <a className='w-full border-b border-neutral-200 capitalize'>
                                            <div className='scale-y-90 py-2 px-4 hover:scale-y-100 scale-x-95 hover:scale-x-100 transition duration-300 hover:bg-green-100 hover:text-green-600 w-full'>create company</div>
                                        </a>
                                    </Link>
                                </div>
                            </nav>
                        </div>
                        </li>

                        <li className='link-item'>
                            <button type='button' className='flex items-center capitalize space-x-1 hover:text-green-600'>
                                <span>employees</span>
                                <span><svg className="w-3 h-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M19 9l-7 7-7-7"></path></svg></span>
                            </button>
                             {/* Dropdown items */}
                        <div className='absolute w-52'>
                            <nav className='bg-neutral-100 rounded p-1 shadow -ml-4' id='link-toggle'>
                                <svg className='absolute -mt-5 text-white' fill='currentColor' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{transform:"rotate(32deg)"}}> <path d="M8 6.82v10.36c0 .79.87 1.27 1.54.84l8.14-5.18c.62-.39.62-1.29 0-1.69L9.54 5.98C8.87 5.55 8 6.03 8 6.82z"/></svg>
                                <div className='w-full bg-white flex flex-col w-full'>
                                    <Link href='/jobs'>
                                        <a className='w-full border-b border-neutral-200 capitalize'>
                                            <div className='scale-y-90 py-2 px-4 hover:scale-y-100 scale-x-95 hover:scale-x-100 transition duration-300 hover:bg-green-100 hover:text-green-600 w-full'>browse jobs</div>
                                        </a>
                                    </Link>
                                    <Link href='/categories'>
                                        <a className='w-full border-b border-neutral-200 capitalize'>
                                            <div className='scale-y-90 py-2 px-4 hover:scale-y-100 scale-x-95 hover:scale-x-100 transition duration-300 hover:bg-green-100 hover:text-green-600 w-full'>browse categories</div>
                                        </a>
                                    </Link>
                                </div>
                            </nav>
                        </div>
                        </li>

                        <li>
                            <Link href='/jobs'>
                                <a className='hover:text-green-600 capitalize'>jobs</a>
                            </Link>
                        </li>

                        <li>
                            <Link href='/contact'>
                                <a className='hover:text-green-600 capitalize'>contact</a>
                            </Link>
                        </li>
                    </ul>
                 </nav>

                 <div className='text-sm'>
                    <Link href=''>
                        <a className='py-3 px-6 rounded text-white bg-green-700 flex items-center space-x-2 font-medium uppercase'>
                            <span><svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg></span>
                            <span>contact an expert</span>
                        </a>
                    </Link>
                 </div>
            </div> 
        </div>
    )
}