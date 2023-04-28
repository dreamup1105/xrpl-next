import React from 'react'
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons/faEllipsisV';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import icons from '@/public/icons'
import Image from 'next/image';

const Swap = () => {
    const [selectToken, setSelectToken] = React.useState('Hound');
    const [receiveToken, setReceiveToken] = React.useState('XRP');

    const handleChange = (event) => {
        setSelectToken(event.target.value);
    };

    const handleRecvTokenChange = (event) => {
        setReceiveToken(event.target.value);
    };

    return (
        <div className="grid grid-cols-1 gap-[30px]">
            <div className="flex flex-col bg-[#21212A] rounded-[16px]">
                <div className="flex flex-row items-center justify-between mb-[21px]">
                    <div className="feed-title">
                        <span className="text-white text-[20px] font-bold leading-[26.38px]">Quick swap</span>
                    </div>
                    <button aria-label="Example" className="text-white hover:bg-gray-700">
                        <FontAwesomeIcon icon={faEllipsisV} />
                    </button>
                </div>
                <div className="w-full h-auto rounded-[8px] border border-[#2C2C35] mb-[0px] relative p-[15px]">
                    <div className="pay-with text-start pb-[11px]">
                        <span className="text-[12px] text-[#ffffff] opacity-60 leading-[16px]">Pay with</span>
                    </div>
                    <div className="flex flex-col">
                        <div className="flex flex-row justify-between">
                            <div className="flex flex-row items-center">
                                <div className="w-[30px] h-[30px] rounded-full bg-[#494C5B] mr-[10px]"></div>
                                <div className="m-0">
                                    <select
                                        id="select-token"
                                        value={selectToken}
                                        onChange={handleChange}
                                        className="text-white bg-transparent outline-none"
                                    >
                                        <option value={'Hound'} className="text-white">
                                            Hound
                                        </option>
                                        <option value={'XRP'} className="text-white">
                                            XRP
                                        </option>
                                    </select>
                                </div>
                            </div>
                            <div className="text-[24px] text-white font-bold">999,999.99</div>
                        </div>
                        <div className="flex flex-row justify-between">
                            <div className="hound-balance">
                                <span className="text-[#ffffff] opacity-60">Balance: 999,999,999.99</span>
                            </div>
                            <div className="text-[10px] text-[#ffffff] opacity-60">≈ $9999.99</div>
                        </div>
                    </div>
                    <div className="absolute -bottom-[25px] left-[calc(50%-20px)] z-0 w-[35px] h-[35px] rounded-full border border-[#2C2C35]" >
                    </div>
                    <div className="absolute -bottom-[17px] left-[calc(50%-10px)] z-[1000]" >
                        <Image src={icons.SwapIcon} alt="Swap Icon" />
                    </div>
                    <div style={{
                        position: 'absolute',
                        bottom: '-1px',
                        left: '50%',
                        transform: 'translateX(-58.5%)',
                        width: '30px',
                        height: '1px',
                        backgroundColor: '#21212A'
                    }}></div>
                </div>
                <div className="w-full h-[14px] z-10 bg-[#21212A]"></div>
                <div className="w-full h-auto rounded-[8px] border border-[#2C2C35] relative p-[15px] mb-[15px]">
                    <div style={{
                        position: 'absolute',
                        top: '-1px',
                        left: '50%',
                        transform: 'translateX(-58.5%)',
                        width: '30px',
                        height: '1px',
                        backgroundColor: '#21212A'
                    }}></div>
                    <div className="Receive-with text-start mb-[10px]">
                        <span className="text-[12px] text-[#ffffff] opacity-60 leading-[16px]">Receive</span>
                    </div>
                    <div className="flex flex-col">
                        <div className="flex flex-row justify-between">
                            <div className="flex flex-row items-center">
                                <div className="w-[30px] h-[30px] rounded-full bg-[#494C5B] mr-[10px]"></div>
                                <div className="m-0">
                                    <select
                                        id="select-token"
                                        value={receiveToken}
                                        onChange={handleRecvTokenChange}
                                        className="text-white bg-transparent outline-none"
                                    >
                                        <option value={'Hound'} className="text-white">
                                            Hound
                                        </option>
                                        <option value={'XRP'} className="text-white">
                                            XRP
                                        </option>
                                    </select>
                                </div>
                            </div>
                            <div className="text-[24px] text-white font-bold">999,999.99</div>
                        </div>
                        <div className="flex flex-row justify-between">
                            <div className="hound-balance">
                                <span className="text-[#ffffff] opacity-60">Balance: 999,999,999.99</span>
                            </div>
                            <div className="text-[10px] text-[#ffffff] opacity-60">≈ $9999.99</div>
                        </div>
                    </div>
                </div>
                <div className="flex items-start justify-end w-full swap-btn flex-end">
                    <button variant="contained" className="py-1 bg-white hover:bg-gray-700 hover:text-white focus:ring-2 focus:ring-offset-2 px-[15px] leading-[32px] rounded-[8px]">
                        Swap
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Swap;