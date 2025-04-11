import localfont from 'next/font/local'
import Link from 'next/link'
import { BsGithub } from 'react-icons/bs'
import { BsFacebook } from 'react-icons/bs'
import { BsLinkedin } from 'react-icons/bs'

export default function Navigation() {
  return (
    <div>
      <nav className='flex justify-between items-center h-24 w-full'>
        <div className='flex items-center'>
          <div className='px-[8vw]'>
            <span className='text-2xl'>CJ</span>
          </div>
          <ul className='items-center gap-[3vw] text-1xl py-8 px-[1vw] hidden md:flex'>
            <li className='hover:text-gray-700 mx-2'> About </li>
            <li className='hover:text-gray-700 mx-2'> Projects </li>
            <li className='hover:text-gray-700 mx-2'> Technologies </li>
            <li className='hover:text-gray-700 mx-2'> Reach Me Out </li>
          </ul>
        </div>
        <div className='md:flex hidden gap-[1.5vw] items-center y-6 pr-[15%]'>
          <BsGithub size={24} />
          <BsFacebook size={24} />
          <BsLinkedin size={24} />
        </div>
      </nav>
    </div>
  )
}
