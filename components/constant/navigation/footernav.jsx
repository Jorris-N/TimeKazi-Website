import * as React from 'react';
import Link from 'next/link';

const navigation = {
    social:[
        {
            name:'Facebook',
            href:'#',
            icon:(props)=>(
                <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
                <path
                  fillRule="evenodd"
                  d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                  clipRule="evenodd"
                />
              </svg>
            ),
        },
        {
            name:'Twitter',
            href:'#',
            icon:(props)=>(
                <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
              </svg>
            ),
        },
    ],
    company: [
        {
            name: 'About',
            href: '#',
        },
        {
            name: 'Employers',
            href: '#',
        },
        {
            name: 'Employees',
            href: '#',
        },
        {
            name: 'Partners',
            href: '#',
        },
        {
            name: 'Jobs',
            href: '#',
        },
        {
            name: 'Contacts',
            href: '#',
        },


    ],
    support: [
        {
            name: 'Employee Handbook',
            href: '#',
        },
        {
            name: 'Work Ethic & Safety',
            href: '#',
        },
        {
            name: 'Sustainability',
            href: '#',
        },
        {
            name: 'Job Groups',
            href: '#',
        },
        {
            name: 'FAQ',
            href: '#',
        },
        


    ],
    resources: [
        {
            name: 'My Account',
            href: '#',
        },
        {
            name: 'Payroll',
            href: '#',
        },
        {
            name: 'Dashboard',
            href: '#',
        },
        {
            name: 'User Manual',
            href: '#',
        },
        {
            name: 'Partners',
            href: '#',
        },



    ],
   legal: [
        {
            name: 'Privacy Policy',
            href: '#',
        },
        {
            name: 'Technology Policy',
            href: '#',
        },
        {
            name: 'Terms & Conditions',
            href: '#',
        },

        



    ],
}

export default function FooterNav () {
    return(
        <footer className='w-full bg-white' id='footernav'>
            <div className='w-full h-full py-24 xl:max-w-7xl mx-auto'>
                <div className='xl:w-11/12 mx-auto xl:flex-row xl:justify-around flex flex-col space-y-6 xl:space-y-0 px-4 xl:px-0'>

                    {/* Logo */}
                    <div className='flex flex-col space-y-4 xl:w-3/12 xl:-ml-4'>
                        <div>
                            <Link href='/'>
                                <a className='text-3xl capitalize font-bold'>
                                    timekazi
                                </a>
                            </Link>
                        </div>
                        <p className='text-sm text-neutral-500 leading-relaxed font-medium capitalize'>We interconnect employer’s production system and employee’s human resource (time) with an aim in everyday of production to achieve the maximum productivity and happiness for both the employer and the employee.</p>

                        {/* Social Media */}
                        <div className='flex items-center space-x-2'>
                            {navigation.social.map ((item) =>(
                                <Link href={item.href} key={item.name}>
                                    <a className='h-10 w-10 bg-green-600 rounded-full flex items-center justify-center text-white'>
                                        <span className='sr-only'>{item.name}</span>
                                        <item.icon className='h-5 w-5' aria-hidden='true'/>
                                    </a>
                                </Link>
                            ) )}
                        </div>
                    </div>

                    {/* Company */}
                    <div className='text-sm'>
                        <div>
                            <h1 className='text-base font-semibold capitalize pb-2'>company</h1>
                            <div className='w-10 h-0.5 bg-green-600'></div>
                        </div>
                        <nav className='mt-4 flex flex-col space-y-3 font-medium text-neutral-600 tracking-wide'>
                            {navigation.company.map ((link) =>(
                                <Link href={link.href} key={link.name}>
                                    <a className='flex items-center space-x-1 hover:text-green-600 transition duration-500 hover:scale-x-105'>
                                        <span>
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 5l7 7-7 7M5 5l7 7-7 7"></path>
                                            </svg>
                                        </span>
                                        <span>{link.name}</span>
                                    </a>
                                </Link>
                            ) )}
                        </nav>
                    </div>

                    {/* Support */}
                    <div className='text-sm xl:ml-3'>
                        <div>
                            <h1 className='text-base font-semibold capitalize pb-2'>support</h1>
                            <div className='w-10 h-0.5 bg-green-600'></div>
                        </div>
                        <nav className='mt-4 flex flex-col space-y-3 font-medium text-neutral-600 tracking-wide'>
                            {navigation.support.map ((link) =>(
                                <Link href={link.href} key={link.name}>
                                    <a className='flex items-center space-x-1 hover:text-green-600 transition duration-500 hover:scale-x-105'>
                                        <span>
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 5l7 7-7 7M5 5l7 7-7 7"></path>
                                            </svg>
                                        </span>
                                        <span>{link.name}</span>
                                    </a>
                                </Link>
                            ) )}
                        </nav>
                    </div>

                    {/* Resources */}
                    <div className='text-sm xl:ml-3'>
                        <div>
                            <h1 className='text-base font-semibold capitalize pb-2'>resources</h1>
                            <div className='w-10 h-0.5 bg-green-600'></div>
                        </div>
                        <nav className='mt-4 flex flex-col space-y-3 font-medium text-neutral-600 tracking-wide'>
                            {navigation.resources.map ((link) =>(
                                <Link href={link.href} key={link.name}>
                                    <a className='flex items-center space-x-1 hover:text-green-600 transition duration-500 hover:scale-x-105'>
                                        <span>
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 5l7 7-7 7M5 5l7 7-7 7"></path>
                                            </svg>
                                        </span>
                                        <span>{link.name}</span>
                                    </a>
                                </Link>
                            ) )}
                        </nav>
                    </div>

                    {/* Legal */}
                    <div className='text-sm xl:ml-3'>
                        <div>
                            <h1 className='text-base font-semibold capitalize pb-2'>legal</h1>
                            <div className='w-10 h-0.5 bg-green-600'></div>
                        </div>
                        <nav className='mt-4 flex flex-col space-y-3 font-medium text-neutral-600 tracking-wide'>
                            {navigation.legal.map ((link) =>(
                                <Link href={link.href} key={link.name}>
                                    <a className='flex items-center space-x-1 hover:text-green-600 transition duration-500 hover:scale-x-105'>
                                        <span>
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 5l7 7-7 7M5 5l7 7-7 7"></path>
                                            </svg>
                                        </span>
                                        <span>{link.name}</span>
                                    </a>
                                </Link>
                            ) )}
                        </nav>
                    </div>
                </div>
            </div>
        </footer>
    )
}