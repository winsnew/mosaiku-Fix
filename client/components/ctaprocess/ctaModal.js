import Link from "next/link";
import Image from "next/image";

const CtaModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-800 bg-opacity-75">
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full relative">
                <button onClick={onClose} className="absolute top-2 right-2 text-gray-600 hover:text-gray-900">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>

                <h2 className="text-xl font-semibold mb-6 text-center">Choose Feature</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Link href="/mosaic/photos" className="flex flex-col items-center justify-center p-4 border border-gray-300 rounded-lg hover:shadow-lg transition-shadow cursor-pointer">
                        <Image
                            src="/icons/uploadphoto.png"
                            width={40}
                            height={40}
                        />
                        <p className="text-lg font-medium">Mosaic Photo</p>
                    </Link>

                    <Link href="/mosaic/videos" className="flex flex-col items-center justify-center p-4 border border-gray-300 rounded-lg hover:shadow-lg transition-shadow cursor-pointer">
                        <Image
                            src="/icons/uploadVids.png"
                            width={40}
                            height={40}
                        />
                        <p className="text-lg font-medium">Mosaic Video</p>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default CtaModal