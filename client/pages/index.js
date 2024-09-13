import LaptopAnimate from '../components/animate/laptopsvg'
import Layout from '../components/layouts/seo'
import { useState } from 'react'
import CtaModal from '../components/ctaprocess/ctaModal'

const WebPage = () => {
    const [selectedFile, setSelectedFile] = useState(null)
    const [isModalOpen, setIsModalOpen] = useState(false)

    const handleFileChange = (e) => {
        const file = e.target.files[0]
        if(file) {
            setSelectedFile(URL.createObjectURL(file))
            setIsModalOpen(true)
        }
    }

    const closeModal = () => {
        setIsModalOpen(false)
        setSelectedFile(null)
    }
    return (
        <Layout>
            <div className="relative container-lg w-full min-h-max items-center">
                <div class="grid max-w-screen-2xl px-4 pt-20 pb-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 lg:pt-28">
                    <div class="mr-auto place-self-center lg:col-span-7">
                        <h1 class="max-w-2xl mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl text-black xl:text-6xl">Restore Clarity,Reduce Mosaic.</h1>
                        <p class="max-w-2xl mb-3 font-light text-gray-500 lg:mb-6 md:text-lg lg:text-xl dark:text-gray-400">Bring back the best visual quality in your videos with our mosaic reduction technology.</p>
                        <div class="space-y-0 sm:flex sm:space-y-0 sm:space-x-4">
                                <label class="flex mb-4">
                                    <input type="file" onChange={handleFileChange} class="block w-full text-sm text-gray-500 file:py-2 file:px-4 file:rounded-full file:border file:border-gray-300 file:text-sm file:font-semibold file:bg-gray-50 hover:file:bg-gray-100" />
                                </label>
                        </div>
                    </div>
                    <div class="hidden lg:mt-0 lg:col-span-5 lg:flex">
                        <div className='w-full flex'>
                            <LaptopAnimate />
                        </div>
                    </div>
                </div>
            </div>
            <CtaModal isOpen={isModalOpen} imageSrc={selectedFile} onClose={closeModal}/>
        </Layout>
    )
}

export default WebPage