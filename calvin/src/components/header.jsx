import React from 'react'
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
const headerData = ["Home", "services", "Portfolio", "Blog", "Product", "Contact"]
import Schedule from './Schedule'


const LinkComponent = ({ name }) => {
    return (<>
        <p className='text-lg  font-medium hover:underline cursor-pointer '>{name}</p>
    </>)
}



const Header = () => {
    const [showform,setshowform]= useState(false);
    function  handleShowForm(){
        setshowform((prev)=>!prev);}

    return (
        <div className='bg-gray-50 flex  gap-[400px] items-center px-20 shadow-sm fixed top-0 right-0 left-0 z-20'>
            <img src='/logo.png' className='w-40 h-20 ' />
            <div className='flex gap-16 pr-10 items-center'>
                <div className='flex gap-5'>{headerData.map((data, idx) => <LinkComponent name={data} key={idx} />)}</div>
                {showform && <Schedule/>}

                  <button onClick={handleShowForm}> <div className='flex gap-5'>schedule</div></button>

                <label className='flex border rounded-3xl bg-white px-2 py-2'>

                    <MagnifyingGlassIcon className='w-6 text-gray-500' />
                    <input type="text" className='w-48 outline-none ml-4' placeholder='search here .' />
                </label>

            </div>
        </div>
    )
}

export default Header