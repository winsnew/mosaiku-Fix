import { motion } from "framer-motion"

const AuthLayout = ({ children }) => {
    return (
        <motion.article>
            <Head>
                <title>Login MosaikuFix</title>
                <meta name="description" content="Login to access your account" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            {children}
        </motion.article>
    )
}

export default AuthLayout