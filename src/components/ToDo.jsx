import React, { useState, useContext } from "react";
// styles
import styles from "./ToDo.module.scss";
// icons
import confirm from "../icons/tick.svg";
import cancel from "../icons/cancel.svg";
import { BsBriefcase } from "react-icons/bs";
import { BsBook } from "react-icons/bs";
import { IoMdBicycle } from "react-icons/io";
import { FiShoppingCart } from "react-icons/fi";
import { MdOutlineCleaningServices } from "react-icons/md";
import { IoFastFoodOutline } from "react-icons/io5";
import { IoAirplaneOutline } from "react-icons/io5";
import { AiOutlineTool } from "react-icons/ai";
import { BsPuzzle } from "react-icons/bs";
// context
import AllToDoContext from "./context/AllToDoContext";

function ToDo({ setOpenEdit, todo, setTaskToEdit }) {
  const [taskDone, setTaskDone] = useState(false);
  const { allToDos, setAllToDos } = useContext(AllToDoContext);

  const deleteToDo = (e) => {
    const taskToDelete = e.target.closest("section").id;
    const newToDos = allToDos.filter((el) => !(el.id === taskToDelete));
    setAllToDos(newToDos);
  };

  const editToDo = (e) => {
    setOpenEdit((st) => !st);
    const taskToEdit = e.target.closest("section").id;
    setTaskToEdit(taskToEdit);
  };

  return (
    <section className={styles.container} id={todo.id}>
      <div className={styles.icon}>
        {todo.iconId === 1 && <BsBriefcase />}
        {todo.iconId === 2 && <BsBook />}
        {todo.iconId === 3 && <IoMdBicycle />}
        {todo.iconId === 4 && <FiShoppingCart />}
        {todo.iconId === 5 && <MdOutlineCleaningServices />}
        {todo.iconId === 6 && <IoFastFoodOutline />}
        {todo.iconId === 7 && <IoAirplaneOutline />}
        {todo.iconId === 8 && <AiOutlineTool />}
        {todo.iconId === 9 && <BsPuzzle />}
        {todo.iconId === "" && <BsPuzzle />}
      </div>
      {/* <img src={eat} className={styles.icon} alt="activity icon" /> */}
      <div className={styles.time_title}>
        <p className={styles.time}>{todo.time}</p>
        <p className={taskDone ? styles.title_done : styles.title}>
          {todo.title}
        </p>
      </div>
      <div className={styles.edit_tools}>
        <div>
          <img
            src={confirm}
            alt="confirm icon"
            onClick={() => setTaskDone((st) => !st)}
          />
        </div>
        <p className={styles.edit} onClick={editToDo}>
          EDIT
        </p>
        <div>
          <img src={cancel} alt="cancel icon" onClick={deleteToDo} />
        </div>
      </div>
    </section>
  );
}

export default ToDo;
