import React from "react";
// styles
import styles from "./Edit.module.scss";

function Edit() {
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
        <input />
      </div>
      <div className={styles.buttons}>
        <button>CONFIRM</button>
        <button>CANCEL</button>
      </div>
    </div>
  );
}

export default Edit;
