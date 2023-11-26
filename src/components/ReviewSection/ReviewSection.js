import React from 'react';
import './ReviewSection.css';

const ReviewSection = () => {
  
  return (
    <section className='reviewSection p-12 flex justify-center flex-col gap-8'>
      <div className='reviewTextSection flex justify-center flex-col'>
        <div className='reviewSectionTitle flex justify-center font-bold text-6xl text-welcomeColor'>
          Reviews
        </div>
        <div className='reviewSectionSubtitle flex justify-center text-xl text-grayColor'>
          Have a look at what some of your customers are saying about us!
        </div>
      </div>
      <div className='allReviews flex flex-wrap gap-6 justify-center'>
        <div className='review flex gap-4 p-3 w-max max-w-md rounded-2xl shadow-cardShadow'>
          <div className='profilePic flex items-start'>
            <img src='/images/profPic1.png' className='rounded-circle w-52'  alt='profile'/>
          </div>
          <div className='reviewText flex flex-col gap-4'>
            <div className='reviewerName font-bold text-xl '>
              David Wilson
            </div>
            <div className='reviewerLocation r'>
              San Francisco, CA
            </div>
            <div className='reviewerReview'>
              <em>"I have been a customer of this company for years and have been extremely satisfied with their products and services. The staff is friendly and helpful, and they always go above and beyond to make sure I have everything I need. Highly recommend!"</em>
            </div>
          </div>
        </div>
        <div className='review flex gap-4 p-3 w-max max-w-md rounded-2xl shadow-cardShadow'>
          <div className='profilePic flex items-start'>
            <img src='/images/profPic2.png' className='rounded-circle w-52'  alt='profile'/>
          </div>
          <div className='reviewText flex flex-col gap-4'>
            <div className='reviewerName font-bold text-xl'>
              Sarah Lee
            </div>
            <div className='reviewerLocation'>
              Seattle, WA
            </div>
            <div className='reviewerReview'>
              <em>"I have been a customer of this company for years and have been extremely satisfied with their products and services. The staff is friendly and helpful, and they always go above and beyond to make sure I have everything I need. Highly recommend!"</em>
            </div>
          </div>
        </div>
        <div className='review flex gap-4 p-3 w-max max-w-md rounded-2xl shadow-cardShadow'>
          <div className='profilePic flex items-start'>
            <img src='/images/profPic3.png' className='rounded-circle w-52'  alt='profile'/>
          </div>
          <div className='reviewText flex flex-col gap-4'>
            <div className='reviewerName font-bold text-xl'>
              Frank Jones
            </div>
            <div className='reviewerLocation'>
              Houston, TX
            </div>
            <div className='reviewerReview'>
              <em>"I have had nothing but positive experiences with this company. They have always been prompt and efficient, and the products I have purchased from them have exceeded my expectations. I will definitely be a repeat customer!"</em>
            </div>
          </div>
        </div>
        <div className='review flex gap-4 p-3 w-max max-w-md rounded-2xl shadow-cardShadow'>
          <div className='profilePic flex items-start'>
            <img src='/images/profPic4.png' className='rounded-circle w-52' alt='profile'/>
          </div>
          <div className='reviewText flex flex-col gap-4'>
            <div className='reviewerName font-bold text-xl'>
              Samantha Smith
            </div>
            <div className='reviewerLocation'>
              Austin, TX
            </div>
            <div className='reviewerReview'>
              <em>"I was blown away by the level of service I received from this company. They were extremely knowledgeable and helped me find exactly what I was looking for. I will definitely be using them again in the future"</em>
            </div>
          </div>
        </div>
      </div>

    </section>
  )
}

export default ReviewSection