import React from 'react';

const Project = () => {
  return (
    <div className='min-h-screen bg-oxford mt-20 w-full h-full items-center py-8 px-4 lg:px-24 overflow-hidden'>
      <div></div>
      <h2 className='text-2xl md:text-4xl font-semibold mb-12 mt-4 flex justify-center text-powder font-rye'>
        MY LATEST PROJECTS
      </h2>
      <div className='grid grid-cols-1 md:grid-cols-2'>
        {/* 1st Project */}
        <div className='flex justify-center flex-col'>
          <img
            src={`${process.env.PUBLIC_URL}/img/Nonis.png`}
            alt='DJ Lisa'
            className='w-11/12 h-5/6 rounded-lg object-cover bg-lapis'
          />
          <a
            href='https://nonis-designs.vercel.app/'
            className='mb-2 pt-4 text-xl text-powder font-rye hover:underline'
          >
            1. Nonis Designs
          </a>
          <hr className='border-t-2 border-powder my-2' />
        </div>
        {/* 2nd Project */}
        <div className='flex justify-center flex-col'>
          <img
            src={`${process.env.PUBLIC_URL}/img/Uglee.png`}
            alt='DJ Lisa'
            className='w-11/12 h-5/6 rounded-lg object-cover bg-lapis'
          />
          <a
            href='https://time-piece-site.vercel.app/'
            className='mb-2 pt-4 text-xl text-powder font-rye hover:underline'
          >
            2. Uglee Watches
          </a>
          <hr className='border-t-2 border-powder my-2' />
        </div>
        {/* 3rd Project */}
        <div className='flex justify-center flex-col'>
          <img
            src={`${process.env.PUBLIC_URL}/img/Recipe.png`}
            alt='DJ Lisa'
            className='w-11/12 h-5/6 rounded-lg object-cover bg-lapis'
          />
          <a
            href='https://favouriteigrecipes.vercel.app/'
            className='mb-2 pt-4 text-xl text-powder font-rye hover:underline'
          >
            3. Favourite Recipes
          </a>
          <hr className='border-t-2 border-powder my-2' />
        </div>
        {/* 4th Project */}
        <div className='flex justify-center flex-col'>
          <img
            src={`${process.env.PUBLIC_URL}/img/Archipulse.png`}
            alt='DJ Lisa'
            className='w-11/12 h-5/6 rounded-lg object-cover bg-lapis'
          />
          <a
            href='https://archipulse.vercel.app/'
            className='mb-2 pt-4 text-xl text-powder font-rye hover:underline'
          >
            4. Archipulse Real Estate
          </a>
          <hr className='border-t-2 border-powder my-2' />
        </div>
      </div>
      <br />
      <h2 className='text-2xl md:text-4xl font-semibold mb-4 flex justify-center text-powder font-rye'>
        MY LATEST CONTRIBUTION
      </h2>
      <div className='grid grid-cols-1'>
        {/* 1st Contribution */}
        <div className='flex justify-center flex-col'>
          <img
            src={`${process.env.PUBLIC_URL}/img/Hotodds.png`}
            alt='DJ Lisa'
            className='w-11/12 h-5/6 rounded-lg object-cover bg-lapis'
          />
          <a
            href='https://hot-odds.vercel.app/'
            className='mb-2 pt-4 text-xl text-powder font-rye hover:underline'
          >
            HotOdds Front-end
          </a>
          <hr className='border-t-2 border-powder my-2' />
        </div>
      </div>
    </div>
  );
};

export default Project;
