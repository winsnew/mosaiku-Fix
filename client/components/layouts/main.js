import Head from "next/head";
import Navbar from "../navbar";
import Footer from "../footer";

const Main = ({ children }) => {
    return (
        <div as="main">
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="description" content="Reducing Mosaic" />
                <meta name="author" content="MosaikuFix" />
                <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
                <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
                <meta property="og:site_name" content="Mosaiku Fix" />
                <meta property="og:type" content="website" />
                <title>MosaikuFix</title>
            </Head>
            <div className="relative flex flex-col justify-center items-center overflow-hidden mx-auto sm:px-10 px-5">
                <Navbar/>
                <div className="w-full">
                    {children}
                </div>
                <Footer/>
            </div>
        </div>
    )
}

export default Main