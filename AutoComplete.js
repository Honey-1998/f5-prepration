import React, { useState, useEffect, useRef } from "react";
// import './App.css';

function AutoComplete() {
  const [searchTerm, setSearchTerm] = useState("");
  const [cities, setCities] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setCities(data))
      .catch((error) => console.error("Error fetching cities:", error));
  }, []);

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
    setShowDropdown(event.target.value.length > 1);
  };

  const handleDropdownItemClick = (city) => {
    setSearchTerm(city.name);
    setShowDropdown(false);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setShowDropdown(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="App">
      <h1>Autocomplete Dropdown</h1>
      <input
        type="text"
        value={searchTerm}
        onChange={handleInputChange}
        placeholder="Type to search..."
      />
      {showDropdown && (
        <div className="dropdown" ref={dropdownRef}>
          {cities
            .filter((city) =>
              city.name.toLowerCase().includes(searchTerm.toLowerCase())
            )
            .map((city, index) => (
              <div
                key={index}
                className="dropdown-item"
                onClick={() => handleDropdownItemClick(city)}
              >
                {city.name}
              </div>
            ))}
        </div>
      )}
    </div>
  );
}

export default AutoComplete;
