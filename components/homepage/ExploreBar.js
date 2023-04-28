import { useEffect, useState, useContext } from 'react'
import icons from '@/public/icons'
import Dropdown from '../dropdown';
import Image from 'next/image';
import GridLayoutContext, { GridLayoutProvider } from '@/context/GridLayoutContext';

// Two Columns View
const trade_layouts_three_cols_view = [
    {
        x: 0,
        y: 0,
        w: 4,
        h: 4,
        i: 'feed',
        status: false,
        mw: 4,
        // mh: 3
    },
    {
        x: 4,
        y: 0,
        w: 2,
        h: 1,
        i: 'ripple',
        status: false,
        mw: 2,
        mh: 1
    },
    {
        x: 6,
        y: 0,
        w: 2,
        h: 1,
        i: 'greyhound',
        status: false,
        mw: 2,
        mh: 1
    },
    {
        x: 4,
        y: 1,
        w: 4,
        h: 3.05,
        i: 'quick-swap',
        status: false,
        mw: 4,
        mh: 3
    },
    {
        x: 4,
        y: 4,
        w: 4,
        h: 4,
        i: 'heat-map',
        status: false,
        mw: 4,
        // mh: 3
    },
    {
        x: 8,
        y: 0,
        w: 2,
        h: 1,
        i: 'sologenic',
        status: false,
        mw: 4,
        mh: 1
    },
    {
        x: 10,
        y: 0,
        w: 2,
        h: 1,
        i: 'coreum',
        status: false,
        mw: 4,
        mh: 1
    },
    {
        x: 8,
        y: 1,
        w: 4,
        h: 4,
        i: 'trade-chart',
        status: false,
        mw: 4,
        // mh: 3.5
    },
]

const trade_layouts_two_cols_view = [
    {
        x: 0,
        y: 0,
        w: 8,
        h: 4,
        i: 'feed',
        status: false,
        mw: 4,
        // mh: 3
    },
    {
        x: 8,
        y: 0,
        w: 2,
        h: 1,
        i: 'ripple',
        status: false,
        mw: 2,
        mh: 1
    },
    {
        x: 10,
        y: 0,
        w: 2,
        h: 1,
        i: 'greyhound',
        status: false,
        mw: 2,
        mh: 1
    },
    {
        x: 8,
        y: 1,
        w: 4,
        h: 3.05,
        i: 'quick-swap',
        status: false,
        mw: 4,
        mh: 3
    },
    {
        x: 8,
        y: 4,
        w: 4,
        h: 4,
        i: 'heat-map',
        status: false,
        mw: 4,
        // mh: 3
    },
    {
        x: 8,
        y: 7,
        w: 2,
        h: 1,
        i: 'sologenic',
        status: false,
        mw: 4,
        mh: 1
    },
    {
        x: 10,
        y: 7,
        w: 2,
        h: 1,
        i: 'coreum',
        status: false,
        mw: 4,
        mh: 1
    },
    {
        x: 8,
        y: 8,
        w: 4,
        h: 4,
        i: 'trade-chart',
        status: false,
        mw: 4,
        // mh: 3.5
    },
]

// Two Columns View
const ExploreBar = () => {
    const [columnNum, setColumnNum] = useState(3);
    const { layouts, setLayout } = useContext(GridLayoutContext);

    useEffect(() => {
        if (columnNum == 3) {
            setLayout(trade_layouts_three_cols_view)
        } else {
            setLayout(trade_layouts_two_cols_view)
        }
    }, [columnNum])

    return (
        <GridLayoutProvider>
            <div className="flex flex-row justify-between items-center h-[60px] gap-4 mt-[20px] w-full">
                <div className="drop-down w-[135px]">
                    <Dropdown />
                </div>
                <div className="toggle-btn flex flex-row justify-center items-center w-[86px] p-[6px] rounded-[16px] bg-[#21212A] px-[6px] rounded-[16px]">
                    <button className={`p-2 mr-2 ${columnNum == 3 ? 'bg-[#1A1921]' : ''} w-[35px] h-[33px] rounded-[8px] align-middle`} onClick={() => setColumnNum(3)}>
                        <Image src={icons.ThreeColumnIcon} alt="three-column" />
                    </button>
                    <button className={`p-2 ${columnNum == 2 ? 'bg-[#1A1921]' : ''} w-[35px] h-[33px] rounded-[8px] align-middle`} onClick={() => setColumnNum(2)}>
                        <Image src={icons.TwoColumnIcon} alt="two-column" />
                    </button>
                </div>
                <div className="relative search-bar w-full h-[45px] ">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewdiv="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                    </div>
                    <input className="pl-10 search-bar w-full h-full rounded-[16px] bg-[#21212A] hober:border hover:border-black text-white" placeholder="Search" />
                </div>
                <div className="flex justify-center items-center w-[45px] h-[45px] rounded-[16px] bg-[#21212A]">
                    <Image src={icons.AddPlusIcon} alt="add-plus" />
                </div>
            </div>
        </GridLayoutProvider>
    )
}

export default ExploreBar