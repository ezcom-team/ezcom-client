import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";

export const Searchbar = ({ onSearch }) => {
    const [searchItem, setSearchItem] = useState("");

    const handleSearch = (e) => {
        const newSearchItem = e.target.value;
        setSearchItem(newSearchItem);
        onSearch(newSearchItem);
    };

    return (
        <div className="w-40 sm:w-auto md:w-72 h-8 md:h-12 p-3 m-4 bg-300 rounded-xl drop-shadow border-2 border-gray-500 flex justify-center items-center">
            <SearchIcon className="mr-2 text-100" style={{ fontSize: 32 }} />
            <input
                className="w-20 sm:w-auto md:w-80 border-0"
                placeholder="Search by name"
                value={searchItem}
                onChange={(e) => handleSearch(e)}
            />
        </div>
    );
};
