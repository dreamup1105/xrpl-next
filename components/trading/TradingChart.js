import React, { useState } from 'react'
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons/faEllipsisV';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { dataSeries } from '@/data/demo/chartdata'
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import ChartSetting from './Chart/ChartSetting';

const TradingChart = () => {
    const [selectedItem, setSelectedItem] = useState(null);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [isOpen, setOpen] = useState(false);
    const styles = {
        feedPopover: {
            backgroundColor: '#18181E',
            opacity: 1,
            borderRadius: '16px'
            // add other styles as needed
        },
    };
    const handleClick = (event) => {
        setOpen(!isOpen)
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleItemClick = (item) => {
        setSelectedItem(item);
    };
    const seriesLabels = ["test", "train", "oot"];
    const visibleSeries = null;
    const xAxisLabel = "x axis";
    const yAxisLabel = "y axis";
    const xDomain = { min: 0, max: 1 };
    const yDomain = { min: 0, max: 1 };
    const showLegend = false;
    const squareSize = null; //400;

    const margin = 75;
    const squareProperties = squareSize && {
        marginTop: margin,
        marginBottom: margin,
        marginLeft: margin,
        marginRight: 0,
        width: squareSize + margin,
        height: squareSize + margin * 2
    };

    const options = {
        chart: {
            type: "line",
            zoomType: "xy",
            reflow: true,
            backgroundColor: '#21212A',
            ...squareProperties
        },
        title: {
            text: ''
        },
        xAxis: {
            title: {
                text: xAxisLabel
            },
            min: xDomain?.min,
            max: xDomain?.max,
            crosshair: true
        },
        yAxis: {
            title: {
                text: yAxisLabel
            },
            min: yDomain?.min,
            max: yDomain?.max,
            crosshair: true,
            visible: false
        },
        legend: {
            enabled: showLegend
        },
        series: dataSeries,
        tooltip: {
            // shows x value as title and then respective y values for every visible series
            formatter() {
                /* eslint-disable react/no-this-in-sfc */
                let content = `<b>${getPrettyValue(this.x)}</b>`;
                this.points.forEach((point, i) => {
                    if (!visibleSeries || visibleSeries[i]) {
                        // TODO: style tooltips
                        if (seriesLabels?.length > 1) {
                            content += `<br/><span style="color:'#ffffff';">\u25CF </span>${point.series.name}: ${getPrettyValue(point.y)}`;
                        } else {
                            content += `<br/><span style="color:'white';">\u25CF </span>${getPrettyValue(point.y)}`;
                        }
                    }
                });
                return content;
            },
            shared: true
        },
        plotOptions: {
            // options for all series
            series: {
                animation: false,
                allowPointSelect: true,
                point: {
                    events: {
                        mouseOver(e) {
                            // setHoverData(e.target as unknown as Highcharts.Point);
                        },
                        click(e) {
                            // setClickPoint(e.point);
                        }
                    }
                }
            }
        },
        credits: {
            enabled: false
        }
    };

    function getPrettyValue(value) {
        let prettyValue = value;
        if (typeof value === "number") {
            prettyValue = Number(value.toFixed(3));
        } else if (typeof value === "boolean") {
            prettyValue = value.toString();
        } else if (typeof value === "undefined") {
            prettyValue = "-";
        } else if (value === "") {
            prettyValue = "None";
        }
        return prettyValue.toString();
    }
    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;
    return (
        <>
            <div className="flex flex-col bg-[#21212A] rounded-[16px] p-[16px] h-full relative">
                <div className="flex flex-row justify-between mb-[30px]">
                    <div className="text-white text-[20px] font-bold">Volumn - HOUND</div>
                    <button className="text-white" onClick={handleClick} >
                        <FontAwesomeIcon icon={faEllipsisV} className="text-white" />
                    </button>
                    {isOpen ? (
                        <div className="absolute top-[80px] right-2 z-[2]" >
                            <ChartSetting />
                        </div>) : null}
                </div>
                <div className="border border-[#2C2C35] rounded-[8px] w-fit p-2">
                    <div >
                        <button onClick={() => handleItemClick('Today')} className={`p-2 rounded-lg cursor-pointer ${selectedItem === 'Today' ? 'bg-[#272832] text-white' : 'text-white'}`}>Today</button>
                        <button onClick={() => handleItemClick('Week')} className={`p-2 rounded-lg cursor-pointer ${selectedItem === 'Week' ? 'bg-[#272832] text-white' : 'text-white'}`}>Week</button>
                        <button onClick={() => handleItemClick('Month')} className={`p-2 rounded-lg cursor-pointer ${selectedItem === 'Month' ? 'bg-[#272832] text-white' : 'text-white'}`}>Month</button>
                        <button onClick={() => handleItemClick('Year')} className={`p-2 rounded-lg cursor-pointer ${selectedItem === 'Year' ? 'bg-[#272832] text-white' : 'text-white'}`}>Year</button>
                        <button onClick={() => handleItemClick('Max')} className={`p-2 rounded-lg cursor-pointer ${selectedItem === 'Max' ? 'bg-[#272832] text-white' : 'text-white'}`}>Max</button>
                    </div>
                </div>
                <div>
                    <HighchartsReact highcharts={Highcharts} options={options} />
                </div>
            </div>
        </>
    )
}

export default TradingChart