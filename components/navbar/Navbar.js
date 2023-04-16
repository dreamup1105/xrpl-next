import React from 'react'
import { Link } from 'react-router-dom';
import images from '../../public';
import Image from 'next/image';

const Navbar = () => {
    return (
        <div className="bg-[#1A1921] px-[25px] py-[25px] w-full" >
            <div className="flex flex-row items-center justify-between">
                <div className="">
                    <Link href={"/"}>
                        {" "}
                        <Image src={images.Logo} alt="" className="py-2 pr-4 mr-4" />
                    </Link>
                </div>
                <div className="flex flex-row items-center justify-between max-md:justify-end">
                    <div className="flex flex-row items-center pl-3 max-md:hidden">
                        <Link href="#" className="nav-link-custom mx-[16px]">
                            <Image src={images.lightBulb} alt="" />
                        </Link>
                        <Link href="#" className="nav-link-custom mx-[16px] text-[#777E91]">
                            <Image src={images.lightSettings} alt="" />
                        </Link>
                        <Link href="/login" className="nav-link-custom mx-[16px] text-[#777E91]">
                            <button className="hover:bg-gray-700 hover:text-white focus:ring-2 focus:ring-offset-2">
                                Connect Wallet
                            </button>
                        </Link>
                    </div>
                    <div className="flex items-center gap-1 mr-2">
                        <button className="p-2 border-2 rounded-md md:hidden">
                            <svg stroke="currentColor" fill="#6b7280" strokeWidth="0" viewdiv="0 0 12 16" className="w-6 h-6 shrink-0" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M11.41 9H.59C0 9 0 8.59 0 8c0-.59 0-1 .59-1H11.4c.59 0 .59.41.59 1 0 .59 0 1-.59 1h.01zm0-4H.59C0 5 0 4.59 0 4c0-.59 0-1 .59-1H11.4c.59 0 .59.41.59 1 0 .59 0 1-.59 1h.01zM.59 11H11.4c.59 0 .59.41.59 1 0 .59 0 1-.59 1H.59C0 13 0 12.59 0 12c0-.59 0-1 .59-1z"></path></svg>
                        </button>
                    </div>

                </div>
            </div>
            <div className="flex-col hidden w-full max-md:flex">
                <Link href="#" className="mx-2 nav-link-custom border-y-2">
                    Discover
                </Link>
                <Link href="#" className="mx-2 border-b-2 nav-link-custom">
                    How it works
                </Link>
                <Link href="/marketplace" className="mx-2 border-b-2 nav-link-custom">
                    Marketplace
                </Link>
            </div>
        </div>
    );
}

export default Navbar