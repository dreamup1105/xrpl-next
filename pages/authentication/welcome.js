import React from 'react'
import { useState, useRef, useEffect } from 'react'
import { useRouter } from 'next/router';

const Welcome = () => {
    const router = useRouter();
    const handleKeyPress = (event) => {
        console.log(event.key);
        if (event.key === 'Enter') {
            router.push(`/authentication/select`);
        }
    };

    const [imageData, setImageData] = useState(null);
    const [imageUrl, setImageUrl] = useState(null);

    useEffect(() => {
        if (imageData) {
            // Set the image URL using the data URL
            setImageUrl(imageData);
        }
    }, [imageData]);

    function handleImageChange(event) {
        const file = event.target.files[0];

        // Create a new FileReader object
        const reader = new FileReader();

        // Set up the reader to read the file as a data URL
        reader.readAsDataURL(file);

        // When the reader has finished reading the file...
        reader.onload = function () {
            // Set the image data in state
            setImageData(reader.result);
        };
    }


    return (
        <>
            <div className="flex flex-col flex-1 grow justify-center items-center bg-[#1A1921] px-[25px] h-full" >
                <div className="flex flex-col flex-1 grow justify-center items-center bg-[#1A1921] px-[25px] h-full">
                    <div className="min-w-[500px] w-[500px] mx-auto">
                        <div className="rounded-[16px]  h-auto bg-[#21212A] text-white p-4">
                            <div className="px-2 mb-2">
                                <div className="w-full text-center text-[24px] mb-[20px]">Welcome! First things first...</div>
                                <div className="w-full text-center text-[14px] opacity-60 mb-[30px]" >Get started with the XRPL Dash in seconds by following these simple steps to set up your account. </div>
                                <div className="circleBase bg-[#272832] mx-auto mt-15 border-4 border-double border-gray-500 w-[160px] h-[160px] mb-[35px] flex justify-center">
                                    <div className='w-[160px] h-[160px] relative'>
                                        <input className="absolute inset-0 circleBase w-full h-full opacity-0 cursor-pointer" type="file" id="myImage" name="myImage" onChange={handleImageChange} />
                                        {imageUrl && <img src={imageUrl} className='circleBase w-full h-full object-cover' />}
                                    </div>
                                </div>
                                <span className="description descriptiontext mb-[5px]">Display Name <span className="text-white opacity-60">(required)</span></span>
                                <div className="relative w-full mt-[5px] mb-[48px]">
                                    <input onKeyDown={handleKeyPress} type="text" className="h-[40px] w-full bg-[#2b2b36] rounded-[16px] py-1 pl-9 pr-1" placeholder="username" />
                                    <span className="absolute top-[calc(50%-12px)] left-3">@</span>
                                </div>
                                <div className="dotalign">
                                    <span className="h-[10px] w-[10px] bg-white rounded-full inline-block mr-[15px] ml-[15px] border border-gray-300"></span>
                                    <span className="h-[10px] w-[10px] bg-white opacity-5 rounded-full inline-block mr-[15px] ml-[15px]"></span>
                                    <span className="h-[10px] w-[10px] bg-white opacity-5 rounded-full inline-block mr-[15px] ml-[15px]"></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Welcome;