import React, { Component } from 'react';
import Link from 'next/link';

class AnnouncementBanner extends Component {
    render() {
        return (
            <div className='relative bg-green-600 text-sm xl:text-base lg:text-base'>
                <div className='xl:max-w-7xl mx-auto py-3 px-3 sm:px-6 lg:px-8 w-full'>
                    <div className='pr-16 sm:text-center sm:px-16'>
                        <p className='font-medium text-white'>
                            <span className='md:hidden capitalize'>site under development!</span>
                            <span className='hidden md:inline capitalize'>hello! the following website is currrently under development.</span>
                            <span className='block sm:ml-2 sm:inline-block'>
                                <Link href='https://dut.or.ke/sme' target='_blank'>
                                    <a className='text-white capitalize font-bold underline'>
                                        learn more
                                        <span aria-hidden='true' className='font-bold text-lg'>&rarr;</span>
                                    </a>
                                </Link>
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}

export default AnnouncementBanner;
