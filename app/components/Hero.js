import Image from 'next/image'
export default function Hero() {
  return (
    <div className='container w-full h-screen mx-auto'>
      <div className='md:translate-x-[15vw] md:translate-y-[13vw] translate-y-[35vw]'>
        <h1 className='md:text-5xl text-3xl'>Ciao&#33; Im Ceejay</h1>
        <p className='md:text-3xl text-1xl pt-12'>I Love to learn new things</p>
        <div className='md:w-[300px] md:h-[300px] w-[200px] h-[200px]'></div>
      </div>

      <Image
        className='md:w-[250px] md:h-[250px] w-[130px] h-[130px] md:-translate-y-[13vw] md:translate-x-[45vw] translate-x-40 -translate-y-75 rounded-full'
        src='/images/technoblade.webp'
        alt='Technoblade'
        quality={100}
        width={300}
        height={300}
      />
    </div>
  )
}
