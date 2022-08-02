import React, { createContext, useState } from "react";

const AllToDoContext = createContext();

export function AllToDoProvider({ children }) {
  const [allToDos, setAllToDos] = useState([]);

  return (
    <AllToDoContext.Provider value={{ allToDos, setAllToDos }}>
      {children}
    </AllToDoContext.Provider>
  );
}

export default AllToDoContext;
