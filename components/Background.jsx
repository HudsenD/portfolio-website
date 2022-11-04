import React from 'react';
import Contact from './Contact';

const Background = ({heading, message}) => {
  return (
    <div className='flex items-center justify-center h-screen mb-12 bg-fixed bg-center bg-cover custom-img'>
      {/* Overlay */}
      <div className='absolute top-0 left-0 right-0 bottom-0 bg-black/10 z-[2]' />
      <div className='p-5 text-white z-[2] mt-[-10rem]'>
        <h2 className='text-5xl font-bold'>Hudsen Durst</h2>
        <p className='py-5 text-xl'>Blockchain Developer</p>
        
        <button className='px-8 py-2 border'>Contact</button>
      </div>
    </div>
  );
};

export default Background;