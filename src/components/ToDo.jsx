import React, { useState, useContext } from "react";
// styles
import styles from "./ToDo.module.scss";
// icons
import confirm from "../icons/tick.svg";
import cancel from "../icons/cancel.svg";
import eat from "../icons/eat.svg";

function ToDo({ setOpenEdit, todo }) {
  const [taskDone, setTaskDone] = useState(false);
  console.log(todo.title);

  return (
    <div className={styles.container}>
      <img src={eat} className={styles.icon} alt="activity icon" />
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
        <p className={styles.edit} onClick={() => setOpenEdit((st) => !st)}>
          EDIT
        </p>
        <div>
          <img src={cancel} alt="confirm icon" />
        </div>
      </div>
    </div>
  );
}

export default ToDo;
