import Image from "next/image"

const HowItWorks = () => {
    return (
        <section className="bg-white py-20">
            <div className="container-lg items-center mx-auto px-4 mb-20">
                <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">How It&apos;s Works</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    <div className="flex flex-col items-center text-center">
                        <div className="bg-indigo-100 rounded-full p-6 mb-4">
                            <Image
                                src="/icons/file.png"
                                alt="Unggah Video Icon"
                                width={48}
                                height={48}
                                className="h-12 w-12 text-indigo-600"
                            />
                        </div>
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">Upload File</h3>
                        <p className="text-gray-600">
                            Select the video or photo file you'd like to reduce mosaic effects from.
                        </p>
                    </div>
                    
                    <div className="flex flex-col items-center text-center">
                        <div className="bg-indigo-100 rounded-full p-6 mb-4">
                            <Image
                                src="/icons/ai.png"
                                alt="Proses AI Icon"
                                width={48}
                                height={48}
                                className="h-12 w-12 text-indigo-600"
                            />
                        </div>
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">Mosaic Processing</h3>
                        <p className="text-gray-600">
                            Our algorithm will intelligently reduce mosaic and enhance clarity in blurred areas.
                        </p>
                    </div>
                    
                    <div className="flex flex-col items-center text-center">
                        <div className="bg-indigo-100 rounded-full p-6 mb-4">
                            <Image
                                src="/icons/attachment.png"
                                alt="Unduh Hasil Icon"
                                width={48}
                                height={48}
                                className="h-12 w-12 text-indigo-600"
                            />
                        </div>
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">Download Results</h3>
                        <p className="text-gray-600">
                            Your processed video will be ready for download in just a few minutes.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HowItWorks