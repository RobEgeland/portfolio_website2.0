"use client"

import React, {useState} from 'react'
import Image from 'next/image'
import ContactImg from '../../../public/contact.jpg'
import {AiFillLinkedin, AiFillGithub, AiTwotoneMail} from "react-icons/ai"
import Link from 'next/link'
import {BsArrowUpCircleFill} from 'react-icons/bs'
import emailjs from '@emailjs/browser';

const Contact = () => {
    const [form, setForm] = useState({
        name: "",
        phone: "",
        email: "",
        subject: "",
        message: ""
    })

    const [submitText, setSubmitText] = useState("Send Message")

    function sendEmail(e) {
        e.preventDefault()
        setSubmitText("Sending...")
        console.log("ran");
        emailjs.send('service_1niv9eg', 'template_tu44pli', form, 'PmpP3plhVGdlgUhlN')
        .then((result) => {
            console.log(result.text);
            setForm({
                name: "",
                phone: "",
                email: "",
                subject: "",
                message: ""
            })
            setSubmitText("Send Message")
        }, (error) => {
            console.log(error.text);
        });
    }



  return (
    <div id='contact' className='w-full lg:h-screen'>
        <div className='max-x-[1240px] m-auto px-2 py-16 w-full'>
            <p className='text:xl tracking-widest uppercase text-blue-400'>Contact</p>
            <h2 className='py-4 text-4xl'>Get In Touch</h2>
            <div className='grid lg:grid-cols-5 gap-8:'></div>
            {/* left */}
            <div className=' m-auto col-span-3 lg:col-span-2 w-[85%] h-full shadow-xl shadow-gray-400 rounded-xl p-4'>
                <div className='lg:p-4 h-full'>
                    <div>
                        <Image src={ContactImg} className='rounded-xl hover:scale-95 ease-in duration-300'></Image>
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
                        <a href={'https://www.linkedin.com/in/robertegeland/'}> 
                            <div className='rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-110 ease-in duration-300'>
                                <AiFillLinkedin />
                            </div>
                        </a>
                        <a href={'https://github.com/RobEgeland'}>
                            <div className='rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-110 ease-in duration-300'>
                                <AiFillGithub />
                            </div>
                        </a>
                        <Link href="/#email">
                            <div className='rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-110 ease-in duration-300'>
                                <AiTwotoneMail />
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
            {/* right side */}
            <div className='m-auto col-span w-[85%] h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4'>
                <div className='p-4'>
                    <form onSubmit={sendEmail} id='email'>
                        <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
                            <div className='flex flex-col'>
                                <label className='uppercase text-sm py-2'>Name</label>
                                <input value={form.name} onChange={(e) => setForm({
                                    ...form,
                                    name: e.target.value
                                })} className='border-2 rounded-lg p-3 flex border-gray-300' type='text'></input>
                            </div>
                            <div className='flex flex-col'>
                                <label className='uppercase text-sm py-2'>Phone Number</label>
                                <input value={form.phone} onChange={(e) => setForm({
                                    ...form,
                                    phone: e.target.value
                                })} className='border-2 rounded-lg p-3 flex border-gray-300' type='text'></input>
                            </div>
                        </div>
                        <div className='flex flex-col py-2'>
                            <label className='uppercase text-sm py-2'>Email</label>
                            <input value={form.email} onChange={(e) => setForm({
                                ...form,
                                email: e.target.value
                            })} className='border-2 rounded-lg p-3 flex border-gray-300' type='email'></input>
                        </div>
                        <div className='flex flex-col py-2'>
                            <label className='uppercase text-sm py-2'>Subject</label>
                            <input value={form.subject} onChange={(e) => setForm({
                                ...form,
                                subject: e.target.value
                                })} className='border-2 rounded-lg p-3 flex border-gray-300' type='text'></input>
                        </div>
                        <div className='flex flex-col py-2'>
                            <label className='uppercase text-sm py-2'>Message</label>
                            <textarea value={form.message} onChange={(e) => setForm({
                                ...form,
                                message: e.target.value
                                })} className='border-2 rounded-lg p-3 flex border-gray-300' type='text' rows={10}></textarea>
                        </div>
                        <button className='w-full p-4 text-gray-100 bg-blue-400 mt-4 rounded-lg'>{submitText}</button>
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