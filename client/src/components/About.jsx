import React from 'react'
import {FaFacebook, FaInstagram} from 'react-icons/fa'

const About = () => {
  return (
    <div name='about' className='w-full h-screen'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                <div className='sm:text-right pb-8 pl-4'>
                    <p className='text-4xl font-bold inline border-b-4 border-black'>
                        About us
                    </p>
                </div>
                <div>

                </div>
            </div>
                <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                    <div className='sm:text-right text-2xl font-bold'>
                        <p>
                            We are LUXURY a blend of Quality and Simplicity.
                            We are LEA LACROIX
                        </p>
                    </div>
                    <div>
                        <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi dolorem enim corrupti perspiciatis dolor a porro autem voluptatum maiores iste accusamus nihil pariatur impedit, architecto quam similique aspernatur. Cum, voluptatibus.
                        </p>
                    </div>
                </div>

                {/*Social media */}
                <div className='py-8'>
                    <ul>
                        <li className='w-[160px] h-[60px] flex justify-between items-center'>
                            <a className='font-bold flex justify-between items-center w-full'
                                href="/" target={'blank'}>
                                Facebook <FaFacebook size={30}/>
                            </a>
                        </li>
                        <li className='w-[160px] h-[60px] flex justify-between items-center'>
                            <a className='font-bold flex justify-between items-center w-full'
                                href="/" target={'blank'}>
                                Instagram <FaInstagram size={30}/>
                            </a>
                        </li>
                    </ul>
                </div>
        </div>
    </div>
  )
}

export default About