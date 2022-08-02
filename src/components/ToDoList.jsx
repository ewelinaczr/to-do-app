import React, { useState, useContext } from "react";
import { v4 as uuidv4 } from "uuid";
// components
import ToDo from "./ToDo";
import Edit from "./Edit";
// styles
import styles from "./ToDoList.module.scss";
// context
import AllToDoContext from "./context/AllToDoContext";

function ToDoList() {
  const [openEdit, setOpenEdit] = useState(false);
  const { allToDos, setAllToDos } = useContext(AllToDoContext);

  return (
    <div className={styles.container}>
      {/* <ToDo setOpenEdit={setOpenEdit} /> */}
      {allToDos.map((el) => (
        <ToDo setOpenEdit={setOpenEdit} key={uuidv4()} todo={el} />
      ))}
      {openEdit && <Edit />}
    </div>
  );
}

export default ToDoList;
