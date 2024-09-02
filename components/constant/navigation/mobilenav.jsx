import * as React from 'react';
import Link from 'next/link';
import { useState } from 'react';

export default function MobileNav () {

    const [showOptions, setShowOptions] = useState(false);
    const handleClick = () => {
        setShowOptions(!showOptions);
    }

    return(
        <div className='w-full xl:hidden lg:hidden'>
            <div className='w-full bg-white shadow px-3 py-2 flex items-center justify-between'>

                {/* logo */}
                <div>
                    <Link href='/'>
                        <a className='text-xl font-bold' id='logo'>Timekazi</a>
                    </Link>
                </div>

                {/* Menu */}
                <div>
                    <button type='button' onClick={handleClick}>
                        <svg className="w-7 h-7 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    </button>

                {/* Navigation */}
                {showOptions && (
                    <div className='w-full absolute inset-x-0 px-2 mt-2'>
                        <nav className='bg-neutral-100 rounded-b shadow border-t border-slate-100 p-1 text-sm text-neutral-500 font-medium'>
                            <ul className='flex flex-col w-full bg-white'>
                                <Link href='/'>
                                    <a className='capitalize hover:text-green-600 border-b border-neutral-200 py-2' id='mobile-link-item'>
                                        <div className='px-2'>
                                            home
                                        </div>
                                    </a>
                                </Link>

                                <Link href=''>
                                    <a className='hover:text-green-600 border-b border-neutral-200 py-2' id='mobile-link-item'>
                                        <div className='px-2 capitalize flex items-center justify-between'>
                                            <span>employers</span>
                                            <span><svg id='right-arrow' className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M9 5l7 7-7 7"></path></svg></span>
                                        </div>

                                        {/* DropDown */}
                                        <div className='border-t border-neutral-200 mt-2 text-neutral-500' id='mobile-link-toggle'>
                                            <nav className='flex flex-col capitalize'>
                                                <Link href='/employers'>
                                                    <a className='capitalize hover:text-green-600 border-b border-neutral-200 py-2' id='mobile-link-item'>
                                                        <div className='px-2'>
                                                            our employers
                                                        </div>
                                                    </a>
                                                </Link>

                                                <Link href=''>
                                                    <a className='capitalize hover:text-green-600 border-b border-neutral-200 py-2' id='mobile-link-item'>
                                                        <div className='px-2'>
                                                            create company
                                                        </div>
                                                    </a>
                                                </Link>
                                            </nav>
                                        </div>
                                    </a>
                                </Link>

                                <Link href=''>
                                    <a className='hover:text-green-600 border-b border-neutral-200 py-2' id='mobile-link-item'>
                                        <div className='px-2 capitalize flex items-center justify-between'>
                                            <span>employees</span>
                                            <span><svg id='right-arrow' className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M9 5l7 7-7 7"></path></svg></span>
                                        </div>

                                        {/* DropDown */}
                                        <div className='border-t border-neutral-200 mt-2 text-neutral-500' id='mobile-link-toggle'>
                                            <nav className='flex flex-col capitalize'>
                                                <Link href='/jobs'>
                                                    <a className='capitalize hover:text-green-600 border-b border-neutral-200 py-2' id='mobile-link-item'>
                                                        <div className='px-2'>
                                                            browse jobs
                                                        </div>
                                                    </a>
                                                </Link>

                                                <Link href='/categories'>
                                                    <a className='capitalize hover:text-green-600 border-b border-neutral-200 py-2' id='mobile-link-item'>
                                                        <div className='px-2'>
                                                            browse categories
                                                        </div>
                                                    </a>
                                                </Link>
                                            </nav>
                                        </div>
                                    </a>
                                </Link>

                                <Link href='/jobs'>
                                    <a className='capitalize hover:text-green-600 border-b border-neutral-200 py-2' id='mobile-link-item'>
                                        <div className='px-2'>
                                            jobs
                                        </div>
                                    </a>
                                </Link>

                                <Link href='/contact'>
                                    <a className='capitalize hover:text-green-600 border-b border-neutral-200 py-2' id='mobile-link-item'>
                                        <div className='px-2'>
                                            contact
                                        </div>
                                    </a>
                                </Link>

                                <Link href=''>
                                    <a className='pt-6  pb-2 text-white px-4 uppercase'>
                                        <div className='bg-green-600 hover:bg-green-700 rounded py-2 flex items-center space-x-2 justify-center'>
                                            <span><svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg></span>
                                            <span>contact an expert</span>
                                        </div>
                                    </a>
                                </Link>
                            </ul>
                        </nav>
                    </div>
                )}
                </div>
            </div>
        </div>
    )
}