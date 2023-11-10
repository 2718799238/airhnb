import React, { useState } from "react";
import PropTypes from "prop-types";
import { FilterWrapper } from "./style";
import filterData from "@/assets/data/filter_data.json";
function EntireFilter(props) {
  const [selectedItem, setItem] = useState([]);
  function handleClick(item) {
    // const newItem = filterData[index];
    const arr = [...selectedItem];
    if (selectedItem.includes(item)) {
      arr.splice(arr.indexOf(item), 1);
      setItem(arr);
    } else {
      arr.push(item);
      setItem(arr);
    }
  }
  return (
    <FilterWrapper>
      {filterData.map((item, index) => {
        return (
          <div
            onClick={() => handleClick(item)}
            key={index}
            className={`item ${selectedItem.includes(item) ? "active" : ""}`}
          >
            {item}
          </div>
        );
      })}
    </FilterWrapper>
  );
}

EntireFilter.propTypes = {};

export default EntireFilter;
