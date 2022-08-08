import React, { useContext } from "react";
// styles
import styles from "./Edit.module.scss";
// context
import AllToDoContext from "./context/AllToDoContext";

function Edit({ setOpenEdit, taskToEditId }) {
  const { allToDos, setAllToDos } = useContext(AllToDoContext);
  const taskToEdit = allToDos.filter((el) => el.id === taskToEditId);
  // console.log(taskToEdit[0]);

  const changeTime = (e) => {
    taskToEdit[0].time = e.target.value;
    // console.log(taskToEdit[0].time);
  };

  const changeTitle = (e) => {
    taskToEdit[0].title = e.target.value;
    // console.log(taskToEdit[0].title);
  };

  const changeCategory = (e) => {
    const val = e.target.value;
    console.log(taskToEdit[0].iconId);
    e.target.querySelectorAll("option").forEach((el) => {
      if (el.innerHTML === val) {
        taskToEdit[0].iconId = +el.id;
      }
    });
    console.log(taskToEdit[0].iconId);
  };

  const confirm = () => {
    setAllToDos([...allToDos]);
    setOpenEdit((pr) => !pr);
  };

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
            // value={taskToEdit[0].time}
            onChange={changeTime}
          />
        </div>
        <div className={styles.time_category_inp}>
          <p>CATEGORY</p>
          <select
            className={styles.input_select}
            name="edit-category"
            onChange={changeCategory}
          >
            <option id="1">work</option>
            <option id="2">study</option>
            <option id="3">sport</option>
            <option id="4">shopping</option>
            <option id="5">cleaning</option>
            <option id="6">eating</option>
            <option id="7">travel</option>
            <option id="8">repair</option>
            <option id="9">others</option>
          </select>
        </div>
      </div>
      <div className={styles.task}>
        <p>TASK</p>
        <input
          type="text"
          onChange={changeTitle}
          // value={taskToEdit[0].title}
        />
      </div>
      <div className={styles.buttons}>
        <button onClick={confirm}>CONFIRM</button>
        <button onClick={() => setOpenEdit((st) => !st)}>CANCEL</button>
      </div>
    </div>
  );
}

export default Edit;
