import React from 'react'
import {AiFillLinkedin, AiFillGithub, AiTwotoneMail, AiFillMediumSquare} from 'react-icons/ai'
import Link from 'next/link'
import ParticleComponent from '../ParticleComponent'


const Main = () => {
  return (
    <div id='home' className='w-full h-screen text-center'>
        <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
            <div>
                <p className='uppercase text-sm tracking-widest text-gray-600'>Passionate about tech, Music, and Automobiles, I drive innovation in ambitious projects.</p>
                <h1 className=' uppercase py-4 text-5xl text-gray-700'>
                    Hi, I&apos;m <span className='text-[#e1ad01]'>Rob</span>
                </h1>
                <h1 className=' uppercase py-2 text-4xl text-gray-700'>
                    A Full Stack Web Developer
                </h1>
                <p className='py-4 text-gray-600 max-w-[70%] m-auto'>
                Experience in React, JavaScript, Ruby, and Rails. With 6 years of managerial experience in the floral business, I bring business leadership, client relations, and problem-solving skills to accomplish vigorous projects and obstacles. My interest for Music and Automobiles have coalesced into a passion for the software behind them.
                </p>
                <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
                    <a href={'https://www.linkedin.com/in/robertegeland/'}>
                        <div  className='bg-white rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-110 ease-in duration-300'>
                            <AiFillLinkedin  />
                        </div>
                    </a>
                    <a href={'https://github.com/RobEgeland'}>
                        <div className='bg-white rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-110 ease-in duration-300'>
                            <AiFillGithub />
                        </div>
                    </a>
                    <a href={'https://medium.com/@robegeland'}>
                        <div className='bg-white rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-110 ease-in duration-300'>
                            <AiFillMediumSquare />
                        </div>
                    </a>
                    <Link href="/#email">
                        <div className='bg-white rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-110 ease-in duration-300'>
                            <AiTwotoneMail  />
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Main