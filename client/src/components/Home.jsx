import React from 'react'
import image1 from '../assets/largemain1.jpg'

const Home = () => {
  return (
    <div name='home' className='w-full h-screen'>
        <div className='max-w-[2000px] mx-auto px-8 flex flex-col justify-center items-center h-full select-none pt-[170px] pb-[130px]'>
            <img className='aspectw-16 aspect-h-9'
              style={{width: '2000px'}} src={image1} alt='home'/>
        </div>
    </div>
  )
}

export default Home