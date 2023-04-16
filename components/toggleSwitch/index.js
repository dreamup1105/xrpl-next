const ToggleSwitch = () => {
    return (
        <div className="flex items-center justify-center">
            <label for="toggleB" className="flex items-center cursor-pointer">
                <div className="relative">
                    <input type="checkbox" id="toggleB" className="sr-only" />
                    <div className="block h-8 bg-gray-600 rounded-full w-14"></div>
                    <div className="absolute w-6 h-6 transition bg-white rounded-full dot left-1 top-1"></div>
                </div>
            </label>
        </div>
    )
}

export default ToggleSwitch