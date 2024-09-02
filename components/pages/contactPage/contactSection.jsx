import * as React from 'react';


export default function ContactSection () {
    return (
        <div className='w-full py-16 mx-auto px-4 xl:px-0'>
        <div className='xl:w-10/12 mx-auto px-4 xl:px-0'>
            <div className='py-8'>
            <h1 className='capitalize font-semibold text-3xl sm:text-5xl lg:text-6xl pb-2 text-stone-700'>get in touch</h1>
            <p className="mt-4 text-lg leading-6 text-gray-500 capitalize">It would be great if we hear from you once in a while</p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 shadow-lg rounded-md">
    {/* Contact information */}
    <div className="relative overflow-hidden bg-green-700 py-10 px-6 sm:px-10 xl:p-12 shadow-lg rounded-l-md">     
      <h3 className="text-lg font-medium text-white capitalize">contact information</h3>
      {/* <p className="mt-6 max-w-3xl text-base text-green-50">
        Nullam risus blandit ac aliquam justo ipsum. Quam mauris volutpat massa dictumst amet. Sapien tortor
        lacus arcu.
      </p> */}
      <dl className="mt-8 space-y-6">
        <dt>
          <span className="sr-only">Location</span>
        </dt>
        <dd className="flex text-base text-green-200">
          <span><svg className="w-5 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg></span>
          <span className="ml-3">Red Elephant Bistro Building,<br/> Along MSA - NRB Highway,<br/> Voi, Taita Taveta County.</span>
          
        </dd>
      </dl>
      <dl className="mt-8 space-y-6">
        <dt>
          <span className="sr-only">Phone number</span>
        </dt>
        <dd className="flex text-base text-green-200">
          <span><svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg></span>
          <span className="ml-3">+254-768-290099</span>
        </dd>
        <dt>
          <span className="sr-only">Email</span>
        </dt>
        <dd className="flex text-base text-green-200">
          <span><svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg></span>
          <span className="ml-3">info@dutcredit.co.ke</span>
        </dd>
      </dl>
      <ul role="list" className="mt-8 flex space-x-12">
        <li>
          <a className="text-green-200 hover:text-green-200" href="#">
            <span className="sr-only">Facebook</span>
            <svg className="h-7 w-7" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
              <path
                fillRule="evenodd"
                d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </li>
        <li>
          <a className="text-green-200 hover:text-green-200" href="#">
            <span className="sr-only">Twitter</span>
            <svg className="h-7 w-7" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
            </svg>
          </a>
        </li>
      </ul>
    </div>

    {/* Contact form */}
    <div className="py-10 px-6 sm:px-10 lg:col-span-2 xl:p-12">
      <h3 className="text-lg font-medium text-stone-700 capitalize">send us a message</h3>
      <form action=" " method="POST" className="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
        <div>
          <label htmlFor="first-name" className="block text-sm font-medium text-stone-700">
            First name
          </label>
          <div className="mt-1">
            <input
              type="text"
              name="first-name"
              id="first-name"
              autoComplete="given-name"
              className="block w-full rounded-md border border-gray-300 py-3 px-4 text-stone-700 shadow-sm focus:outline-none focus:border-green-600 focus:ring-green-600 focus:ring-1 transition ease-in-out duration-200"
            />
          </div>
        </div>
        <div>
          <label htmlFor="last-name" className="block text-sm font-medium text-stone-700">
            Last name
          </label>
          <div className="mt-1">
            <input
              type="text"
              name="last-name"
              id="last-name"
              autoComplete="family-name"
              className="block w-full rounded-md border border-gray-300 py-3 px-4 text-stone-700 shadow-sm focus:outline-none focus:border-green-600 focus:ring-green-600 focus:ring-1 transition ease-in-out duration-200"
            />
          </div>
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-stone-700">
            Email
          </label>
          <div className="mt-1">
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              className="block w-full rounded-md border border-gray-300 py-3 px-4 text-stone-700 shadow-sm focus:outline-none focus:border-green-600 focus:ring-green-600 focus:ring-1 transition ease-in-out duration-200"
            />
          </div>
        </div>
        <div>
          <div className="flex justify-between">
            <label htmlFor="phone" className="block text-sm font-medium text-stone-700">
              Phone
            </label>
            <span id="phone-optional" className="text-sm text-warm-gray-500">
              Optional
            </span>
          </div>
          <div className="mt-1">
            <input
              type="text"
              name="phone"
              id="phone"
              autoComplete="tel"
              className="block w-full rounded-md border border-gray-300 py-3 px-4 text-stone-700 shadow-sm focus:outline-none focus:border-green-600 focus:ring-green-600 focus:ring-1 transition ease-in-out duration-200"
              aria-describedby="phone-optional"
            />
          </div>
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="subject" className="block text-sm font-medium text-stone-700">
            Subject
          </label>
          <div className="mt-1">
            <input
              type="text"
              name="subject"
              id="subject"
              className="block w-full rounded-md border border-gray-300 py-3 px-4 text-stone-700 shadow-sm focus:outline-none focus:border-green-600 focus:ring-green-600 focus:ring-1 transition ease-in-out duration-200"
            />
          </div>
        </div>
        <div className="sm:col-span-2">
          <div className="flex justify-between">
            <label htmlFor="message" className="block text-sm font-medium text-stone-700">
              Message
            </label>
            <span id="message-max" className="text-sm text-warm-gray-500">
              Max. 500 characters
            </span>
          </div>
          <div className="mt-1">
            <textarea
              id="message"
              name="message"
              rows={4}
              className="block w-full rounded-md border border-gray-300 py-3 px-4 text-stone-700  focus:outline-none focus:border-green-600 focus:ring-green-600 focus:ring-1 transition ease-in-out duration-200"
              aria-describedby="message-max"
              defaultValue={''}
            />
          </div>
        </div>
        <div className="sm:col-span-2 sm:flex sm:justify-end">
          <button
            type="submit"
            className="mt-2 inline-flex w-full items-center justify-center rounded-md border border-transparent bg-green-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 sm:w-auto transition ease-in-out duration-200"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  </div>
        </div>
    </div>
    
    )
}