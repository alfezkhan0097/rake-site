import { useState } from 'react'
import './App.css'

export default function App() {

  return (
    <>
      <div className="bg-zinc-900 text-white">
        <header className='px-64 py-6 flex'>
          <div><h1 className="text-6xl font-inter font-bold tracking-wider">R<a className="text-emerald-500">4</a>KE</h1></div>
          <nav className='mx-20'>
            <ul className='flex font-roboto font-light h-full items-end gap-16 tracking-wide'>
              <li className='hover:text-emerald-500 transition delay-100'><a href="/account">Account</a></li>
              <li className='hover:text-emerald-500 transition delay-100'><a href="#">Partners</a></li>
              <li className='hover:text-emerald-500 transition delay-100'><a href="#">Contact</a></li>
              <li className='hover:text-emerald-500 transition delay-100'><a href="#">Support</a></li>
            </ul>
          </nav>
        </header>
        <main className='font-roboto flex flex-col justify-center items-center'>
          <div className='text-4xl font-light tracking-wide m-20 font-roboto'>The Ultimate Player's Edge</div>
          <button className='bg-emerald-500 font-bold px-6 m-4 text-sm py-2 rounded-lg text-center text-zinc-900 hover:bg-white hover:font-semibold transition-all delay-150 hover:rounded-2xl '>Register Now</button>
          <div className='flex gap-4 m-40'>
            <div className='bg-zinc-800 rounded-lg px-6 py-4 w-[260px] h-[90px] flex justify-center'><img className="h-full" src="stake.svg" alt="" /></div>
            <div className='bg-zinc-800 rounded-lg px-6 py-4 w-[260px] h-[90px] flex justify-center'><img className="h-full scale-150" src="gamba.png" alt="" /></div>
            <div className='bg-zinc-800 rounded-lg px-6 py-4 w-[260px] h-[90px] flex justify-center'><img className="h-full scale-90" src="shuffle.svg" alt="" /></div>
          </div>
        </main>
        <footer className='bg-neutral-800  px-80 pt-6 pb-2'>
          <div className='flex gap-24'>
            <ul className='text-lg font-semibold *:text-neutral-500 *:text-xs *:font-medium'>About
              <li className='hover:text-emerald-500 transition delay-100'><a href="">Terms of services</a></li>
              <li className='hover:text-emerald-500 transition delay-100'><a href="">Privacy policy</a></li>
            </ul>
            <ul className='text-lg font-semibold *:text-neutral-500 *:text-xs *:font-medium'>Support
              <li className='hover:text-emerald-500 transition delay-100'><a href="">How to use</a></li>
              <li className='hover:text-emerald-500 transition delay-100'><a href="">FAQ</a></li>
            </ul>
            <div className='text-lg ml-56 font-semibold'>Community
              <ul className='grid grid-cols-2 gap-2'>
                <li className='bg-emerald-500 rounded-lg hover:bg-white transition-all delay-150 ease-in-out aspect-square flex justify-center items-center'><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 50 50" fill='#353535'>
                  <path d="M46.137,6.552c-0.75-0.636-1.928-0.727-3.146-0.238l-0.002,0C41.708,6.828,6.728,21.832,5.304,22.445	c-0.259,0.09-2.521,0.934-2.288,2.814c0.208,1.695,2.026,2.397,2.248,2.478l8.893,3.045c0.59,1.964,2.765,9.21,3.246,10.758	c0.3,0.965,0.789,2.233,1.646,2.494c0.752,0.29,1.5,0.025,1.984-0.355l5.437-5.043l8.777,6.845l0.209,0.125	c0.596,0.264,1.167,0.396,1.712,0.396c0.421,0,0.825-0.079,1.211-0.237c1.315-0.54,1.841-1.793,1.896-1.935l6.556-34.077	C47.231,7.933,46.675,7.007,46.137,6.552z M22,32l-3,8l-3-10l23-17L22,32z"></path>
                </svg></li>
                <li className='bg-emerald-500 hover:bg-white transition-all flex justify-center items-center delay-150 ease-in-out rounded-lg aspect-square'><img src="https://img.icons8.com/?size=28&id=60014&format=png&color=353535" alt="" /></li>
                <li className='bg-transparent aspect-square'></li>
                <li className='bg-emerald-500 hover:bg-white flex justify-center items-center transition-all delay-150 ease-in-out rounded-lg aspect-square'><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="28" fill="#353535" height="28" viewBox="0 0 30 30">
                  <path d="M25.12,6.946c-2.424-1.948-6.257-2.278-6.419-2.292c-0.256-0.022-0.499,0.123-0.604,0.357 c-0.004,0.008-0.218,0.629-0.425,1.228c2.817,0.493,4.731,1.587,4.833,1.647c0.478,0.278,0.638,0.891,0.359,1.368 C22.679,9.572,22.344,9.75,22,9.75c-0.171,0-0.343-0.043-0.501-0.135C21.471,9.598,18.663,8,15.002,8 C11.34,8,8.531,9.599,8.503,9.615C8.026,9.892,7.414,9.729,7.137,9.251C6.86,8.775,7.021,8.164,7.497,7.886 c0.102-0.06,2.023-1.158,4.848-1.65c-0.218-0.606-0.438-1.217-0.442-1.225c-0.105-0.235-0.348-0.383-0.604-0.357 c-0.162,0.013-3.995,0.343-6.451,2.318C3.564,8.158,1,15.092,1,21.087c0,0.106,0.027,0.209,0.08,0.301 c1.771,3.11,6.599,3.924,7.699,3.959c0.007,0.001,0.013,0.001,0.019,0.001c0.194,0,0.377-0.093,0.492-0.25l1.19-1.612 c-2.61-0.629-3.99-1.618-4.073-1.679c-0.444-0.327-0.54-0.953-0.213-1.398c0.326-0.443,0.95-0.541,1.394-0.216 C7.625,20.217,10.172,22,15,22c4.847,0,7.387-1.79,7.412-1.808c0.444-0.322,1.07-0.225,1.395,0.221 c0.324,0.444,0.23,1.066-0.212,1.392c-0.083,0.061-1.456,1.048-4.06,1.677l1.175,1.615c0.115,0.158,0.298,0.25,0.492,0.25 c0.007,0,0.013,0,0.019-0.001c1.101-0.035,5.929-0.849,7.699-3.959c0.053-0.092,0.08-0.195,0.08-0.301 C29,15.092,26.436,8.158,25.12,6.946z M11,19c-1.105,0-2-1.119-2-2.5S9.895,14,11,14s2,1.119,2,2.5S12.105,19,11,19z M19,19 c-1.105,0-2-1.119-2-2.5s0.895-2.5,2-2.5s2,1.119,2,2.5S20.105,19,19,19z"></path>
                </svg></li>
              </ul>
            </div>
          </div>
          <div className='text-center mt-6'>
            <h1 className='text-neutral-500 text-3xl font-bold'>RAKE</h1>
            <p className='text-xs text-neutral-500'>© 2024 all rights reserved.</p>
          </div>
        </footer>
      </div>
    </>
  )
}


{/* <h1 className="text-8xl font-inter font-bold bg-zinc-900 text-white tracking-wider">R<a className="text-green-500">4</a>KE</h1> */ }