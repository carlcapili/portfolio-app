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

  const handleOpen = () => {
    setOpen(!isOpen)
  }
  return (
    <div>
      <nav className='nav flex justify-between mx-auto items-center h-18 w-full relative z-1 bg-[#ffffff] shadow-xs'>
        <div className='flex items-center'>
          <div className='px-[10vw] md:flex'>
            <span className='text-2xl'>CJ</span>
          </div>
          <ul className='hidden md:flex items-center gap-[4vw] text-1xl py-8 px-[1vw] [&>*]:hover:text-gray-700 [&>*]:mx-2'>
            <li> About </li>
            <li> Projects </li>
            <li> Technologies </li>
            <li> Contact </li>
          </ul>
        </div>
        <div className='hidden md:flex gap-[2vw] items-center pr-[10%] [&>*]:hover:-translate-y-0.5'>
          <a target='_blank' href='https://github.com/carlcapili'>
            <BsGithub size={24} />
          </a>
          <a target='_blank' href='https://www.facebook.com/me.ShingShangFu123'>
            <BsFacebook size={24} />
          </a>
          <a
            target='_blank'
            href='https://linkedin.com/in/carl-jayson-capili-5476ab34b'
          >
            <BsLinkedin size={24} />
          </a>
        </div>
        <div className='absolute md:hidden right-8 z-3'>
          <Hamburger
            onClick={handleOpen}
            direction='right'
            duration={0.9}
            toggled={isOpen}
            toggle={setOpen}
            size={28}
          />
        </div>
        <div
          className={
            isOpen
              ? 'fixed md:hidden justify-center right-0 top-0 translate-x-0 z-2 ease-in-out duration-300 bg-[#f6f6f6] shadow-2xl'
              : 'fixed md:hidden justify-center right-0 top-0 translate-x-170 z-2 ease-in-out duration-300 bg-[#f6f6f6]'
          }
        >
          <div className='flex flex-col justify-center items-center -translate-y-15 space-y-20 size-30 h-screen w-[80vw] text-2xl outline-hidden'>
            <Link href=''> About </Link>
            <Link href=''> Projects </Link>
            <Link href=''> Technologies </Link>
            <Link href=''> Contact </Link>
            <div className='flex items-center justify-center gap-x-12 [&>*]:hover:-translate-y-0.5'>
              <a target='_blank' href='https://github.com/carlcapili'>
                <BsGithub size={36} />
              </a>
              <a
                target='_blank'
                href='https://www.facebook.com/me.ShingShangFu123'
              >
                <BsFacebook size={36} />
              </a>
              <a
                target='_blank'
                href='https://linkedin.com/in/carl-jayson-capili-5476ab34b'
              >
                <BsLinkedin size={36} />
              </a>
            </div>
          </div>
        </div>
      </nav>
      <div
        className={
          isOpen
            ? 'bg-slate-900 absolute left-0 right-0 top-0 bottom-0 opacity-30'
            : 'bg-slate-900 absolute left-0 right-0 top-0 bottom-0 opacity-0'
        }
      ></div>
    </div>
  )
}
