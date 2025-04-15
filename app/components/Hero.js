import Image from 'next/image'
export default function Hero() {
  return (
    <div className='flex justify-center gap-[30vw] items-center container mx-auto items-left translate-y-1 h-screen bg-slate-300'>
      <div className='-translate-x-25 -translate-y-20'>
        <div>hi im cj </div>
        <div className='w-[300px] my-3'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, sunt
          vel! Consectetur suscipit sed omnis totam beatae possimus. At, fugiat.
        </div>
      </div>
      <div>image here</div>
    </div>
  )
}
