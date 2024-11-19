import React from 'react';

const Home = () => {
  return (
    <div className='bg-oxford mt-20 w-full h-full overflow-hidden'>
      <div className='w-full max-h-full bg-oxford m-1 py-8 px-4 rounded-lg grid gap-2 md:gap-4 grid-cols-1 grid-rows-1 md:grid-cols-4 md:grid-rows-3 overflow-hidden'>
        {/* Top Left: Heading */}
        <div className='md:col-span-2 md:row-span-2 bg-powder text-oxford font-orbitron p-8 md:p-6 rounded-lg flex flex-col justify-center h-full'>
          <h1 className='text-xl md:text-4xl font-bold p-1 md:p-2'>
            Making Your Website
          </h1>
          <h1 className='text-xl md:text-4xl font-bold p-1 md:p-2'>
            More Engaging, Responsive,
          </h1>
          <h1 className='text-xl md:text-4xl font-bold p-1 md:p-2'>
            User-friendly and Interactive.
          </h1>
          <h1 className='text-xl md:text-4xl font-bold p-1 md:p-2'>
            For a Better User Experience
          </h1>
        </div>

        {/* Top Middle: Profile Pic */}
        <div className='md:col-span-1 md:row-span-2 rounded-lg overflow-hidden'>
          {/* Add an image tag or background image */}
          <img
            src={`${process.env.PUBLIC_URL}/img/Profile.png`}
            alt='Outstandingvick'
            className='w-full h-full object-cover bg-lapis'
          />
        </div>

        {/* Top Right: Projects */}
        <div className='col-span-1 row-span-2 bg-powder p-4 rounded-lg text-oxford font-suwannaphum'>
          <h2 className='text-lg md:text-2xl font-semibold mb-4 flex justify-center'>
            PROJECTS
          </h2>
          <div className='flex justify-center flex-col'>
            <img
              src={`${process.env.PUBLIC_URL}/img/Nonis.png`}
              alt='DJ Lisa'
              className='w-11/12 h-5/6 rounded-lg object-cover bg-lapis'
            />
            <a
              href='https://nonis-designs.vercel.app/'
              className='mb-1 pt-2 text-base md:mb-2 md:pt-4 md:text-xl hover:underline'
            >
              1. Nonis Designs
            </a>
          </div>
          <hr className='border-t-2 border-oxford my-2' />
          <div className='flex justify-center flex-col'>
            <a
              href='https://time-piece-site.vercel.app/'
              className='mb-1 pt-2 text-base md:mb-2 md:pt-4 md:text-xl hover:underline'
            >
              {' '}
              2. Uglee Watches
            </a>
          </div>
          <hr className='border-t-2 border-oxford my-2' />
          <div className='flex justify-center flex-col'>
            <a
              href='https://archipulse.vercel.app/'
              className='mb-1 pt-2 text-base md:mb-2 md:pt-4 md:text-xl hover:underline'
            >
              {' '}
              3. Archipulse Real Estate
            </a>
          </div>
          <hr className='border-t-2 border-oxford my-2' />
          <a
            href='project'
            className='mb-1 pt-2 text-base md:mb-2 md:pt-4 md:text-xl hover:underline'
          >
            {' '}
            Check out more
          </a>
        </div>

        {/* Bottom Left: Bio */}
        <div className='col-span-1 bg-powder p-4 rounded-lg font-suwannaphum text-oxford'>
          <h2 className='flex justify-center text-lg md:text-2xl font-bold pb-1'>
            ABOUT ME
          </h2>
          <h3 className='text-base md:text-lg font-bold'>Victor Ogbonna</h3>
          <h3 className='text-base md:text-lg font-bold'>
            Front-end Developer
          </h3>
          <p className='text-sm md:text-base'>
            I'm a self-taught front-end developer,
          </p>
          <p className='text-sm md:text-base'>
            {' '}
            with an expertise in building responsive,
          </p>
          <p className='text-sm md:text-base'>
            {' '}
            interactive, and user-friendly web apps.
          </p>
          <div className='text-center mt-1'>
            <a
              href='/about'
              className='inline-block bg-oxford text-powder rounded-full px-4 py-1 md:py-2 text-sm font-bold font-rye hover:text-oxford hover:bg-powder transition hover:border-2 hover:border-oxford duration-300'
            >
              More Details
            </a>
          </div>
        </div>

        {/* Bottom Middle: Tech Stack */}
        <div className='col-span-1 p-4 bg-lapis rounded-lg font-poiret font-bold flex flex-col'>
          <h2 className='flex justify-center text-lg md:text-2xl font-bold'>
            TECH STACK
          </h2>
          <div className='grid grid-cols-3 font-bold text-sm md:text-base'>
            <p className='text-powder p-2'>HTML</p>
            <p className='text-powder p-2'>CSS</p>
            <p className='text-powder p-2'>JavaScript</p>
            <p className='text-powder p-2'>React JS</p>
            <p className='text-powder p-2'>Tailwind CSS</p>
            <p className='text-powder p-2'>Next JS</p>
            <p className='text-powder p-2'>Node JS</p>
            <p className='text-powder p-2'>Express JS</p>
            <p className='text-powder p-2'>Mongo DB</p>
            <p className='text-powder p-2'>Git & Github</p>
          </div>
        </div>

        {/* Bottom second to Right: Social Links */}
        <div className='md:col-span-1 flex flex-col bg-powder rounded-lg font-poiret text-xl md:text-3xl font-bold'>
          <div className='flex space-x-4 justify-center items-center mt-8 pt-6 pb-6'>
            <a
              href='mailto:victor.ogbonna@hotmail.com'
              className='text-oxford p-2'
            >
              Email
            </a>
            <a
              href='https://github.com/OutstandingVick'
              className='text-oxford p-2'
            >
              Github
            </a>
            <a
              href='https://www.linkedin.com/in/victorpogbonna/'
              className='text-oxford p-2'
            >
              LinkedIn
            </a>
          </div>
          <div className='text-center mt-2 md:mt-4'>
            <a
              href='/contact'
              className='text-powder rounded-full px-4 md:px-8 py-3 bg-oxford text-xl md:text-2xl font-bold font-rye hover:text-oxford hover:bg-powder transition hover:border-2 hover:border-oxford'
            >
              Contact me
            </a>
          </div>
          <br />
        </div>
        {/* Bottom right Article Links */}
        <div className='md:col-span-1 bg-lapis p-4 rounded-lg font-bold flex flex-col font-suwannaphum'>
          <h2 className='flex justify-center text-lg md:text-xl font-bold text-oxford pb-1 md:pb-2'>
            TECHNICAL ARTICLES
          </h2>
          <h3 className='text-sm md:text-base text-powder'>
            I'm also a technical writer, here are some of my technical articles
          </h3>
          <hr className='border-t-2 border-powder my-2' />
          <div className='grid grid-cols-1 text-xs md:text-sm'>
            <a
              href='https://dev.to/outstandingvick/protecting-user-data-encryption-and-secure-storage-in-frontend-53ak'
              className='text-powder hover:underline'
            >
              1. Protecting User Data
            </a>
            <hr className='border-t-2 border-powder my-2' />
            <a
              href='https://dev.to/outstandingvick/testing-in-javascript-a-comprehensive-guide-2l2n'
              className='text-powder hover:underline'
            >
              2. Testing in JavaScript
            </a>
            <hr className='border-t-2 border-powder my-2' />
            <a
              href='https://dev.to/outstandingvick'
              className='text-powder hover:underline'
            >
              Click for more
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
