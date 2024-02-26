import React from "react";

export const CompareSpec = ({ item, spec }) => {
    // console.log(item.Specs)
    // console.log(typeof(item.Specs))

    // console.log('spec = ', spec)

    return (
        <div>
            <div className="w-[320px] max-w-[400px] ml-1 bg-back">
                {item.Type === "mouse" ? (
                    <div className="mt-12 max-w-[350px] h-auto text-100 bg-300">
                        <div className="flex p-2 justify-center">
                            {item.Color.map((color, index) => (
                                <div
                                    className="max-w-[50px] w-[32px] h-[32px] rounded-full mx-[8px]"
                                    style={{ backgroundColor: color }}
                                />
                            ))}
                        </div>
                        <div className="flex p-2 bg-400 justify-center">
                            <div>{spec.Sensor}</div>
                        </div>
                        <div className="flex p-2 bg-300 justify-center">
                            <div>{spec.ButtonSwitch}</div>
                        </div>
                        <div className="flex p-2 bg-400 justify-center">
                            <div>{spec.Connection}</div>
                        </div>
                        <div className="flex p-2 bg-300 justify-center">
                            <div>{spec.Length}</div>
                        </div>
                        <div className="flex p-2 bg-400 justify-center">
                            <div>{spec.Weight}</div>
                        </div>
                        <div className="flex p-2 bg-300 justify-center">
                            <div>{spec.PollingRate}</div>
                        </div>
                        <div className="flex p-2 bg-400 justify-center">
                            <div>{spec.ButtonForce}</div>
                        </div>
                        <div className="flex p-2 bg-300 justify-center">
                            <div>{spec.Shape}</div>
                        </div>
                        <div className="flex p-2 bg-400 justify-center">
                            <div>{spec.Height}</div>
                        </div>
                        <div className="flex p-2 bg-300 justify-center">
                            <div>{spec.Width}</div>
                        </div>
                    </div>
                ) : item.Type === "headset" ? (
                    <div className="mt-12 max-w-[350px] h-auto text-100 bg-300">
                        <div className="flex p-2 bg-300 justify-center">
                            <div>{spec.Cable_Length}</div>
                        </div>
                        <div className="flex p-2 bg-400 justify-center">
                            <div>{spec.Connection}</div>
                        </div>
                        <div className="flex p-2 bg-300 justify-center">
                            <div>{spec.Headset_Type}</div>
                        </div>
                        <div className="flex p-2 bg-400 justify-center">
                            <div>{spec.Microphone}</div>
                        </div>
                        <div className="flex p-2 bg-300 justify-center">
                            <div>{spec.Noise_Cancelling}</div>
                        </div>
                        <div className="flex p-2 bg-400 justify-center">
                            <div>{spec.Weight}</div>
                        </div>
                    </div>
                ) : item.Type === "keyboard" ? (
                    <div className="mt-12 max-w-[350px] h-auto text-100 bg-300">
                        <div className="flex p-2 bg-300 justify-center">
                            <div>{spec.Form_Factor}</div>
                        </div>
                        <div className="flex p-2 bg-400 justify-center">
                            <div>{spec.Height}</div>
                        </div>
                        <div className="flex p-2 bg-300 justify-center">
                            <div>{spec.Length}</div>
                        </div>
                        <div className="flex p-2 bg-400 justify-center">
                            <div>{spec.PCB}</div>
                        </div>
                        <div className="flex p-2 bg-300 justify-center">
                            <div>{spec.RGB}</div>
                        </div>
                        <div className="flex p-2 bg-400 justify-center">
                            <div>{spec.Switches}</div>
                        </div>
                        <div className="flex p-2 bg-300 justify-center">
                            <div>{spec.Weight}</div>
                        </div>
                        <div className="flex p-2 bg-400 justify-center">
                            <div>{spec.Width}</div>
                        </div>
                    </div>
                ) : item.Type === "vga" ? (
                    <></>
                ) : item.Type === "mousepad" ? (
                    <></>
                ) : item.Type === "cpu" ? (
                    <></>
                ) : (
                    <>No data type</>
                )}
            </div>
        </div>
    );
};
