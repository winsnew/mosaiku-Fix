

const CtaModal = ({ isOpen, onClose, imageSrc }) => {
    if (!isOpen) return null;
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-800 bg-opacity-75">
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full relative">
                <button onClick={onClose} className="absolute top-2 right-2 text-gray-600 hover:text-gray-900">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
                <h2 className="text-lg font-semibold mb-4">Edit Image</h2>
                <img src={imageSrc} alt="Selected file" className="w-full h-auto mb-4" />
                <p className="mb-4 text-gray-700">Here you can edit the uploaded image. Adjust as needed.</p>
                
                <div className="flex justify-end">
                    <button onClick={onClose} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Close</button>
                </div>
            </div>
        </div>
    )
}

export default CtaModal