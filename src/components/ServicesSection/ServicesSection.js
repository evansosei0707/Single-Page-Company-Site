import React, { useEffect, useRef } from 'react';
import './ServicesSection.css';

const ServicesSection = () => {
  const serviceImageRef = useRef()

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) 
        entry.target.classList.add('fadeIn')
      })
    }, {
      threshold: 0.5
    })
    observer.observe(serviceImageRef.current)
  }, [])

  return (
    <section className='serviceSection flex flex-col space-y-4 items-center justify-center gap-3 lg:flex-row lg:space-x-2 mt-12'>
      <div className='serviceText flex flex-col justify-center items-center space-y-5 lg:space-x-2 lg:space-y-0 gap-6 mx-auto px-4'>
        <div className='motto max-w-xl font-bold text-5xl lg:text-6xl  text-welcomeColor'>
          Services
        </div>
        <div className='mottoSubtitle max-w-xl text-xl text-center text-grayColor'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.<br/><br/>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </div>
        <div className='serviceButtons flex text-center gap-4'>
          <button className='w-36 h-11 cursor-pointer font-sans border border-solid border-welcomeColor rounded-6xl text-grayColor bg-white shadow-none transition-all duration-200 ease-in-out hover:text-white hover:bg-welcomeColor hover:shadow-blueShadow focus:text-white focus:bg-welcomeColor focus:shadow-blueShadow'>Learn More</button>
        </div>
      </div>
      <div className='imageSection mx-auto px-3 '>
        <img
          src='/images/servicesImage.png'
          className='serviceImage max-w-full h-auto opacity-0 transform translate-x-5 ease-in duration-700'
          alt='services'
          ref={serviceImageRef}
          width={515} height={515} />
      </div>
    </section>
  )
}

export default ServicesSection