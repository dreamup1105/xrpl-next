import React from 'react'
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons/faEllipsisV';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ToggleSwitch from '@/components/toggleSwitch';
const FeedSetting = () => {
    const [checked, setChecked] = React.useState(true);

    const handleChange = (event) => {
        setChecked(event.target.checked);
    };

    return (
        <div className="w-[414px] bg-[#18181E] rounded-[16px] max-w-[414px] p-[15px]">
            <div component="span" className="p-0">
                <div className="flex flex-col gap-2" spacing={2}>
                    <div>
                        <div className="flex items-center justify-between">
                            <span className="text-white">Setting</span>
                            <button aria-label="Example" className="text-white">
                                <FontAwesomeIcon icon={faEllipsisV} className="text-white" />
                            </button>
                        </div>
                    </div>
                    <div>
                        <div className="flex items-center justify-between">
                            <span className="text-white">Show title</span>
                            <ToggleSwitch />
                        </div>
                    </div>
                    <div>
                        <div className="flex items-center justify-between">
                            <span className="text-white">Searchbar</span>
                            <ToggleSwitch />
                        </div>
                    </div>
                    <div>
                        <div className="flex items-center justify-between">
                            <span className="text-white">Socials</span>
                            <ToggleSwitch />
                        </div>
                    </div>
                    <div>
                        <span className="text-white mb-[5px]">Twitter</span>
                        <div className="flex items-center justify-between w-full">
                            <input
                                className="w-full bg-[#21212A] h-[46px] rounded-[8px] py-[15px] px-[15px] text-white"
                                id="fullWidth"
                                placeholder="e.g. “@XRPLGreyhound”"
                            />
                        </div>
                        <span className="text-[8px] text-white font-bold lead-[10.55px] opacity-70">Enter multiple Twitter handles separated by a comma</span>
                    </div>
                    <div>
                        <span className="text-white mb-[5px]">Discord</span>
                        <div className="flex items-center justify-between w-full">
                            <input
                                className="w-full bg-[#21212A] h-[46px] rounded-[8px] py-[15px] px-[15px] text-white"
                                id="fullWidth"
                                placeholder="e.g. “Hound#123”"
                            />
                        </div>
                        <span className="text-[8px] text-white font-bold lead-[10.55px] opacity-70">Enter multiple Discord IDs separated by a comma</span>
                    </div>
                    <div>
                        <span className="text-white mb-[5px]">Telegram</span>
                        <div className="flex items-center justify-between w-full">
                            <input
                                className="w-full bg-[#21212A] h-[46px] rounded-[8px] py-[15px] px-[15px] text-white"
                                id="fullWidth"
                                placeholder="e.g. “@GreyhoundCoinXRPL”"
                            />
                        </div>
                        <span className="text-[8px] text-white font-bold lead-[10.55px] opacity-70">Enter multiple Telegram IDs separated by a comma</span>
                    </div>
                    <div>
                        <div className="flex items-center justify-between">
                            <span className="text-white">Wallets</span>
                            <ToggleSwitch />
                        </div>
                    </div>
                    <div>
                        <div className="flex items-center justify-between">
                            <span className="text-white">XRPL Projects</span>
                            <ToggleSwitch />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FeedSetting