import Image from 'next/image'
import React from 'react'
import LushifyImg from '../../../public/projects/Lushify.png'
import SyntheticImg from '../../../public/projects/Synthetic.png'
import Link from 'next/link'


const Projects = () => {
  return (
    <div id='projects' className='w-full'>
        <div className='max-w-[1240px] mx-auto px-2 py-16'>
            <p className='text:xl tracking-widest uppercase text-blue-400'>Projects</p>
            <h2 className='py-4 text-4xl'>What I've Built</h2>
            <div className='grid md:grid-cols-2 gap-8'>
                <div className='bg-white relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-blue-400 to-blue-100'>
                    <Image className='rounded-xl group-hover:opacity-10' src={LushifyImg} alt='/' />
                    <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
                        <h3 className='text-2xl text-white tracking-wider text-center'>Lushify</h3>
                        <p className='pb-1 pt-2 text-white text-center'>A POS system for Floral business</p>
                        <p className='pb-4 pt-2 text-white text-center'>ReactJs, Ruby on Rails</p>
                        <Link className='flex items-center justify-between max-w-[330px] m-auto py-4' href={'/'}>
                            <p className='text-center py-3 px-5 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer'>Demo</p>
                            <p className='text-center py-3 px-5 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer'>Code</p>

                        </Link>
                    </div>
                </div>
                <div className='bg-white relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-blue-400 to-blue-100'>
                    <Image className='rounded-xl group-hover:opacity-10' src={SyntheticImg} alt='/' />
                    <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
                        <h3 className='text-2xl text-white tracking-wider text-center'>Synth-etic</h3>
                        <p className='pb-1 pt-2 text-white text-center'>Web-based dual oscillator synthesizer.</p>
                        <p className='pb-4 pt-2 text-white text-center'>ReactJs, ToneJs, Ruby on Rails</p>
                        <Link className='flex items-center justify-between max-w-[330px] m-auto py-4' href={'/'}>
                            <p className=' text-center py-3 px-5 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer'>Demo</p>
                            <p className=' text-center py-3 px-5 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer'>Code</p>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Projects