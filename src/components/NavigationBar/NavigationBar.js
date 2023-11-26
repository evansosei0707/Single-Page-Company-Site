import './NavigationBar.css';
import { useState, useEffect } from 'react';

import { RxHamburgerMenu as OpenMenu } from "react-icons/rx";
import { CgClose as HideMenu} from 'react-icons/cg';

const NavigationBar = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [width, setWidth] = useState(window.innerWidth)

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth) 
      width > 1024 && setMenuOpen(false)
    }
    window.addEventListener('resize', handleResize) 
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <>
      <nav className="navBar top-0 fixed flex justify-between bg-white border-solid border-4 border-borderColor border-b px-12 box-border w-full z-10 ">
        <div className="leftSection flex items-center gap-20">
          <a href='https://github.com/evansosei0707/olives-web' target={'_blank'} style={{textDecoration: "none", outline: "none"}}>
            <div className='companyLogo flex items-center gap-1 w-max h-max-con mt-4 mb-4 hover:cursor-pointer'>
              <img src='/images/globeIcon.png ' className='select-none w-12 h-12'alt='logo'/>
              <h1 className='text-logoColor select-none m-0 transition-colors duration-200 ease-in-out hover:text-welcomeColor'>Company
              </h1>
            </div>
          </a> 
            <div className="navBtns items-center hidden gap-4 lg:flex">
              <div className="navDropdown flex relative gap-4">
                <button className='text-xl font-sans text-grayColor bg-transparent outline-none select-none h-20 border-none transition-colors duration-200 ease-in-out hover:cursor-pointer hover:text-welcomeColor focus:cursor-pointer focus:text-welcomeColor'>About Us</button>
                <div className="aboutDropdownMenu left-0 top-full absolute p-4 pt-0 border border-solid border-borderColor bg-white border-t-0 shadow-cardShadow opacity-0 -translate-x-2 transition-all duration-100 ease-in-out z-10 w-300">
                  <div className="menuItem">
                    <h3 className='text-grayColor'>Who We Are</h3>
                    <hr className='border border-solid border-[#a9a9a970]'/>
                    <div className="dropdownDescription">
                      <p>
                        Get to know more about our business and what we do to serve our fellow communities.
                        <span>
                          <a href='#' style={{textDecoration: "none"}} className='outline-none transition-colors ease-in-out duration-20 hover:text-welcomeColor focus:text-welcomeColor'> Learn more.</a>
                        </span>
                      </p>
                    </div>
                  </div>
                  <div className="menuItem">
                    <h3>Our Mission</h3>
                    <hr/>
                    <div className="dropdownDescription">
                      <p>
                        Our mission at Company is to make a positive impact in the world through our work.
                        <span>
                          <a href='#' style={{textDecoration: "none"}}> Learn more.</a>
                        </span>
                      </p>
                    </div>
                  </div>
                  <div className="menuItem">
                    <h3>Meet the Team</h3>
                    <hr/>
                    <div className="dropdownDescription">
                      <p>
                        See all the amazing members of our team who help make our goals become reality.
                        <span>
                          <a href='#' style={{textDecoration: "none"}}> Learn more.</a>
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="navDropdown navDropdown flex relative gap-4">
                <button className='text-xl font-sans text-grayColor bg-transparent outline-none select-none h-20 border-none transition-colors duration-200 ease-in-out hover:cursor-pointer hover:text-welcomeColor focus:cursor-pointer focus:text-welcomeColor'>Services</button>
                <div className="serviceDropdownMenu  left-0 top-full absolute p-4 pt-0 border border-solid border-borderColor bg-white border-t-0 shadow-cardShadow opacity-0 -translate-x-2 transition-all duration-100 ease-in-out z-10 flex flex-wrap w-100">
                  <div className="menuItem">
                    <h3>Service #1</h3>
                    <hr/>
                    <div className="dropdownDescription">
                      <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        <span>
                          <a href='#' style={{textDecoration: "none"}} className='outline-none transition-colors ease-in-out duration-20 hover:text-welcomeColor focus:text-welcomeColor'> Learn more.</a>
                        </span>
                      </p>
                    </div>
                  </div>
                  <div className="menuItem">
                    <h3>Service #2</h3>
                    <hr/>
                    <div className="dropdownDescription">
                      <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        <span>
                          <a href='#' style={{textDecoration: "none"}}> Learn more.</a>
                        </span>
                      </p>
                    </div>
                  </div>
                  <div className="menuItem">
                    <h3>Service #3</h3>
                    <hr/>
                    <div className="dropdownDescription">
                      <p>
                      Lorem ipsum dolor sit amet.
                        <span>
                          <a href='#' style={{textDecoration: "none"}}> Learn more.</a>
                        </span>
                      </p>
                    </div>
                  </div>
                  <div className="menuItem">
                    <h3>Service #4</h3>
                    <hr/>
                    <div className="dropdownDescription">
                      <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        <span>
                          <a href='#' style={{textDecoration: "none"}}> Learn more.</a>
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <button>Community</button>
              <button>Blog</button>
              <button>News</button>
            </div>
        </div>
        <div className='rightSection flex items-center gap-12'>
          <div className="accountSection hidden lg:flex gap-4">
            <button className='w-32 h-9 cursor-pointer outline-none font-sans text-grayColor bg-white border border-solid border-btnColor rounded-6xl transition-colors ease-in-out duration-200 hover:text-white hover:bg-accountColor hover:border-accountColor focus:text-white focus:bg-accountColor focus:border-accountColor'>Login</button>
            <button className='w-32 h-9 cursor-pointer outline-none font-sans text-grayColor bg-white border border-solid border-btnColor rounded-6xl transition-colors ease-in-out duration-200 hover:text-white hover:bg-accountColor hover:border-accountColor focus:text-white focus:bg-accountColor focus:border-accountColor'>Sign Up</button>
          </div>
          <div className="menuSection block lg:hidden">
            {
              !menuOpen ? 
                <OpenMenu className='menuBtn w-8 h-8 cursor-pointer text-gray-400' onClick={() => setMenuOpen(true)}/> : 
                <HideMenu className='hideBtn w-8 h-8 cursor-pointer text-gray-400' onClick={() => setMenuOpen(false)}/>
            }
          </div>
        </div>
        <div className='sideMenu fixed  flex-col gap-8 top-20 right-0 w-80 h-5/6 p-4 border-transparent border-l border-gray-300 shadow-sideShadow bg-white overflow-scroll' style={{display: (!menuOpen || width > 1024) ? 'none' : 'flex'}} >
          <div className="sideMenuSiteSections flex px-2 flex-col gap-12">
            <button className='bg-white border solid border-transparent font-sans select-none text-lg transition-colors ease-in-out duration-200 hover:text-welcomeColor'>About Us</button>
            <button className='bg-white border solid border-transparent font-sans select-none text-lg transition-colors ease-in-out duration-200 hover:text-welcomeColor'>Services</button> 
            <button className='bg-white border solid border-transparent font-sans select-none text-lg transition-colors ease-in-out duration-200 hover:text-welcomeColor'>Community</button>
            <button className='bg-white border solid border-transparent font-sans select-none text-lg transition-colors ease-in-out duration-200 hover:text-welcomeColor'>Blog</button>
            <button className='bg-white border solid border-transparent font-sans select-none text-lg transition-colors ease-in-out duration-200 hover:text-welcomeColor'>Contact Us</button>
          </div>
          <div className="sideMenuContent flex flex-col content-between">
            <div className="sideMenuAccountHeader">
              <h1 className='text-[#a2a2a2] select-none text-center text-lg mb-4'>Login or Sign Up</h1>
            </div>
            <div className="loginSignUpSection flex justify-center flex-col gap-4">
              <div className="sideMenuAccountBtns flex justify-center flex-col gap-4">
                <button className='h-12 font-sans text-base text-grayColor bg-white outline-none select-none border border-solid border-gray-200 rounded-6xl transition-colors duration-200 ease-in-out hover:cursor-pointer hover:text-white hover:bg-welcomeColor hover:border-welcomeColor '>Login</button>
                <button className='h-12 font-sans text-base text-grayColor bg-white outline-none select-none border border-solid border-gray-200 rounded-6xl transition-colors duration-200 ease-in-out hover:cursor-pointer hover:text-white hover:bg-welcomeColor hover:border-welcomeColor '>Sign Up</button>
              </div>
              <div className='disclaimer cursor-pointer py-0 px-4'>
                &copy; Company. All rights reserved. All trademarks are property of their respective owners in the US and other countries.
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default NavigationBar
