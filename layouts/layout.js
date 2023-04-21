import { useState, useEffect } from "react";
import _ from "lodash";
import { Responsive, WidthProvider } from "react-grid-layout";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";

const ResponsiveReactGridLayout = WidthProvider(Responsive);

const DropDrag = (props) => {
    const trade_layouts = [
        {
            x: 0,
            y: 0,
            w: 4,
            h: 3,
            i: 'feed',
            status: false,
            mw: 4,
            mh: 9
        },
        {
            x: 4,
            y: 0,
            w: 2,
            h: 1,
            i: 'ripple',
            status: false,
            mw: 4,
            mh: 9
        },
        {
            x: 6,
            y: 0,
            w: 2,
            h: 1,
            i: 'greyhound',
            status: false,
            mw: 4,
            mh: 9
        },
        {
            x: 4,
            y: 1,
            w: 4,
            h: 3,
            i: 'quick-swap ',
            status: false,
            mw: 4,
            mh: 9
        },
        {
            x: 4,
            y: 4,
            w: 4,
            h: 3,
            i: 'heat-map',
            status: false,
            mw: 4,
            mh: 9
        },
        {
            x: 8,
            y: 0,
            w: 2,
            h: 1,
            i: 'sologenic',
            status: false,
            mw: 4,
            mh: 9
        },
        {
            x: 10,
            y: 0,
            w: 2,
            h: 1,
            i: 'coreum',
            status: false,
            mw: 4,
            mh: 9
        },
        {
            x: 8,
            y: 1,
            w: 4,
            h: 3,
            i: 'trade-chart',
            status: false,
            mw: 4,
            mh: 9
        },
        // {
        //     x:0,
        //     y:0,
        //     w:4,
        //     h:3,
        //     i:'feed',
        //     status: false,
        //     mw:4,
        //     mh:9
        // },
    ]
    const [layouts, setLayouts] = useState({
        lg: trade_layouts
    })
    console.log("layouts", layouts)
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

    const generateDOM = () => {
        return layouts.lg.map((l, i) => {
            return (
                <div
                    key={l.i}
                    style={{ background: "#ccc" }}
                    className={l.static ? "static" : ""}
                >
                    {l.static ? (
                        <span
                            className="text"
                            title="This item is static and cannot be removed or resized."
                        >
                            Static - {l.i}
                        </span>
                    ) : (
                        <span className="text">{l.i}</span>
                    )}
                </div>
            );
        });
    };

    return (
        <>
            <div className="mb-4">
                <ResponsiveReactGridLayout
                    {...props}
                    style={{ background: "#f0f0f0" }}
                    layouts={layouts}
                    measureBeforeMount={false}
                    useCSSTransforms={mounted}
                    compactType={compactType}
                    preventCollision={!compactType}
                    onLayoutChange={onLayoutChange}
                    onBreakpointChange={onBreakpointChange}
                    onDrop={onDrop}
                    isDroppable
                >
                    {generateDOM()}
                </ResponsiveReactGridLayout>
            </div>
        </>
    );
};

export default DropDrag;

DropDrag.defaultProps = {
    className: "layout",
    rowHeight: 30,
    onLayoutChange: (layout, layouts) => { },
    cols: { lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 },
    breakpoints: { lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 },
    containerPadding: [0, 0]
};
