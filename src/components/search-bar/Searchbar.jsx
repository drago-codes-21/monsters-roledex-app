import React from "react";
import "./search-bar.css"

export const Searchbox=({handleChange, placeholder})=>(
        <input
          className='search'
          type="search"
          placeholder={placeholder}
          onChange={handleChange}
        />
);