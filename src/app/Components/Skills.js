import Image from 'next/image'
import React from 'react'

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
                            <Image src='/../public/skills/html.png' alt='/' width="65" height="65"/>
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>HTML</h3>
                        </div>
                    </div>
                </div>
                <div className='bg-white py-6 shadow-xl hover:scale-105 ease-in duration-300'>
                    <div className=' grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image src='/../public/skills/css.png' alt='/' width="65" height="65"/>
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>CSS</h3>
                        </div>
                    </div>
                </div>
                <div className='bg-white py-6 shadow-xl hover:scale-105 ease-in duration-300'>
                    <div className=' grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image src='/../public/skills/javascript.png' alt='/' width="65" height="65"/>
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>JavaScript</h3>
                        </div>
                    </div>
                </div>
                <div className='bg-white py-6 shadow-xl hover:scale-105 ease-in duration-300'>
                    <div className=' grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image src='/../public/skills/node.png' alt='/' width="65" height="65"/>
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>Node</h3>
                        </div>
                    </div>
                </div>
                <div className='bg-white py-6 shadow-xl hover:scale-105 ease-in duration-300'>
                    <div className=' grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image src='/../public/skills/react.png' alt='/' width="65" height="65"/>
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>React</h3>
                        </div>
                    </div>
                </div>
                <div className='bg-white py-6 shadow-xl hover:scale-105 ease-in duration-300'>
                    <div className=' grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image src='/../public/skills/ruby.png' alt='/' width="65" height="65"/>
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>Ruby</h3>
                        </div>
                    </div>
                </div>
                <div className='bg-white py-6 shadow-xl hover:scale-105 ease-in duration-300'>
                    <div className=' grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image src='/../public/skills/rails2.png' alt='/' width="65" height="65"/>
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