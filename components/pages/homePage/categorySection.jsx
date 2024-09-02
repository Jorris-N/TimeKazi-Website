import * as React from 'react';
import { useState, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import data from '../../../pages/data/categories-data.json'

let PageSize = 4;

export default function CategorySection () {

    const [currentPage, setCurrentPage] = useState(1);
    const currenTableData = useMemo(()=>{
        const firstPageIndex = (currentPage - 1) * PageSize;
        const lastPageIndex = firstPageIndex + PageSize ;

        return data.slice(firstPageIndex, lastPageIndex);
    }, [currentPage]);

    return(
        <div className='w-full pt-12 bg-neutral-100 px-4 xl:px-0'>
            <div className='xl:w-10/12 mx-auto py-20'>
                <div className='xl:w-9/12 mx-auto flex flex-col items-center space-y-2 justify-center'>
                    <h1 className='xl:text-3xl font-bold text-gray-700 capitalize'>job categories</h1>
                    <p className='text-gray-400 text-center font-medium text-sm capitalize'>Millions of people are searching for jobs, salary information and interview questions. See some of our most popular jobs that our partnering employers are offering to you today on our platform.</p>
                </div>
                <div className='py-10'>
                    <div className='xl:grid xl:grid-cols-4 xl:gap-6 flex flex-col space-y-4 xl:space-y-0'>
                        {currenTableData.map((item) =>{
                            return ( 
                                item.jobs < 0 ? (
                            <div className='pb-6 pt-10 px-4 bg-white shadow-lg rounded cursor-pointer scale-100 xl:hover:scale-110 transition duration-500' key={item.name}>
                                <div className='flex flex-col items-center justify-center'>
                                <div className='border border-gray-200 h-20 w-20 scale-100 hover:scale-100 transition duration-500 rounded-full flex items-center justify-center bg-white'>
                                    <div className='h-14 w-16 bg-green-700 scale-90 text-white flex relative items-center justify-center rounded-full'>
                                        <Image src={item.img} alt='icon' layout='fill'/>
                                    </div>
                                    </div>
                                </div>
                                <div className='capitalize flex flex-col items-center justify-center py-3 space-y-2 font-medium'>
                                    <h1 key={item.name}>{item.name}</h1>
                                    <span className='bg-green-light text-green-700 py-1 px-2 rounded text-xs'>{item.jobs} jobs</span>
                                </div>
                            </div>
                                ) : (
                                    <div className='pb-6 pt-10 px-4 bg-white shadow-lg rounded cursor-pointer scale-100 xl:hover:scale-110 transition duration-500' key={item.name}>
                                    <div className='flex flex-col items-center justify-center'>
                                    <div className='border border-gray-200 h-20 w-20 scale-100 hover:scale-100 transition duration-500 rounded-full flex items-center justify-center bg-white'>
                                        <div className='h-14 w-16 bg-green-700 scale-90 text-white flex relative items-center justify-center rounded-full'>
                                            <Image src={item.img} alt='icon' layout='fill'/>
                                        </div>
                                        </div>
                                    </div>
                                    <div className='capitalize flex flex-col items-center justify-center py-3 space-y-2 font-medium'>
                                        <h1 key={item.name}>{item.name}</h1>
                                    </div>
                                </div>
                                )
                        )})}
                    </div>

                    <div className='flex items-center justify-center xl:w-1/2 mx-auto py-10'>
                        <Link href='/categories'>
                            <a className=' bg-green-700 text-white py-3 px-10 rounded uppercase font-medium shadow-md'>
                                view all categories
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}