import '../lib/globals.css'
import Layout from '../components/layouts/main'
import { AnimatePresence } from 'framer-motion'

function App({ Component, pageProps }) {
    return (
        <Layout>
            <AnimatePresence 
                mode="wait"
                initial={true}>
                <Component {...pageProps} />
            </AnimatePresence>
        </Layout>
    )
}

export default App