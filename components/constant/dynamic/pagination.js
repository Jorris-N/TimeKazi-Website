import * as React from 'react';
import { usePagination, ELLIPSIS } from './usePagination';

export default function Pagination (props) {

    const {onPageChange, totalCount, siblingCount = 1, currentPage, pageSize} = props;
    const paginationRange = usePagination({currentPage, totalCount, siblingCount, pageSize});


    if(currentPage === 0 || paginationRange.length < 2){
        return  null;
    }

    const onNext = () => {
        onPageChange(currentPage + 1);
    };

    const onPrevious = () => {
        onPageChange(currentPage - 1);
    };
    let lastPage = paginationRange[paginationRange.length - 1];
    
    return (
        <ul className='flex items-center space-x-3 pagination-container'>
            <li className='rounded-full flex items-center justify-center cursor-pointer pagination-item' onClick={onPrevious}>
                <svg className='w-5 h-5' fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 19l-7-7 7-7m8 14l-7-7 7-7"></path>
                </svg>
            </li>
            {
                paginationRange.map(pageNumber => {
                    if (pageNumber === ELLIPSIS) {
                        return <li className='ellipsis pagination-item'>&#8230;</li>
                    }
                    return (
                        <div className='pagination-item ellipsis cursor-pointer' key={pageNumber}>
                        <li className={('pagination-item ', { selected: pageNumber === currentPage})} onClick={() => onPageChange(pageNumber)}>
                            {pageNumber}
                        </li>
                        </div>
                    );
                })
            }
            <div className='pagination-item cursor-pointer'>
            <li className={('pagination-item cursor-pointer', { disabled: currentPage === lastPage })} onClick={onNext}>
                    <svg className='w-5 h-5 arrow right' fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 5l7 7-7 7M5 5l7 7-7 7"></path>
                    </svg>
            </li>
            </div>
        </ul>
    )
}