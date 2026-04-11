import { useEffect, useState } from "react"
import { assets, projectsData } from "../assets/assets"
import Heading from "./Heading"
import { motion } from "framer-motion"
 
const Projects = () => {

    const [currentIndex, setCurrentIndex] = useState(0);
    const [cardsToShow, setCardsToShow] = useState(1);

    useEffect(() => {
        const updateCardsToShow = () => {
            if (window.innerWidth >= 1024) {
                setCardsToShow(projectsData.length);
            } else {
                setCardsToShow(1);
            };
        }
        updateCardsToShow();

        window.addEventListener('resize', updateCardsToShow);

        return () => window.removeEventListener('resize', updateCardsToShow);
    }, [])

    const nextProject = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % projectsData.length);
    }

    const prevProject = () => {
        setCurrentIndex((prevIndex) => prevIndex === 0 ? projectsData.length - 1 : prevIndex - 1);
    }

    return (
        <motion.section
            initial={{ opacity: 0, y: 100 }}
            transition={{ duration: 2 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            
            className='container mx-auto py-4 pt-20 px-6 md:px-20 lg:px-32 my-20 w-full overflow-hidden'
            id='Projects'
        >
            <Heading
                heading='Projects'
                span='Completed'
                para='Crafting Spaces, Building Legacies-Explore Our Portfolio'
            />

            {/* slider buttons */}
            <div className='flex justify-end items-center mb-8'>
                <button
                    onClick={prevProject}
                    className="p-3 bg-gray-200 rounded mr-2"
                    aria-label="Previous Project"
                >
                    <img src={assets.left_arrow} alt="Previous" />
                </button>

                <button
                    onClick={nextProject}
                    className="p-3 bg-gray-200 rounded mr-2"
                    aria-label="Previous Project"
                >
                    <img src={assets.right_arrow} alt="Next" />
                </button>
            </div>

            {/* project slider continaer */}
            <div className='overflow-hidden'>
                <div
                    className='flex gap-8 transition-transform duration-500 ease-in-out'
                    style={{
                        transform: `translateX(-${(currentIndex * 100) / cardsToShow}%)`
                    }}
                >
                    {projectsData.map((project, index) => (
                        <div
                            key={index}
                            className='relative flex-shrink-0 w-full sm:w-1/4 borderx border-blackx'
                        >
                            <img
                                src={project.image}
                                alt={project.title}
                                className='w-full h-auto mb-14'
                            />

                            <div className="absolute left-0 right-0 bottom-5 flex justify-center borderx border-red-500x">
                                <div className="inline-block bg-white w-3/4 px-4 py-2 shadow-md text-center">
                                    <h2 className="text-xl font-semibold text-gray-800">
                                        {project.title}
                                    </h2>

                                    <p className="text-gray-500 text-sm">
                                        {project.price} <span className='px-1'>|</span> {project.location}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </motion.section>
    )
}

export default Projects
