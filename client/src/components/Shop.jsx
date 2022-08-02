import React from 'react'
import clothe1 from '../assets/model-1.jpg'
import clothe2 from '../assets/model-2.jpg'
import clothe3 from '../assets/model-3.jpg'
import clothe4 from '../assets/model-4.jpg'
import clothe5 from '../assets/model-5.jpg'
import clothe6 from '../assets/model-6.jpg'
import clothe7 from '../assets/model-7.jpg'
import clothe8 from '../assets/model-8.jpg'

const Shop = () => {
  return (
    <div name='shop' className='w-full h-auto bg-[#000000] text-white'>

        {/*Title section of the shopping area */}
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
          <p className='text-4xl font-bold flex pt-4 items-center justify-center border-b-4 border-white'>
            SHOP NOW 
          </p>
          <p className='flex items-center justify-center font-bold text-1xl py-4'>
            Men and Women
          </p>

          {/*Shopping area section */}
          <div className='w-full bg-[#ffffff] grid grid-cols-1 md:grid-cols-4 p-5 sm:grid-cols-2 gap-4 text-center'>
          <div className='shadow-md shadow-[#3b3b3d] hover:scale-110 hover:cursor-pointer duration-500'>
            <img className='w-100 mx-auto' src={clothe1} alt="shopping item 1" />
            <p className='text-black font-bold my-4'>
              Future Suit
            </p>
          </div>
          <div className='shadow-md shadow-[#3b3b3d] hover:scale-110 hover:cursor-pointer duration-500'>
            <img className='w-100 mx-auto' src={clothe2} alt="shopping item 2" />
            <p className='text-black font-bold my-4'>
              Elegance a la France
            </p>
          </div>
          <div className='shadow-md shadow-[#3b3b3d] hover:scale-110 hover:cursor-pointer duration-500'>
            <img className='w-100 mx-auto' src={clothe3} alt="shopping item 3" />
            <p className='text-black font-bold my-4'>
              Pavani
            </p>
          </div>
          <div className='shadow-md shadow-[#3b3b3d] hover:scale-110 hover:cursor-pointer duration-500'>
            <img className='w-100 mx-auto' src={clothe4} alt="shopping item 4" />
            <p className='text-black font-bold my-4'>
              Gianca Glamuer
            </p>
          </div>
          <div className='shadow-md shadow-[#3b3b3d] hover:scale-110 hover:cursor-pointer duration-500'>
            <img className='w-100 mx-auto' src={clothe5} alt="shopping item 5" />
            <p className='text-black font-bold my-4'>
              Le Valverde
            </p>
          </div>
          <div className='shadow-md shadow-[#3b3b3d] hover:scale-110 hover:cursor-pointer duration-500'>
            <img className='w-100 mx-auto' src={clothe6} alt="shopping item 6" />
            <p className='text-black font-bold my-4'>
              Toronto Inverno
            </p>
          </div>
          <div className='shadow-md shadow-[#3b3b3d] hover:scale-110 hover:cursor-pointer duration-500'>
            <img className='w-100 mx-auto' src={clothe7} alt="shopping item 7" />
            <p className='text-black font-bold my-4'>
              Old School
            </p>
          </div>
          <div className='shadow-md shadow-[#3b3b3d] hover:scale-110 hover:cursor-pointer duration-500'>
            <img className='w-100 mx-auto' src={clothe8} alt="shopping item 8" />
            <p className='text-black font-bold my-4'>
              Beleza
            </p>
          </div>
          <div className='shadow-md shadow-[#3b3b3d] hover:scale-110 hover:cursor-pointer duration-500'>
            <img className='w-100 mx-auto' src={clothe5} alt="shopping item 5" />
            <p className='text-black font-bold my-4'>
              Le Valverde
            </p>
          </div>
          <div className='shadow-md shadow-[#3b3b3d] hover:scale-110 hover:cursor-pointer duration-500'>
            <img className='w-100 mx-auto' src={clothe6} alt="shopping item 6" />
            <p className='text-black font-bold my-4'>
              Toronto Inverno
            </p>
          </div>
          <div className='shadow-md shadow-[#3b3b3d] hover:scale-110 hover:cursor-pointer duration-500'>
            <img className='w-100 mx-auto' src={clothe7} alt="shopping item 7" />
            <p className='text-black font-bold my-4'>
              Old School
            </p>
          </div>
          <div className='shadow-md shadow-[#3b3b3d] hover:scale-110 hover:cursor-pointer duration-500'>
            <img className='w-100 mx-auto' src={clothe8} alt="shopping item 8" />
            <p className='text-black font-bold my-4'>
              Beleza
            </p>
          </div>
        </div>
      </div> 
    </div>
  )
}

export default Shop