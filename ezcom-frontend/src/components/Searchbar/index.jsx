import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";

export const Searchbar = ({ onSearch }) => {
  const [searchItem, setSearchItem] = useState("");

  const handleSearch = e => {
    const newSearchItem = e.target.value;
    setSearchItem(newSearchItem);
    onSearch(newSearchItem);
  };

  return (
    <div className="flex items-center justify-center w-40 h-8 p-3 m-4 sm:w-auto md:w-72 md:h-12 bg-300 rounded-xl drop-shadow">
      <SearchIcon className="mr-2 text-200" style={{ fontSize: 32 }} />
      <input
        className="w-20 text-base border-0 placeholder-200 sm:w-auto md:w-80"
        placeholder="Search by name"
        value={searchItem}
        onChange={e => handleSearch(e)}
      />
    </div>
  );
};
