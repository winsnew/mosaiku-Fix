import Head from 'next/head'
import {motion} from 'framer-motion'

const Layout = ({children, title}) => {
    const t = `${title} - Mosaiku Fix`
    return (
        <motion.article>
            <>
                {title && (
                    <Head>
                        <title>{t}</title>
                        <meta name="twitter:title" content={t} />
                        <meta property="og:title" content={t} />
                    </Head>
                )}
                {children}
            </>
        </motion.article>
    )
}

export default Layout