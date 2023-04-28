import { useState } from 'react'
import FeedSetting from './FeedSetting';
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons/faEllipsisV';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const feads = [
    {
        avatar: "",
        title: "New Feed",
        description: "this feed is good, we should get this feed"
    },
    {
        avatar: "",
        title: "New Feed",
        description: "this feed is good, we should get this feed"
    },
    {
        avatar: "",
        title: "New Feed",
        description: "this feed is good, we should get this feed"
    },
    {
        avatar: "",
        title: "New Feed",
        description: "this feed is good, we should get this feed"
    },
]

const styles = {
    feedPopover: {
        backgroundColor: '#18181E',
        opacity: 1,
        borderRadius: '16px'
        // add other styles as needed
    },
};
const TradingFeed = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [anchorEl, setAnchorEl] = useState(null);
    const [isOpen, setOpen] = useState(false);

    const handleChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleClick = (event) => {
        event.preventDefault()
        setOpen(!isOpen)
        console.log("event-target", event.currentTarget)
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };


    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    return (
        <>
            <div className="flex flex-col px-[15px] py-[12px] bg-[#21212A] rounded-[16px] h-full relative">
                <div className="flex flex-row items-center justify-between mb-2">
                    <div className="feed-title">
                        <span className="text-white text-[20px] font-bold">Feed</span>
                    </div>
                    <button aria-label="Example" className="text-white" onClick={handleClick}>
                        <FontAwesomeIcon icon={faEllipsisV} className="text-white" />
                    </button>
                    {isOpen ? (
                        <div className="absolute top-[40px] right-2 z-[2]" >
                            <FeedSetting />
                        </div>
                    ) : null}
                </div>
                <div className="relative search-bar w-full h-[46px] mb-2 my-2">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <svg aria-hidden="true" className="w-[20px] h-[20px] text-white dark:text-gray-400" fill="none" stroke="currentColor" viewdiv="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                    </div>
                    <input className="pl-10 search-bar w-full h-full rounded-[8px] bg-[#1A1A22] hober:border hover:border-black text-white" placeholder="Search" />
                </div>
                <div className="w-full fead-list">
                    {feads.map((feed, index) => {
                        return <div key={index} component="span" className="w-full h-auto py-2 opacity-30">
                            <div className="flex flex-row items-center w-full px-[15px] py-[15px] rounded-[5px] gap-6 bg-[#272832]">
                                <div className="w-1/8 h-[45px]">
                                    <div className="rounded-full bg-white w-[45px] h-[45px]"></div>
                                </div>
                                <div className="flex flex-col w-full text-white text-start">
                                    <span>{feed.title}</span>
                                    <span>{feed.description}</span>
                                </div>
                            </div>
                        </div>
                    })}
                </div>
            </div>
        </>
    )
}

export default TradingFeed