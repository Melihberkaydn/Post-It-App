import React from "react";
import { MdSearch } from "react-icons/md";

const Search = ({ onFilter }) => {
  return (
    <div className="search">
      <MdSearch className="search-icons" size="1.3rem"></MdSearch>
      <input
        onChange={(event) => onFilter(event.target.value)}
        type="text"
        placeholder="type to search..."
      ></input>
    </div>
  );
};

export default Search;
