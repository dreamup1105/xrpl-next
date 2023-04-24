import React, { useEffect } from "react";
import images from '../../public';
import Image from 'next/image';

const Login = () => {
  return (
    <>
      <div className="flex flex-col flex-1 grow bg-[#1A1921] h-full  justify-center items-center">
        <div className="flex flex-row w-[1013px] h-[720px] mx-auto justify-center relative ">
          <Image src={images.Dog} alt=" jacket" className="h-full object-cover rounded-[22px]" />
          <div className="h-auto right-0  bg-[#21212A] w-3/5 absolute rounded-tr-[22px] rounded-br-[22px] pl-[21.1px] pr-[117.48px] py-[17.59px ]" >
            <div className="flex flex-col px-[42px] pb-[21px]" >
              <Image src={images.Logo} className="mt-[30px] w-[130.1px] h-[36.38px] mb-[33px]" />
              <p className="font-mont text-white text-[40px] mb-[11px]">Connect Wallet</p>
              <p className="mb-[20px] w-[480px] text-[#FFFFFF] opacity-60 leading-6 text-[20px] font-mont">Connect your wallet to XRPL Dash quickly and easily by scanning the QR code with your XUMM app.</p>
              <Image src={images.Qr} className="mb-[76px] w-[337px] h-[337px]" />
              <p className="text-[#FFFFFF] opacity-60 leading-6 text-[20px] font-mont">Don't have the XUMM app installed? Click here.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;