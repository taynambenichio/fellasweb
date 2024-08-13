import { texts } from '@/utils/langs'

import { CalendarClockIcon } from 'lucide-react'
import { useEffect, useState } from 'react'
import logo from '/images/logo/logo_fellas_rounded.png'
import heyjoe from '/logo_heyjoe.webp'
import suavecito from '/logo_suavecito.webp'
import uppercut from '/logo_uppercut.webp'


export function FellasPrimaryPage() {
  const [lang, setLang] = useState('en');

  useEffect(() => {
    const userLang = navigator.language.split('-')[0];
    setLang(texts[userLang] ? userLang : 'en');
  }, []);

  const content = texts[lang];

  return (
    <div className='relative w-full h-screen bg-black flex items-center justify-center bg-sectionbg object-cover bg-cover bg-center'>
      <div className='absolute inset-0 bg-black bg-opacity-70'></div>
      <div className='z-10 flex flex-col items-center justify-center gap-5'>
        <img src={logo} className='w-40 h-auto' alt='Logo' />
        <div className='flex flex-col justify-center items-center'>
          <h1 className='w-full lg:w-1/2 font-Hilborn text-red-600 text-shadow-black text-lg flex flex-col justify-center items-center animatecss animatecss-bounceInLeft'>
            {content.greeting}
          </h1>
          <p className='w-full lg:w-1/2 text-white text-center text-sm px-2'>
            {content.description}
          </p>
        </div>
        <div className='flex items-center justify-center gap-5 hover:scale-110 transition'>
          <button className='animatecss animatecss-jackInTheBox shadow-2xl shadow-red-600 p-4 text-white bg-red-600 rounded-none hover:bg-red-500 flex gap-2 items-center justify-center' onClick={() => window.location.reload()}>
            {content.appointment} <CalendarClockIcon className='size-4' />
          </button>
        </div>
        <div className='flex items-center justify-center space-x-5 lg:space-x-10'>
          <img src={uppercut} className='md:w-full h-auto w-24' alt='Uppercut' />
          <img src={suavecito} className='md:w-full h-auto w-24' alt='Suavecito' />
          <img src={heyjoe} className='md:w-full h-auto w-24' alt='Hey Joe' />
        </div>
      </div>
    </div>
  )
}