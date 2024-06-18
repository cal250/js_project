// eslint-disable-next-line no-unused-vars
import React from 'react'
import { PlusIcon, HomeIcon, WrenchScrewdriverIcon, ExclamationTriangleIcon } from '@heroicons/react/24/outline'


const servicesData = [
    {
        Icon: HomeIcon,
        title: "NFRASTRUCTURE",
        description: "Lorem ipsum dolor sit amet, consectetur  Lorem ipsum dolor sit"
    },
    {
        Icon: WrenchScrewdriverIcon,
        title: "HOUSE RENOVATION",
        description: "Lorem ipsum dolor sit amet, consectetur  Lorem ipsum dolor sit"
    },
    {
        Icon: ExclamationTriangleIcon,
        title: "SAFETY RULES",
        description: "Lorem ipsum dolor sit amet, consectetur  Lorem ipsum dolor sit"
    },

]



// eslint-disable-next-line react/prop-types
const Services = ({ Icon, title, description }) => {
     
    return (
        <> <div className='max-w-[400px] flex gap-5'>
            <Icon className="w-14" />
            <div>
                <h1 className='text-2xl font-medium'>{title}</h1>
                <p className='text-base font-thin mb-0'>{description}</p>
            </div>
            </div>
        </>)
}

const AboutUs = () => {
    return (
        <div className='flex flex-col items-center justify-center py-16 bg-gray-50'>
            <p className='text-xl font-semibold text-gray-600 mt-4'>STAY NOW-TO-PLAN</p>
            <p className='text-5xl mt-2'>Your awesome home with us!</p>
            <PlusIcon className='w-8 text-gray-500 mt-4' />

            <p className=' text-gray-700 flex flex-col items-center a justify-center max-w-[500px] mt-5'>
                <span className='text-xl'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
                <span className='text-xl'>Vestibulum convallis, massa vel varius bibendum, </span>
                <span className='text-xl'>vel varius bibendum.</span>
            </p>
            <div className='flex gap-10 mt-16'>
                {
                    servicesData.map((data, idx) => <Services {...data} key={idx} />)
                }
            </div>
        </div>
    )
}

export default AboutUs