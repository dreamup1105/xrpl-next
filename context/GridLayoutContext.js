import React, { createContext, useState } from 'react';

const GridLayoutContext = createContext();
// Two Columns View
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
        mh: 0.8
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
        h: 3,
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
export const GridLayoutProvider = ({ children }) => {
    const [layouts, setLayout] = useState(trade_layouts);
    const [column, setColumn] = useState(2)
    const handleLayoutChange = (newLayout) => {
        console.log("newLayout:", newLayout)
        setLayout(newLayout);
    };

    const value = { column, setColumn, layouts, setLayout, handleLayoutChange };

    return (
        <GridLayoutContext.Provider value={value}>
            {children}
        </GridLayoutContext.Provider>
    );
};

export default GridLayoutContext;