import React, { useState } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";

export const Categories = ({ onFilterChange }) => {
    const [open, setOpen] = useState(true);
    const [filter, setFilter] = useState([]);

    const types = ["VGA", "Headset", "Keyboard", "Mouse", "Mousepad", "CPU"];

    const handleOpen = () => {
        setOpen(!open);
    };

    const handleFilter = (e) => {
        if (filter.includes(e.target.value)) {
            const newFilter = filter.filter(
                (items) => items !== e.target.value
            );
            setFilter(newFilter);
            onFilterChange(newFilter);
        } else {
            setFilter([...filter, e.target.value]);
            onFilterChange([...filter, e.target.value]);
        }
    };

    const handleClearFilter = () => {
        const items = document.getElementsByName("checkbox1");
        for (var i = 0; i < items.length; i++) {
            if (items[i].type == "checkbox") items[i].checked = false;
        }
        setFilter([]);
        onFilterChange([]);
    };
    console.log("filter", filter);

    return (
        <div>
            <div className="w-40 lg:w-60 xl:w-72 px-2.5 py-3 lg:p-3 bg-300 text-200 rounded-lg flex flex-col">
                <div
                    onClick={handleOpen}
                    className="flex justify-between align-middle md:text-lg lg:text-xl"
                >
                    Categories
                    {open ? (
                        <>
                            <ExpandLessIcon
                                onClick={handleOpen}
                                className="cursor-pointer"
                            />
                        </>
                    ) : (
                        <>
                            <ExpandMoreIcon
                                onClick={handleOpen}
                                className="cursor-pointer"
                            />
                        </>
                    )}
                </div>
                <div className="text-200">
                    <div
                        className={`${
                            open ? "block" : "hidden"
                        } mt-5 lg:text-lg`}
                    >
                        <ul>
                            {types.map((type) => (
                                <li className="flex items-center">
                                    <input
                                        name="checkbox1"
                                        type="checkbox"
                                        value={type}
                                        onChange={(e) => handleFilter(e)}
                                        className="w-4 h-4 mr-2 xl:mr-5 accent-primary bg-transparent cursor-pointer opacity-40 checked:opacity-100"
                                    />
                                    {type}
                                </li>
                            ))}
                        </ul>
                        <div className="flex justify-center">
                            <button
                                className="py-[4px] px-[8px] text-primary hover:text-100 hover:bg-primary rounded-md"
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
