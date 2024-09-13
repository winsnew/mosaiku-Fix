import LaptopAnimate from "../animate/laptopsvg"
import { motion } from "framer-motion"
import { useState } from "react"
import CtaModal from "../ctaprocess/ctaModal"
import Link from "next/link"

const Hero = () => {
    const [isModalOpen, setIsModalOpen] = useState(false)

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };
    return (
        <>
            <div className="relative container-lg w-full min-h-screen flex flex-col items-center px-4 py-20 pb-20 xs:py-32 md:py-20 lg:py-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-screen-2xl mx-auto">
                    <motion.div
                        className="flex flex-col h-full justify-center lg:justify-start lg:col-span-1"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ type: 'spring', stiffness: 80 }}
                    >
                        <div className='flex h-full flex-col justify-center'>
                            <motion.h1
                                className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight mb-4 text-center lg:text-left text-black"
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ type: 'spring', stiffness: 80, delay: 0.4 }}
                            >
                                Restore Clarity, Reduce Mosaic.
                            </motion.h1>
                            <motion.p
                                className="text-base md:text-lg lg:text-xl text-gray-500 text-center lg:text-left mb-0"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ type: 'spring', stiffness: 80, delay: 0.2 }}
                            >
                                Bring back the best visual quality in your videos with our mosaic reduction technology.
                            </motion.p>
                            <div className="flex mt-5 justify-center lg:justify-start">
                                <div className="flex flex-row gap-3">
                                    <motion.button
                                        onClick={openModal}
                                        className="border border-slate-400 hover:border-slate-800 p-3 rounded-full px-8"
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        Try It
                                    </motion.button>
                                    <motion.button
                                        className="bg-slate-300 hover:border border-black p-3 rounded-full px-5"
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <Link href="#">
                                            Learn More
                                        </Link>
                                    </motion.button>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                    <motion.div
                        className="lg:flex-1 justify-center lg:justify-end lg:col-span-1"
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ type: 'spring', stiffness: 80, delay: 0.4 }}
                    >
                        <div className="flex justify-center lg:justify-start">
                            <LaptopAnimate />
                        </div>
                    </motion.div>
                </div>
            </div>
            <CtaModal isOpen={isModalOpen} onClose={closeModal} />
        </>
    )
}

export default Hero