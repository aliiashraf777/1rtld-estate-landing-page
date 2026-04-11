import Navbar from "./Navbar"
import { motion } from "framer-motion"

const Header = () => {
    return (
        <header
            className='min-h-screen mb-4 bg-cover bg-center flex items-center w-full overflow-hidden'
            style={{ backgroundImage: "url('/header_img.png')" }}
            id="Home"
        >
            <Navbar />

            <motion.div
                initial={{ opacity: 0, y: 100 }}
                transition={{ duration: 1.5 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="container mx-auto text-center py-4 px-6 md:px-20 lg:px-32 text-white"
            >
                <h2 className='text-5xl sm:text-6xl md:text-[82px] inline-block max-w-3xl font-semibold pt-20'>Explore homes that fit your dreams</h2>

                <div className='space-x-6 mt-16'>
                    <a href="#Projects" className='bg-blue-500 px-8 py-3 rounded hover:bg-transparent border border-transparent hover:border hover:border-white transition-all'>
                        Projects
                    </a>
                    <a href="#Contact" className='border border-white px-8 py-3 rounded hover:bg-blue-500 hover:border-transparent transition-all'>
                        Contact Us
                    </a>
                </div>
            </motion.div>
        </header>
    )
}

export default Header
