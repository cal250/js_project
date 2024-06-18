import React from 'react'
import { PlusIcon, HomeIcon, WrenchScrewdriverIcon, ExclamationTriangleIcon, MinusIcon } from '@heroicons/react/24/outline'

const Work = ({ Icon, title, description }) => {

    return (
        <> <div className='max-w-[300px] flex flex-col gap-5 items-center justify-center'>
            <Icon className="w-16" />
            <div>
                <h1 className='text-2xl font-medium'>{title}</h1>
                <p className='text-base font-thin mb-0'>{description}</p>
            </div>
        </div>
        </>)
}

const LatestWorkData = [
    {
        Icon: HomeIcon,
        title: "DESIGN & BUILD PACKAGE",
        description: "Lorem ipsum dolor sit amet, consectetur  Lorem ipsum dolor sit"
    },
    {
        Icon: WrenchScrewdriverIcon,
        title: "DESIGN & BUILD",
        description: "Lorem ipsum dolor sit amet, consectetur  Lorem ipsum dolor sit"
    },
    {
        Icon: ExclamationTriangleIcon,
        title: "DESIGN & BUILD PACKAGE",
        description: "Lorem ipsum dolor sit amet, consectetur  Lorem ipsum dolor sit"
    },
    {
        Icon: ExclamationTriangleIcon,
        title: "CONCERTE TRANSPORT",
        description: "Lorem ipsum dolor sit amet, consectetur  Lorem ipsum dolor sit"
    },
    {
        Icon: ExclamationTriangleIcon,
        title: "SUSTAINABLE BUILDING",
        description: "Lorem ipsum dolor sit amet, consectetur  Lorem ipsum dolor sit"
    }, {
        Icon: ExclamationTriangleIcon,
        title: "BUILDING RENOVATION",
        description: "Lorem ipsum dolor sit amet, consectetur  Lorem ipsum dolor sit"
    },

]

const LatestWork = () => {
    return (
        <div className='flex flex-col items-center justify-center py-16 '>
            <p className='text-xl font-semibold text-gray-600 mt-4'>STAY UP-TO-DATE</p>
            <p className='text-5xl mt-2'>Check out our latest work!</p>
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
            <p className=' text-gray-700 flex flex-col items-center a justify-center max-w-[500px] mt-5'>
                <span className='text-xl'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
                <span className='text-xl'>Vestibulum convallis, massa vel varius bibendum, </span>
                <span className='text-xl'>vel varius bibendum.</span>
            </p>
            <div className='grid grid-cols-3 gap-16 mt-10'>
                {
                    LatestWorkData.map((data, idx) => <Work {...data} key={idx} />)
                }
            </div>
        </div>
    )
}

export default LatestWork