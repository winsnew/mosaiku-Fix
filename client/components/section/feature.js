import { motion } from "framer-motion"

const Features = () => {
    return (
        <section className="bg-gray-100 w-full rounded-lg py-24">
            <div className="container-lg mx-auto px-4 mb-20 pt-16">
                <motion.h2
                    className="text-3xl font-bold text-center text-gray-800 mb-8"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    Kenapa Memilih Kami?
                </motion.h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <motion.div
                        className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        <h3 className="text-xl font-semibold text-gray-800 mb-4">Teknologi AI Terbaru</h3>
                        <p className="text-gray-600">
                            Kami menggunakan teknologi AI mutakhir untuk mendeteksi dan mengurangi mosaic secara
                            efektif, memberikan hasil yang lebih jernih.
                        </p>
                    </motion.div>

                    <motion.div
                        className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                    >
                        <h3 className="text-xl font-semibold text-gray-800 mb-4">Proses Cepat dan Mudah</h3>
                        <p className="text-gray-600">
                            Unggah video Anda dan biarkan alat kami bekerja secara otomatis untuk menghasilkan
                            video yang lebih bersih.
                        </p>
                    </motion.div>

                    <motion.div
                        className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.8 }}
                    >
                        <h3 className="text-xl font-semibold text-gray-800 mb-4">Privasi Terjamin</h3>
                        <p className="text-gray-600">
                            Video Anda aman bersama kami. Kami menghargai privasi dan tidak menyimpan konten
                            video yang diunggah.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default Features