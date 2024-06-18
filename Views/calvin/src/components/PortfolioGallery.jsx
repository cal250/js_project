
import { PlusIcon, MinusIcon } from '@heroicons/react/24/outline'

const PortfolioGallery = () => {
  return (
    <div className='flex items-center justify-center flex-col py-10  '>
      <h1 className='text-5xl mt-2 mb-2'>Our portfolio gallery</h1>
      <div className='flex mb-4'>

        <MinusIcon className='w-5 text-gray-300 ' />
        <MinusIcon className='w-5 text-gray-300 ' />
        <MinusIcon className='w-5 text-gray-300 ' />
        <MinusIcon className='w-5 text-gray-300 ' />
        <MinusIcon className='w-5 text-gray-300 ' />
        <PlusIcon className='text-gray-700 w-7 font-semibold' />
        <MinusIcon className='w-5 text-gray-300 ' />
        <MinusIcon className='w-5 text-gray-300 ' />
        <MinusIcon className='w-5 text-gray-300 ' />
        <MinusIcon className='w-5 text-gray-300 ' />
        <MinusIcon className='w-5 text-gray-300 ' />
      </div>
      <div className='flex'>
          <div>
            <img src="/gallery1.jpg" alt="" className='w-[700px] h-[500px]'/>
          </div>
       <div>
          <img src="/gallery2.jpeg" alt="" className='w-[300px] ' />
          <img src="/gallery3.jpg" alt="" className='w-[300px]'/>
      </div>
       <div className=''>
        <img src="/gallery4.jpg" alt="" className='w-[300px] h-[250px]'/>
        <img src="/gallery5.png" alt="" className='w-[300px] h-[250px]' />

       </div>
      </div>
    </div>
  )
}

export default PortfolioGallery