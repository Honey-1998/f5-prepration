import React, { useState } from "react";

const Search = ({ items }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredItems, setFilteredItems] = useState(items);

  const handleChange = (event) => {
    const searchTerm = event.target.value;
    setSearchTerm(searchTerm);
    const filteredItems = items.filter((item) =>
      item.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredItems(filteredItems);
  };

  return (
    <div>
      <input type="text" value={searchTerm} onChange={handleChange} />
      <ul>
        {filteredItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default Search;
