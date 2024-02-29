import React, { useState } from "react";
import { TextInput } from "./TextInput";

export const AdvanceCategories = ({
    onTypeChange,
    onColorChange,
    onNumberChange,
}) => {
    const [typeFilters, setTypeFilters] = useState("");
    const [color, setColor] = useState([]);

    //Number input state
    const [inputValue, setInputValue] = useState({});

    const colors = [
        "black",
        "white",
        "pink",
        "yellow",
        "red",
        "green",
        "blue",
        "purple",
        "gray",
        "orange",
    ];

    const handleTypeFilter = (event) => {
        setTypeFilters(event.target.value);
        onTypeChange({
            typeFilters: event.target.value,
            colorFilters: color,
        });
        setColor([]);

        if (event.target.value === "GPU") {
            setInputValue({
                Boost_Clock: [-999, 999_999],
                Memory_Size: [-999, 999_999],
            });
        } else if (event.target.value === "CPU") {
            setInputValue({
                Core_Speed_Base: [-999, 999_999],
                Core_Speed_Boost: [-999, 999_999],
                TDP: [-999, 999_999],
                Cores: [-999, 999_999],
                Threads: [-999, 999_999],
            });
        } else if (event.target.value === "headset") {
            setInputValue({
                Weight: [-999, 999_999],
                Cable_Length: [-999, 999_999],
            });
        } else if (event.target.value === "keyboard") {
            setInputValue({
                Width: [-999, 999_999],
                Height: [-999, 999_999],
                Weight: [-999, 999_999],
                Length: [-999, 999_999],
                Form_Factor: [-999, 999_999],
            });
        } else if (event.target.value === "mouse") {
            setInputValue({
                Width: [-999, 999_999],
                Height: [-999, 999_999],
                Weight: [-999, 999_999],
                Length: [-999, 999_999],
            });
        } else if (event.target.value === "mousePad") {
            setInputValue({
                Height: [-999, 999_999],
                Length: [-999, 999_999],
                Thickness: [-999, 999_999],
            });
        }
    };

    const handleColorChange = (selectedColor) => {
        if (color.includes(selectedColor)) {
            setColor((prevColor) =>
                prevColor.filter((item) => item !== selectedColor)
            );
            onColorChange({
                typeFilters,
                colorFilters: color.filter((item) => item !== selectedColor),
            });
        } else {
            setColor((prevColor) => [...prevColor, selectedColor]);
            onColorChange({
                typeFilters,
                colorFilters: [...color, selectedColor],
            });
        }
    };

    const handleClearFilter = () => {
        const items = document.getElementsByName("checkbox");
        for (var i = 0; i < items.length; i++) {
            if (items[i].type == "checkbox") items[i].checked = false;
        }
        setTypeFilters([]);
        setColor([]);
        onTypeChange({ typeFilters: "", colorFilters: "" });
        onColorChange({ typeFilters: "", colorFilters: "" });
        onNumberChange({});
    };

    const onNumberInputChange = ({ id, min, max }) => {
        if (min === "") {
            min = -999;
        }
        if (max === "") {
            max = 999999;
        }

        setInputValue((prevInputValue) => {
            const updatedInputValue = {
                ...prevInputValue,
                [id]: [min, max],
            };
            onNumberChange(id, updatedInputValue);
            return updatedInputValue;
        });
    };

    const submitFilter = () => {};

    return (
        <div>
            <div className="w-auto min-w-[240px] px-2.5 py-3 lg:p-3 bg-300 text-200 rounded-lg flex flex-col justify-between align-middle text-base">
                <div>
                    <div className="mt-5 text-base transition-opacity duration-300 ease-in-out">
                        <div className="flex justify-center">
                            <select
                                value={typeFilters}
                                onChange={handleTypeFilter}
                                className="text-black bg-300 cursor-pointer h-[24px] rounded text-center"
                            >
                                <option value="">Select type</option>
                                <option value="GPU">GPU</option>
                                <option value="CPU">CPU</option>
                                <option value="headset">Headset</option>
                                <option value="keyboard">Keyboard</option>
                                <option value="mouse">Mouse</option>
                                <option value="mousePad">Mousepad</option>
                                <option value="monitor">Monitor</option>
                            </select>
                        </div>
                        <div className="text-100 flex justify-center gap-[48px] py-[24px] accent-primary">
                            {typeFilters !== "" ? (
                                <div>
                                    <div className="text-200">Color</div>
                                    <div className="grid grid-cols-2 p-[8px]">
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
                                </div>
                            ) : (
                                <></>
                            )}
                            {typeFilters === "GPU" ? (
                                <div>
                                    <TextInput
                                        id={"Boost_Clock"}
                                        title={"Boost clock"}
                                        unit={"GHz"}
                                        onChange={onNumberInputChange}
                                    />
                                    <TextInput
                                        id={"Memory_Size"}
                                        title={"Memory size"}
                                        unit={"GB"}
                                        onChange={onNumberInputChange}
                                    />
                                </div>
                            ) : typeFilters === "CPU" ? (
                                <div className="flex gap-[48px]">
                                    <div>
                                        <TextInput
                                            id={"Core_Speed_Base"}
                                            title={"Core speed base"}
                                            unit={"GHz"}
                                            onChange={onNumberInputChange}
                                        />
                                        <TextInput
                                            id={"Core_Speed_Boost"}
                                            title={"Core speed boost"}
                                            unit={"GB"}
                                            onChange={onNumberInputChange}
                                        />
                                        <TextInput
                                            id={"TDP"}
                                            title={"TDP"}
                                            unit={"W"}
                                            onChange={onNumberInputChange}
                                        />
                                    </div>
                                    <div>
                                        <TextInput
                                            id={"Cores"}
                                            title={"Cores"}
                                            unit={""}
                                            onChange={onNumberInputChange}
                                        />
                                        <TextInput
                                            id={"Threads"}
                                            title={"Threads"}
                                            unit={""}
                                            onChange={onNumberInputChange}
                                        />
                                    </div>
                                </div>
                            ) : typeFilters === "headset" ? (
                                <div>
                                    <TextInput
                                        id={"Weight"}
                                        title={"Weight"}
                                        unit={"g"}
                                        onChange={onNumberInputChange}
                                    />

                                    <TextInput
                                        id={"Cable_Length"}
                                        title={"Cable length"}
                                        unit={"cm"}
                                        onChange={onNumberInputChange}
                                    />
                                    <div className="flex">
                                        <input
                                            name="checkbox"
                                            type="checkbox"
                                            className="mr-[8px]"
                                        />
                                        <div>Noise Cancelling</div>
                                    </div>
                                </div>
                            ) : typeFilters === "keyboard" ? (
                                <div className="flex gap-[48px]">
                                    <div className="flex gap-[48px]">
                                        <div className="p-[8px]">
                                            <TextInput
                                                id={"Width"}
                                                title={"Width"}
                                                unit={"cm"}
                                                onChange={onNumberInputChange}
                                            />
                                            <TextInput
                                                id={"Height"}
                                                title={"Height"}
                                                unit={"cm"}
                                                onChange={onNumberInputChange}
                                            />
                                            <TextInput
                                                id={"Weight"}
                                                title={"Weight"}
                                                unit={"g"}
                                                onChange={onNumberInputChange}
                                            />
                                        </div>
                                        <div className="p-[8px]">
                                            <TextInput
                                                id={"Length"}
                                                title={"Length"}
                                                unit={"cm"}
                                                onChange={onNumberInputChange}
                                            />
                                            <TextInput
                                                id={"Form_Factor"}
                                                title={"Form Factor"}
                                                unit={"%"}
                                                onChange={onNumberInputChange}
                                            />
                                        </div>
                                    </div>
                                    <div className="p-[8px]">
                                        <div className="flex">
                                            <input
                                                name="checkbox"
                                                type="checkbox"
                                                className="mr-[8px]"
                                            />
                                            <div>RGB</div>
                                        </div>
                                        <div className="text-200 mt-[32px]">
                                            Switches
                                        </div>
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
                            ) : typeFilters === "mouse" ? (
                                <div className="flex gap-[48px]">
                                    <div className="flex gap-[48px]">
                                        <div className="p-[8px]">
                                            <TextInput
                                                id={"Width"}
                                                title={"Width"}
                                                unit={"cm"}
                                                onChange={onNumberInputChange}
                                            />
                                            <TextInput
                                                id={"Height"}
                                                title={"Height"}
                                                unit={"cm"}
                                                onChange={onNumberInputChange}
                                            />
                                        </div>
                                        <div className="p-[8px]">
                                            <TextInput
                                                id={"Weight"}
                                                title={"Weight"}
                                                unit={"g"}
                                                onChange={onNumberInputChange}
                                            />
                                            <TextInput
                                                id={"Length"}
                                                title={"Length"}
                                                unit={"cm"}
                                                onChange={onNumberInputChange}
                                            />
                                        </div>
                                    </div>
                                    <div className="p-[8px]">
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
                            ) : typeFilters === "mousePad" ? (
                                <div className="flex gap-[48px]">
                                    <div className="flex">
                                        <div className="p-[8px]">
                                            <TextInput
                                                id={"Height"}
                                                title={"Height"}
                                                unit={"cm"}
                                                onChange={onNumberInputChange}
                                            />
                                            <TextInput
                                                id={"Length"}
                                                title={"Length"}
                                                unit={"cm"}
                                                onChange={onNumberInputChange}
                                            />
                                            <TextInput
                                                id={"Thickness"}
                                                title={"Thickness"}
                                                unit={"mm"}
                                                onChange={onNumberInputChange}
                                            />
                                        </div>
                                    </div>
                                    <div className="p-[8px]">
                                        <div className="flex">
                                            <input
                                                name="checkbox"
                                                type="checkbox"
                                                className="mr-[8px]"
                                            />
                                            <div>Stitched edges</div>
                                        </div>
                                        <div className="text-200 mt-[32px]">
                                            Glide
                                        </div>
                                        <div className="flex">
                                            <input
                                                name="checkbox"
                                                type="checkbox"
                                                className="mr-[8px]"
                                            />
                                            <div>High</div>
                                        </div>
                                        <div className="flex">
                                            <input
                                                name="checkbox"
                                                type="checkbox"
                                                className="mr-[8px]"
                                            />
                                            <div>Medium</div>
                                        </div>
                                        <div className="flex">
                                            <input
                                                name="checkbox"
                                                type="checkbox"
                                                className="mr-[8px]"
                                            />
                                            <div>Low</div>
                                        </div>
                                    </div>
                                </div>
                            ) : typeFilters === "monitor" ? (
                                <div className="flex gap-[48px]">
                                    <div>
                                        <div className="p-[8px]">
                                            <select
                                                value={typeFilters}
                                                onChange={handleTypeFilter}
                                                className="text-200 bg-300 cursor-pointer h-[24px] rounded text-center"
                                            >
                                                <option value="">
                                                    Aspect Ratio
                                                </option>
                                                <option value="21:9">
                                                    21:9
                                                </option>
                                                <option value="16:9">
                                                    16:9
                                                </option>
                                                <option value="4:3">4:3</option>
                                            </select>
                                        </div>
                                        <div className="p-[8px]">
                                            <select
                                                value={typeFilters}
                                                onChange={handleTypeFilter}
                                                className="text-200 bg-300 cursor-pointer h-[24px] rounded text-center"
                                            >
                                                <option value="">
                                                    Refresh rate
                                                </option>
                                                <option value="240Hz">
                                                    240Hz
                                                </option>
                                                <option value="144Hz">
                                                    144Hz
                                                </option>
                                                <option value="120Hz">
                                                    120Hz
                                                </option>
                                                <option value="75Hz">
                                                    75Hz
                                                </option>
                                                <option value="60Hz">
                                                    60Hz
                                                </option>
                                            </select>
                                        </div>
                                        <div className="p-[8px]">
                                            <select
                                                value={typeFilters}
                                                onChange={handleTypeFilter}
                                                className="text-200 bg-300 cursor-pointer h-[24px] rounded text-center"
                                            >
                                                <option value="">
                                                    Resolution
                                                </option>
                                                <option value="8k">8k</option>
                                                <option value="16:9">4k</option>
                                                <option value="1440p">
                                                    1440p
                                                </option>
                                                <option value="1080p">
                                                    1080p
                                                </option>
                                                <option value="720p">
                                                    720p
                                                </option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="p-[8px]">
                                        <div className="flex">
                                            <input
                                                name="checkbox"
                                                type="checkbox"
                                                className="mr-[8px]"
                                            />
                                            <div>Free sync</div>
                                        </div>
                                        <div className="flex">
                                            <input
                                                name="checkbox"
                                                type="checkbox"
                                                className="mr-[8px]"
                                            />
                                            <div>Gsync</div>
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                <div></div>
                            )}
                        </div>
                        <div className="flex justify-center">
                            <button
                                className="mx-[12px] px-[24px] py-[8px] transition bg-green-600 rounded hover:bg-green-400 text-200"
                                onClick={submitFilter}
                            >
                                Save
                            </button>
                            <button
                                className="mx-[12px] px-[24px] py-[8px] transition border rounded border-primary hover:bg-primary text-200"
                                onClick={handleClearFilter}
                            >
                                Clear
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
