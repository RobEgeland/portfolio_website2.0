import React from 'react'
import Image from 'next/image'
import Emoji from '../../../public/articles/emoji.webp'
import ClassComp from '../../../public/articles/class components.webp'
import Regex from '../../../public/articles/regex.webp'
import MVC  from '../../../public/articles/MVC.png'
import Audio from '../../../public/articles/audio.webp'
import Inspire from '../../../public/articles/silicon-valley.jpg'

const Articles = () => {
  return (
    <div id='articles' className='w-full lg:h-screen p-2'>
        <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
            <p className='text:xl tracking-widest uppercase text-blue-400'>Writing</p>
            <h2 className='py-4 text-4xl'>My Blog Posts</h2>
            <div className='grid md:grid-cols-2 lg:grid-cols-2 gap-8 '>        
                <a href={'https://medium.com/@robegeland/emojiscript-a-quick-guide-to-emojis-in-javascript-c5aaee19101d'}>
                    <div className='bg-white py-6 px-4 shadow-xl h-full rounded-3xl hover:scale-105 ease-in duration-300'>
                        <div className=' grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <Image src={Emoji} alt='/' width="300" height="135"/>
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3>EmojiScript: A Quick Guide to Emojis in JavaScript</h3>
                            </div>
                        </div>
                    </div>
                </a>
                <a href={'https://medium.com/dev-genius/class-components-the-basics-and-why-they-are-still-important-873a3d91ddbb'}>
                    <div className='bg-white py-6 px-4 shadow-xl h-full rounded-3xl hover:scale-105 ease-in duration-300'>
                        <div className=' grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <Image src={ClassComp} alt='/' width="200" height="135"/>
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3>Class Components: The Basics and Why They Are Still Important</h3>
                            </div>
                        </div>
                    </div>
                </a>
                <a href={'https://medium.com/@robegeland/making-regex-as-painless-as-possible-e007b892632c'}>
                    <div className='bg-white py-6 px-4 h-full shadow-xl rounded-3xl hover:scale-105 ease-in duration-300'>
                        <div className=' grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <Image src={Regex} alt='/' width="300" height="135"/>
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3>Making Regex as Painless as Possible</h3>
                            </div>
                        </div>
                    </div>
                </a>
                <a href={'https://medium.com/@robegeland/why-you-should-use-mvc-c60c2cb4bdc6'}>
                    <div className='bg-white py-6 px-4 shadow-xl h-full rounded-3xl hover:scale-105 ease-in duration-300'>
                        <div className=' grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <Image src={MVC} alt='/' width="200" height="135"/>
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3>Why you should use MVC</h3>
                            </div>
                        </div>
                    </div>
                </a>
                <a href={'https://medium.com/@robegeland/making-music-in-react-a18fc9d888df'}>
                    <div className='bg-white py-6 px-4 shadow-xl h-full rounded-3xl hover:scale-105 ease-in duration-300'>
                        <div className=' grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <Image src={Audio} alt='/' width="300" height="135"/>
                            </div>
                            <div className='flex flex-col items-center justify-center py-6'>
                                <h3>Making Music in React</h3>
                            </div>
                        </div>
                    </div>
                </a>
                <a href={'https://medium.com/@robegeland/tips-to-get-reinspired-on-your-coding-journey-69efa1213f21'}>
                    <div className='bg-white py-6 px-4 shadow-xl h-full rounded-3xl hover:scale-105 ease-in duration-300'>
                        <div className=' grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <Image src={Inspire} alt='/' width="200" height="135"/>
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3>Tips to get Reinspired on your Coding Journey</h3>
                            </div>
                        </div>
                    </div>
                </a>
            </div>
        </div>

    </div>
  )
}

export default Articles