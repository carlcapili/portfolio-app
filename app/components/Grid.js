export default function Grid() {
  return (
    <div className='mx-auto w-full h-screen'>
      <div className='grid grid-flow-col grid-col-3 gap-3'>
        <div className='row-span-3 max-width-48 bg-red-400 max-h-32px outline-solid'>
          <p className='text-2xl'> Hi , Hello </p>
        </div>
      </div>
    </div>
  )
}
