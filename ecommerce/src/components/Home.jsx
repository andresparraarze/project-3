import React from 'react'
import image1 from '../assets/largemain1.jpg'
import image2 from '../assets/largemain2.jpg'
import image3 from '../assets/largemain3.jpg'

const Home = () => {
  return (
    <div name='home' className='w-full h-screen'>
        <div className='max-w-[1600px] mx-auto px-8 flex flex-col justify-center items-center h-full select-none'>
            <img className='aspectw-16 aspect-h-9'
              style={{width: '1600px'}} src={image1} alt='home'/>

            <div className='absolute top-1/2 transform -translate-y-1/2 px-3 flex justify-between items-center text-black font-bolder'>
              <button className=''>
                Previous
              </button>
              <button className=''>
                Next
              </button>
            </div>
        </div>
    </div>
  )
}

export default Home