import React from 'react'

const Footer = () => {
  return (
    <footer className="footer mt-6 p-12 bg-black text-white">
    <div className="footerContainer flex flex-wrap gap-16">
      <div className="footerColumn flex flex-col gap-2">
        <div className="columnTitle text-xl font-bold text-welcomeColor">
          Company
          <hr className='columnTitleHR'/>
        </div>
        <div className="columnText flex flex-col gap-4">
          <div className="columnTextItem text-white">
            <a href="#">About</a>
          </div>
          <div className="columnTextItem text-white">
            <a href="#">Services</a>
          </div>
          <div className="columnTextItem  text-white">
            <a href="#">Community</a>
          </div>
          <div className="columnTextItem  text-white">
            <a href="#">Blog</a>
          </div>
        </div>
      </div>
      <div className="footerColumn flex flex-col gap-2">
        <div className="columnTitle text-xl font-bold text-welcomeColor">
          Resources
          <hr className='columnTitleHR'/>
        </div>
        <div className="columnText ">
          <div className="columnTextItem  text-white">
            <a href="#">Help</a>
          </div>
          <div className="columnTextItem  text-white">
            <a href="#">Terms</a>
          </div>
          <div className="columnTextItem  text-white">
            <a href="#">Privacy</a>
          </div>
        </div>
      </div>
      <div className="footerColumn flex flex-col gap-2">
        <div className="columnTitle text-xl font-bold text-welcomeColor">
          Support
          <hr className='columnTitleHR'/>
        </div>
        <div className="columnText">
          <div className="columnTextItem  text-white">
            <a href="#">Quick Search</a>
          </div>
          <div className="columnTextItem  text-white">
            <a href="#">Popular Help Topics</a>
          </div>
          <div className="columnTextItem  text-white">
            <a href="#">Product FAQs</a>
          </div>
          <div className="columnTextItem  text-white">
            <a href="#">Policies</a>
          </div>
        </div>
      </div>
      <div className="footerColumn flex flex-col gap-2">
        <div className="columnTitle text-xl font-bold text-welcomeColor">
          Contact
          <hr className='columnTitleHR'/>
        </div>
        <div className="columnText space-y-2">
          <div className="columnTextItem  text-white">
            Phone: +1 (123) 456-7890
          </div>
          <div className="columnTextItem  text-white">
            Email: <u><a href='#'>support.company@gmail.com</a></u>
          </div>
          <div className="columnTextItem  text-white">
            Address: 321 Main Street, <br/>Austin, TX 12345
          </div>
        </div>
      </div>
      <div className="footerColumn flex flex-col gap-2">
        <div className="columnTitle text-xl font-bold text-welcomeColor">
          Sign Up For Our Newsletter
          <hr className='columnTitleHR'/>
        </div>
        <div className="columnText flex flex-col gap-4">
          <span className='flex justify-center items-center'>
            <input type="text" placeholder='Enter email...' className='newsletterEmailInput h-6 p-1 outline-none border-none rounded-tl-large rounded-bl-large mr-2'/>
            <input type="submit" value="Sign Up" className='newsletterEmailSubmit grid place-items-center h-6 p-1 outline-none border-none rounded-tr-large rounded-br-large hover:cursor-pointer bg-welcomeColor text-white'/>
          </span>
        </div>
      </div>
    </div>
  </footer>
  )
}

export default Footer