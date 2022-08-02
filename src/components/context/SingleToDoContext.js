import React, { createContext, useState } from "react";

const SingleToDoContext = createContext();

export function SingleToDoProvider({ children }) {
  const [toDo, setToDo] = useState({ title: "", id: "", time: "", iconId: 9 });
  const { title, id, time, icon } = toDo;

  return (
    <SingleToDoContext.Provider value={{ toDo, setToDo }}>
      {children}
    </SingleToDoContext.Provider>
  );
}

export default SingleToDoContext;
