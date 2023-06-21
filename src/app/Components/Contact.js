import React from 'react'
import Image from 'next/image'
import ContactImg from '../../../public/contact.jpg'
import {AiFillLinkedin, AiFillGithub, AiTwotoneMail} from "react-icons/ai"
import Link from 'next/link'
import {BsArrowUpCircleFill} from 'react-icons/bs'

const Contact = () => {
  return (
    <div id='contact' className='w-full lg:h-screen'>
        <div className='max-x-[1240px] m-auto px-2 py-16 w-full'>
            <p className='text:xl tracking-widest uppercase text-blue-400'>Contact</p>
            <h2 className='py-4 text-4xl'>Get In Touch</h2>
            <div className='grid lg:grid-cols-5 gap-8:'></div>
            {/* left */}
            <div className='col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4'>
                <div className='lg:p-4 h-full'>
                    <div>
                        <Image src={ContactImg} className='rounded-xl hover:scale-105 ease-in duration-300'></Image>
                    </div>
                    <div>
                        <h2 className='py-2 text-2xl'>Rob Egeland</h2>
                        <p>Full Stack Developer</p>
                        <p className='py-4'>Contact me and lets talk about what I can do for your company.</p>
                    </div>

                </div>
                <div>
                    <p className='uppercase pt-8'>Lets Connect</p>
                    <div className='flex items-center justify-between py-4'>
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
            {/* right side */}
            <div className='col-span w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4'>
                <div className='p-4'>
                    <form>
                        <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
                            <div className='flex flex-col'>
                                <label className='uppercase text-sm py-2'>Name</label>
                                <input className='border-2 rounded-lg p-3 flex border-gray-300' type='text'></input>
                            </div>
                            <div className='flex flex-col'>
                                <label className='uppercase text-sm py-2'>Phone Number</label>
                                <input className='border-2 rounded-lg p-3 flex border-gray-300' type='text'></input>
                            </div>
                        </div>
                        <div className='flex flex-col py-2'>
                            <label className='uppercase text-sm py-2'>Email</label>
                            <input className='border-2 rounded-lg p-3 flex border-gray-300' type='email'></input>
                        </div>
                        <div className='flex flex-col py-2'>
                            <label className='uppercase text-sm py-2'>Subject</label>
                            <input className='border-2 rounded-lg p-3 flex border-gray-300' type='text'></input>
                        </div>
                        <div className='flex flex-col py-2'>
                            <label className='uppercase text-sm py-2'>Message</label>
                            <textarea className='border-2 rounded-lg p-3 flex border-gray-300' type='text' rows={10}></textarea>
                        </div>
                        <button className='w-full p-4 text-gray-100 bg-blue-400 mt-4 rounded-lg'>Send Message</button>
                    </form>

                </div>

            </div>
            <div className='flex justify-center py-12'>
                <Link href='/'>
                    <div className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <BsArrowUpCircleFill className='text-blue-400' size={30}/>
                    </div>
                </Link>
            </div>
        </div>

    </div>
  )
}

export default Contact