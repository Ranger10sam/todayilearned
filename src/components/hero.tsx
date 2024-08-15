"use client"
import lightHero from '../images/Blogging.svg';
import Image from 'next/image';
import '../styles/hero.css';
const Hero = () => {
  return (
    <div className="grid grid-cols-1 h-dvh items-center gap-4 sm:h-9/12 sm:flex sm:justify-around">
      <div className="hero-text mt-20 text-3xl ">
        <h1 className='lg:text-4xl'>Today&apos;s Insights,</h1>
        <h1 className='lg:text-4xl'>Tomorrow&apos;s Growth</h1>
        <p className='mt-3 text-base'>Capture What You Learned Today, Unlock Tomorrow&apos;s Potential</p>
      </div>
      <div className="hero-blob flex justify-center">
        <Image
          className='hero-image w-11/12 sm:w-11/12'
          src={lightHero}
          alt={'Hero Image'}
        />
      </div>
    </div>
  );
};

export default Hero;
