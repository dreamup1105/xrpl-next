import images from '@/public/';
import Image from 'next/image';
import icons from '@/public/icons';

const Solo = () => {
    return (
        <>
            <div className="relative flex items-center justify-center w-16 h-auto rounded-lg" style={{ backgroundColor: 'rgba(166, 176, 207, 0.05)' }}>
                <div className="top-1/3 left-1/3">
                    <Image src={images.SoloLogoImg} width={45} height={45} alt="ripple Image" />
                </div>
            </div>
            <div className="flex flex-col text-white text-start">
                <span className="text-[8px] font-bold text-white opacity-70">Sologenic</span>
                <span className="text-[14px] font-bold">SOLO</span>
                <span className="mt-2 text-[20px] font-bold">0.41</span>
                <div className="flex items-center justify-center gap-1 text-[8px] leading-tight">
                    {/* <ArrowDropDownIcon className="text-red-500" /> */}
                    <Image src={icons.CaretDownIcon} alt="caret down icon" width="6" height="4" />
                    <span className="text-[#783F4B]">-7.3% (in the last 24h)</span>
                </div>
            </div>
        </>
    )
}

export default Solo;