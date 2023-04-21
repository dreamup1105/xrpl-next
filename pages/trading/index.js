import React, { useState, useEffect } from 'react'
import HeatingMap from '@/components/trading/HeatingMap'
import TradingFeed from '@/components/trading/Feed/Feed'
import TradingSwap from '@/components/trading/Swap'
import TradingChart from '@/components/trading/TradingChart'
import images from '@/public/';
import Image from 'next/image';
import icons from '@/public/icons';
import _ from "lodash";
import { Responsive, WidthProvider } from "react-grid-layout";


const ResponsiveReactGridLayout = WidthProvider(Responsive);
const TradingPage = () => {
    const trade_layouts = [
        {
            x: 0,
            y: 0,
            w: 4,
            h: 3,
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
            // mh: 0.8
        },
        {
            x: 6,
            y: 0,
            w: 2,
            h: 1,
            i: 'greyhound',
            status: false,
            mw: 2,
            // mh: 0.8
        },
        {
            x: 4,
            y: 1,
            w: 4,
            h: 3,
            i: 'quick-swap',
            status: false,
            mw: 4,
            // mh: 3
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
            // mh: 1.6
        },
        {
            x: 10,
            y: 0,
            w: 2,
            h: 1,
            i: 'coreum',
            status: false,
            mw: 4,
            // mh: 2
        },
        {
            x: 8,
            y: 1,
            w: 4,
            h: 3.5,
            i: 'trade-chart',
            status: false,
            mw: 4,
            // mh: 3.5
        },
    ]
    const [layouts, setLayouts] = useState({
        lg: trade_layouts
    })

    const [currentBreakpoint, setCurrentBreakpoint] = useState("lg");
    const [compactType, setCompactType] = useState("vertical");
    const [mounted, setMounted] = useState(false);
    const [toolbox, setToolbox] = useState({
        lg: []
    });

    useEffect(() => {
        setMounted(true);
    }, []);

    const onBreakpointChange = (breakpoint) => {
        setCurrentBreakpoint(breakpoint);
        setToolbox({
            ...toolbox,
            [breakpoint]: toolbox[breakpoint] || toolbox[currentBreakpoint] || []
        });
    };

    const onCompactTypeChange = () => {
        let oldCompactType = "";

        const compactType =
            oldCompactType === "horizontal"
                ? "vertical"
                : oldCompactType === "vertical"
                    ? null
                    : "horizontal";
        setCompactType(compactType);
    };

    const onLayoutChange = (layout, layouts) => {
        console.log("layout", layouts)
        setLayouts({ ...layouts });
    };

    const onDrop = (layout, layoutItem, _ev) => {
        alert(
            `Element parameters:\n${JSON.stringify(
                layoutItem,
                ["x", "y", "w", "h"],
                2
            )}`
        );
    };

    return (
        // <HomeLayout>
        <div className="flex grow-1 w-full px-[15px]">
            <div className="relative w-full mb-4">
                <ResponsiveReactGridLayout
                    // {...props}
                    // style={{ background: "#f0f0f0" }}
                    layouts={layouts}
                    measureBeforeMount={false}
                    useCSSTransforms={mounted}
                    compactType={compactType}
                    preventCollision={!compactType}
                    onLayoutChange={onLayoutChange}
                    onBreakpointChange={onBreakpointChange}
                    onDrop={onDrop}
                    isDroppable
                    isResizable={false}
                >
                    {layouts.lg.map((l, i) => {
                        return l.i == "feed" ? (<div className="h-full" key={l.i}>
                            <TradingFeed />
                        </div>) : l.i == "ripple" ? (
                            <div key={l.i} className="flex flex-row gap-2 p-[16px] bg-[#21212A] rounded-[16px]">
                                <div className="w-16 h-20 relative flex justify-center items-center rounded-[8px]" style={{ backgroundColor: 'rgba(166, 176, 207, 0.05)' }}>
                                    <div className="top-1/3 left-1/3 opacity-1">
                                        <Image src={images.RippleImg} alt="ripple Image" />
                                    </div>
                                </div>
                                <div className="flex flex-col text-white text-start">
                                    <span className="text-[8px] font-bold text-white opacity-70 ml-1">Ripple</span>
                                    <span className="text-[14px] font-bold ml-1">XRP</span>
                                    <span className="text-[20px] font-bold mt-[10px] ml-1">0.42</span>
                                    <div className="flex flex-row gap-1 items-center text-center align-middle text-[8px]"><Image src={icons.CaretUpIcon} alt="caret down icon" width="6" height="4" /><span className="text-[#477843] text-[8px]">3.1% (in the last 24h)</span></div>
                                </div>
                            </div>
                        ) : l.i == "greyhound" ? (
                            <div className="flex flex-row gap-2 p-[16px] bg-[#21212A] rounded-[16px]" key={l.i}>
                                <div className="w-16 h-20 relative flex justify-center items-center rounded-[8px]" style={{ backgroundColor: 'rgba(166, 176, 207, 0.05)' }}>
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
                            </div>
                        ) : l.i == "quick-swap" ? (
                            <div className="flex flex-col px-[15px] py-[13px] bg-[#21212A] rounded-[16px]" key={l.i}>
                                <TradingSwap />
                            </div>
                        ) : l.i == "heat-map" ? (
                            <div className="h-[500px] bg-[#21212A] rounded-[16px] p-[15px]" key={l.i}>
                                <HeatingMap />
                            </div>
                        ) : l.i == "sologenic" ? (
                            <div className="flex flex-row gap-3 p-[16px] bg-[#21212A] rounded-[16px]" key={l.i}>
                                <div className="relative flex items-center justify-center w-16 h-20 rounded-lg" style={{ backgroundColor: 'rgba(166, 176, 207, 0.05)' }}>
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
                            </div>
                        ) : l.i == "coreum" ? (
                            <div className="flex flex-row gap-3 p-[16px] bg-[#21212A] rounded-[16px]" key={l.i}>
                                <div className="relative flex items-center justify-center w-16 h-20 rounded-lg" style={{ backgroundColor: 'rgba(166, 176, 207, 0.05)' }}>
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
                            </div>
                        ) : l.i == "trade-chart" ? (
                            <div className="" key={l.i}>
                                <TradingChart />
                            </div>
                        ) : null
                    })}
                </ResponsiveReactGridLayout>
            </div>
        </div>
        // </HomeLayout>
    )
}

export default TradingPage;