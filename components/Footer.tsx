import React from 'react'
import MagicButton from './ui/MagicButton'
import { FaLocationArrow } from 'react-icons/fa6'
import { socialMedia } from '@/data'
import { profile } from 'console'
import Link from 'next/link'
// Footer Component
const Footer = () => {
  return (
    <footer className='w-full pb-10 mb-[100px] md:mb-5' id='contact'>
        <div className='flex flex-col items-center'>
            <h1 className='heading lg:max-w-[45vw] '>
                Ready to take <span className='text-purple'>your</span> digital presence to the next level?
            </h1>
            <p className='text-white-200 md:mt-10 my-5 text-center'>
                Reach out to me today and let&apos;s discuss how we can achieve your goals together.
            </p>
            <a href="mailto:dasguptasrinjay2004@gmail.com">
                <MagicButton text='Get in touch' 
                icon={<FaLocationArrow />} position='right'/>
            </a>
        </div>

        <div className='flex mt-16 md:flex-row flex-col justify-between items-center gap-5'>
            <p className='md:text-base text-sm md:font-normal font-light'>
                Copyright &copy; 2024 Srinjay Das Gupta
            </p>
            <div className="flex items-center md:gap-3 gap-6">
                {socialMedia.map((item) => (
                    <Link href={item.href} key={item.id} className='w-10 h-10 cursor-pointer flex justify-center item-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300' target='_blank'>
                        <img src={item.img} alt={item.img} width={20} height={20} />
                    </Link>
                ))}
            </div>
        </div>
    </footer>
  )
}

export default Footer