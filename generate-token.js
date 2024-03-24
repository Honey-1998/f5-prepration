import React, { useState, useEffect } from "react";

const GenerateToken = () => {
  const [token, setToken] = useState("");
  const [isDisabled, setIsDisabled] = useState(false);

  // useEffect(() => {
  //   // Check if token is already in local storage
  //   const storedToken = localStorage.getItem("generatedToken");
  //   if (storedToken) {
  //     setToken(storedToken);
  //     setIsDisabled(true);
  //   }
  // }, []);

  const handleClick = () => {
    // Generate a random 6-digit token
    const newToken = Math.floor(100000 + Math.random() * 900000);
    // Save the token to local storage
    localStorage.setItem("generatedToken", newToken);
    // Update state and disable the button
    setToken(newToken);
    setIsDisabled(true);
  };

  return (
    <div>
      <button onClick={handleClick} disabled={isDisabled}>
        Generate Token
      </button>
      {isDisabled && <p>A token has already been generated: {token}</p>}
    </div>
  ); 
};

export default GenerateToken;
