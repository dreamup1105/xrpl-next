import React from 'react'
import { useRouter } from 'next/router';

function handleClick() {
    const router = useRouter();
    router.push('/new-route');
}

function MyComponent() {
    return (
        <button onClick={handleClick}>Click me</button>
    );
}



const Option = () => {
    return (
        <>
            <div className="flex flex-col flex-1 justify-center items-center grow bg-[#1A1921] h-full">
                <div className="min-w-[500px] w-[500px] mx-auto">
                    <div className="rounded-[16px]  h-auto bg-[#21212A] text-white p-[30px]">
                        <div className="px-2 mb-2">
                            <div className="w-full text-center text-[24px] mb-[15px]">How will you use XRPL Dash?</div>
                            <div className="w-full text-[14px] text-center text-white opacity-60 mb-[15px]" >We will streamline your setup experience accordingly</div>
                            <div className="border border-white border-opacity-50 rounded-[16px] p-[15px] mb-[15px] hover:bg-[#3F3E3A]">
                                <div className="description">Trading</div>
                                <span className="text-white opacity-60 text-[12px]" >This layout is designed for users who are interested in trading cryptocurrencies. </span>
                            </div>
                            <div className="border border-white border-opacity-50 rounded-[16px] p-[15px] mb-[15px] hover:bg-[#3F3E3A]">
                                <div className="description">NFTs</div>
                                <span className="text-white opacity-60 text-[12px]" >This layout is focused on non-fungible tokens (NFTs), It feature tools to help users find, buy, and manage NFTs.</span>
                            </div>
                            <div className="border border-white border-opacity-50 rounded-[16px] p-[15px] mb-[15px] hover:bg-[#3F3E3A]">
                                <div className="description">Explore</div>
                                <span className="text-white opacity-60 text-[12px]" >This layout is designed for users who are primarily interested in staying up to date with the latest updates on the XRPL ledger.</span>
                            </div>
                            <div className="dotalign">
                                <span className="h-[10px] w-[10px] bg-white rounded-full inline-block mr-[15px] ml-[15px] border border-gray-300"></span>
                                <span className="h-[10px] w-[10px] bg-white  rounded-full inline-block mr-[15px] ml-[15px]"></span>
                                <span className="h-[10px] w-[10px] bg-white  rounded-full inline-block mr-[15px] ml-[15px]"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Option;