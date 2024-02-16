import Image from 'next/image';
import React from 'react';
import Layout from './layout';

function Header() {
  return (
    <header className='p-4 bg-orange-400 flex  justify-between items-end uppercase flex-wrap'>
      <Layout className='flex  justify-between items-end uppercase flex-wrap '>
        <Image src='/logo.png' height={60} width={60} alt='orannge logo' />
        <ul className='flex gap-5 text-white flex-wrap'>
          <li>Features</li>
          <li>Amazing Tools</li>
          <li>Screenshot</li>
          <li>Player</li>
          <li>Video</li>
          <li>More to Know</li>
          <li>Faq</li>
        </ul>
      </Layout>
    </header>
  );
}

export default Header;
