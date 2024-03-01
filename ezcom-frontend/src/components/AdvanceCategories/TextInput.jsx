import React, { useState } from "react";

export const TextInput = ({ id, title, unit, onChange }) => {
    const [min, setMin] = useState("");
    const [max, setMax] = useState("");

    const handleChange = (inputName, value) => {
        if (inputName === "min") {
            setMin(() => {
                // Update min and call onChange with the latest values
                onChange({ id, min: value, max });
                return value;
            });
        } else if (inputName === "max") {
            setMax(() => {
                // Update max and call onChange with the latest values
                onChange({ id, min, max: value });
                return value;
            });
        }
    };

    return (
        <div className="">
            <div className="text-200">{title}</div>
            <div className="flex ml-[4px]">
                <input
                    name="min"
                    type="number"
                    value={min}
                    onChange={(e) =>
                        handleChange(e.target.name, e.target.value)
                    }
                    className="bg-300 w-[32px] md:w-[48px] h-[24px] m-[8px] rounded [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                />
                <div className="my-auto">-</div>
                <input
                    name="max"
                    type="number"
                    value={max}
                    onChange={(e) =>
                        handleChange(e.target.name, e.target.value)
                    }
                    className="bg-300 w-[32px] md:w-[48px] h-[24px] m-[8px] rounded [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                />
                <div className="my-auto text-200">{unit}</div>
            </div>
        </div>
    );
};
