import React, { useState, useEffect } from "react";
import ReactSpeedometer from "react-d3-speedometer";

const Speedometer = () => {
    const [value, setValue] = useState(0);

    useEffect(() => {
        const randomValue = Math.floor(Math.random() * 1025); // Generate a random value between 0 and 1024
        setValue(randomValue);
    }, []); // Run only once on component mount

    return (
        <div className="w-full md:w-1/2 lg:mr-4 mb-4 md:mb- font-anuphan">
            <div className="speedometer" style={{ height: "10px" }}>
                <ReactSpeedometer
                    maxValue={1024}
                    value={value}
                    needleTransitionDuration={900}
                    currentValueText={`${Math.round(value)} MB`} // Round the value to the nearest integer
                />
            </div>
            {/* <div className="text-center mt-40 text-sm dark:text-white font-anuphan">
                Your current data usage
            </div> */}
        </div>
    );
};

export default Speedometer;
