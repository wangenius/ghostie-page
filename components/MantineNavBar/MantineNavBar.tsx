'use client';

import { PiDownload } from 'react-icons/pi';

export const MantineNavBar = () => {



  return (
      <div className='flex justify-between items-center px-6 py-3 mt-3 max-w-[1200px] mx-auto absolute top-0 left-0 right-0 z-50'>
        <a href='/' className='flex items-center gap-4 mr-auto cursor-pointer' >
            <img src="/icon.svg" alt="Ghostie" width={32} height={32} style={{ marginRight: '0.5rem' }} />
            <h2 className='text-2xl font-bold'>
              Ghostie
            </h2>
          </a>
          <div className='flex items-center gap-4'>
            <a href='/docs'>Documentation</a>
            <a href='/docs'>
              <PiDownload/>
            </a>
          </div>
      </div>
  );
};
