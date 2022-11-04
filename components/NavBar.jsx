import Image from 'next/image'
import React from 'react'
import hudsenImg from '../public/projects/hudsen.jpg'
import bgImg from '../public/projects/codeBG.jpg'
import Link from 'next/link'

const NavBar = () => {
  return (
    <div className='max-w-[1240px] justify-center w-full h-auto shadow-xl shadow-gray-400 rounded-xl mx-auto py-10'>
        <div className='max-w-[1240px] mx-auto px-20 py-10 grid md:grid-cols-2 gap-1'>
            <div className='relative flex w-40 h-40 overflow-hidden rounded-full'>
            <Image src={hudsenImg} layout="fill" objectFit="cover" alt='Picture of Hudsen' priority />
            </div>
            <div className='py-8'>
            <h1 className='text-3xl font-bold text-center '>Hudsen Durst</h1>
            <h2 className='p-2 font-mono font-semibold text-center'>Blockchain Developer</h2>
            <div className='grid gap-1 md:grid-cols-2'>
            <Link href={'https://www.linkedin.com/in/hudsen-durst-465407208/'}>
                <p className='py-3 text-lg font-bold text-center text-white bg-black rounded-lg shadow-lg cursor-pointer shadow-gray-400'>Linkedin</p>
            </Link>
            <Link href={'https://github.com/HudsenD'}>
                <p className='py-3 text-lg font-bold text-center text-white bg-black rounded-lg shadow-lg cursor-pointer shadow-gray-400'>Github</p>
            </Link>
            </div>
            
            </div>
            
        </div>
       
    </div>
  
        
    
  )
}

export default NavBar