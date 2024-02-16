import React from 'react';
import Layout from './layout';
import Image from 'next/image';

function Hero() {
  return (
    <div className='bg-blue-400 h-[80vh] relative'>
      <Image
        src={'/home_header.png'}
        height={500}
        width={500}
        quality={100}
        alt='hero'
        className='absolute bottom-0 right-20 '
      />
      <Layout className='flex flex-col justify-center items-center w-[50] h-full'>
        <h1 className='text-5xl font-bold text-white'>
          Welcome to our website
        </h1>
        <p className='text-white text-xl my-4'>
          We are a team of professionals
        </p>
        <button className='bg-white text-black px-4 py-2 rounded-lg'>
          Get Started
        </button>
      </Layout>
    </div>
  );
}

export default Hero;
