import React from 'react'

const HeatingMap = () => {
    return (
        <>
            <div className="h-full">
                <div className="flex h-full">
                    <div className="grid w-full grid-cols-3 gap-[15px]">
                        <div className="flex items-center justify-center h-full p-4 bg-[#477843] rounded-lg">
                            <div className="flex flex-col text-center text-white">
                                <span className="text-2xl font-bold">HOUND</span>
                                <span className="text-lg font-bold">$0.04</span>
                                <span className="text-lg font-bold">-0.05%</span>
                            </div>
                        </div>
                        <div className="flex flex-col h-full gap-[15px]" >
                            <div className="h-[60%]">
                                <div className="flex items-center justify-center h-full p-4 bg-[#477843] rounded-lg">
                                    <div className="flex flex-col text-center text-white">
                                        <span className="text-xl font-bold">RPR</span>
                                        <span className="text-base font-bold">$0.04</span>
                                        <span className="text-base font-bold">-0.05%</span>
                                    </div>
                                </div>
                            </div>
                            <div className="h-[40%]">
                                <div className="flex items-center justify-center h-full p-4 bg-[#783F4B] rounded-lg">
                                    <div className="flex flex-col text-center text-white">
                                        <span className="text-xl font-bold">SOLO</span>
                                        <span className="text-base font-bold">$0.17</span>
                                        <span className="text-base font-bold">-7.02%</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col h-full gap-[15px]">
                            <div className="grid w-full h-full grid-cols-2 gap-[15px] h-[30%]">
                                <div className="flex items-center justify-center bg-[#783F4B] h-auto rounded-[8px] py-[40px]">
                                    <div className="flex flex-col text-center text-white">
                                        <span className="text-[16px] font-bold">CORE</span>
                                        <span className="text-[12px] font-bold">$0.47</span>
                                        <span className="text-[12px] font-bold">-0.3%</span>
                                    </div>
                                </div>
                                <div className="flex justify-center items-center bg-[#477843] h-auto rounded-[8px] py-[40px]">
                                    <div className="flex flex-col text-center text-white">
                                        <span className="text-[16px] font-bold">CSC</span>
                                        <span className="text-[12px] font-bold">$0.06</span>
                                        <span className="text-[12px] font-bold">+1.9%</span>
                                    </div>
                                </div>
                            </div>
                            <div className="grid grid-cols-3 gap-[15px] h-[28%]">
                                <div className="flex justify-center items-center bg-[#783F4B] h-auto rounded-[8px] py-[20px]">
                                    <div className="flex flex-col text-center text-white">
                                        <span className="text-[12px] font-bold">RPR</span>
                                        <span className="text-[10px] font-bold">$0.04</span>
                                        <span className="text-[10px] font-bold">-0.05%</span>
                                    </div>
                                </div>
                                <div className="flex justify-center items-center bg-[#477843] h-auto rounded-[8px] py-[20px]">
                                    <div className="flex flex-col text-center text-white">
                                        <span className="text-[12px] font-bold">ELS</span>
                                        <span className="text-[10px] font-bold">$0.0005</span>
                                        <span className="text-[10px] font-bold">-0.1%</span>
                                    </div>
                                </div>
                                <div className="flex justify-center items-center bg-[#783F4B] h-auto rounded-[8px] py-[20px]">
                                    <div className="flex flex-col text-white">
                                        <span className="text-[12px] font-bold">FLR</span>
                                        <span className="text-[10px] font-bold">$0.06</span>
                                        <span className="text-[10px] font-bold">-2.3%</span>
                                    </div>
                                </div>
                            </div>
                            <div className="grid grid-cols-4 gap-[15px] h-[15%]">
                                <div className="bg-[#477843] rounded-[8px] flex justify-center items-center justify-items-center text-white">
                                    <span className="text-[10px] font-bold">RPR</span>
                                </div>
                                <div className="bg-[#272832] rounded-[8px] flex justify-center items-center justify-items-center text-white">
                                    <span className="text-[10px] font-bold">ETC</span>
                                </div>
                                <div className="bg-[#783F4B] rounded-[8px] flex justify-center items-center justify-items-center text-white">
                                    <span className="text-[10px] font-bold">VGB</span>
                                </div>
                                <div className="bg-[#783F4B] rounded-[8px] flex justify-center items-center justify-items-center text-white">
                                    <span className="text-[10px] font-bold">BAY</span>
                                </div>
                            </div>
                            <div className="grid grid-cols-5 gap-[15px] h-[14%]">
                                <div className="bg-[#272832] rounded-[8px]"></div>
                                <div className="bg-[#477843] rounded-[8px]"></div>
                                <div className="bg-[#783F4B] rounded-[8px]"></div>
                                <div className="bg-[#272832] rounded-[8px]"></div>
                                <div className="bg-[#272832] rounded-[8px]"></div>
                            </div>
                            <div className="grid grid-cols-6 gap-[15px] h-[13%]">
                                <div className="bg-[#783F4B] rounded-[8px]"></div>
                                <div className="bg-[#272832] rounded-[8px]"></div>
                                <div className="bg-[#272832] rounded-[8px]"></div>
                                <div className="bg-[#477843] rounded-[8px]"></div>
                                <div className="bg-[#477843] rounded-[8px]"></div>
                                <div className="bg-[#783F4B] rounded-[8px]"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HeatingMap