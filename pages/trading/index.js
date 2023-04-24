import React, { useState, useEffect, useContext } from 'react'
import HeatingMap from '@/components/trading/HeatingMap'
import TradingFeed from '@/components/trading/Feed/Feed'
import TradingSwap from '@/components/trading/Swap'
import TradingChart from '@/components/trading/TradingChart'
import images from '@/public/';
import Image from 'next/image';
import icons from '@/public/icons';
import _ from "lodash";
import { Responsive, WidthProvider } from "react-grid-layout";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";
import { motion } from 'framer-motion'
import { useDebounce } from 'use-debounce';
import GridLayoutContext, { GridLayoutProvider } from '@/context/GridLayoutContext';

const ResponsiveReactGridLayout = WidthProvider(Responsive);
const TradingPage = () => {
    const { layouts, handleLayoutChange } = useContext(GridLayoutContext);

    const [currentBreakpoint, setCurrentBreakpoint] = useState("lg");
    const [compactType, setCompactType] = useState("vertical");
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const onBreakpointChange = (breakpoint) => {
        setCurrentBreakpoint(breakpoint);
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

    const onDrop = (layout, layoutItem, _ev) => {
        console.log(
            `Element parameters:\n${JSON.stringify(
                layoutItem,
                ["x", "y", "w", "h"],
                2
            )}`
        );
    };

    const whileDrag = (item) => {
        console.log("item", item)

    }

    const [isDragging, setIsDragging] = useState(false);
    const [draggedItemId, setDraggedItemId] = useState(null);
    const [highlightedPosition, setHighlightedPosition] = useState(null);
    const [debouncedHighlightedPosition] = useDebounce(highlightedPosition, 50);

    const handleDragStart = (layout, oldItem, newItem, placeholder, event) => {
        setIsDragging(true);
        setDraggedItemId(oldItem.i);
    };

    const handleDragEnd = (layout, oldItem, newItem, placeholder, event) => {
        setIsDragging(false);
    };

    const shadowStyle = {
        boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.3)"
    };

    return (
        // <HomeLayout>
        <GridLayoutProvider>
            <div className="flex w-full grow-1">
                <div className="relative w-full mb-4">
                    <ResponsiveReactGridLayout
                        // {...props}
                        // style={{ background: "#f0f0f0" }}
                        layouts={{ lg: layouts }}
                        margin={[30, 30]}
                        measureBeforeMount={false}
                        useCSSTransforms={mounted}
                        compactType={compactType}
                        preventCollision={!compactType}
                        onLayoutChange={handleLayoutChange}
                        onBreakpointChange={onBreakpointChange}
                        onDrop={onDrop}
                        isDroppable
                        isResizable={false}
                        onDragStart={handleDragStart}
                        onDragStop={handleDragEnd}
                        rowHeight={112}
                    >
                        {layouts.map((l, i) => {
                            return l.i == "feed" ? (
                                <div key={l.i} className={`h-full cursor-pointer ${isDragging ? 'cursor-grab' : 'active:cursor-grabbing'} active:cursor-grabbing`} onDragStart={() => handleDragStart(l)}>
                                    <motion.div className={`rounded-[16px] h-full cursor-point ${draggedItemId && isDragging ? 'shadow-[0px_0px_10px_0px_rgba(0,0,0,0.3)]' : ''}`} whileDrag={whileDrag(l)} >
                                        <TradingFeed />
                                    </motion.div>
                                </div>
                            ) : l.i == "ripple" ? (
                                <div key={l.i} className={`cursor-pointer ${isDragging ? 'cursor-grab' : 'active:cursor-grabbing'} active:cursor-grabbing`}>
                                    <motion.div className={`flex flex-row gap-2 p-[16px] h-full bg-[#21212A] rounded-[16px] ${draggedItemId && isDragging ? 'shadow-[0px_0px_10px_0px_rgba(0,0,0,0.3)]' : ''}`}>
                                        <div className="w-16 h-auto relative flex justify-center items-center rounded-[8px]" style={{ backgroundColor: 'rgba(166, 176, 207, 0.05)' }}>
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
                                    </motion.div>
                                </div>
                            ) : l.i == "greyhound" ? (
                                <div key={l.i} className={`cursor-pointer ${isDragging ? 'cursor-grab' : 'active:cursor-grabbing'} active:cursor-grabbing`}>
                                    <motion.div className={`flex flex-row gap-2 p-[16px] h-full bg-[#21212A] rounded-[16px] ${draggedItemId && isDragging ? 'shadow-[0px_0px_10px_0px_rgba(0,0,0,0.3)]' : ''}`}>
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
                                    </motion.div>
                                </div>
                            ) : l.i == "quick-swap" ? (
                                <div key={l.i} className={`cursor-pointer ${isDragging ? 'cursor-grab' : 'active:cursor-grabbing'} active:cursor-grabbing`}>
                                    <motion.div className={`flex flex-col px-[15px] py-[13px] bg-[#21212A] rounded-[16px] h-full ${draggedItemId && isDragging ? 'shadow-[0px_0px_10px_0px_rgba(0,0,0,0.3)]' : ''}`}>
                                        <TradingSwap />
                                    </motion.div>
                                </div>
                            ) : l.i == "heat-map" ? (
                                <div key={l.i} className={`cursor-pointer ${isDragging ? 'cursor-grab' : 'active:cursor-grabbing'} active:cursor-grabbing`}>
                                    <motion.div className={`h-full bg-[#21212A] rounded-[16px] p-[15px] ${draggedItemId && isDragging ? 'shadow-[0px_0px_10px_0px_rgba(0,0,0,0.3)]' : ''}`}>
                                        <HeatingMap />
                                    </motion.div>
                                </div>
                            ) : l.i == "sologenic" ? (
                                <div key={l.i} className={`cursor-pointer ${isDragging ? 'cursor-grab' : 'active:cursor-grabbing'} active:cursor-grabbing`}>
                                    <motion.div className={`flex flex-row gap-3 p-[16px] h-full bg-[#21212A] rounded-[16px] ${draggedItemId && isDragging ? 'shadow-[0px_0px_10px_0px_rgba(0,0,0,0.3)]' : ''}`}>
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
                                    </motion.div>
                                </div>
                            ) : l.i == "coreum" ? (
                                <div key={l.i} className={`cursor-pointer ${isDragging ? 'cursor-grab' : 'active:cursor-grabbing'} active:cursor-grabbing`}>
                                    <motion.div className={`flex flex-row gap-3 p-[16px] h-full h-full bg-[#21212A] rounded-[16px] ${draggedItemId && isDragging ? 'shadow-[0px_0px_10px_0px_rgba(0,0,0,0.3)]' : ''}`}>
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
                                    </motion.div>
                                </div>
                            ) : l.i == "trade-chart" ? (
                                <div key={l.i} className={`cursor-pointer ${isDragging ? 'cursor-grab' : 'active:cursor-grabbing'} active:cursor-grabbing ${draggedItemId && isDragging ? 'shadow-[0px_0px_10px_0px_rgba(0,0,0,0.3)]' : ''}`}>
                                    <motion.div className={`rounded-[16px] ${draggedItemId && isDragging ? 'shadow-[0px_0px_10px_0px_rgba(0,0,0,0.3)]' : ''}`}>
                                        <TradingChart />
                                    </motion.div>
                                </div>
                            ) : null
                        })}
                    </ResponsiveReactGridLayout>
                </div >
            </div >
        </GridLayoutProvider >
        // </HomeLayout>
    )
}

export default TradingPage;