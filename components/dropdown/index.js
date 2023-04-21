import { useState } from 'react'
import { useRouter } from 'next/router';

const Dropdown = () => {
    const [layout, setLayout] = useState('Explore');
    const router = useRouter();
    const handleChange = (event) => {
        console.log("event-value", event.target.value)
        event.preventDefault()
        setLayout(event.target.value);
        if (event.target.value === 'Trading') {
            router.push('/trading')
        } else if (event.target.value === 'Custom') {
            router.push('/custom');
            // handle custom option
        } else if (event.target.value === 'Explore') {
            router.push('/explore');
        }
    };

    return (
        <>
            <div className="flex flex-row items-center justify-center gap-2">
                <div className="min-w-[120px] text-white relative">
                    <div className="text-[10px] absolute -top-5 left-3">Choose Dash:</div>
                    <div className="relative w-full">
                        <select
                            id="layout-dash"
                            value={layout}
                            onChange={handleChange}
                            className="px-1 py-0 rounded-[8px] bg-[#1A1921] text-[24px]"
                        >
                            <option className="text-white" value="Explore">Explore</option>
                            <option value="Trading">Trading</option>
                            <option value="Custom">Custom</option>
                        </select>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dropdown