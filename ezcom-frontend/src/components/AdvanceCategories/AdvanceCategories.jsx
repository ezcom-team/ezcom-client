import React, { useState } from "react";

export const AdvanceCategories = ({ onAdvanceFilterChange, onColorChange }) => {
    const [advanceFilter, setAdvanceFilter] = useState([]);
    const [color, setColor] = useState([]);

    const colors = ["black", "white", "red", "pink", "yellow"];

    const handleAdvanceFilter = (event) => {
        const items = document.getElementsByName("checkbox");
        for (var i = 0; i < items.length; i++) {
            if (items[i].type == "checkbox") items[i].checked = false;
        }
        setAdvanceFilter(event.target.value);
        onAdvanceFilterChange({
            advanceFilter: event.target.value,
            colorFilters: color,
        });
        setColor([]);
    };

    const handleColorChange = (selectedColor) => {
        if (color.includes(selectedColor)) {
            setColor((prevColor) =>
                prevColor.filter((item) => item !== selectedColor)
            );
            onColorChange({
                advanceFilter,
                colorFilters: color.filter((item) => item !== selectedColor),
            });
        } else {
            setColor((prevColor) => [...prevColor, selectedColor]);
            onColorChange({
                advanceFilter,
                colorFilters: [...color, selectedColor],
            });
        }
    };

    const handleClearFilter = () => {
        const items = document.getElementsByName("checkbox");
        for (var i = 0; i < items.length; i++) {
            if (items[i].type == "checkbox") items[i].checked = false;
        }
        setAdvanceFilter([]);
        setColor([]);
    };

    console.log(color);

    return (
        <div>
            <div className="w-40 lg:w-60 xl:w-72 px-2.5 py-3 lg:p-3 bg-300 text-200 rounded-lg flex flex-col justify-between align-middle lg:text-xl">
                Advance Categories
                <div className="bg-300 text-400">
                    <div className="mt-5 lg:text-lg transition-opacity duration-300 ease-in-out">
                        <div className="flex justify-center">
                            <select
                                value={advanceFilter}
                                onChange={handleAdvanceFilter}
                                className="text-100 bg-400 cursor-pointer"
                            >
                                <option value="">---- Select type ----</option>
                                <option value="VGA">VGA</option>
                                <option value="Headset">Headset</option>
                                <option value="Keyboard">Keyboard</option>
                                <option value="Mouse">Mouse</option>
                                <option value="Mousepad">Mousepad</option>
                                <option value="CPU">CPU</option>
                            </select>
                        </div>
                        <div className="text-100 justify-center my-[24px] accent-primary">
                            {advanceFilter === "VGA" ? (
                                <div>VGA</div>
                            ) : advanceFilter === "Headset" ? (
                                <div className="flex justify-center gap-[4px]">
                                    <div className="border-gray-500 border-r-[1px] p-[8px]">
                                        <div>Color</div>
                                        {colors.map((color) => (
                                            <div className="flex">
                                                <input
                                                    value={color.includes(
                                                        color
                                                    )}
                                                    onChange={() =>
                                                        handleColorChange(color)
                                                    }
                                                    name="checkbox"
                                                    type="checkbox"
                                                    className="mr-[8px]"
                                                />
                                                <div>{color}</div>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="border-gray-500 border-l-[1px] p-[8px]">
                                        <div className="flex">
                                            <div>Weight:</div>
                                            <div className="flex ml-[4px]">
                                                <input
                                                    type="number"
                                                    className="bg-400 xl:w-[32px] w-[24px] h-[24px] mr-[4px] rounded [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                                                />
                                                <div>-</div>
                                                <input className="bg-400 xl:w-[32px] w-[24px] h-[24px] ml-[4px] rounded [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none" />
                                                <div>g</div>
                                            </div>
                                        </div>
                                        <div>
                                            <div>Cable Length:</div>
                                            <div className="flex ml-[4px]">
                                                <input
                                                    type="number"
                                                    className="bg-400 xl:w-[32px] w-[24px] h-[24px] mr-[4px] rounded [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                                                />
                                                <div>-</div>
                                                <input className="bg-400 xl:w-[32px] w-[24px] h-[24px] ml-[4px] rounded [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none" />
                                                <div>cm</div>
                                            </div>
                                        </div>
                                        <div className="flex">
                                            <input
                                                name="checkbox"
                                                type="checkbox"
                                                className="mr-[8px]"
                                            />
                                            <div>Noise Cancelling</div>
                                        </div>
                                    </div>
                                </div>
                            ) : advanceFilter === "Keyboard" ? (
                                <div className="flex justify-center gap-[4px]">
                                    <div className="border-gray-500 border-r-[1px] p-[8px]">
                                        <div>Color</div>
                                        {colors.map((color) => (
                                            <div className="flex">
                                                <input
                                                    value={color.includes(
                                                        color
                                                    )}
                                                    onChange={() =>
                                                        handleColorChange(color)
                                                    }
                                                    name="checkbox"
                                                    type="checkbox"
                                                    className="mr-[8px]"
                                                />
                                                <div>{color}</div>
                                            </div>
                                        ))}
                                    </div>
                                    <div>
                                        <div className="border-gray-500 border-l-[1px] border-b-[1px] rounded-bl-md p-[8px] mb-[4px]">
                                            <div className="flex">
                                                <div>Width:</div>
                                                <div className="flex ml-[4px]">
                                                    <input
                                                        type="number"
                                                        className="bg-400 xl:w-[32px] w-[24px] h-[24px] mr-[4px] rounded [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                                                    />
                                                    <div>-</div>
                                                    <input className="bg-400 xl:w-[32px] w-[24px] h-[24px] ml-[4px] rounded [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none" />
                                                    <div>cm</div>
                                                </div>
                                            </div>
                                            <div className="flex">
                                                <div>Height:</div>
                                                <div className="flex ml-[4px]">
                                                    <input
                                                        type="number"
                                                        className="bg-400 xl:w-[32px] w-[24px] h-[24px] mr-[4px] rounded [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                                                    />
                                                    <div>-</div>
                                                    <input className="bg-400 xl:w-[32px] w-[24px] h-[24px] ml-[4px] rounded [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none" />
                                                    <div>cm</div>
                                                </div>
                                            </div>
                                            <div className="flex">
                                                <div>Weight:</div>
                                                <div className="flex ml-[4px]">
                                                    <input
                                                        type="number"
                                                        className="bg-400 xl:w-[32px] w-[24px] h-[24px] mr-[4px] rounded [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                                                    />
                                                    <div>-</div>
                                                    <input className="bg-400 xl:w-[32px] w-[24px] h-[24px] ml-[4px] rounded [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none" />
                                                    <div>g</div>
                                                </div>
                                            </div>
                                            <div className="flex">
                                                <div>Length:</div>
                                                <div className="flex ml-[4px]">
                                                    <input
                                                        type="number"
                                                        className="bg-400 xl:w-[32px] w-[24px] h-[24px] mr-[4px] rounded [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                                                    />
                                                    <div>-</div>
                                                    <input className="bg-400 xl:w-[32px] w-[24px] h-[24px] ml-[4px] rounded [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none" />
                                                    <div>cm</div>
                                                </div>
                                            </div>
                                            <div>
                                                <div>Form factor:</div>
                                                <div className="flex ml-[4px]">
                                                    <input
                                                        type="number"
                                                        className="bg-400 xl:w-[32px] w-[24px] h-[24px] mr-[4px] rounded [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                                                    />
                                                    <div>-</div>
                                                    <input className="bg-400 xl:w-[32px] w-[24px] h-[24px] ml-[4px] rounded [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none" />
                                                    <div>%</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="border-gray-500 border-l-[1px] border-t-[1px] rounded-tl-md p-[8px] mt-[4px]">
                                            <div className="flex">
                                                <input
                                                    name="checkbox"
                                                    type="checkbox"
                                                    className="mr-[8px]"
                                                />
                                                <div>RGB</div>
                                            </div>
                                            <div>Switches</div>
                                            <div className="flex">
                                                <input
                                                    name="checkbox"
                                                    type="checkbox"
                                                    className="mr-[8px]"
                                                />
                                                <div>Lekker</div>
                                            </div>
                                            <div className="flex">
                                                <input
                                                    name="checkbox"
                                                    type="checkbox"
                                                    className="mr-[8px]"
                                                />
                                                <div>xxx</div>
                                            </div>
                                            <div className="flex">
                                                <input
                                                    name="checkbox"
                                                    type="checkbox"
                                                    className="mr-[8px]"
                                                />
                                                <div>xx</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ) : advanceFilter === "Mouse" ? (
                                <div className="flex justify-center gap-[4px]">
                                    <div className="border-gray-500 border-r-[1px] p-[8px]">
                                        <div>Color</div>
                                        {colors.map((color) => (
                                            <div className="flex">
                                                <input
                                                    value={color.includes(
                                                        color
                                                    )}
                                                    onChange={() =>
                                                        handleColorChange(color)
                                                    }
                                                    name="checkbox"
                                                    type="checkbox"
                                                    className="mr-[8px]"
                                                />
                                                <div>{color}</div>
                                            </div>
                                        ))}
                                    </div>
                                    <div>
                                        <div className="border-gray-500 border-l-[1px] border-b-[1px] rounded-bl-md p-[8px] mb-[4px]">
                                            <div className="flex justify-end">
                                                <div>Width:</div>
                                                <div className="flex ml-[4px]">
                                                    <input
                                                        type="number"
                                                        className="bg-400 xl:w-[32px] w-[24px] h-[24px] mr-[4px] rounded [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                                                    />
                                                    <div>-</div>
                                                    <input className="bg-400 xl:w-[32px] w-[24px] h-[24px] ml-[4px] rounded [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none" />
                                                    <div>cm</div>
                                                </div>
                                            </div>
                                            <div className="flex justify-end">
                                                <div>Height:</div>
                                                <div className="flex ml-[4px]">
                                                    <input
                                                        type="number"
                                                        className="bg-400 xl:w-[32px] w-[24px] h-[24px] mr-[4px] rounded [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                                                    />
                                                    <div>-</div>
                                                    <input className="bg-400 xl:w-[32px] w-[24px] h-[24px] ml-[4px] rounded [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none" />
                                                    <div>cm</div>
                                                </div>
                                            </div>
                                            <div className="flex">
                                                <div>Weight:</div>
                                                <div className="flex ml-[4px]">
                                                    <input
                                                        type="number"
                                                        className="bg-400 xl:w-[32px] w-[24px] h-[24px] mr-[4px] rounded [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                                                    />
                                                    <div>-</div>
                                                    <input className="bg-400 xl:w-[32px] w-[24px] h-[24px] ml-[4px] rounded [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none" />
                                                    <div>g</div>
                                                </div>
                                            </div>
                                            <div className="flex">
                                                <div>Length:</div>
                                                <div className="flex ml-[4px]">
                                                    <input
                                                        type="number"
                                                        className="bg-400 xl:w-[32px] w-[24px] h-[24px] mr-[4px] rounded [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                                                    />
                                                    <div>-</div>
                                                    <input className="bg-400 xl:w-[32px] w-[24px] h-[24px] ml-[4px] rounded [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none" />
                                                    <div>cm</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="border-gray-500 border-l-[1px] border-t-[1px] rounded-tl-md p-[8px] mt-[4px]">
                                            <div>Shape</div>
                                            <div className="flex">
                                                <input
                                                    name="checkbox"
                                                    type="checkbox"
                                                    className="mr-[8px]"
                                                />
                                                <div>Ergonomic</div>
                                            </div>
                                            <div className="flex">
                                                <input
                                                    name="checkbox"
                                                    type="checkbox"
                                                    className="mr-[8px]"
                                                />
                                                <div>Ambidextrous</div>
                                            </div>
                                            <div className="flex">
                                                <input
                                                    name="checkbox"
                                                    type="checkbox"
                                                    className="mr-[8px]"
                                                />
                                                <div>Ergonomic</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ) : advanceFilter === "Mousepad" ? (
                                <div>Mousepad</div>
                            ) : advanceFilter === "CPU" ? (
                                <div>CPU</div>
                            ) : (
                                <div></div>
                            )}
                        </div>
                        <div className="flex justify-center">
                            <button
                                className="py-[4px] px-[8px] text-primary hover:text-100 hover:bg-primary rounded-md"
                                onClick={handleClearFilter}
                            >
                                CLEAR ALL
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
