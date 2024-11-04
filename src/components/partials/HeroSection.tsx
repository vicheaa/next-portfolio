import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FiDribbble, FiFacebook, FiGithub, FiInstagram, FiTwitter } from 'react-icons/fi';
import { PiTelegramLogo } from "react-icons/pi";
import Button from '@/components/form/Button';
import HeroBackground from './HeroBackground';
import { Typewriter } from 'react-simple-typewriter';

const HeroSection = () => {
  const openTG = () => {
    window.open('https://t.me/SaroSereyvichea', '_blank', 'noopener,noreferrer');
  }
  return (
    <>
      <div className="hero relative -mt-16 flex items-center justify-center">
        <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+Khmer:wght@100..900&display=swap" rel="stylesheet"></link>
        {/* <HeroBackground /> */}
        <div className="flex flex-col items-center">
          <div className="overflow-hidden rounded-full">
            <Image 
              src="/images/avatar/no_bg.png" 
              width={2000} 
              height={2000} 
              alt="avatar" 
              className='w-[60vw] sm:w-[20vw] md:w-[25vw]'
              priority
            />
          </div>
          <h1 className="mt-4 text-3xl font-bold flex flex-col sm:flex-row">
            <p className='mb-2'>SARO SEREYVICHEA</p>
            <span className="hidden sm:inline-block mx-2">|</span>
            <p className='text-center font-khmer font-extrabold'>សារូ សិរីវិជ្ជា</p>
          </h1>
          <div className="mt-2 flex gap-1">
            {' '}
            I'm a{' '}
              <span>
                <Typewriter
                  words={['Fullstack Developer']}
                  loop={true}
                  cursor
                  cursorStyle="|"
                  typeSpeed={100}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
            </span>
          </div>
          <div className="mt-4  flex gap-5">
            <Link href="https://www.facebook.com/sarosereyvichea" legacyBehavior>
              <a className="text-gray-700 transition-colors duration-150 hover:text-primary-500 dark:text-white dark:hover:text-primary-500">
                <FiFacebook size={25} />
              </a>
            </Link>
            <Link href="https://t.me/SaroSereyvichea" legacyBehavior>
              <a className="text-gray-700 transition-colors duration-150 hover:text-primary-500 dark:text-white dark:hover:text-primary-500">
                <PiTelegramLogo size={25} />
              </a>
            </Link>
            <Link href="https://www.github.com/vichea-tech" legacyBehavior>
              <a className="text-gray-700 transition-colors duration-150 hover:text-primary-500 dark:text-white dark:hover:text-primary-500">
                <FiGithub size={25} />
              </a>
            </Link>
          </div>
          <Button className="mt-5 px-8" onClick={openTG}>Hire me</Button>
        </div>
        

        <div className="absolute bottom-0 flex flex-col items-center ">
          <p className="mb-3 text-sm">Scroll Down</p>
          <div className="relative flex h-7 w-5 justify-center rounded-full border-2 border-gray-600 dark:border-gray-100">
            <div className="animate-scroll absolute h-1 w-1 bg-gray-600 dark:bg-gray-100" style={{ top: '6px' }}></div>
          </div>
        </div>
      </div>
      <HeroBackground />
    </>
    
  );
};

export default HeroSection;
