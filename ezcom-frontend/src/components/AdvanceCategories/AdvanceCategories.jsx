import React, { useState } from "react";
import { TextInput } from "./TextInput";

export const AdvanceCategories = ({
    onTypeChange,
    onColorChange,
    onNumberChange,
    onCheckboxChange,
    // checkboxValue,
    // setCheckboxValue,
}) => {
    const [typeFilters, setTypeFilters] = useState("");
    const [color, setColor] = useState([]);
    const [noise, setNoise] = useState([]);
    const [checkboxValue, setCheckboxValue] = useState({});

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
        const items = document.getElementsByName("checkbox");
        for (var i = 0; i < items.length; i++) {
            if (items[i].type == "checkbox") items[i].checked = false;
        }

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
            setCheckboxValue({
                Noise_Cancelling: ["Yes", "No"],
            });
        } else if (event.target.value === "keyboard") {
            setInputValue({
                Width: [-999, 999_999],
                Height: [-999, 999_999],
                Weight: [-999, 999_999],
                Length: [-999, 999_999],
            });
            setCheckboxValue({
                RGB: [],
            });
        } else if (event.target.value === "mouse") {
            setInputValue({
                Width: [-999, 999_999],
                Height: [-999, 999_999],
                Weight: [-999, 999_999],
                Length: [-999, 999_999],
            });
            setCheckboxValue({
                Shape: [],
            });
        } else if (event.target.value === "mousePad") {
            setInputValue({
                Height: [-999, 999_999],
                Length: [-999, 999_999],
                Thickness: [-999, 999_999],
            });
            setCheckboxValue({
                Stitched_edges: [],
                Glide: [],
            });
        } else if (event.target.value === "monitor") {
            setInputValue({});
            setCheckboxValue({
                Aspect_Ratio: [],
                Refresh_Rate: [],
                Resolution: [],
                FreeSync: [],
                G_Sync: [],
            });
        }
    };
    // [black, white, red]
    colors.map((color) => {});

    const handleColorChange = (selectedColor) => {
        if (color.includes(selectedColor)) {
            setColor((prevColor) =>
                prevColor.filter((item) => item !== selectedColor)
            );
            onColorChange({
                typeFilters,
                colorFilters: color.filter((item) => item !== selectedColor),
                numberValue: inputValue,
                checkValue: checkboxValue,
            });
        } else {
            setColor((prevColor) => [...prevColor, selectedColor]);
            onColorChange({
                typeFilters,
                colorFilters: [...color, selectedColor],
                numberValue: inputValue,
                checkValue: checkboxValue,
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
        // onNumberChange({});
        // onCheckboxChange({});
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
            setInputValue(updatedInputValue);
            onNumberChange(
                typeFilters,
                color,
                updatedInputValue,
                checkboxValue
            );
            return updatedInputValue;
        });
    };

    const handleCheckboxChange = async (e) => {
        const updatedCheckboxValue = (() => {
            if (checkboxValue[e.target.id].includes(e.target.value)) {
                let index = checkboxValue[e.target.id].indexOf(e.target.value);
                if (index !== -1) {
                    checkboxValue[e.target.id].splice(index, 1);
                }
                return {
                    ...checkboxValue,
                    [e.target.id]: checkboxValue[e.target.id],
                };
            } else {
                return {
                    ...checkboxValue,
                    [e.target.id]: [
                        ...checkboxValue[e.target.id],
                        e.target.value,
                    ],
                };
            }
        })();
        setCheckboxValue(updatedCheckboxValue);
        onCheckboxChange(typeFilters, color, inputValue, updatedCheckboxValue);
    };

    return (
        <div>
            <div className="w-auto min-w-[240px] px-2.5 py-3 lg:p-3 bg-300 text-200 rounded-lg flex flex-col justify-between align-middle text-base">
                <div>
                    <div className="mt-5 text-base transition-opacity duration-300 ease-in-out">
                        <div className="flex justify-center">
                            <select
                                value={typeFilters}
                                onChange={handleTypeFilter}
                                className="text-100 bg-400 cursor-pointer h-[24px] rounded text-center"
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
                                                    value={color}
                                                    onChange={() =>
                                                        handleColorChange(color)
                                                    }
                                                    name="checkbox"
                                                    type="checkbox"
                                                    className="mr-[8px] bg-transparent cursor-pointer accent-primary opacity-40 checked:opacity-100"
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
                                <div className="flex gap-[48px]">
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
                                    </div>
                                    <div className="p-[8px]">
                                        <div className="text-200">
                                            Noise Cancelling
                                        </div>
                                        <div className="flex">
                                            <input
                                                id="Noise_Cancelling"
                                                type="checkbox"
                                                value="Yes"
                                                className="mr-[8px] bg-transparent cursor-pointer accent-primary opacity-40 checked:opacity-100"
                                                onChange={handleCheckboxChange}
                                            />
                                            <div>Yes</div>
                                        </div>
                                        <div className="flex">
                                            <input
                                                id="Noise_Cancelling"
                                                type="checkbox"
                                                value="No"
                                                className="mr-[8px] bg-transparent cursor-pointer accent-primary opacity-40 checked:opacity-100"
                                                onChange={handleCheckboxChange}
                                            />
                                            <div>No</div>
                                        </div>
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
                                        </div>
                                    </div>
                                    <div className="p-[8px]">
                                        <div className="text-200">RGB</div>
                                        <div className="flex">
                                            <input
                                                id="RGB"
                                                name="checkbox"
                                                type="checkbox"
                                                value="Yes"
                                                onChange={handleCheckboxChange}
                                                className="mr-[8px] bg-transparent cursor-pointer accent-primary opacity-40 checked:opacity-100"
                                            />
                                            <div>Yes</div>
                                        </div>
                                        <div className="flex">
                                            <input
                                                id="RGB"
                                                type="checkbox"
                                                value="No"
                                                onChange={handleCheckboxChange}
                                                className="mr-[8px] bg-transparent cursor-pointer accent-primary opacity-40 checked:opacity-100"
                                            />
                                            <div>No</div>
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
                                                id="Shape"
                                                type="checkbox"
                                                value="Ergonomic"
                                                className="mr-[8px] bg-transparent cursor-pointer accent-primary opacity-40 checked:opacity-100"
                                                onChange={handleCheckboxChange}
                                            />
                                            <div>Ergonomic</div>
                                        </div>
                                        <div className="flex">
                                            <input
                                                id="Shape"
                                                type="checkbox"
                                                className="mr-[8px] bg-transparent cursor-pointer accent-primary opacity-40 checked:opacity-100"
                                                value="Ambidextrous"
                                                onChange={handleCheckboxChange}
                                            />
                                            <div>Ambidextrous</div>
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
                                        <div className="text-200">
                                            Stitched edges
                                        </div>
                                        <div className="flex">
                                            <input
                                                id="Stitched_edges"
                                                type="checkbox"
                                                className="mr-[8px] bg-transparent cursor-pointer accent-primary opacity-40 checked:opacity-100"
                                                value="Yes"
                                                onChange={handleCheckboxChange}
                                            />
                                            <div>Yes</div>
                                        </div>
                                        <div className="flex">
                                            <input
                                                id="Stitched_edges"
                                                type="checkbox"
                                                className="mr-[8px] bg-transparent cursor-pointer accent-primary opacity-40 checked:opacity-100"
                                                value="No"
                                                onChange={handleCheckboxChange}
                                            />
                                            <div>No</div>
                                        </div>
                                        <div className="text-200 mt-[32px]">
                                            Glide
                                        </div>
                                        <div className="flex">
                                            <input
                                                id="Glide"
                                                type="checkbox"
                                                value="High"
                                                className="mr-[8px] bg-transparent cursor-pointer accent-primary opacity-40 checked:opacity-100"
                                                onChange={handleCheckboxChange}
                                            />
                                            <div>High</div>
                                        </div>
                                        <div className="flex">
                                            <input
                                                id="Glide"
                                                type="checkbox"
                                                value="Medium"
                                                className="mr-[8px] bg-transparent cursor-pointer accent-primary opacity-40 checked:opacity-100"
                                                onChange={handleCheckboxChange}
                                            />
                                            <div>Medium</div>
                                        </div>
                                        <div className="flex">
                                            <input
                                                id="Glide"
                                                type="checkbox"
                                                value="Low"
                                                className="mr-[8px] bg-transparent cursor-pointer accent-primary opacity-40 checked:opacity-100"
                                                onChange={handleCheckboxChange}
                                            />
                                            <div>Low</div>
                                        </div>
                                    </div>
                                </div>
                            ) : typeFilters === "monitor" ? (
                                <div className="flex gap-[48px]">
                                    <div>
                                        <div className="p-[8px]">
                                            <div className="text-200">
                                                Aspect Ratio
                                            </div>
                                            <div className="flex">
                                                <input
                                                    id="Aspect_Ratio"
                                                    type="checkbox"
                                                    value="21:9"
                                                    className="mr-[8px] bg-transparent cursor-pointer accent-primary opacity-40 checked:opacity-100"
                                                    onChange={
                                                        handleCheckboxChange
                                                    }
                                                />
                                                <div>21:9</div>
                                            </div>
                                            <div className="flex">
                                                <input
                                                    id="Aspect_Ratio"
                                                    type="checkbox"
                                                    value="16:9"
                                                    className="mr-[8px] bg-transparent cursor-pointer accent-primary opacity-40 checked:opacity-100"
                                                    onChange={
                                                        handleCheckboxChange
                                                    }
                                                />
                                                <div>16:9</div>
                                            </div>
                                            <div className="flex">
                                                <input
                                                    id="Aspect_Ratio"
                                                    type="checkbox"
                                                    value="4:3"
                                                    className="mr-[8px] bg-transparent cursor-pointer accent-primary opacity-40 checked:opacity-100"
                                                    onChange={
                                                        handleCheckboxChange
                                                    }
                                                />
                                                <div>4:3</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="p-[8px]">
                                        <div className="text-200">
                                            Refresh rate
                                        </div>
                                        <div className="flex">
                                            <input
                                                id="Refresh_Rate"
                                                type="checkbox"
                                                value="240"
                                                className="mr-[8px] bg-transparent cursor-pointer accent-primary opacity-40 checked:opacity-100"
                                                onChange={handleCheckboxChange}
                                            />
                                            <div>240Hz</div>
                                        </div>
                                        <div className="flex">
                                            <input
                                                id="Refresh_Rate"
                                                type="checkbox"
                                                value="144"
                                                className="mr-[8px] bg-transparent cursor-pointer accent-primary opacity-40 checked:opacity-100"
                                                onChange={handleCheckboxChange}
                                            />
                                            <div>144Hz</div>
                                        </div>
                                        <div className="flex">
                                            <input
                                                id="Refresh_Rate"
                                                type="checkbox"
                                                value="120"
                                                className="mr-[8px] bg-transparent cursor-pointer accent-primary opacity-40 checked:opacity-100"
                                                onChange={handleCheckboxChange}
                                            />
                                            <div>120Hz</div>
                                        </div>
                                        <div className="flex">
                                            <input
                                                id="Refresh_Rate"
                                                type="checkbox"
                                                value="75"
                                                className="mr-[8px] bg-transparent cursor-pointer accent-primary opacity-40 checked:opacity-100"
                                                onChange={handleCheckboxChange}
                                            />
                                            <div>75Hz</div>
                                        </div>
                                        <div className="flex">
                                            <input
                                                id="Refresh_Rate"
                                                type="checkbox"
                                                value="60"
                                                className="mr-[8px] bg-transparent cursor-pointer accent-primary opacity-40 checked:opacity-100"
                                                onChange={handleCheckboxChange}
                                            />
                                            <div>60Hz</div>
                                        </div>
                                    </div>
                                    <div className="p-[8px]">
                                        <div className="text-200">
                                            Resolution
                                        </div>
                                        <div className="flex">
                                            <input
                                                id="Resolution"
                                                type="checkbox"
                                                value="8k"
                                                className="mr-[8px] bg-transparent cursor-pointer accent-primary opacity-40 checked:opacity-100"
                                                onChange={handleCheckboxChange}
                                            />
                                            <div>8k</div>
                                        </div>
                                        <div className="flex">
                                            <input
                                                id="Resolution"
                                                type="checkbox"
                                                value="4k"
                                                className="mr-[8px] bg-transparent cursor-pointer accent-primary opacity-40 checked:opacity-100"
                                                onChange={handleCheckboxChange}
                                            />
                                            <div>4k</div>
                                        </div>
                                        <div className="flex">
                                            <input
                                                id="Resolution"
                                                type="checkbox"
                                                value="1440p"
                                                className="mr-[8px] bg-transparent cursor-pointer accent-primary opacity-40 checked:opacity-100"
                                                onChange={handleCheckboxChange}
                                            />
                                            <div>1440p</div>
                                        </div>
                                        <div className="flex">
                                            <input
                                                id="Resolution"
                                                type="checkbox"
                                                value="1080p"
                                                className="mr-[8px] bg-transparent cursor-pointer accent-primary opacity-40 checked:opacity-100"
                                                onChange={handleCheckboxChange}
                                            />
                                            <div>1080p</div>
                                        </div>
                                        <div className="flex">
                                            <input
                                                id="Resolution"
                                                type="checkbox"
                                                value="720p"
                                                className="mr-[8px] bg-transparent cursor-pointer accent-primary opacity-40 checked:opacity-100"
                                                onChange={handleCheckboxChange}
                                            />
                                            <div>720p</div>
                                        </div>
                                    </div>
                                    <div className="p-[8px]">
                                        <div className="text-200">
                                            Free sync
                                        </div>
                                        <div className="flex">
                                            <input
                                                id="FreeSync"
                                                type="checkbox"
                                                value="Yes"
                                                className="mr-[8px] bg-transparent cursor-pointer accent-primary opacity-40 checked:opacity-100"
                                                onChange={handleCheckboxChange}
                                            />
                                            <div>Yes</div>
                                        </div>
                                        <div className="flex">
                                            <input
                                                id="FreeSync"
                                                type="checkbox"
                                                value="No"
                                                className="mr-[8px] bg-transparent cursor-pointer accent-primary opacity-40 checked:opacity-100"
                                                onChange={handleCheckboxChange}
                                            />
                                            <div>No</div>
                                        </div>
                                        <div className="text-200 mt-[32px]">
                                            Gsync
                                        </div>
                                        <div className="flex">
                                            <input
                                                id="G_Sync"
                                                type="checkbox"
                                                value="Yes"
                                                className="mr-[8px] bg-transparent cursor-pointer accent-primary opacity-40 checked:opacity-100"
                                                onChange={handleCheckboxChange}
                                            />
                                            <div>Yes</div>
                                        </div>
                                        <div className="flex">
                                            <input
                                                id="G_Sync"
                                                type="checkbox"
                                                value="No"
                                                className="mr-[8px] bg-transparent cursor-pointer accent-primary opacity-40 checked:opacity-100"
                                                onChange={handleCheckboxChange}
                                            />
                                            <div>No</div>
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                <div></div>
                            )}
                        </div>
                        <div className="flex justify-center">
                            <button
                                className="mx-[12px] px-[24px] py-[8px] transition border rounded border-primary hover:bg-primary text-200"
                                // value=""
                                onClick={handleTypeFilter}
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
