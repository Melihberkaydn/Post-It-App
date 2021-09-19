import React from "react";
import { MdSearch } from "react-icons/md";
import classes from "../Layout/Search.module.css";

const Search = ({ onFilter }) => {
  return (
    <div className={classes.search}>
      <MdSearch size="1.3rem"></MdSearch>
      <input
        onChange={(event) => onFilter(event.target.value)}
        type="text"
        placeholder="type to search..."
      ></input>
    </div>
  );
};

export default Search;
