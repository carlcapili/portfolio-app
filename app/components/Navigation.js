'use client'
import localfont from 'next/font/local'
import Link from 'next/link'
import { BsGithub } from 'react-icons/bs'
import { BsFacebook } from 'react-icons/bs'
import { BsLinkedin } from 'react-icons/bs'
import { Sling as Hamburger } from 'hamburger-react'
import { useState } from 'react'

export default function NavDesktop() {
  const [isOpen, setOpen] = useState(false)
  return (
    <div>
      <nav className='flex justify-between items-center h-24 w-full relative z-1'>
        <div className='flex items-center'>
          <div className='px-[8vw] md:flex'>
            <span className='text-2xl'>CJ</span>
          </div>
          <ul className='hidden md:flex items-center gap-[4vw] text-1xl py-8 px-[1vw]'>
            <li className='hover:text-gray-700 mx-2'> About </li>
            <li className='hover:text-gray-700 mx-2'> Projects </li>
            <li className='hover:text-gray-700 mx-2'> Technologies </li>
            <li className='hover:text-gray-700 mx-2'> Contact </li>
          </ul>
        </div>
        <div className='hidden md:flex gap-[2vw] items-center pr-[10%]'>
          <BsGithub size={24} />
          <BsFacebook size={24} />
          <BsLinkedin size={24} />
        </div>
        <div className='absolute md:hidden right-11 z-3'>
          <Hamburger
            direction='right'
            duration={1.2}
            toggled={isOpen}
            toggle={setOpen}
            size={28}
          />
        </div>
        {isOpen && (
          <div className='absolute justify-center right-1 top-5 z-2 bg-white'>
            <div className='justify-center size-30 h-screen w-[50vw] py-9 px-30'>
              <li className='hover:text-gray-700 mx-2'> About </li>
              <li className='hover:text-gray-700 mx-2'> Projects </li>
              <li className='hover:text-gray-700 mx-2'> Technologies </li>
              <li className='hover:text-gray-700 mx-2'> Contact </li>
            </div>
          </div>
        )}
      </nav>
    </div>
  )
}
