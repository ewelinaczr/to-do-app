import React, { useRef, useState, useContext } from "react";
import { v4 as uuidv4 } from "uuid";
// styles
import styles from "./Search.module.scss";
// icons
import { FiPaperclip } from "react-icons/fi";
// components
import Toolbar from "./Toolbar";
// context
import SingleToDoContext from "./context/SingleToDoContext";
import AllToDoContext from "./context/AllToDoContext";

////// DATE SETTINGS //////
const date = new Date();
const dayName = date.toLocaleString("eng", { weekday: "long" });
const dayNr = date.getDate();
const month = date.toLocaleString("eng", { month: "long" });
const year = date.getFullYear();

function Search() {
  const [toolsOpen, setToolsOpen] = useState(false);
  const inputRef = useRef(null);
  const { toDo, setToDo } = useContext(SingleToDoContext);
  const { allToDos, setAllToDos } = useContext(AllToDoContext);

  // const [toDo, setToDo] = useState({ title: "", id: "", time: "", icon: "" });
  // const { title, id, time, icon } = toDo;

  const handleChange = (e) => {
    setToDo((prSt) => ({ ...prSt, title: e.target.value, id: uuidv4() }));
  };

  const handleAdd = () => {
    setAllToDos((prSt) => [...prSt, toDo]);
  };

  return (
    <div className={styles.container}>
      <div className={styles.date}>
        <div className={styles.day}>{dayNr}</div>
        <div className={styles.date_small}>
          <p className={styles.month_year}>{dayName}</p>
          <p className={styles.month_year}>
            {month} {year}
          </p>
        </div>
      </div>
      <div className={styles.search}>
        <div className={styles.input_tools}>
          <input
            onChange={handleChange}
            type="text"
            ref={inputRef}
            className={styles.input}
            placeholder="Type your task..."
          ></input>

          <button
            className={styles.tools}
            onClick={() => setToolsOpen(!toolsOpen)}
          >
            <FiPaperclip size={20} />
          </button>
        </div>
        <div>
          <button className={styles.button} onClick={handleAdd}>
            ADD
          </button>
        </div>
      </div>
      <div className={styles.toolbar}>
        {toolsOpen && <Toolbar setToolsOpen={setToolsOpen} />}
      </div>
    </div>
  );
}

export default Search;
