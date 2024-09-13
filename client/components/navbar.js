import { useState } from "react";
import Image from "next/image";

const Navbar = () => {
    const [showMobileMenu, setShowMobileMenu] = useState(false);
    return (
        <nav className="backdrop-blur-md py-1 bg-[hsla(0,0%,100%,.01)] fixed inset-0 border-b border-[hsla(0,0%,100%,.08)] z-50 h-fit">
            <ul className="container-lg flex justify-between items-center">
                <li className="flex gap-1 items-center">
                    <Image
                        src="/logo/mosaiku-png.png"
                        alt="Logo Light"
                        width={70}
                        height={70}
                    />
                    <h1 className="font-medium">MosaikuFIx</h1>
                </li>
                <li className="text-sm cursor-pointer hidden lg:block">
                    Features
                </li>
                <li className="text-sm cursor-pointer hidden lg:block">
                    Method
                </li>
                <li className="text-sm cursor-pointer hidden lg:block">
                    Customers
                </li>
                <li className="text-sm cursor-pointer hidden lg:block">
                    Changelog
                </li>
                <li className="text-sm cursor-pointer hidden lg:block">
                    Pricing
                </li>
                <li className="text-sm cursor-pointer hidden lg:block">
                    Company
                </li>
                <li className="text-sm cursor-pointer hidden lg:block">
                    Contact
                </li>
                <li className="text-sm cursor-pointer flex gap-2 lg:flex-none text-right me-3 lg:me-0">
                    <button className="border border-slate-600 hover:bg-gray-200 rounded-full px-5 font-medium leading-8 h-8">
                        Login
                    </button>
                    <button className="bg-slate-200 rounded-full border border-slate-600 hover:bg-slate-600 hover:text-white px-3 font-medium leading-8 h-8">
                        Sign up
                    </button>
                </li>
                

            </ul>
        </nav>
    )
}

export default Navbar