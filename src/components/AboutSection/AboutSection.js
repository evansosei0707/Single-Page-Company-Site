import React, {useEffect, useRef } from 'react';
import './AboutSection.css';


const AboutSection = () => {

  const aboutImageRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting)
        entry.target.classList.add('fadeIn')
      })
    }, {
      threshold: 0.5
    })
    observer.observe(aboutImageRef.current)
  }, [])

  return (
    <section className='aboutSection mx-4 mt-12 flex flex-col-reverse justify-center space-y-5 lg:space-x-0 lg:space-x-3 items-center gap-4 lg:flex-row '>
      <div className='aboutLeft flex-1'>
        <img
          src='/images/aboutUsImage.png'
          className='aboutImage max-w-full h-auto opacity-0 transform -translate-x-5 transition-all duration-1000 ease-in'
          ref={aboutImageRef}
          alt='aboutImage'
          width={750} height={450} />
      </div>
      <div className='aboutRight flex flex-col flex-1 items-center text-center gap-4 justify-between'>
        <div className='header max-w-lg font-bold text-6xl text-welcomeColor'>
          About Us
        </div>
        <div className='Body  cursor-pointer font-sans font-bold pb-4 text-grayColor bg-white shadow-none transition-all duration-200 ease-in-out h-auto w-10/12'>
        orem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda nobis quidem porro laudantium sint, labore exercitationem commodi, adipisci unde dolorem modi quae obcaecati quod cum numquam perspiciatis quos, facilis error! Possimus vitae labore officia? Qui cum fuga quibusdam cupiditate dolores corporis suscipit, expedita at doloribus? Molestiae nisi quas facilis eos.
        </div>
        <div className='button'>
          <button className=' border-welcomeColor border border-solid p-4 rounded-3xl hover:text-white hover:bg-welcomeColor hover:shadow-btnShadow focus:text-white focus:bg-welcomeColor focus:shadow-btnShadow py-2 px-7'>Read More</button> 
        </div>
      </div>
    </section>
  )
}

export default AboutSection;