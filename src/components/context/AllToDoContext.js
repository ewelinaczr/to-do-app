import React, { createContext, useState } from "react";

const AllToDoContext = createContext();

export function AllToDoProvider({ children }) {
  const [allToDos, setAllToDos] = useState([
    {
      iconId: 6,
      id: 1,
      time: "Monday after school",
      title: "Dinner with parents",
    },
    {
      iconId: 7,
      id: 2,
      time: "Sunday 9:00AM",
      title: "Trip to the National Park",
    },
  ]);

  return (
    <AllToDoContext.Provider value={{ allToDos, setAllToDos }}>
      {children}
    </AllToDoContext.Provider>
  );
}

export default AllToDoContext;
