import React from 'react'
import Heading from './Heading'
import { assets, testimonialsData } from '../assets/assets'
import { motion } from 'framer-motion'

const Testimonials = () => {
    return (
        <motion.section
            initial={{ opacity: 0, y: 100 }}
            transition={{ duration: 2 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}

            className='container mx-auto w-full py-10 lg:px-32 overflow-hidden'
            id='Testimonials'
        >
            <Heading
                heading='Customers'
                span='Testimonials'
                para='Real Stories from those Who Found Home With Us'
            />

            <div className='flex flex-wrap md:flex-nowrap justify-center gap-8'>
                {testimonialsData.map((testimonial, index) => (
                    <div key={index}
                        className='max-w-[340px] border shadow-lg rounded px-8 py-12 text-center'
                    >
                        <img
                            src={testimonial.image}
                            alt={testimonial.alt}
                            className='w-20 h-20 rounded-full mx-auto mb-4'
                        />
                        <h2 className='text-xl text-gray-700 font-medium'>
                            {testimonial.name}
                        </h2>
                        <h2 className='text-gray-500 text-sm mb-4'>
                            {testimonial.title}
                        </h2>

                        <div className='flex justify-center gap-1 text-red-500 mb-4'>
                            {Array.from({ length: testimonial.rating }, (item, index) => (
                                <img
                                    key={index}
                                    src={assets.star_icon}
                                    alt=""
                                />
                            ))}
                        </div>

                        <p className="text-gray-600">{testimonial.text}</p>
                    </div>
                ))}
            </div>
        </motion.section>
    )
}

export default Testimonials
