import React from 'react'

import { faEllipsisV } from '@fortawesome/free-solid-svg-icons/faEllipsisV';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ToggleSwitch from '@/components/toggleSwitch';
const ChartSetting = () => {
    const styles = {
        feedPopover: {
            backgroundColor: '#18181E',
            opacity: 1,
            borderRadius: '16px'
        },
    };

    const [checked, setChecked] = React.useState(true);

    const handleChange = (event) => {
        setChecked(event.target.checked);
    };

    const [layout, setLayout] = React.useState('Custom');
    return (
        <div className="w-[414px] max-w-[414px] bg-[#18181E] rounded-[16px] p-0">
            <div className="p-[15px]">
                <div className="flex flex-col gap-4">
                    <div className="flex items-center justify-between">
                        <span variant="body1" className="text-white">Setting</span>
                        <button aria-label="Example" className="text-white">
                            <FontAwesomeIcon icon={faEllipsisV} className="text-white" />
                        </button>
                    </div>
                    <div>
                        <div className="flex items-center justify-between">
                            <span variant="body1" className="text-white">Title</span>
                            <div
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <div>
                        <span className="font-bold text-white">Token</span>
                        <div className="min-w-[120px] bg-[#1E1F26] rounded-[8px] h-[33px] flex justify-center items-center">
                            <div className="w-full">
                                <select
                                    id="layout-dash"
                                    value={layout}
                                    className="w-full text-white bg-transparent outline-none px-[15px]"
                                >
                                    <option value="Custom"><span style={{ color: "white", fontSize: '10px' }}>HOUND(Greyhound)</span></option>
                                </select>
                            </div>
                        </div>
                        <span className="text-[8px] text-white font-bold lead-[10.55px] opacity-70">Choose the XRPL token you want to display</span>
                    </div>
                    <div>
                        <div className="font-bold text-white mb-[5px]">ChartType</div>
                        <div className="min-w-[120px] bg-[#1E1F26] rounded-[8px] h-[33px] flex justify-center items-center">
                            <div className="w-full">
                                <select
                                    id="layout-dash"
                                    value={layout}
                                    className="w-full text-white bg-transparent outline-none px-[15px]"
                                >
                                    <option value="Custom"><span className="text-white text-[10px]">Candidates</span></option>
                                </select>
                            </div>
                        </div>
                        <span className="text-[8px] text-white font-bold lead-[10.55px] opacity-70">Choose the type of chart you want to display</span>
                    </div>
                    <div>
                        <div className="font-bold text-white mb-[5px]">Metrics</div>
                        <div className="min-w-[120px] bg-[#1E1F26] rounded-[8px] h-[33px] flex justify-center items-center">
                            <div className="w-full">
                                <select
                                    id="layout-dash"
                                    value={layout}
                                    className="w-full text-white bg-transparent outline-none px-[15px]"
                                >
                                    <option value="Custom"><span style={{ color: "white", fontSize: '10px' }}>Custom</span></option>
                                </select>
                            </div>
                        </div>
                        <span className="text-[8px] text-white font-bold lead-[10.55px] opacity-70">Choose the financial metrics you want to display</span>
                    </div>
                    <div className="flex flex-row items-center justify-between ">
                        <div className="text-white">Display price in</div>
                        <div className="text-white">
                            <button className="rounded-[8px] p-2 bg-[#1E1F26]">XRP</button>
                            <button className="rounded-[8px] p-2">USD</button>
                        </div>
                    </div>
                    <div>
                        <div className="flex items-center justify-between mb-1">
                            <div variant="body1" className="font-bold text-white">Price line</div>
                            <ToggleSwitch />
                        </div>
                        <div className="text-white opacity-60 text-[10px] -mt-2">Display horizontal line showing the current price</div>
                    </div>
                    <div>
                        <div className="flex items-center justify-between mb-1">
                            <span variant="body1" className="font-bold text-white">Wallets</span>
                            <ToggleSwitch />
                        </div>
                        <div className="text-white opacity-60 text-[10px] -mt-2">Display the time scale information of the crypto data</div>
                    </div>
                    <div>
                        <div className="flex items-center justify-between mb-1">
                            <span variant="body1" className="font-bold text-white">Price axis</span>
                            <ToggleSwitch />
                        </div>
                        <div className="text-white opacity-60 text-[10px] -mt-2">Display the price scale information of the crypto data</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ChartSetting