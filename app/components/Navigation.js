'use client'
import localfont from 'next/font/local'
import Link from 'next/link'
import { BsGithub } from 'react-icons/bs'
import { BsFacebook } from 'react-icons/bs'
import { BsLinkedin } from 'react-icons/bs'
import { Sling as Hamburger } from 'hamburger-react'
import { useState } from 'react'

export default function Navigation() {
  const [isOpen, setOpen] = useState(false)
  const [menu, setMenu] = useState(false)

  const handleOpen = () => {
    setOpen(!isOpen)
  }
  return (
    <div>
      <nav className='flex justify-between items-center h-24 w-full relative z-1'>
        <div className='flex items-center'>
          <div className='px-[8vw] md:flex'>
            <span className='text-2xl'>CJ</span>
          </div>
          <ul className='hidden md:flex items-center gap-[4vw] text-1xl py-8 px-[1vw] [&>*]:hover:text-gray-700 [&>*]:mx-2'>
            <li> About </li>
            <li> Projects </li>
            <li> Technologies </li>
            <li> Contact </li>
          </ul>
        </div>
        <div className='hidden md:flex gap-[2vw] items-center pr-[10%]'>
          <BsGithub size={24} />
          <BsFacebook size={24} />
          <BsLinkedin size={24} />
        </div>
        <div className='absolute md:hidden right-11 z-3'>
          <Hamburger
            onClick={handleOpen}
            direction='right'
            duration={0.9}
            toggled={isOpen}
            toggle={setOpen}
            size={28}
          />
        </div>
        {isOpen ? (
          <div className='fixed md:hidden justify-center right-0 top-0 translate-x-0 z-2 ease-out duration-450 bg-red-300'>
            <div className='justify-center size-30 h-screen w-[50vw] py-30 px-20 [&>*]:hover:text-gray-700 [&>*]:mx-2 [&>*]:text-2xl'>
              <li> About </li>
              <li> Projects </li>
              <li> Technologies </li>
              <li> Contact </li>
            </div>
          </div>
        ) : (
          <div className='fixed md:hidden justify-center right-0 top-0 translate-x-100 z-2 ease-in duration-600 bg-yellow-700'></div>
        )}
      </nav>
    </div>
  )
}
