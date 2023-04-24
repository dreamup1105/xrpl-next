import React from "react";
import { useState, useEffect, useRef } from "react";
import images from '../../public';
import Image from 'next/image';

const Select = () => {

    const [search, setSearch] = useState('');
    const [showSelector, setShowSelector] = useState(false);
    const [selected, setSelected] = useState({ 1: 'Chris' });
    const [options, setOptions] = useState([]);
    const searchInputRef = useRef(null);

    function clearOpts() {
        setSearch('');
        setShowSelector(false);
        setOptions([]);
    }

    function select(id, name) {
        setSelected(prevSelected => ({ ...prevSelected, [id]: name }));
        clearOpts();
        window.dispatchEvent(new CustomEvent('selected', { detail: Object.keys(selected) }));
    }

    function remove(id) {
        setSelected(prevSelected => {
            const newSelected = { ...prevSelected };
            delete newSelected[id];
            return newSelected;
        });
        window.dispatchEvent(new CustomEvent('selected', { detail: Object.keys(selected) }));
    }

    function goSearch() {
        if (search) {
            setOptions({ 5: 'Carl', 6: 'Alex', 7: 'Bryan' });
            setShowSelector(true);
        } else {
            setShowSelector(false);
        }
    }

    function handleClick() {
        searchInputRef.current.focus();
    }


    function handleOutsideClick(event) {
        if (!event.target.closest('.bg-white')) {
            setShowSelector(false);
        }
    }

    useEffect(() => {
        function handleSelected(event) {
            console.log(event.detail);
        }
        window.addEventListener('selected', handleSelected);
        return () => {
            window.removeEventListener('selected', handleSelected);
        };
    }, []);




    return (
        <>
            <div className="flex flex-col flex-1 justify-center items-center grow bg-[#1A1921] h-full">
                <div className="min-w-[500px] w-[500px] mx-auto">
                    <div className="rounded-[16px]  h-auto bg-[#21212A] text-white p-3">
                        <div className="px-2 mb-2">
                            <div className="description w-full text-center text-[24px] mb-[15px]">
                                Select projects to follow
                            </div>
                            <div className="spanclass w-full text-center text-white opacity-60 text-[14px] mb-[30px]">
                                Choose which projects and tokens to follow and stay informed on
                                the latest news and updates
                            </div>
                            <div className="h-[186px] border border-white border-opacity-50 rounded-[16px]  bg-[#21212A] p-3 ">
                                <div className="grid grid-flow-col grid-rows-3 gap-4 relative">
                                    {/* <button className="bg-[#3C3E4B] bg-p-[5px] justify-between text-center  rounded-[10px]">
                                        XRP (Ripple)
                                    </button> */}

                                    <div className="rounded-md p-2 flex gap-1 flex-wrap" onClick={handleClick} onClickOutside={handleOutsideClick}>
                                        {Object.entries(selected).map(([id, name]) => (
                                            <div key={id} className="bg-[#A6B0CF] bg-opacity-20 rounded-md flex items-center h-[32px]">
                                                <div className="p-2">{name}</div>
                                                <div onClick={() => remove(id)} className="p-2 select-none rounded-r-md cursor-pointer hover:bg-magma-orange-clear">
                                                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M12.5745 1L1 12.5745" stroke="#FEAD69" strokeWidth="2" strokeLinecap="round" />
                                                        <path d="M1.00024 1L12.5747 12.5745" stroke="#FEAD69" strokeWidth="2" strokeLinecap="round" />
                                                    </svg>
                                                </div>
                                            </div>
                                        ))}
                                        <div className="flex-1">
                                            <input type="text" value={search} onChange={event => setSearch(event.target.value)} ref={searchInputRef}
                                                onInput={() => setTimeout(goSearch, 400)} placeholder="Search"
                                                className="bg-[#1f1e1d] w-full border-0 focus:border-0 focus:outline-none focus:ring-0 py-1 px-0" />
                                            {showSelector && (
                                                <div className="absolute left-0 bg-[#1f1e1d] opecity-20 z-30 w-full rounded-b-md font-medium">
                                                    <div className="p-3 space-y-1">
                                                        {Object.entries(options).map(([id, name]) => (
                                                            <div key={id}>
                                                                {!selected[id] && (
                                                                    <div onClick={() => select(id, name)}
                                                                        className="bg-[#A6B0CF] bg-opacity-20 border-2 border-blue-200 cursor-pointer rounded-md p-2 hover:border-light-blue-1">
                                                                        {name}
                                                                    </div>
                                                                )}
                                                            </div>
                                                        ))}
                                                        {options.length === 0 && (
                                                            <div className="text-gray-500">
                                                                No result
                                                            </div>
                                                        )}
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    </div>

                                    <div className="mt-[10px] flex leading-[40px] mx-auto bg-[#111015] w-[164px]  h-[50px]  p-[5px] justify-center text-center  rounded-[10px]">
                                        <Image
                                            src={images.Oxp}
                                            className="rounded-[40px] w-[20px] h-[20px] mt-[10px] mr-[15px]"
                                        />
                                        OPX(onXRP)
                                    </div>


                                </div>


                            </div>
                            <p className="opacity-60 underline underline-offset-8 text-center font-[14px] font-[Mont] mt-[54px] bottom-1 mb-[54px]">
                                <a href="/authentication/option" className="opacity-60 underline underline-offset-8 text-center font-[14px] font-[Mont] mt-[54px] bottom-1 mb-[54px]">
                                    Skip this step
                                </a>
                            </p>
                            <div className="text-center">
                                <span className="h-[10px] w-[10px] bg-white rounded-full inline-block mr-[15px] ml-[15px] "></span>
                                <span className="h-[10px] w-[10px] bg-white  rounded-full inline-block mr-[15px] ml-[15px]"></span>
                                <span className="h-[10px] w-[10px] bg-white opacity-5 rounded-full inline-block mr-[15px] ml-[15px]"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Select;
