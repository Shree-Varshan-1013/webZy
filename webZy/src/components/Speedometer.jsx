import React, { useState } from "react";
import ReactSpeedometer from "react-d3-speedometer";

const Speedometer = () => {
    const [value, setValue] = useState(733);

    return (
        <div className="w-full md:w-1/2 lg:mr-4 mb-4 md:mb- font-anuphan">
            <div className="speedometer" style={{height: "10px" }}>
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
