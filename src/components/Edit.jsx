import React, { useContext } from "react";
// styles
import styles from "./Edit.module.scss";
// context
import AllToDoContext from "./context/AllToDoContext";

function Edit({ setOpenEdit, taskToEditId }) {
  const { allToDos, setAllToDos } = useContext(AllToDoContext);
  const taskToEdit = allToDos.filter((el) => el.id === taskToEditId);
  console.log(taskToEdit[0].time);

  const changeTime = () => {};

  return (
    <div className={styles.container}>
      <p>EDIT TASK</p>
      <div className={styles.time_category}>
        <div className={styles.time_category_inp}>
          <p>TIME</p>
          <input
            className={styles.input_select}
            type="text"
            placeholder="time"
            value={taskToEdit[0].time}
            onChange={changeTime}
          />
        </div>
        <div className={styles.time_category_inp}>
          <p>CATEGORY</p>
          <select className={styles.input_select} name="edit-category">
            <option>work</option>
            <option>study</option>
            <option>sport</option>
            <option>shopping</option>
            <option>cleaning</option>
            <option>eating</option>
            <option>travel</option>
            <option>repair</option>
            <option>others</option>
          </select>
        </div>
      </div>
      <div className={styles.task}>
        <p>TASK</p>
        <input value={taskToEdit[0].title} />
      </div>
      <div className={styles.buttons}>
        <button>CONFIRM</button>
        <button onClick={() => setOpenEdit((st) => !st)}>CANCEL</button>
      </div>
    </div>
  );
}

export default Edit;
