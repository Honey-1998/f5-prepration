import React, { useState, useEffect } from "react";

export const App = () => {
  const [data, setData] = useState(null);

  const getPromise = () => {
    return new Promise((res, rej) => {
      setTimeout(() => {
        res("Resolved Data");
      }, 5000);
    });
  };

  useEffect(() => {
    getPromise().then((data) => {
      setData(data);
    });
  }, []);

  return (
    <div>
      <p>Result: {data || ""}</p>
    </div>
  );
};

export default App;