import Image from 'next/image'
export default function Hero() {
  return (
    <div className='container mx-auto items-left translate-y-3  h-screen'>
      <div className='flex space-between py-25'>
        <h2 className='text-5xl mx-auto h-[500px] w-[800px] p-1'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium,
          perferendis!
        </h2>
        <div className='flex mx-auto justify-center'>
          <Image
            src='/images/technoblade.webp'
            alt='technoblade'
            width={400}
            height={500}
          />
        </div>
      </div>
    </div>
  )
}
