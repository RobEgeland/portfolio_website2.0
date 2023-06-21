import React from 'react'
import {AiFillLinkedin, AiFillGithub, AiTwotoneMail} from 'react-icons/ai'


const Main = () => {
  return (
    <div id='home' className='w-full h-screen text-center'>
        <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
            <div>
                <p className='uppercase text-sm tracking-widest text-gray-600'>Placeholder for quote</p>
                <h1 className=' uppercase py-4 text-5xl text-gray-700'>
                    Hi, I'm <span className='text-blue-400'>Rob</span>
                </h1>
                <h1 className=' uppercase py-2 text-4xl text-gray-700'>
                    A Full Stack Web Developer
                </h1>
                <p className='py-4 text-gray-600 max-w-[70%] m-auto'>
                Experience in React, JavaScript, Ruby, and Rails. With 6 years of managerial experience in the floral business, I bring business leadership, client relations, and problem-solving skills to accomplish vigorous projects and obstacles. My interest for Music and Automobiles have coalesced into a passion for the software behind them.
                </p>
                <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
                    <div className='rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <AiFillLinkedin />
                    </div>
                    <div className='rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <AiFillGithub />
                    </div>
                    <div className='rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <AiTwotoneMail />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Main