import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import React, { useState } from "react";

export const ColorFilter = ({ onColorChange }) => {
    const [color, setColor] = useState([]);
    const [open, setOpen] = useState(true);

    const colors = ["black", "white", "pink", "yellow", "red", "green", "blue"];

    const handleOpen = () => {
        setOpen(!open);
    };

    const handleColorChange = (selectedColor) => {
        if (color.includes(selectedColor)) {
            setColor((prevColor) =>
                prevColor.filter((item) => item !== selectedColor)
            );
            onColorChange(color.filter((item) => item !== selectedColor));
        } else {
            setColor((prevColor) => [...prevColor, selectedColor]);
            onColorChange([...color, selectedColor]);
        }
    };

    const handleClearFilter = () => {
        const items = document.getElementsByName("checkbox");
        for (var i = 0; i < items.length; i++) {
            if (items[i].type == "checkbox") items[i].checked = false;
        }
        setColor([]);
        onColorChange([]);
    };

    return (
        <div>
            <div className="w-[160px] lg:w-[200px] xl:w-[240px] px-2.5 py-3 lg:p-3 bg-300 text-200 rounded-lg flex flex-col justify-between align-middle lg:text-base">
                <div
                    onClick={handleOpen}
                    className="flex justify-between align-middle md:text-base lg:text-base"
                >
                    Color Filters
                    {open ? (
                        <>
                            <ExpandLess
                                onClick={handleOpen}
                                className="cursor-pointer"
                            />
                        </>
                    ) : (
                        <>
                            <ExpandMore
                                onClick={handleOpen}
                                className="cursor-pointer"
                            />
                        </>
                    )}
                </div>
                <div className="text-400">
                    <div
                        className={`${
                            open ? "block" : "hidden"
                        } mt-5 text-base`}
                    >
                        <div className="text-100 justify-center my-[24px] accent-primary">
                            <div>
                                {colors.map((color) => (
                                    <div className="flex items-center">
                                        <input
                                            value={color.includes(color)}
                                            onChange={() =>
                                                handleColorChange(
                                                    color.toLowerCase()
                                                )
                                            }
                                            name="checkbox"
                                            type="checkbox"
                                            className="w-4 h-4 mr-2 bg-transparent cursor-pointer xl:mr-5 accent-primary opacity-40 checked:opacity-100"
                                        />
                                        <div>{color}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="flex justify-center">
                            <button
                                className="py-[4px] px-[8px] text-sm text-primary hover:text-100 hover:bg-primary rounded-md"
                                onClick={handleClearFilter}
                            >
                                CLEAR
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
