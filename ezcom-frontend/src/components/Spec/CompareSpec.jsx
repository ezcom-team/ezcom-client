import React from "react";

export const CompareSpec = ({ item, spec, color }) => {
  return (
    <div>
      <div className="w-[320px] text-base">
        <div className="flex justify-center pt-[40px]">
          {item.Color !== undefined ? (
            <div className="flex justify-center w-[320px] bg-300 ">
              {color.map((color, index) => (
                <div
                  className="max-w-[50px] w-[32px] h-[32px] my-[4px] rounded-full mx-[8px]"
                  style={{ backgroundColor: color }}
                />
              ))}
            </div>
          ) : (
            <div>No color</div>
          )}
        </div>
        {item.Type === "mouse" ? (
          <div className="max-w-[350px] text-100 ">
            <div className="flex justify-center p-2 ">
              <div>{spec.Sensor}</div>
            </div>
            <div className="flex justify-center p-2 bg-300">
              <div>{spec.ButtonSwitch}</div>
            </div>
            <div className="flex justify-center p-2 ">
              <div>{spec.Connection}</div>
            </div>
            <div className="flex justify-center p-2 bg-300">
              <div>{spec.Length}</div>
            </div>
            <div className="flex justify-center p-2 ">
              <div>{spec.Weight}</div>
            </div>
            <div className="flex justify-center p-2 bg-300">
              <div>{spec.PollingRate}</div>
            </div>
            <div className="flex justify-center p-2 ">
              <div>{spec.ButtonForce}</div>
            </div>
            <div className="flex justify-center p-2 bg-300">
              <div>{spec.Shape}</div>
            </div>
            <div className="flex justify-center p-2 ">
              <div>{spec.Height}</div>
            </div>
            <div className="flex justify-center p-2 bg-300">
              <div>{spec.Width}</div>
            </div>
            <div className="flex justify-center p-2 ">
              <div>{spec.DPI}</div>
            </div>
          </div>
        ) : item.Type === "headset" ? (
          <div className="max-w-[350px] h-auto text-100">
            <div className="flex justify-center p-2 ">
              <div>{spec.Cable_Length}</div>
            </div>
            <div className="flex justify-center p-2 bg-300">
              <div>{spec.Connection}</div>
            </div>
            <div className="flex justify-center p-2 ">
              <div>{spec.Headset_Type}</div>
            </div>
            <div className="flex justify-center p-2 bg-300">
              <div>{spec.Microphone}</div>
            </div>
            <div className="flex justify-center p-2 ">
              <div>{spec.Noise_Cancelling}</div>
            </div>
            <div className="flex justify-center p-2 bg-300">
              <div>{spec.Weight}</div>
            </div>
          </div>
        ) : item.Type === "keyboard" ? (
          <div className="max-w-[350px] h-auto text-100">
            <div className="flex justify-center p-2 ">
              <div>{spec.Form_Factor}</div>
            </div>
            <div className="flex justify-center p-2 bg-300">
              <div>{spec.Height}</div>
            </div>
            <div className="flex justify-center p-2 ">
              <div>{spec.Length}</div>
            </div>
            <div className="flex justify-center p-2 bg-300">
              <div>{spec.PCB}</div>
            </div>
            <div className="flex justify-center p-2 ">
              <div>{spec.RGB}</div>
            </div>
            <div className="flex justify-center align-middle p-2 h-[40px] overflow-scroll bg-300">
              <div>{spec.Switches}</div>
            </div>
            <div className="flex justify-center p-2 ">
              <div>{spec.Weight}</div>
            </div>
            <div className="flex justify-center p-2 bg-300">
              <div>{spec.Width}</div>
            </div>
          </div>
        ) : item.Type === "GPU" ? (
          <div className="max-w-[350px] h-auto text-100">
            <div className="flex justify-center p-2 ">
              <div>{spec.Boost_Clock}</div>
            </div>
            <div className="flex justify-center p-2 bg-300">
              <div>{spec.Memory_Size}</div>
            </div>
            <div className="flex justify-center p-2 ">
              <div>{spec.Memory_Type}</div>
            </div>
            <div className="flex justify-center p-2 bg-300">
              <div>{spec.NVIDIA_CUDA_Cores}</div>
            </div>
          </div>
        ) : item.Type === "mousePad" ? (
          <div className="max-w-[350px] h-auto text-100 ">
            <div className="flex justify-center p-2 ">
              <div>{spec.Glide}</div>
            </div>
            <div className="flex justify-center p-2 bg-300">
              <div>{spec.Height}</div>
            </div>
            <div className="flex justify-center p-2 ">
              <div>{spec.Length}</div>
            </div>
            <div className="flex justify-center p-2 bg-300">
              <div>{spec.Material}</div>
            </div>
            <div className="flex justify-center p-2 ">
              <div>{spec.Stitched_edges}</div>
            </div>
            <div className="flex justify-center p-2 bg-300">
              <div>{spec.Thickness}</div>
            </div>
          </div>
        ) : item.Type === "CPU" ? (
          <div className="max-w-[350px] h-auto text-100 ">
            <div className="flex justify-center p-2 ">
              <div>{spec.Core_Speed_Base}</div>
            </div>
            <div className="flex justify-center p-2 bg-300">
              <div>{spec.Core_Speed_Boost}</div>
            </div>
            <div className="flex justify-center p-2 ">
              <div>{spec.Cores}</div>
            </div>
            <div className="flex justify-center p-2 bg-300">
              <div>{spec.Socket}</div>
            </div>
            <div className="flex justify-center p-2 ">
              <div>{spec.TDP}</div>
            </div>
            <div className="flex justify-center p-2 bg-300">
              <div>{spec.Threads}</div>
            </div>
          </div>
        ) : item.Type === "monitor" ? (
          <div className="max-w-[350px] h-auto text-100 ">
            <div className="flex justify-center p-2 ">
              <div>{spec.Aspect_Ratio}</div>
            </div>
            <div className="flex justify-center p-2 bg-300">
              <div>{spec.FreeSync}</div>
            </div>
            <div className="flex justify-center p-2 ">
              <div>{spec.G_Sync}</div>
            </div>
            <div className="flex justify-center p-2 bg-300">
              <div>{spec.Panel_Tech}</div>
            </div>
            <div className="flex justify-center p-2 ">
              <div>{spec.Refresh_Rate}</div>
            </div>
            <div className="flex justify-center p-2 bg-300">
              <div>{spec.Resolution}</div>
            </div>
            <div className="flex justify-center p-2 ">
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
