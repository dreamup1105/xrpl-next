import images from '@/public/';
import Image from 'next/image';
import icons from '@/public/icons';

const Hound = () => {
    return (
        <>
            <div className="w-16 h-auto relative flex justify-center items-center rounded-[8px]" style={{ backgroundColor: 'rgba(166, 176, 207, 0.05)' }}>
                <div className="top-1/3 left-1/3 opacity-1">
                    <Image src={images.GreyHoundImg} alt="ripple Image" />
                </div>
            </div>
            <div className="flex flex-col text-white text-start">
                <span className="text-[8px] font-bold text-white opacity-70 ml-1">Greyhound</span>
                <span className="text-[14px] font-bold ml-1">HOUND</span>
                <span className="text-[20px] font-bold mt-[10px] ml-1">0.42</span>
                <div className="flex flex-row gap-1 items-center text-center align-middle text-[8px]"><Image src={icons.CaretUpIcon} alt="caret down icon" width="6" height="4" /><span className="text-[#477843]">11.2% (in the last 24h)</span></div>
            </div>

        </>
    )
}

export default Hound;