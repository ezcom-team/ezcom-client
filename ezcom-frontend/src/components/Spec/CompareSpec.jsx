import React from "react";

export const CompareSpec = ({ item, spec, color }) => {
    // console.log(item.Specs)
    // console.log(typeof(item.Specs))

    // console.log('spec = ', spec)

    return (
        <div>
            <div className="w-[320px] max-w-[400px] ml-1 bg-back">
                <div className="mt-12 flex p-2 bg-300 justify-center">
                    {item.Color !== undefined ? (
                        <>
                            {color.map((color, index) => (
                                <div
                                    className="max-w-[50px] w-[32px] h-[32px] rounded-full mx-[8px]"
                                    style={{ backgroundColor: color }}
                                />
                            ))}
                        </>
                    ) : (
                        <div>No color</div>
                    )}
                </div>
                {item.Type === "mouse" ? (
                    <div className="max-w-[350px] h-auto text-100 bg-300">
                        <div className="flex p-2 bg-300 justify-center">
                            <div>{spec.DPI}</div>
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
                    <div className="max-w-[350px] h-auto text-100 bg-300">
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
                    <div className="max-w-[350px] h-auto text-100 bg-300">
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
                ) : item.Type === "GPU" ? (
                    <div className="max-w-[350px] h-auto text-100 bg-300">
                        <div className="flex p-2 bg-300 justify-center">
                            <div>{spec.Boost_Clock}</div>
                        </div>
                        <div className="flex p-2 bg-400 justify-center">
                            <div>{spec.Memory_Size}</div>
                        </div>
                        <div className="flex p-2 bg-300 justify-center">
                            <div>{spec.Memory_Type}</div>
                        </div>
                        <div className="flex p-2 bg-400 justify-center">
                            <div>{spec.NVIDIA_CUDA_Cores}</div>
                        </div>
                    </div>
                ) : item.Type === "mousePad" ? (
                    <div className="max-w-[350px] h-auto text-100 bg-300">
                        <div className="flex p-2 bg-300 justify-center">
                            <div>{spec.Glide}</div>
                        </div>
                        <div className="flex p-2 bg-400 justify-center">
                            <div>{spec.Height}</div>
                        </div>
                        <div className="flex p-2 bg-300 justify-center">
                            <div>{spec.Length}</div>
                        </div>
                        <div className="flex p-2 bg-400 justify-center">
                            <div>{spec.Material}</div>
                        </div>
                        <div className="flex p-2 bg-400 justify-center">
                            <div>{spec.Stitched_edges}</div>
                        </div>
                        <div className="flex p-2 bg-400 justify-center">
                            <div>{spec.Thickness}</div>
                        </div>
                    </div>
                ) : item.Type === "CPU" ? (
                    <div className="max-w-[350px] h-auto text-100 bg-300">
                        <div className="flex p-2 bg-300 justify-center">
                            <div>{spec.Core_Speed_Base}</div>
                        </div>
                        <div className="flex p-2 bg-400 justify-center">
                            <div>{spec.Core_Speed_Boost}</div>
                        </div>
                        <div className="flex p-2 bg-300 justify-center">
                            <div>{spec.Cores}</div>
                        </div>
                        <div className="flex p-2 bg-400 justify-center">
                            <div>{spec.Socket}</div>
                        </div>
                        <div className="flex p-2 bg-400 justify-center">
                            <div>{spec.TDP}</div>
                        </div>
                        <div className="flex p-2 bg-400 justify-center">
                            <div>{spec.Threads}</div>
                        </div>
                    </div>
                ) : item.Type === "monitor" ? (
                    <div className="max-w-[350px] h-auto text-100 bg-300">
                        <div className="flex p-2 bg-300 justify-center">
                            <div>{spec.Aspect_Ratio}</div>
                        </div>
                        <div className="flex p-2 bg-400 justify-center">
                            <div>{spec.FreeSync}</div>
                        </div>
                        <div className="flex p-2 bg-300 justify-center">
                            <div>{spec.G_Sync}</div>
                        </div>
                        <div className="flex p-2 bg-400 justify-center">
                            <div>{spec.Panel_Tech}</div>
                        </div>
                        <div className="flex p-2 bg-400 justify-center">
                            <div>{spec.Refresh_Rate}</div>
                        </div>
                        <div className="flex p-2 bg-400 justify-center">
                            <div>{spec.Resolution}</div>
                        </div>
                        <div className="flex p-2 bg-400 justify-center">
                            <div>{spec.Size}</div>
                        </div>
                    </div>
                ) : (
                    <div>No data type</div>
                )}
            </div>
        </div>
    );
};
