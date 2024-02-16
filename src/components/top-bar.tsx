import React from 'react';

function TopBar() {
  return (
    <section className='bg-gray-800 text-white flex justify-end items-center px-4 py-1 text-sm'>
      <ul>
        <li className='inline-block mx-2'>Home</li>
        <li className='inline-block mx-2'>About</li>
        <li className='inline-block mx-2'>Contact</li>
      </ul>
    </section>
  );
}

export default TopBar;
