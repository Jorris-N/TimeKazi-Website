import * as React from 'react';


export default function BannerSection () {
    return (
        <div className='w-full bg-green-100 flex flex-col space-y-4 justify-center overflow-hidden h-80' id='homeBanner'>
            <div className='w-full flex flex-col justify-center items-center xl:items-start text-center xl:text-left h-80 px-4' id='overlay'>
                <div className='xl:w-6/12 xl:ml-24 text-white'>
                    <div className='pb-3 font-bold'>
                        <h1 className='xl:text-4xl capitalize'>search between more than <span className='bg-green-light text-green-400 p-1 rounded'>50,000</span> open jobs. we connect persons to work</h1>
                    </div>
                    <p>
                        Our Platform interconnects employer’s production system and employee’s human resource (time) with an aim in everyday of production to achieve the maximum productivity and happiness for both the employer and the employee.
                    </p>

                    {/* Industry Tags */}
                    <div className='xl:flex hidden items-center space-x-2 py-3'>
                        <h2 className='text-sm capitalize'>trending jobs keywords:</h2>
                        <div className='flex space-x-3 items-center text-sm'>
                            <div className='py-1 px-2 bg-green-light text-green-400 rounded capitalize'><span>accounting</span></div>
                            <div className='py-1 px-2 bg-green-light text-green-400 rounded capitalize'><span>finance</span></div>
                            <div className='py-1 px-2 bg-green-light text-green-400 rounded capitalize'><span>biomedicine</span></div>
                            <div className='py-1 px-2 bg-green-light text-green-400 rounded capitalize'><span>research</span></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}