import React, { useState, useEffect, useContext, useRef } from 'react'
import HeatingMap from '@/components/trading/HeatingMap'
import TradingFeed from '@/components/trading/Feed/Feed'
import TradingSwap from '@/components/trading/Swap'
import TradingChart from '@/components/trading/TradingChart'
import Ripple from '@/components/trading/Ripple'
import Hound from '@/components/trading/Hound'
import Solo from '@/components/trading/Solo'
import Core from '@/components/trading/Core'
import _ from "lodash";
import { Responsive, WidthProvider } from "react-grid-layout";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";
import { motion } from 'framer-motion'
import { useDebounce } from 'use-debounce';
import GridLayoutContext, { GridLayoutProvider } from '@/context/GridLayoutContext';
import Swap from '@/components/trading/Swap'
export const sleep = async (time) => {
    return new Promise(resolve => setTimeout(resolve, time))
}

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
        // console.log("item", item, isDraggable)
    }

    const [isDraggable, setIsDraggable] = useState(true);
    const [isDragging, setIsDragging] = useState(false);
    const [draggedItemId, setDraggedItemId] = useState(null);
    const [draggedItemPos, setDraggedItemPos] = useState(null);
    const [originalItemPos, setOriginalItemPos] = useState(0)
    const gridRef = useRef(null)

    const handleDragStart = async (layout, oldItem, newItem, placeholder, event) => {
        setIsDragging(true);
        setDraggedItemId(oldItem.i);
        setDraggedItemPos(oldItem)
        setOriginalItemPos(newItem)
    };

    const onDrag = (layout, oldItem, newItem, placeholder, e, element) => {
        console.log("Dragging position:", newItem.x, newItem.y);
    }

    const handleDragEnd = (layout, oldItem, newItem, placeholder, event) => {
        console.log("issetdrag", isDragging)
        setIsDragging(false)
    };

    const ghostVariants = {
        hidden: {
            opacity: 0,
        },
        visible: {
            opacity: 0.6,
        },
    };

    return (
        <GridLayoutProvider>
            <div className="relative flex w-full grow-1">
                <div className="relative w-full mb-4">
                    {draggedItemPos && draggedItemId == "feed" && <motion.div
                        layout
                        variants={ghostVariants}
                        initial="hidden"
                        animate={isDragging ? 'visible' : 'hidden'}
                        dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
                        style={{
                            position: 'absolute',
                            top: (draggedItemPos.y) * 112 + 30 * (draggedItemPos.y + 1),
                            left: (draggedItemPos.x) * (document.body.offsetWidth - 30 * 4) / 12 + 30 * (draggedItemPos.x / draggedItemPos.w + 1),
                            width: draggedItemPos.w * (document.body.offsetWidth - 30 * 4) / 12,
                            height: draggedItemPos.h * 112 + 90,
                            opacity: "0.5 !important"
                        }}
                        className={`rounded-[16px] cursor-point`}
                    >
                        <TradingFeed />
                    </motion.div>}
                    {draggedItemPos && draggedItemId == "ripple" && <motion.div
                        layout
                        variants={ghostVariants}
                        initial="hidden"
                        animate={isDragging ? 'visible' : 'hidden'}
                        dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
                        style={{
                            position: 'absolute',
                            top: (draggedItemPos.y) * 112 + 30 * (draggedItemPos.y + 1),
                            left: (draggedItemPos.x) * (document.body.offsetWidth - 30 * 7) / 12 + 30 * (draggedItemPos.x / draggedItemPos.w + 1),
                            width: draggedItemPos.w * (document.body.offsetWidth - 30 * 7) / 12,
                            height: draggedItemPos.h * 112,
                            opacity: "0.5 !important"
                        }}
                        className={`flex flex-row gap-2 p-[16px] h-full bg-[#21212A] rounded-[16px]`}
                    >
                        <Ripple />
                    </motion.div>}
                    {draggedItemPos && draggedItemId == "greyhound" && <motion.div
                        layout
                        variants={ghostVariants}
                        initial="hidden"
                        animate={isDragging ? 'visible' : 'hidden'}
                        dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
                        style={{
                            position: 'absolute',
                            top: (draggedItemPos.y) * 112 + 30 * (draggedItemPos.y + 1),
                            left: (draggedItemPos.x) * (document.body.offsetWidth - 30 * 7) / 12 + 30 * (draggedItemPos.x / draggedItemPos.w + 1),
                            width: draggedItemPos.w * (document.body.offsetWidth - 30 * 7) / 12,
                            height: draggedItemPos.h * 112,
                            opacity: "0.5 !important"
                        }}
                        className={`flex flex-row gap-2 p-[16px] h-full bg-[#21212A] rounded-[16px]`}
                    >
                        <Hound />
                    </motion.div>}
                    {draggedItemPos && draggedItemId == "quick-swap" && <motion.div
                        layout
                        variants={ghostVariants}
                        initial="hidden"
                        animate={isDragging ? 'visible' : 'hidden'}
                        dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
                        style={{
                            position: 'absolute',
                            top: (draggedItemPos.y) * 112 + 30 * (draggedItemPos.y + 1),
                            left: (draggedItemPos.x) * (document.body.offsetWidth - 30 * 4) / 12 + 30 * (draggedItemPos.x / draggedItemPos.w + 1),
                            width: draggedItemPos.w * (document.body.offsetWidth - 30 * 4) / 12,
                            height: draggedItemPos.h * 112 + 60,
                            opacity: "0.5 !important"
                        }}
                        className={`flex flex-col px-[15px] pt-[13px] pb-[16px] bg-[#21212A] rounded-[16px] h-full`}
                    >
                        <Swap />
                    </motion.div>}
                    {draggedItemPos && draggedItemId == "heat-map" && <motion.div
                        layout
                        variants={ghostVariants}
                        initial="hidden"
                        animate={isDragging ? 'visible' : 'hidden'}
                        dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
                        style={{
                            position: 'absolute',
                            top: (draggedItemPos.y) * 112 + 30 * (draggedItemPos.y + 1),
                            left: (draggedItemPos.x) * (document.body.offsetWidth - 30 * 4) / 12 + 30 * (draggedItemPos.x / draggedItemPos.w + 1),
                            width: draggedItemPos.w * (document.body.offsetWidth - 30 * 4) / 12,
                            height: draggedItemPos.h * 112 + 85,
                            opacity: "0.5 !important"
                        }}
                        className={`h-full bg-[#21212A] rounded-[16px] p-[15px]`}
                    >
                        <HeatingMap />
                    </motion.div>}
                    {draggedItemPos && draggedItemId == "sologenic" && <motion.div
                        layout
                        variants={ghostVariants}
                        initial="hidden"
                        animate={isDragging ? 'visible' : 'hidden'}
                        dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
                        style={{
                            position: 'absolute',
                            top: (draggedItemPos.y) * 112 + 30 * (draggedItemPos.y + 1),
                            left: (draggedItemPos.x) * (document.body.offsetWidth - 30 * 7) / 12 + 30 * (draggedItemPos.x / draggedItemPos.w + 1),
                            width: draggedItemPos.w * (document.body.offsetWidth - 30 * 7) / 12,
                            height: draggedItemPos.h * 112,
                            opacity: "0.5 !important"
                        }}
                        className={`flex flex-row gap-3 p-[16px] h-full bg-[#21212A] rounded-[16px]`}
                    >
                        <Solo />
                    </motion.div>}
                    {draggedItemPos && draggedItemId == "coreum" && <motion.div
                        layout
                        variants={ghostVariants}
                        initial="hidden"
                        animate={isDragging ? 'visible' : 'hidden'}
                        dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
                        style={{
                            position: 'absolute',
                            top: (draggedItemPos.y) * 112 + 30 * (draggedItemPos.y + 1),
                            left: (draggedItemPos.x) * (document.body.offsetWidth - 30 * 7) / 12 + 30 * (draggedItemPos.x / draggedItemPos.w + 1),
                            width: draggedItemPos.w * (document.body.offsetWidth - 30 * 7) / 12,
                            height: draggedItemPos.h * 112,
                            opacity: "0.5 !important"
                        }}
                        className={`flex flex-row gap-3 p-[16px] h-full bg-[#21212A] rounded-[16px]`}
                    >
                        <Core />
                    </motion.div>}
                    {draggedItemPos && draggedItemId == "trade-chart" && <motion.div
                        layout
                        variants={ghostVariants}
                        initial="hidden"
                        animate={isDragging ? 'visible' : 'hidden'}
                        dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
                        style={{
                            position: 'absolute',
                            top: (draggedItemPos.y) * 112 + 30 * (draggedItemPos.y + 1),
                            left: (draggedItemPos.x) * (document.body.offsetWidth - 30 * 4) / 12 + 30 * (draggedItemPos.x / draggedItemPos.w + 1),
                            width: draggedItemPos.w * (document.body.offsetWidth - 30 * 4) / 12,
                            height: draggedItemPos.h * 112 + 90,
                            opacity: "0.5 !important"
                        }}
                    >
                        <TradingChart />
                    </motion.div>}
                    <ResponsiveReactGridLayout
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
                        onDrag={onDrag}
                        rowHeight={112}
                        isDraggable={isDraggable}
                        ref={gridRef}
                    >
                        {layouts.map((l, idx) => {
                            return l.i == "feed" ? (
                                <div key={l.i} className={`h-full cursor-pointer ${isDragging ? 'cursor-grab' : 'active:cursor-grabbing'} active:cursor-grabbing`} ref={(el) => (tabsRef.current[idx] = el)}>
                                    <motion.div layout
                                        className={`rounded-[16px] h-full cursor-point ${draggedItemId == l.i && isDragging ? 'shadow-[0px_0px_10px_0px_rgba(0,0,0,0.3)] w-[101%]' : ''}`} whileDrag={whileDrag(l)} dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}>
                                        <TradingFeed />
                                    </motion.div>
                                </div>
                            ) : l.i == "ripple" ? (
                                <div key={l.i} className={`cursor-pointer ${isDragging ? 'cursor-grab' : 'active:cursor-grabbing'} active:cursor-grabbing`}>
                                    <motion.div className={`flex flex-row gap-2 p-[16px] h-full bg-[#21212A] rounded-[16px] ${draggedItemId == l.i && isDragging ? 'shadow-[0px_0px_10px_0px_rgba(0,0,0,0.3)] w-[101%]' : ''}`}>
                                        <Ripple />
                                    </motion.div>
                                </div>
                            ) : l.i == "greyhound" ? (
                                <div key={l.i} className={`cursor-pointer ${isDragging ? 'cursor-grab' : 'active:cursor-grabbing'} active:cursor-grabbing`}>
                                    <motion.div className={`flex flex-row gap-2 p-[16px] h-full bg-[#21212A] rounded-[16px] ${draggedItemId == l.i && isDragging ? 'shadow-[0px_0px_10px_0px_rgba(0,0,0,0.3)] w-[101%]' : ''}`}>
                                        <Hound />
                                    </motion.div>
                                </div>
                            ) : l.i == "quick-swap" ? (
                                <div key={l.i} className={`cursor-pointer ${isDragging ? 'cursor-grab' : 'active:cursor-grabbing'} active:cursor-grabbing`}>
                                    <motion.div className={`flex flex-col px-[15px] pt-[13px] pb-[16px] bg-[#21212A] rounded-[16px] h-full ${draggedItemId == l.i && isDragging ? 'shadow-[0px_0px_10px_0px_rgba(0,0,0,0.3)] w-[101%]' : ''}`}>
                                        <TradingSwap />
                                    </motion.div>
                                </div>
                            ) : l.i == "heat-map" ? (
                                <div key={l.i} className={`cursor-pointer ${isDragging ? 'cursor-grab' : 'active:cursor-grabbing'} active:cursor-grabbing`}>
                                    <motion.div className={`h-full bg-[#21212A] rounded-[16px] p-[15px] ${draggedItemId == l.i && isDragging ? 'shadow-[0px_0px_10px_0px_rgba(0,0,0,0.3)] w-[101%]' : ''}`}>
                                        <HeatingMap />
                                    </motion.div>
                                </div>
                            ) : l.i == "sologenic" ? (
                                <div key={l.i} className={`cursor-pointer ${isDragging ? 'cursor-grab' : 'active:cursor-grabbing'} active:cursor-grabbing`}>
                                    <motion.div className={`flex flex-row gap-3 p-[16px] h-full bg-[#21212A] rounded-[16px] ${draggedItemId == l.i && isDragging ? 'shadow-[0px_0px_10px_0px_rgba(0,0,0,0.3)] w-[101%]' : ''}`}>
                                        <Solo />
                                    </motion.div>
                                </div>
                            ) : l.i == "coreum" ? (
                                <div key={l.i} className={`cursor-pointer ${isDragging ? 'cursor-grab' : 'active:cursor-grabbing'} active:cursor-grabbing`}>
                                    <motion.div className={`flex flex-row gap-3 p-[16px] h-full h-full bg-[#21212A] rounded-[16px] ${draggedItemId == l.i && isDragging ? 'shadow-[0px_0px_10px_0px_rgba(0,0,0,0.3)] w-[101%]' : ''}`}>
                                        <Core />
                                    </motion.div>
                                </div>
                            ) : l.i == "trade-chart" ? (
                                <div key={l.i} className={`cursor-pointer ${isDragging ? 'cursor-grab' : 'active:cursor-grabbing'} active:cursor-grabbing ${draggedItemId == l.i && isDragging ? 'shadow-[0px_0px_10px_0px_rgba(0,0,0,0.3)]' : ''}`}>
                                    <motion.div className={`rounded-[16px] ${draggedItemId == l.i && isDragging ? 'shadow-[0px_0px_10px_0px_rgba(0,0,0,0.3)] w-[101%]' : ''}`}>
                                        <TradingChart />
                                    </motion.div>
                                </div>
                            ) : null
                        })}
                    </ResponsiveReactGridLayout>
                </div >
            </div >
        </GridLayoutProvider >
    )
}

export default TradingPage;