import images from '@/public/';
import Image from 'next/image';
import icons from '@/public/icons';

const Core = () => {
    return (
        <>
            <div className="relative flex items-center justify-center w-16 h-auto rounded-lg" style={{ backgroundColor: 'rgba(166, 176, 207, 0.05)' }}>
                <div className="top-1/3 left-1/3">
                    <Image src={images.CoreLogoImg} alt="ripple Image" />
                </div>
            </div>
            <div className="flex flex-col text-white text-start">
                <span className="text-[8px] font-bold text-white opacity-70">Coreum</span>
                <span className="text-[14px] font-bold">CORE</span>
                <span className="mt-2 text-[20px] font-bold">1.46</span>
                <div className="flex items-center justify-center gap-1 text-[8px] leading-tight">
                    <Image src={icons.CaretUpIcon} alt="caret down icon" width="6" height="4" />
                    <span className="text-[#6DCE5C] opacity-50">0.9% (in the last 24h)</span>
                </div>
            </div>
        </>
    )
}

export default Core;