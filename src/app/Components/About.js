import Image from 'next/image'
import React from 'react'
import headshot from '../../../public/static/images/Headshot.jpeg'

const About = () => {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
        <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
            <div className='col-span-2'>
                <p className='uppercase text-xl tracking-widest'>About</p>
                <h2 className='py-4 text-4xl'>Who am <span className='text-[#e1ad01]'>I</span>?</h2>
                <p className='py-2 text-gray-600'>
                    Hello, I'm Rob Egeland, a software engineer based in the bustling city of Chicago. Recently, I completed my training at Flatiron School, and I couldn't be more thrilled to bring my skills and passions to the industry. Cars and music have always held a special place in my heart—driving and creating music, respectively. As I grew older, my fascination shifted towards the technology behind these interests, and my love for the industry expanded from there. That's why I believe software engineering is the perfect fit for me.                </p>
                <p className='py-2 text-gray-600'>
                    When seeking opportunities, one of the most important factors for me is being part of a growth-oriented environment and collaborating with like-minded individuals who are eager to learn alongside me. I'm driven by curiosity and have an insatiable thirst for knowledge. By combining my technical expertise, creative mindset, and unwavering dedication, I aim to bridge the gap between my passions and the exciting world of software engineering. I'm excited to contribute to cutting-edge projects, work with innovative teams, and make a meaningful impact in the industry. Join me on this journey of personal and professional growth as we push the boundaries of what's possible in the software engineering realm.</p>
            </div>
            <div>
                <Image src={headshot} alt='/' width='300' height='300' className='h-300 mx-auto object-cover rounded-full w-300 p-4 hover:scale-105 ease-in duration-300' />
            </div>
        </div>
    </div>
  )
}

export default About