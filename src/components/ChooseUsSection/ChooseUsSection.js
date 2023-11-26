import React, { useEffect, useRef} from 'react';
import './ChooseUs.css';

import { AiOutlineBarChart as Chart} from 'react-icons/ai'
import { RiComputerLine as Service } from 'react-icons/ri'
import { MdSupportAgent as Support } from 'react-icons/md'
import { FaPeopleCarry as Community } from 'react-icons/fa'

const ChooseUsSection = () => {
  const cardRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting)
        entry.target.classList.add('fadeIn')
      })
    }, {
      threshold: 0.5
    })

    observer.observe(cardRef.current)
  }, [])

  return (
    <section className='chooseUsSection flex flex-col justify-center mt-12 gap-6'>
      <div className='sectonTitle text-center font-bold text-5xl lg:text-6xl text-welcomeColor mb-7 mt-8'>
        Why Choose Us
      </div>
      <div className='reasonCards flex flex-wrap justify-center gap-6 ' ref={cardRef}>
        <div className='card flex flex-col text-center w-72 h-auto p-3 rounded-xl gap-2 shadow-cardShadow opacity-0 translate-y-3 transition-all duration-500 ease-in'>
          <div className='text-center mx-auto'>
            <Chart size={'100px'} color={'rgb(127,127,127'} />
          </div>
          <div className='cardTitle text-grayColor text-3xl font-bold'>
            Management& Marketing
          </div>
          <div className='cardDesc text-grayColor'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
          </div>
        </div>
        <div className='card flex flex-col text-center w-72 h-auto p-3 rounded-xl gap-2 shadow-cardShadow opacity-0 translate-y-3 transition-all duration-500 delay-200 ease-in'>
          <div className='text-center mx-auto'>
            <Service size={'100px'} color={'rgb(127,127,127'} />
          </div>
          <div className='cardTitle text-grayColor text-3xl font-bold'>
            High Quality Service
          </div>
          <div className='cardDesc text-grayColor'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
          </div>
        </div>
        <div className='card flex flex-col text-center w-72 h-auto p-3 rounded-xl gap-2 shadow-cardShadow opacity-0 translate-y-3 transition-all duration-500 delay-500 ease-in'>
          <div className='text-center mx-auto'>
            <Community size={'100px'} color={'rgb(127,127,127'} />
          </div>
          <div className='cardTitle text-grayColor text-3xl font-bold'>
          A Strong, Growing Community
          </div>
          <div className='cardDesc text-grayColor'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.
          </div>
        </div>
        <div className='card flex flex-col text-center w-72 h-auto p-3 rounded-xl gap-2 shadow-cardShadow opacity-0 translate-y-3 transition-all duration-500 delay-700 ease-in'>
          <div className='text-center mx-auto'>
            <Support size={'100px'} color={'rgb(127,127,127'} />
          </div>
          <div className='cardTitle text-grayColor text-3xl font-bold'>
            24/7 Customer Support
          </div>
          <div className='cardDesc text-grayColor'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </div>
        </div>
 
      </div>
    </section>
  )
}

export default ChooseUsSection
