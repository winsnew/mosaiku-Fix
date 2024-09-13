import Head from "next/head";
import Navbar from "../navbar";
import Footer from "../footer";

const Main = ({ children }) => {
    return (
        <>
            <Head>
                <title>RM App</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="description" content="reduce blur on video and photo" />
                <meta name="author" content="Mosaiku Fix" />
            </Head>
            <div className="relative flex flex-col justify-center items-center overflow-hidden mx-auto sm:px-10 px-5">
                <Navbar/>
                <div className="w-full">
                    {children}
                </div>
                <Footer/>
            </div>
        </>
    )
}

export default Main