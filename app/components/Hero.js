import Image from 'next/image'
import { BsEmojiSmile } from 'react-icons/bs'
export default function Hero() {
  return (
    <div className='container mx-auto w-3/4 h-screen pt-25'>
      <div className='my-[5vw]'>
        <div className='my-[12vw] mx-auto md:justify-left justify-center'>
          <div className='flex gap-x-5 md:justify-start text-center justify-center'>
            <h1 className='md:text-6xl text-3xl'>I&#39;m Ceejay</h1>
            <BsEmojiSmile className='animate-bounce' size={52} />
          </div>
          <div className='flex md:justify-start text-center justify-center'>
            <h1 className='md:text-3xl text-xl'>I love to learn new things</h1>
          </div>
        </div>
      </div>
    </div>
  )
}
