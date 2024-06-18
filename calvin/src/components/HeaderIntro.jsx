import React from 'react'

const HeaderIntro = () => {
  return (
    <div className='h-[600px] overflow-hidden relative mt-20 '>
        <img src="introImage.webp"  className='h-[800px] w-[100%]' />
        <div className='absolute  top-[100px] left-20' >
         <h1 className='text-5xl font-semibold font-serif mb-3'>Enjoy the new</h1>
         <p className='text-6xl font-extralight text-blue-950 mb-3'>Exprience of clothing</p>
         <p className='max-w-[400px] text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores commodi ea dolores similique laudantium omnis et dolore! </p>

   
        </div>
        <div className='absolute bottom-10 right-20 flex gap-2'>
          <button className='w-3 h-3 border-2 bg-gray-50 border-blue-950 rounded-full'></button>
          <button className='w-3 h-3 border-2 bg-gray-50 border-blue-950 rounded-full'></button>
          <button className='w-3 h-3 border-2 bg-gray-50 border-blue-950 rounded-full'></button>
         </div>
    </div>
  )
}

export default HeaderIntro