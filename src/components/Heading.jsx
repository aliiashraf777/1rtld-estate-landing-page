import React from 'react'

const Heading = ({ heading, span, para }) => {
    return (
        <div>
            <h1 className='text-2xl sm:text-4xl font-bold mb-2 text-center'>{heading} <span className='underline underline-offset-4 decoration-1 font-light'>
                {span}
            </span></h1>

            <p className="max-w-80 mx-auto text-center text-gray-500 mb-8">
                {para}
            </p>
        </div>
    )
}

export default Heading
