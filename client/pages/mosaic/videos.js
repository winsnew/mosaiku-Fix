import Layout from "../../components/layouts/seo"
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/router";

const VideosPage = () => {
    const [selectedFile, setSelectedFile] = useState(null);
    const [fileInfo, setFileInfo] = useState({ size: null, duration: null });
    const router = useRouter();

    const handleFileChange = (e) => {
        const file = e.target.files[0]
        if (file) {
            setSelectedFile(URL.createObjectURL(file))
            setFileInfo({
                size: (file.size / (1024 * 1024)).toFixed(2) + 'MB',
                duration: null
            })
            const videoElement = document.createElement('video')
            videoElement.src = URL.createObjectURL(file)
            videoElement.onloadedmetadata = () => {
                setFileInfo(prev => ({
                    ...prev,
                    duration: formatDuration(videoElement.duration),
                }))
            }
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle file upload logic here

        // Example: navigate back to previous page after upload
        router.back();
    };

    const formatDuration = (seconds) => {
        const minutes = Math.floor(seconds / 60)
        const secs = Math.floor(seconds % 60)
        return `${minutes}:${secs < 10 ? '0' : ''}${secs}`
    }

    const handleRemoveFile = () => {
        setSelectedFile(null);
        setFileInfo({ size: null, duration: null })
    };
    return (
        <Layout>
            <div className="flex flex-col items-center justify-center min-h-screen pt-24">
                <div className="container-lg items-center flex justify-center">
                    <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-lg">
                        <h1 className="text-2xl font-semibold mb-4 text-center text-gray-900">Upload Video</h1>
                        <form onSubmit={handleSubmit}>
                            <div className="flex flex-col items-center mb-4">
                                <label className="flex flex-col items-center justify-center w-full h-48 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-gray-400">
                                    {selectedFile ? (
                                        <div className="relative w-full h-full">
                                            <video src={selectedFile} controls className="w-full h-full object-cover rounded-lg" />
                                            <button
                                                type="button"
                                                onClick={handleRemoveFile}
                                                className="absolute top-2 right-2 bg-white text-red-600 rounded-full p-1 hover:bg-red-100"
                                            >
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                                </svg>
                                            </button>
                                        </div>
                                    ) : (
                                        <div className="flex flex-col items-center justify-center h-full text-gray-500">
                                            <Image
                                                src="/icons/upvidnobg.png"
                                                width={30}
                                                height={30}
                                            />
                                            <span className="mt-2">Drag & Drop or Click to Upload</span>
                                        </div>
                                    )}
                                    <input type="file" accept="video/*" onChange={handleFileChange} className="hidden" />
                                </label>
                            </div>
                            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 w-full">
                                Upload
                            </button>
                        </form>

                        {selectedFile && (
                            <div className="mt-6 p-4 bg-gray-50 border border-gray-300 rounded-lg">
                                <h2 className="text-lg font-medium text-gray-800 mb-2">Video Information</h2>
                                <ul className="space-y-2">
                                    <li className="flex justify-between text-gray-700">
                                        <span>Size:</span>
                                        <span>{fileInfo.size}</span>
                                    </li>
                                    <li className="flex justify-between text-gray-700">
                                        <span>Duration:</span>
                                        <span>{fileInfo.duration || 'Calculating...'}</span>
                                    </li>
                                </ul>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default VideosPage