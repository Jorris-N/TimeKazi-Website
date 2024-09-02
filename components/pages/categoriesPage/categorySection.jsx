import React, { useState } from 'react';
import data from '../../../pages/data/categories-data.json';
import Image from 'next/image';
import { Pagination } from 'react-pagination-bar';




export default function CategorySection () {

    const [CurrentPage, setCurrentPage] = useState(1);
    const pagePostsLimit = 6;

    return (
        <div className='w-full pt-12 px-4 xl:px-0'>
            <div className='xl:w-10/12 mx-auto py-20'>
                <div className='xl:grid xl:grid-cols-3 xl:gap-6 flex flex-col space-y-4 xl:space-y-0'>
                    {
                        data 
                        .slice((CurrentPage - 1) * pagePostsLimit, CurrentPage * pagePostsLimit)
                        .map((item) => {
                            return (
                                item.jobs < 0 ? (
                            <div className='pb-6 pt-10 px-4 bg-white shadow-lg rounded cursor-pointer scale-100 xl:hover:scale-110 transition duration-500' key={item.id}>
                                <div className='flex flex-col items-center justify-center'>
                                <div className='border border-gray-200 h-20 w-20 scale-100 hover:scale-100 transition duration-500 rounded-full flex items-center justify-center bg-white'>
                                    <div className='h-14 w-16 bg-green-700 scale-90 text-white flex relative items-center justify-center rounded-full'>
                                        <Image src={item.img} alt='icon' layout='fill'/>
                                    </div>
                                    </div>
                                    <div className='capitalize flex flex-col items-center justify-center py-3 space-y-2 font-medium'>
                                        <h1 key={item.name}>{item.name}</h1>
                                        <span className='bg-green-light text-green-700 py-1 px-2 rounded text-xs'key={item.jobs}>{item.jobs} jobs</span>
                                    </div>
                                </div>
                            </div>
                                ) : (
                                    <div className='pb-6 pt-10 px-4 bg-white shadow-lg rounded cursor-pointer scale-100 xl:hover:scale-110 transition duration-500' key={item.id}>
                                    <div className='flex flex-col items-center justify-center'>
                                    <div className='border border-gray-200 h-20 w-20 scale-100 hover:scale-100 transition duration-500 rounded-full flex items-center justify-center bg-white'>
                                        <div className='h-14 w-16 bg-green-700 scale-90 text-white flex relative items-center justify-center rounded-full'>
                                            <Image src={item.img} alt='icon' layout='fill'/>
                                        </div>
                                        </div>
                                        <div className='capitalize flex flex-col items-center justify-center py-3 space-y-2 font-medium'>
                                            <h1 key={item.name}>{item.name}</h1>
                                        </div>
                                    </div>
                                </div> 
                                )
                         ) } )
                    }
                </div>
                <div className='w-full flex items-center justify-center py-10'>
                    <Pagination
                        currentPage={CurrentPage}
                        itemPerPage={pagePostsLimit}
                        onPageChange={(pageNumber) => setCurrentPage(pageNumber)}
                        totalItems={data.length}
                        pageNeighbours={2}
                    />
                </div>
            </div>
        </div>
    )
}

