import './WelcomeSection.css';
import React, { useEffect, useRef} from 'react';


const WelcomeSection = () => {
  const welcomeImageRef = useRef()

  useEffect( () => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting)
        entry.target.classList.add('fadeIn')
      })
    }, {
      threshold: 0.5
    })
    observer.observe(welcomeImageRef.current)
  }, [])

  return (
    <section className='welcomeSection container flex flex-col mt-24  items-center justify-center gap-4 space-y-5 md:space-y-2 lg:space-x-4 mx-auto lg:flex-row lg:mt-32 md:mt-20 p-4'>
      <div className='welcomeText flex flex-col gap-6 items-center text-center'>
        <div className='motto max-w-xl font-bold text-4xl md:text-6xl text-welcomeColor'>
          Changing the Future, for the Better.
        </div>
        <div className='mottosubtitle max-w-xl text-grayColor'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </div>
        <div className='welcomeButtons flex gap-4'>
          <button className='w-36 h-11 cursor-pointer font-sans text-base border border-solid border-welcomeColor bg-white rounded-6xl  text-grayColor shadow-none transition-shadow transition-colos duration-200 ease-in-out hover:text-whte hover:bg-welcomeColor hover:shadow-btnShadow'>Learn More</button>
          <button>Watch Intro Video</button>
        </div>
      </div>
      <div className='imageSection'>
        <img src='/images/welcomeImage.png' className='welcomeImage max-w-full h-auto opacity-0 transform translate-x-5 transition-all ease-in-out duration-700' ref={welcomeImageRef} width={576*1.1} height={360*1.1} alt='welcome'/>
      </div>
    </section>
  )
}

export default WelcomeSection; 