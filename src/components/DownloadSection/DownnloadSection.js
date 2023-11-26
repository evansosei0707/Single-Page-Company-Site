import React, { useRef, useEffect } from 'react';
import './DownloadSection.css'

const DownnloadSection = () => {
  const downloadImageRef = useRef()

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        entry.target.classList.add('fadeIn')
      })
    }, {
      threshold: 0.5
    })
    observer.observe(downloadImageRef.current)
  }, [])

  return (
    <section className='downloadSection mt-12 flex flex-col-reverse items-center lg:space-x-4 space-y-3 lg:space-y-0 justify-center gap-4 lg:flex-row'>
      <div className='imageSection'>
        <img
          src='/images/appsImage.png'
          className='downloadImage max-w-full h-auto opacity-0 -translate-x-5 transition-all duration-1000 ease-in-out'
          ref={downloadImageRef}
          width={576} height={360} alt='downloadImage' />
      </div>
      <div className='downloadText flex flex-col gap-6 justify-center items-center'>
        <div className='downloadTitle max-w-shorTab font-bold text-4xl lg:text-6xl text-welcomeColor text-center'>
          Our Services Are Available Anytime, Anywhere.
        </div>
        <div className='downloadSubtitle max-w-shorTab text-xl text-grayColor'>
          Download the app today!
        </div>
        <div className='downloadButtons flex items-center gap-4'>
          <button className=' max-w-max max-h-content cursor-pointer text-base border-none bg-transparent'>
            <img
              src='/images/downloadAppAndroid.png'
              height={50}
              width={147}
              alt='android' />
          </button>
          <button className=' max-w-max max-h-content cursor-pointer text-base border-none bg-transparent' >
          <img src='/images/downloadAppApple.png' height={43} width={148} alt='apple' />
          </button>
        </div>
      </div>
    </section>
  )
}

export default DownnloadSection