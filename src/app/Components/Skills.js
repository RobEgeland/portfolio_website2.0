import Image from 'next/image'
import React from 'react'
import Html from '../../../public/static/images/html.png'
import Css from '../../../public/static/images/css.png'
import JS from '../../../public/static/images/javascript.png'
import Node from '../../../public/static/images/node.png'
import react from '../../../public/static/images/react.png'
import Ruby from '../../../public/static/images/ruby.png'
import Rails from '../../../public/static/images/rails2.png'

const Skills = () => {
  return (
    <div id='skills' className='w-full lg:h-screen p-2'>
        <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
            <p className='text:xl tracking-widest uppercase text-blue-400'>Skills</p>
            <h2 className='py-4 text-4xl'>My ToolBelt</h2>
            <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
                <div className='bg-white py-6 shadow-xl hover:scale-105 ease-in duration-300'>
                    <div className=' grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image src={Html} alt='/' width="65" height="65"/>
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>HTML</h3>
                        </div>
                    </div>
                </div>
                <div className='bg-white py-6 shadow-xl hover:scale-105 ease-in duration-300'>
                    <div className=' grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image src={Css} alt='/' width="65" height="65"/>
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>CSS</h3>
                        </div>
                    </div>
                </div>
                <div className='bg-white py-6 shadow-xl hover:scale-105 ease-in duration-300'>
                    <div className=' grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image src={JS} alt='/' width="65" height="65"/>
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>JavaScript</h3>
                        </div>
                    </div>
                </div>
                <div className='bg-white py-6 shadow-xl hover:scale-105 ease-in duration-300'>
                    <div className=' grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image src={Node} alt='/' width="65" height="65"/>
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>Node</h3>
                        </div>
                    </div>
                </div>
                <div className='bg-white py-6 shadow-xl hover:scale-105 ease-in duration-300'>
                    <div className=' grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image src={react} alt='/' width="65" height="65"/>
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>React</h3>
                        </div>
                    </div>
                </div>
                <div className='bg-white py-6 shadow-xl hover:scale-105 ease-in duration-300'>
                    <div className=' grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image src={Ruby} alt='/' width="65" height="65"/>
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>Ruby</h3>
                        </div>
                    </div>
                </div>
                <div className='bg-white py-6 shadow-xl hover:scale-105 ease-in duration-300'>
                    <div className=' grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image src={Rails} alt='/' width="65" height="65"/>
                        </div>
                        <div className='flex flex-col items-center justify-center py-6'>
                            <h3>Ruby on Rails</h3>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>

    </div>
  )
}

export default Skills