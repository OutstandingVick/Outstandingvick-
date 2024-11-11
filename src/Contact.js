import React from 'react';

const Contact = () => {
  return (
    <div className='min-h-screen bg-oxford mt-20 w-full h-full font-libre flex flex-col items-center py-8 px-4 lg:px-24 overflow-hidden'>
      <div className='max-w-3xl w-full bg-powder shadow-lg rounded-lg p-6 lg:p-12'>
        <h1 className='text-3xl lg:text-4xl text-oxford font-rye text-center mb-6'>
          CONTACT ME
        </h1>
        <p className='mb-2 pb-2 lg:text-2xl text-lg font-poiret font-bold text-oxford'>
          WhatsApp:{' '}
          <a href='https://wa.me/+2348144380336' className='hover:underline'>
            +235-814-4380-336
          </a>
        </p>
        <p className='mb-2 pb-2 lg:text-2xl text-lg font-poiret font-bold text-oxford'>
          Email:{' '}
          <a
            href='mailto:victor.ogbonna@hotmail.com'
            className='hover:underline'
          >
            victor.ogbonna@hotmail.com
          </a>{' '}
        </p>
        <p className='mb-2 pb-2 lg:text-2xl text-lg font-poiret font-bold text-oxford'>
          LinkedIn:{' '}
          <a
            href='https://www.linkedin.com/in/victorpogbonna/'
            className='hover:underline'
          >
            Victor .P. Ogbonna
          </a>{' '}
        </p>
        <p className='mb-2 pb-2 lg:text-2xl text-lg font-poiret font-bold text-oxford'>
          GitHub:{' '}
          <a
            href='https://github.com/OutstandingVick'
            className='hover:underline'
          >
            OutstandingVick
          </a>{' '}
        </p>
        <p className='mb-2 pb-2 lg:text-2xl text-lg font-poiret font-bold text-oxford'>
          X (formerly Twitter):{' '}
          <a href='https://x.com/Outstandingvick' className='hover:underline'>
            Outstandingvick
          </a>{' '}
        </p>
        <div className='text-center mt-8'>
          <a
            href='/project'
            className='inline-block bg-oxford text-powder rounded-full px-8 py-3 text-lg font-bold hover:bg-lapis font-rye transition duration-300'
          >
            Explore My Projects
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
