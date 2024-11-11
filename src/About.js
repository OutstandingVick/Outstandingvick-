import React from 'react';

const About = () => {
  return (
    <div className='min-h-screen bg-oxford mt-20 w-full h-full font-libre flex flex-col items-center py-8 px-4 lg:px-24 overflow-hidden'>
      <div className='max-w-6xl w-full bg-powder shadow-lg rounded-lg p-6 lg:p-12'>
        <h1 className='text-2xl lg:text-4xl text-oxford font-rye text-center mb-6'>
          ABOUT ME
        </h1>
        <h2 className=' flex justify-center text-xl lg:text-3xl text-oxford font-poiret font-bold mb-2'>
          Hi, I'm Victor Ogbonna. Nice to meet you
        </h2>
        <hr className='border-t-2 border-oxford my-2' />
        <p className='mb-2 pb-2 lg:text-2xl text-base font-suwannaphum text-oxford'>
          I am a self-taught front-end developer based in Lagos, Nigeria,
          dedicated to continuous learning and clear digital communication. With
          a skill set spanning HTML, CSS, JavaScript, React, and Next.js, I
          began my journey through independent study and YouTube tutorials,
          building expertise in creating responsive, user-friendly applications
          that offer smooth, device-compatible experiences. My practical
          experience includes freelancing and community projects, where I've
          effectively enhanced user engagement and optimized web performance.
          Notable achievements include a 25% increase in user engagement by
          redesigning an e-commerce landing page and a 40% reduction in page
          load time through JavaScript optimization.
        </p>
        <p className='mb-2 pb-2 lg:text-2xl text-base font-suwannaphum text-oxford'>
          Currently, I’m an active member of Superteam Nigeria, the Nigerian
          chapter of the global Solana blockchain community. In this role, I
          contribute as a front-end developer, content writer, and community
          builder, bringing my skills to projects that advance the community's
          mission. One such project was developing the front end for Hot Odds, a
          sports betting platform offering data-driven insights to users. My
          work extends beyond technical contributions as I engage with members
          and create articles to support community growth and knowledge-sharing.
        </p>
        <div className='mb-2 pb-2 lg:text-2xl text-base font-suwannaphum text-oxford'>
          <div>
            <h3 className='font-bold'>My Technical Stack includes:</h3>{' '}
            <ul className='list-disc list-inside'>
              <li>
                {' '}
                <span className='font-bold'>Languages: </span>HTML, CSS,
                JavaScript, TypeScript{' '}
              </li>{' '}
              <li>
                <span className='font-bold'>Libraries and Frameworks</span>:
                React, Next.js, Tailwind CSS, Node.js
              </li>{' '}
              <li>
                {' '}
                <span className='font-bold'>Testing:</span> Jest for unit and
                integration testing
              </li>{' '}
              <li>
                {' '}
                <span className='font-bold'>API Integration:</span>
                RESTful APIs, with Postman certification in API development and
                testing
              </li>{' '}
            </ul>
          </div>
        </div>
        <div className='text-center mt-4 md:mt-8'>
          <a
            href='/project'
            className='inline-block bg-oxford text-powder rounded-full px-4 md:px-8 py-1 md:py-3 text-base md:text-xl font-bold font-rye hover:text-oxford hover:bg-powder transition hover:border-2 hover:border-oxford'
          >
            Explore My Projects
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
