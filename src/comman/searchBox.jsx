import React from "react";

const SearchBox = ({ value, onChange }) => {
  return (
    <form className="form-inline my-2 my-lg-0">
      <input
        className="form-control mr-sm-2 my-3"
        type="text"
        name="search"
        placeholder="Search..."
        aria-label="Search"
        value={value}
        onChange={(e) => onChange(e.currentTarget.value)}
      />
    </form>
  );
};

export default SearchBox;
