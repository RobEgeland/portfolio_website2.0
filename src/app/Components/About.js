import Image from 'next/image'
import React from 'react'

const About = () => {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
        <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
            <div className='col-span-2'>
                <p className='uppercase text-xl tracking-widest'>About</p>
                <h2 className='py-4 text-4xl'>Who am <span className='text-[#e1ad01]'>I</span>?</h2>
                <p className='py-2 text-gray-600'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed convallis dui a malesuada venenatis. Sed in quam ac sapien gravida tempus vel sed mauris. Sed nec sem ultricies, convallis mauris sed, tempus risus. Nulla sit amet tincidunt felis. Proin condimentum tellus nec sem interdum fringilla. Suspendisse in urna eleifend, hendrerit quam id, cursus nisl. Sed eget velit eu purus efficitur auctor. Suspendisse potenti. Sed euismod justo vitae diam congue, et fermentum velit malesuada.
                </p>
                <p className='py-2 text-gray-600'>
                    Praesent nec tortor eu ligula accumsan dictum. Ut fringilla laoreet nunc, nec ultrices tortor rhoncus sed. Fusce posuere mi vitae leo volutpat semper. Nunc consequat neque nec purus fermentum viverra. Integer maximus augue tellus, vitae malesuada ipsum pharetra nec. Curabitur eu lectus mi. Sed fermentum ullamcorper bibendum. Nam eget tellus eu enim dictum aliquam vel sit amet lacus. Aenean lacinia libero ut lacus aliquet, a malesuada nisl dignissim. Fusce tristique interdum lacus at sollicitudin. Sed eu orci sed erat scelerisque tincidunt ac id tortor.
                </p>
            </div>
            <div>
                <Image src='/../public/Headshot.jpeg' alt='/' width='300' height='300' className='h-300 mx-auto object-cover rounded-full w-300 p-4 hover:scale-105 ease-in duration-300' />
            </div>
        </div>
    </div>
  )
}

export default About