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
        <div className="flex items-center justify-center w-[160px] lg:w-[200px] xl:w-[240px] h-8 p-3 m-4 md:h-12 bg-300 rounded-xl overflow-hidden">
            <SearchIcon className="mr-2 text-200" style={{ fontSize: 24 }} />
            <input
                className="text-base border-0 placeholder-200"
                placeholder="Search by name"
                value={searchItem}
                onChange={(e) => handleSearch(e)}
            />
        </div>
    );
};
