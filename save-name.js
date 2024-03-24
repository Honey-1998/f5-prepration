import React, { useState, useEffect } from "react";

function App() {
  const [name, setName] = useState("");
  const [savedName, setSavedName] = useState("");

  useEffect(() => {
    // TODO: Retrieve saved name from session storage
    const savedName = sessionStorage.getItem("name");
    if (savedName) {
      setSavedName(savedName);
    }

    // TODO: Add event listener to session storage
    window.addEventListener("storage", (event) => {
      if (event.key === "name") {
        setSavedName(event.newValue);
      }
    });

    return () => {
      // TODO: Remove event listener from session storage
      window.removeEventListener("storage", (event) => {
        if (event.key === "name") {
          setSavedName(event.newValue);
        }
      });
    };
  }, []);

  const handleInputChange = (event) => {
    setName(event.target.value);
  };

  const handleSaveButtonClick = () => {
    // TODO: Save name to session storage
    const newName = name;
    sessionStorage.setItem("name", newName);
    setSavedName(newName);

    // TODO: Clear input field
    setName("");
  };

  return (
    <div>
      <input type="text" value={name} onChange={handleInputChange} />
      <button onClick={handleSaveButtonClick}>Save</button>
      {savedName && <p>Saved name: {savedName}</p>}
    </div>
  );
}

export default App;