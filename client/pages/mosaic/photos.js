import { useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Layout from "../../components/layouts/seo";

const PhotosPage = () => {
    const [selectedFile, setSelectedFile] = useState(null);
    const router = useRouter();

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setSelectedFile(URL.createObjectURL(file));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle file upload logic here

        // Example: navigate back to previous page after upload
        router.back();
    };

    const handleRemoveFile = () => {
        setSelectedFile(null);
    };

    return (
        <Layout>
            <div className="flex flex-col items-center justify-center min-h-screen pt-24">
                <div className="container-lg items-center flex justify-center">
                    <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-lg">
                        <h1 className="text-2xl font-semibold mb-4 text-center text-gray-900">Upload Photo</h1>
                        <form onSubmit={handleSubmit}>
                            <div className="flex flex-col items-center mb-4">
                                <label className="flex flex-col items-center justify-center w-full h-48 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-gray-400">
                                    {selectedFile ? (
                                        <div className="relative w-full h-full">
                                            <img src={selectedFile} alt="Preview" className="w-full h-full object-cover rounded-lg" />
                                            <button
                                                type="button"
                                                onClick={handleRemoveFile}
                                                className="absolute top-2 right-2 bg-white border border-gray-300 text-gray-600 rounded-full p-1 hover:bg-gray-200"
                                            >
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                                </svg>
                                            </button>
                                        </div>
                                    ) : (
                                        <div className="flex flex-col items-center justify-center h-full text-gray-500">
                                            <Image
                                                src="/icons/upimgnobg.png"
                                                width={30}
                                                height={30}
                                            />
                                            <span className="mt-2">Drag & Drop or Click to Upload</span>
                                        </div>
                                    )}
                                    <input type="file" accept="image/*" onChange={handleFileChange} className="hidden" />
                                </label>
                            </div>
                            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 w-full">
                                Process
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default PhotosPage