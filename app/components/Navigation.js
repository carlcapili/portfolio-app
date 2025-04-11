'use client'
import localfont from 'next/font/local'
import Link from 'next/link'
import { BsGithub } from 'react-icons/bs'
import { BsFacebook } from 'react-icons/bs'
import { BsLinkedin } from 'react-icons/bs'
import Hamburger from 'hamburger-react'
import { useState } from 'react'

export default function Navigation() {
  const [isOpen, setOpen] = useState(false)
  return (
    <div>
      <nav className='flex justify-between items-center h-24 w-full'>
        <div className='flex items-center'>
          <div className='px-[8vw] md:flex'>
            <span className='text-2xl'>CJ</span>
          </div>
          <ul className='hidden md:flex items-center gap-[4vw] text-1xl py-8 px-[1vw]'>
            <li className='hover:text-gray-700 mx-2'> About </li>
            <li className='hover:text-gray-700 mx-2'> Projects </li>
            <li className='hover:text-gray-700 mx-2'> Technologies </li>
            <li className='hover:text-gray-700 mx-2'> Reach Me Out </li>
          </ul>
        </div>
        <div className='hidden md:flex gap-[2vw] items-center y-6 pr-[12%]'>
          <BsGithub size={24} />
          <BsFacebook size={24} />
          <BsLinkedin size={24} />
        </div>
        <div className='md:hidden px-17'>
          <Hamburger toggled={isOpen} toggle={setOpen} size={28} />
        </div>
      </nav>

      <div></div>
    </div>
  )
}
